// setLanguage.js

const i18n = require('i18n'); // hoặc bất kỳ thư viện nào bạn đang sử dụng để xử lý đa ngôn ngữ

module.exports = (req, res, next) => {
  const lang = req.cookies && req.cookies.lang ? req.cookies.lang : 'en'; // Đặt mặc định là 'en' nếu không có cookie lang

  // Thiết lập ngôn ngữ dựa trên giá trị của cookie lang
  i18n.setLocale(lang);

  // Gắn ngôn ngữ vào đối tượng req để sử dụng trong các middleware tiếp theo hoặc trong controller
  req.language = lang;

  next();
};
