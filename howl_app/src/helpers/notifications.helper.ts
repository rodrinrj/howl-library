import { notification } from "antd"

interface Message {
  type: "error" | "success"
  title: string
  description: string
  duration?: number
}

const NOTIFICATION_DURATION = 5

export const showNetworkError = () => {
  notification["error"]({
    message: "¡Ocurrió un error!",
    description: "No se pudo hacer la petición, inténtelo más tarde.",
    duration: NOTIFICATION_DURATION,
  })
}

export const showActionSuccess = () => {
  notification["success"]({
    message: "¡Felicidades!",
    description: "La acción se realizó exitosamente.",
    duration: NOTIFICATION_DURATION,
  })
}

export const showCustomNotification = (msg: Message) => {
  notification[msg.type]({
    message: msg.title,
    description: msg.description,
    duration: msg.duration ? msg.duration : NOTIFICATION_DURATION
  })
}
