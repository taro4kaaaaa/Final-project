import { useRef } from "react"
import emailjs from "@emailjs/browser"
import styles from "./ContactModal.module.css"
import { sendTelegramMessage } from "../../api/telegramApi"
import { useTranslation } from "react-i18next"

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const ContactModal = ({ isOpen, onClose }: Props) => {

  const { t } = useTranslation()

  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: React.FormEvent) => {
  e.preventDefault()

  const formData = new FormData(form.current!)

  const name = formData.get("user_name")
  const email = formData.get("user_email")
  const message = formData.get("message")

  const text = `
📩 New message from portfolio

Name: ${name}
Email: ${email}
Message: ${message}
`

  emailjs
    .sendForm(
      "service_ow42iqk",
      "template_95u5up6",
      form.current!,
      "s4QpjkZsnZvsNOlwa"
    )
    .then(
      () => {

        sendTelegramMessage(text)  

        alert("Message sent!")
        onClose()
      },
      (error) => {
        console.error(error)
        alert("Error sending message")
      }
    )
}

  if (!isOpen) return null

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
    >

      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className={styles.close}
          onClick={onClose}
        >
          ✕
        </button>

        <h2 className={styles.title}>
          {t("contactmodal.title")}
        </h2>

        <form
          ref={form}
          onSubmit={sendEmail}
          className={styles.form}
        >

          <input
            type="text"
            name="user_name"
            placeholder={t("contactmodal.placeholder1")}
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email"
            required
          />

          <textarea
            name="message"
            placeholder={t("contactmodal.placeholder2")}
            required
          />

          <button
            type="submit"
            className={styles.sendButton}
          >
            {t("contactmodal.button")}
          </button>

        </form>

      </div>

    </div>
  )
}