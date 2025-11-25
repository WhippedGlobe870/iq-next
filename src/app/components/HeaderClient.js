'use client';
import { useState } from 'react';
import Image from 'next/image';
import PopUpButton from './PopUpButton';
import MenuButton from './MenuButton';
import Menu from './Menu';
import styles from './Header.module.css';
import Link from 'next/link';

export default function HeaderClient({ options, menu, rentMenu, sellMenu, workTime, analytics }) {
  const [isOpen, setOpen] = useState(false);

  const logo = options?.logo;
  const email = options?.email;
  const phones = options?.phones || [];

  return (
    <header className={styles.header}>
      <div className={styles.header_body}>
        <div className="container">
          <div className={`flex align-center ${styles['header-container']}`}>
            <div className={styles['header-logo']}>
              <Link href='/'>
                <Image
                  src={logo.url}
                  alt={logo.alt || 'Логотип'}
                  width={logo.width || 216}
                  height={logo.height || 60}
                  priority
                />
              </Link>
            </div>

            <div className={`header-links flex align-center ${styles['header-links']}`}>
              <div className={`header__phones flex flex-column ${styles['header__phones']}`}>
                {phones.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.phone.replace(/\s+/g, '')}`}
                    className="font-600"
                  >
                    {phone.phone}
                  </a>
                ))}
              </div>

              <a className="font-600" href={`mailto:${email}`}>
                {email}
              </a>

              <PopUpButton label="Продать / сдать объект" />
              <MenuButton isOpen={isOpen} toggleMenu={() => setOpen(prev => !prev)} />
            </div>
          </div>
        </div>
      </div>
      <Menu
        isOpen={isOpen}
        items={menu}
        workTime={workTime}
        analytics={analytics}
        rentMenu={rentMenu}
        sellMenu={sellMenu}   // <-- не rentMenuData
      />    </header>
  );
}