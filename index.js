'use strict';

const express = require('express');
const app = express();
const port = 4000;
const expressHandlebars = require('express-handlebars');
const helpers = require('handlebars-helpers')();
// const { createPagination } = require('express-handlebars-paginate');

// Cấu hình public static folder
app.use(express.static(__dirname + '/html'));

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
    }
}));


app.set('view engine', 'hbs');

// Cấu hình đọc dữ liệu POST từ body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
