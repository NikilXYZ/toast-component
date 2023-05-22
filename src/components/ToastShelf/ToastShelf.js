import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import { useKeyUp } from '../../hooks/useKeyUp'
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastList, toggleToastVisibility, hideAllToasts } = React.useContext(ToastContext)

  useKeyUp('Escape', hideAllToasts)

  return (
    <ol className={styles.wrapper}
      role="region"
      aria-live='polite'
      aria-label='Notification'
    >
      {toastList.map((toast, index) => (
        toast.isVisible &&
        <li className={styles.toastWrapper}
          key={index}
        >
          <Toast
            variant={toast.variant}
            message={toast.message}
            handleClose={() => {
              console.log(index)
              toggleToastVisibility(index)
            }}
          />
        </li>
      )
      )}
    </ol>
  );
}

export default ToastShelf;
