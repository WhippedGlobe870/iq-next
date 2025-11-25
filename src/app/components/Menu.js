'use client';
import { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import Link from 'next/link';
import Image from 'next/image';
import MenuToggle from './MenuToggle';

export default function Menu({ isOpen, items, workTime, analytics, rentMenu, sellMenu }) {
  const [status, setStatus] = useState('');
  // функция для пересчёта статуса
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

  // const analytics = analytics;

  return (
    <nav className={`${styles.menu} ${isOpen ? styles.open : styles.closed}`}>
      <div className={`menu_body container flex ${styles.menu_body}`}>
        <div className={`left__menu ${styles.left__menu}`}>
          <MenuToggle rentItems={rentMenu} sellItems={sellMenu}></MenuToggle>
        </div>
        <div className={`right__menu flex flex-column ${styles.right__menu}`}>
          <div className={`right__menu_container flex justify-between align-center' ${styles.right__menu_container}`}>
            <ul className={`flex align-center menu__list ${styles.menu__list}`}>
              {items.map((item, i) => (
                <li key={i}>
                  <a className="font-600" href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
            <span className={`${styles.work_status} font-700 work-status flex align-center`}>{status}</span>
          </div>
          <div className={`${styles.analytics_menu} flex flex-wrap`}>
            <Link className='font-600' href={analytics.link}>{analytics.title}</Link>
            <p>
              {analytics.desc}
            </p>
            <Image
              src={analytics.img.url}
              alt={analytics.img.alt || 'Аналитика'}
              width={analytics.height || 150}
              height={analytics.height || 115}
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}