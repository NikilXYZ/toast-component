import React from 'react';

import Button from '../Button';
import Toast from '../Toast'

import styles from './ToastPlayground.module.css';

import { useToggle } from '../../hooks/useToggle';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('16 photos have been uploaded');
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isToastVisible, toggleIsToastVisible] = useToggle(false);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && <Toast variant={variant} message={message} handleClose={toggleIsToastVisible}/>}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={(event) => { setMessage(event.target.value) }}
              className={styles.messageInput} />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {
              VARIANT_OPTIONS.map(option => (
                <div
                  key={`variant-${option}`}
                >
                  < input
                    id={`variant-${option}`}
                    type="radio"
                    name="variant"
                    value={option}
                    checked={option === variant}
                    onChange={(event) => {
                      setVariant(event.target.value)
                    }}
                  />
                  <label htmlFor={`variant-${option}`}>
                    {option}
                  </label>
                </div>
              ))
            }
          </div>
        </div>

        <div className={styles.row}>
          <label
            htmlFor="toast-visibility"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Visible?
          </label>
          <input
          type="checkbox"
          id="toast-visibility"
          checked={isToastVisible}
          onChange={toggleIsToastVisible}
        />
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div>
            <Button
              onClick={(event)=>{
                if(!isToastVisible) toggleIsToastVisible();
              }}
            >Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
