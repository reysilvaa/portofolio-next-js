import axios from 'axios';

const TELEGRAM_BOT_TOKEN = '7773167138:AAHV0Z_qD-P8B-wPA00kFMo30S8aoksUzaU';
const CHAT_ID = '1886326148'; // Replace with your chat ID or username

export const sendToTelegram = async (message: string) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const params = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'Markdown', // Enable Markdown formatting for the message
  };

  try {
    await axios.post(url, params);
  } catch (error) {
    await axios.post(url, "Terjadi Kesalahan : "+error);
  }
};
