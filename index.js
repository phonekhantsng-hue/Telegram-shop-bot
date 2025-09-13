const TelegramBot = require("node-telegram-bot-api");

const token = "YOUR_BOT_API_TOKEN"; // BotFather က token ထည့်

const bot = new TelegramBot(token, { polling: true });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Hello " + msg.from.first_name + " 👋");
});
