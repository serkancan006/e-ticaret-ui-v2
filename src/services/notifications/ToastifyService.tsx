import { toast, ToastPosition, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const message = (
  message: string,
  toastifyOptions: Partial<ToastifyOptionsType>
) => {
  toast(message, toastifyOptions);
};

export const dismissAll = () => {
  toast.dismiss();
};

export type ToastifyOptionsType = {
  type: "success" | "info" | "warning" | "error" | "default";
  position?: ToastPosition | undefined;
};

// Toastify Container bileşeni
export const ToastifyContainer = () => {
  return (
    <ToastContainer
      position="top-right" // Pozisyon hatası çözülüyor
      autoClose={5000} // 'autoClose' tanımlandı
      newestOnTop={true} // 'newestOnTop' tanımlandı
      theme="light" // 'theme' özelliği tanımlandı
    />
  );
};
