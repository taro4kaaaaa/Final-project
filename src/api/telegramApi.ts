export const sendTelegramMessage = async (text: string) => {

  const TOKEN = import.meta.env.VITE_TELEGRAM_TOKEN
  const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage`

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text
    })
  })
}