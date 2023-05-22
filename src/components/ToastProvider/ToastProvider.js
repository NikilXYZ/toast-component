import React from "react";

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toastList, setToastList] = React.useState([])

  const appendToToastList = (toast) => {
    console.log(toastList)
    console.log(toast)
    setToastList(currentToastList => [...currentToastList, toast])
  }

  const toggleToastVisibility = (index) => {
    setToastList(currentToastList => {
      const toast = currentToastList[index]
      console.log(toast)
      console.log(currentToastList)
      toast.isVisible = !toast.isVisible
      return [...currentToastList]
    })
  }

  const removeToastFromList = (toastToRemove) => {
    setToastList(currentToastList => {
      const newToastList = currentToastList.filter(toast => toast !== toastToRemove)
      return newToastList
    })
  }

  const value = {toastList, appendToToastList, toggleToastVisibility, removeToastFromList}

  return (
    <ToastContext.Provider
      value={value}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
