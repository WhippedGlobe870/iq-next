// app/context/DialogContext.js
'use client';
import { createContext, useContext, useRef } from 'react';
import PopUp from '../components/PopUp';

const DialogContext = createContext();

export function DialogProvider({ children }) {
  const dialogRef = useRef(null);

  const openDialog = () => dialogRef.current?.showModal();
  const closeDialog = () => dialogRef.current?.close();

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      <PopUp ref={dialogRef}>
        <p>Контент поп‑апа</p>
      </PopUp>
    </DialogContext.Provider>
  );
}

export function useDialog() {
  return useContext(DialogContext);
}