import React from "react";

import { ToastContext } from '../ToastProvider';

import Button from '../Button';

import styles from './CreateToastForm.module.css'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

const TOAST_SCHEMA = {
  message: '16 photos were uploaded',
  variant: 'success',
  isVisible: true
}

const DEFAULT_MESSAGE = '16 photos have been uploaded'
const DEFAULT_VARIANT = VARIANT_OPTIONS[0]


function CreateToastForm() {
  const [message, setMessage] = React.useState(DEFAULT_MESSAGE);
  const [variant, setVariant] = React.useState(DEFAULT_VARIANT);

  const { appendToToastList } = React.useContext(ToastContext)

  return (
    <form
      className={styles.controlsWrapper}
      onSubmit={(event) => {
        event.preventDefault()
        const newToast = { message, variant, isVisible: true }
        appendToToastList(newToast)

        setMessage(DEFAULT_MESSAGE)
        setVariant(DEFAULT_VARIANT)
      }}
    >
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
        <div className={styles.label} />
        <div>
          <Button>Pop Toast!</Button>
        </div>
      </div>
    </form>
  )
}

export default CreateToastForm;
