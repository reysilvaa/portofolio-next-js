import axios from 'axios';

const TELEGRAM_BOT_TOKEN = '7773167138:AAHV0Z_qD-P8B-wPA00kFMo30S8aoksUzaU';
const CHAT_ID = '1886326148'; // Gantilah dengan chat ID atau username Anda

export const sendToTelegram = async (message: string) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const params = {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'Markdown', // Mengaktifkan format Markdown untuk pesan
  };
};
