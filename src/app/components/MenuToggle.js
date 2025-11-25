'use client';
import { useState } from 'react';
import Image from "next/image";
import styles from "./MenuToggle.module.css";

export default function MenuToggle({ rentItems, sellItems }) {
  const [activeTab, setActiveTab] = useState('sell');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className={`toggle-menu__buttons flex align-center ${styles.toggle_menu_buttons}`}>
        {/* Продажа первая */}
        <button
          className={`${styles.toggle_menu_button} ${activeTab === 'sell' ? styles.toggle_menu_button_active : ''} font-600`}
          onClick={() => {
            setActiveTab('sell');
            setActiveIndex(0); // теперь продажа = 0
          }}
        >
          <span>Продажа</span>
        </button>

        {/* Аренда вторая */}
        <button
          className={`${styles.toggle_menu_button} ${activeTab === 'rent' ? styles.toggle_menu_button_active : ''} font-600`}
          onClick={() => {
            setActiveTab('rent');
            setActiveIndex(1); // аренда = 1
          }}
        >
          <span>Аренда</span>
        </button>

        {/* overlay */}
        <div
          className={styles.button__overlay}
          style={{ left: `${activeIndex * (120 + 15)}px` }}
        ></div>
      </div>

      {/* Список продажи первый */}
      <ul className={`${styles.toggle_item} ${activeTab === 'sell' ? styles.active : ''}`}>
        {sellItems?.map((sellItem) => (
          <li key={sellItem.ID} className="flex align-center">
            <Image src={sellItem.acf.icon.url} alt={sellItem.title} width={20} height={20} />
            <a className="font-600" href={sellItem.url}>{sellItem.title}</a>
          </li>
        ))}
      </ul>

      {/* Список аренды второй */}
      <ul className={`${styles.toggle_item} ${activeTab === 'rent' ? styles.active : ''}`}>
        {rentItems?.map((rentItem) => (
          <li key={rentItem.ID} className="flex align-center">
            <Image src={rentItem.acf.icon.url} alt={rentItem.title} width={20} height={20} />
            <a className="font-600" href={rentItem.url}>{rentItem.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}