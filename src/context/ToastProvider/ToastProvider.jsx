import { createContext, useCallback, useState } from "react";
import UseKeydown from "../../hooks/use-keydown";

export const ToastProviderContext = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  // to prevent unnecessary renders
  const handleEscapeKey = useCallback(() => setToasts([]), []);

  UseKeydown("Escape", handleEscapeKey);

  const createToast = (message, variant) => {
    const newToasts = [
      ...toasts,
      { id: crypto.randomUUID(), message, variant },
    ];
    setToasts(newToasts);
  };

  const dismissToast = (id) => {
    const newToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(newToasts);
  };

  return (
    <ToastProviderContext.Provider
      value={{ toasts, createToast, dismissToast }}
    >
      {children}
    </ToastProviderContext.Provider>
  );
};

export default ToastProvider;
