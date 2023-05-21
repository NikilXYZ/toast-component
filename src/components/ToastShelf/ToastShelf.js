import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, handleCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast, index) => (
        toast.isVisible &&
        <li className={styles.toastWrapper}
          key={index}
        >
          <Toast
            variant={toast.variant}
            message={toast.message}
            handleClose={() => {
              console.log(index)
              handleCloseToast(index)
            }}
          />
        </li>
      )
      )}
    </ol>
  );
}

export default ToastShelf;
