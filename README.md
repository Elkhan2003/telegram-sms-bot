<div align="center">
<!-- <img src="https://elcho911.netlify.app/Elkhan2003-icons/Front-end-DevX.gif"/> -->
<!-- <img src="https://elcho911.netlify.app/Elkhan2003-icons/madara.gif"/> -->
<!-- <img src="https://elcho911.netlify.app/Elkhan2003-icons/madara-v2.gif"/> -->
<img width="800px" height="125px" src="https://elcho911.netlify.app/Elkhan2003-icons/elcho.gif"/>
</div>

# Telegram SMS bot

## Instructions

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Stating bot

1. Open Telegram and search for `@botFather`.
2. Send the following commands to create a new bot:
    - `/newbot`: Create a new bot.
    - Provide a name for the bot, for example: Elcho911 (you can use your own name).
    - Give a unique username to the bot, following the format: `elcho911_bot` (ensure it ends with "_bot" using an underscore).
3. You will receive an API token for your bot: `**********************`.
4. Save this token in a file named `.env` under the section `TELEGRAM_TOKEN=`.
5. Create a Telegram channel for your messages.
6. Invite your bot (@elcho911_bot) to your Telegram channel and grant it administrative rights.
7. Find the ID of your Telegram channel:
    - Use the `@getmyid_bot` by sending any message from your channel and forwarding it to @getmyid_bot.
    - Note the `CHAT_ID` in the response (e.g., -235********42).
8. Save the `CHAT_ID` in the `.env` file under the section `TELEGRAM_CHAT_ID=`.
9. Run your project using `npm run dev`, and you should see a message in the console:
    ```ts
    server running at: http://localhost:5000
    ```
10. Perform a test GET request to http://localhost:5000. If you receive the following JSON response:
    ```json
    {
    	"message": "Hello World!"
    }
    ```
    proceed to the next step for sending messages to Telegram.
11. Make a POST request to the following URL: http://localhost:5000/api/v1/send-telegram with the following JSON payload:
    ```json
    {
    	"name": "Elcho911",
    	"email": "boss.armsport@gmail.com",
    	"subject": "WeDevX",
    	"message": "Hello, Elcho911 👋🏻"
    }
    ```
12. You should receive the following JSON response:
    ```json
    {
    	"success": true,
    	"data": {
    		"name": "Elcho911",
    		"email": "boss.armsport@gmail.com",
    		"subject": "WeDevX",
    		"message": "Hello, Elcho911 👋🏻"
    	}
    }
    ```
13. Verify that the message has been sent to Telegram with the content:
    ```txt
    Name: Elcho911
    Email: boss.armsport@gmail.com
    Subject: WeDevX
    Message: Hello, Elcho911 👋🏻
    ```
14. All set!



### Russian:
```html
<div align="center">
<!-- <img src="https://elcho911.netlify.app/Elkhan2003-icons/Front-end-DevX.gif"/> -->
<!-- <img src="https://elcho911.netlify.app/Elkhan2003-icons/madara.gif"/> -->
<!-- <img src="https://elcho911.netlify.app/Elkhan2003-icons/madara-v2.gif"/> -->
<img width="800px" height="125px" src="https://elcho911.netlify.app/Elkhan2003-icons/elcho.gif"/>
</div>

# Telegram SMS бот

## Инструкции

Этот модуль [Node.js](https://nodejs.org/en/) доступен через
[реестр npm](https://www.npmjs.com/).

Перед установкой, [скачайте и установите Node.js](https://nodejs.org/en/download/).
Требуется Node.js версии 0.10 или выше.

Установка производится с помощью команды
[`npm install`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install
```

Подробную информацию о установке смотрите в [нашем руководстве по установке](http://expressjs.com/en/starter/installing.html).

## Запуск бота

1. Откройте Telegram и найдите `@botFather`.
2. Отправьте следующие команды для создания нового бота:
    - `/newbot`: Создать нового бота.
    - Укажите имя бота, например: Elcho911 (можно использовать ваше собственное имя).
    - Дайте уникальное имя боту в формате: `elcho911_bot` (убедитесь, что оно заканчивается на "_bot" с использованием подчеркивания).
3. Вы получите API токен для вашего бота: `**********************`.
4. Сохраните этот токен в файле с именем `.env` в разделе `TELEGRAM_TOKEN=`.
5. Создайте Telegram канал для ваших сообщений.
6. Пригласите вашего бота (@elcho911_bot) в ваш Telegram канал и предоставьте ему права администратора.
7. Найдите ID вашего Telegram канала:
    - Используйте `@getmyid_bot`, отправив любое сообщение из вашего канала и переслав его @getmyid_bot.
    - Запишите `CHAT_ID` из ответа (например, -235********42).
8. Сохраните `CHAT_ID` в файле `.env` в разделе `TELEGRAM_CHAT_ID=`.
9. Запустите ваш проект с помощью `npm run dev`, и вы увидите сообщение в консоли:
    ```ts
    сервер запущен по адресу: http://localhost:5000
    ```
10. Выполните тестовый GET запрос на http://localhost:5000. Если вы получите следующий JSON ответ:
    ```json
    {
    	"message": "Hello World!"
    }
    ```
    перейдите к следующему шагу для отправки сообщений в Telegram.
11. Выполните POST запрос по следующему URL: http://localhost:5000/api/v1/send-telegram с JSON телом:
    ```json
    {
    	"name": "Elcho911",
    	"email": "boss.armsport@gmail.com",
    	"subject": "WeDevX",
    	"message": "Hello, Elcho911 👋🏻"
    }
    ```
12. Вы должны получить следующий JSON ответ:
    ```json
    {
    	"success": true,
    	"data": {
    		"name": "Elcho911",
    		"email": "boss.armsport@gmail.com",
    		"subject": "WeDevX",
    		"message": "Hello, Elcho911 👋🏻"
    	}
    }
    ```
13. Проверьте, что сообщение было отправлено в Telegram с содержанием:
    ```txt
    Имя: Elcho911
    Email: boss.armsport@gmail.com
    Тема: WeDevX
    Сообщение: Hello, Elcho911 👋🏻
    ```
14. Готово!
```
