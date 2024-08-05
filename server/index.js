require('dotenv').config() 

const sequelize = require('./db')
const express = require('express');

const PORT = process.env.PORT || 5000

const app = express();

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, console.log(`Сервер запущен на ${PORT} порте`));
    } catch (e) {
        console.log(e);
        console.log('Сверху должна быть ошибка');
    }
}

start()
