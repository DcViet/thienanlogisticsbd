'use strict';

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 4000;
const expressHandlebars = require('express-handlebars');
const helpers = require('handlebars-helpers')();
const setLanguage = require('./controllers/setLanguage');


// const { createPagination } = require('express-handlebars-paginate');

// Cấu hình public static folder
app.use(express.static(__dirname + '/html'));
app.use(setLanguage);
app.use(cookieParser());

// Cấu hình sử dụng express-handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        formatDate: function (dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString(undefined, options);
        },
        multiply: function (index, multiplier) {
            return index * multiplier;
        },
        isFirst: function (index, options) {
            if (index === 0) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        },
        __: function () {
            return i18n.__.apply(this, arguments);
        },
        __n: function () {
            return i18n.__n.apply(this, arguments);
        }
    }
}));


app.set('view engine', 'hbs');

// Cấu hình đọc dữ liệu POST từ body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Middleware để đặt ngôn ngữ người dùng dựa trên cookie
app.use((req, res, next) => {
    req.locale = req.cookies.locale || 'vi'; // Mặc định là 'vi' nếu không có cookie
    res.locals.locale = req.locale; // Đặt ngôn ngữ vào locals để sử dụng trong template
    next();
});

// Routes
app.use("/", require("./routes/homeRouter"));

app.use((req, res, next) => {
    res.status(404).render('error', { message: 'File not Found!' });
});

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).render('error', { message: 'Internal Server Error!' });
});

// Khởi động web server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
