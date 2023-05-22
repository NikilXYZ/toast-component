import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastList, toggleToastVisibility } = React.useContext(ToastContext)
  return (
    <ol className={styles.wrapper}>
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
