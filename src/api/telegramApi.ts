export const sendTelegramMessage = async (text: string) => {

  const TOKEN = "8374618026:AAHXmOz7uM-QAAeQwir2hVQkMfwUcG47iic"
  const CHAT_ID = "795872078"

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