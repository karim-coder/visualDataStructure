/* eslint-disable default-case */
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Toaster = {
  sucess: async function (message, position) {
    let pos = await this.toasterPosition(position);
    toast.success(message, {
      position: pos,
      autoClose: 3000,
      closeButton: false,
      newestOnTop: true,
    });
  },
  error: async function (message, position) {
    let pos = await this.toasterPosition(position);

    toast.error(message, {
      position: pos,
      autoClose: 3000,
      closeButton: false,
      newestOnTop: true,
    });
  },
  warn: async function (message, position) {
    let pos = await this.toasterPosition(position);

    toast.warn(message, {
      position: pos,
      autoClose: 3000,
      closeButton: false,
      newestOnTop: true,
    });
  },
  info: async function (message, position) {
    let pos = await this.toasterPosition(position);

    toast.info(message, {
      position: pos,
      autoClose: 3000,
      closeButton: false,
      newestOnTop: true,
    });
  },
  custom: async function (message, position) {},

  toasterPosition: async function (position) {
    let pos = toast.POSITION.TOP_CENTER;
    switch (position) {
      case "topCenter":
        pos = toast.POSITION.TOP_CENTER;
        break;
      case "topLeft":
        pos = toast.POSITION.TOP_LEFT;
        break;
      case "topRight":
        pos = toast.POSITION.TOP_RIGHT;
        break;
      case "bottomCenter":
        pos = toast.POSITION.BOTTOM_CENTER;
        break;
      case "bottomLeft":
        pos = toast.POSITION.BOTTOM_LEFT;
        break;
      case "bottomRight":
        pos = toast.POSITION.BOTTOM_RIGHT;
        break;
      case "default":
        pos = toast.POSITION.TOP_CENTER;
        break;
    }
    return pos;
  },
};
export default Toaster;
