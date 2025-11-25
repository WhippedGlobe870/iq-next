// app/components/PopUp.js
'use client';
import { forwardRef } from 'react';

const PopUp = forwardRef(function PopUp({ children }, ref) {
  return (
    <dialog ref={ref}>
      <div>
        {children}
        <button onClick={() => ref?.current?.close()}>Закрыть</button>
      </div>
    </dialog>
  );
});

export default PopUp;