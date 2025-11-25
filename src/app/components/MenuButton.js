'use client';
import { useEffect } from 'react';


import styles from './MenuButton.module.css'

export default function MenuButton({ isOpen, toggleMenu }) {

  useEffect(()=>{
    if(isOpen){
      document.body.classList.add(styles.bodyMenuOpen);
    }else{
            document.body.classList.remove(styles.bodyMenuOpen);

    }
  })
  return (
    <button
      onClick={toggleMenu}
      className={`${styles.menu__button} ${isOpen ? styles.active : ''} font-700 flex align-center`} aria-expanded={isOpen}
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span>МЕНЮ</span>
    </button>
  );
}