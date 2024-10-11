import toast, { Toaster, ToastPosition } from "react-hot-toast";

export const messageHot = (
  message: string,
  hotToastrOptions: Partial<HotToastrOptionsType>
) => {
  toast(message, hotToastrOptions);
};

export const dismissAllHot = () => {
  toast.dismiss();
};

export type HotToastrOptionsType = {
  type: "success" | "error";
  position?: ToastPosition | undefined;
};

// Toastify Container bileşeni
export const HotToastContainer = () => {
  return <Toaster position="top-center" reverseOrder={false} />;
};
