// app/components/PopUpButton.js
'use client';
import { useDialog } from '../context/DialogContext';

export default function PopUpButton({ label = 'Открыть поп‑ап' }) {
  const { openDialog } = useDialog();

  return (
    <button onClick={openDialog} className='pretty-button pretty-button--transparent'>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="8.5" y="1" width="3" height="18" rx="1.5" fill="#2A7A71" />
        <rect x="19" y="8.04858" width="3" height="18" rx="1.5" transform="rotate(90 19 8.04858)" fill="#2A7A71" />
      </svg>
      <span>{label}</span>
    </button>
  );
}