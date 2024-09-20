import { useContext } from "react";
import Toast from "../Toast/Toast";
import styles from "./ToastShelf.module.css";
import { ToastProviderContext } from "../../context/ToastProvider/ToastProvider";

const ToastShelf = () => {
  const { toasts } = useContext(ToastProviderContext);

  return (
    <ol className={styles.wrapper} role="region" aria-live="polite" aria-label="Notification">
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast variant={toast.variant} id={toast.id}>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
};

export default ToastShelf;
