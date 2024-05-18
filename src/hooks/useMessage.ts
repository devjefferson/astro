import { toast } from "react-toastify";

export default function useMessage() {
  return {
    success: (message: string, duration = 10000) =>
      toast.success(message, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
    error: (message: string, duration = 10000) =>
      toast.error(message, {
        position: "top-right",
        autoClose: duration,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
  };
}
