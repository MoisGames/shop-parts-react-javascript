require('dotenv').config();

const sequelize = require('./db');
const express = require('express');
const cors = require('cors');
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlerMiddleWare')
const models = require('./models/models')

const PORT = process.env.PORT || 5000

const app = express();

app.use(cors()) // Подключаем cors
app.use(express.json()) // Парсим json
app.use('/api', router)

// Обработка ошибок, последний MiddleWare
app.use(errorHandler)



const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, console.log(`Сервер запущен на ${PORT} порте`));
        console.log('Соединение с базой данных успешно.')
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        console.log('Сверху должна быть ошибка');
    }
}

start()
