'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FooterClient.module.css';
import SocialLinks from './SocialLinks';

export default function FooterClient({ options, workTime, footerWorkTime, socials, allowed }) {
    const [status, setStatus] = useState('');
    const logoFooter = options?.logo_footer;


    const calculateStatus = () => {
        if (!workTime?.days) {
            setStatus('Нет данных');
            return;
        }

        const now = new Date();

        // Определяем текущий день недели на русском
        const currentDay = now.toLocaleDateString('ru-RU', { weekday: 'long' });
        const normalizedDay =
            currentDay.charAt(0).toUpperCase() + currentDay.slice(1);

        // Текущее время в минутах
        const currentMinutes = now.getHours() * 60 + now.getMinutes();

        // Находим расписание для текущего дня
        const today = workTime.days.find(d => d.day.name === normalizedDay);

        if (today) {
            const start = today.day.hours.start;
            const end = today.day.hours.end;

            // Если время пустое → выходной
            if (!start || !end) {
                setStatus('Мы закрыты (выходной)');
                return;
            }

            // Разбираем время
            const [startH, startM] = start.split(':').map(Number);
            const [endH, endM] = end.split(':').map(Number);

            const startMinutes = startH * 60 + startM;
            const endMinutes = endH * 60 + endM;

            // Проверяем интервал
            const isOpenNow =
                currentMinutes >= startMinutes && currentMinutes < endMinutes;

            setStatus(isOpenNow ? 'Мы открыты' : 'Мы закрыты');
        } else {
            setStatus('Нет расписания на сегодня');
        }
    };

    useEffect(() => {
        // первый расчёт при монтировании
        calculateStatus();

        // пересчёт каждые 5 минут (300000 мс)
        const intervalId = setInterval(calculateStatus, 300000);

        // очистка таймера при размонтировании
        return () => clearInterval(intervalId);
    }, [workTime]);

    const footerWorkTimeValue = footerWorkTime;
    const phones = options?.phones || [];

    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className="footer-wrapper">
                    <div className={`footer-row flex align-start flex-wrap justify-between ${styles.footer_row}`}>
                        <div className={`footer-logo-block flex flex-column ${styles.logo_block}`}>
                            <div className={`footer-logo ${styles.footer_logo}`}>
                                {logoFooter && (
                                    <Link
                                        href={`/`}>
                                        <Image
                                            src={logoFooter.url}
                                            alt={logoFooter.alt || 'Логотип футера'}
                                            width={logoFooter.width || 200}
                                            height={logoFooter.height || 60}
                                            priority
                                        />
                                    </Link>
                                )}
                            </div>
                            <div className={`footer-worktime ${styles.work}`}>
                                <span className='font-700 flex align-center'>{status}</span>
                            </div>
                        </div>
                        <div className={`footer_phone ${styles.footer_phone}`}>

                            <a
                                href={`tel:${phones[0].phone.replace(/\s+/g, '')}`}
                                className="font-600"
                            >
                                {phones[0].phone}
                            </a>

                        </div>
                        <div className={`${styles.working_time} footer-work-time__text flex align-start`}>
                            <span>Время работы:</span>
                            <strong className='font-700' dangerouslySetInnerHTML={{ __html: footerWorkTimeValue }} />
                        </div>
                        <div className='footer-socials'>
                            <SocialLinks socials={socials} allowed={['Instagram', 'Facebook']}/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}