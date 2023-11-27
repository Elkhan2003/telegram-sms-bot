[![Express Logo](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)](http://expressjs.com/)

  Fast, unopinionated, minimalist web framework for [Node.js](http://nodejs.org).

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Install Size][npm-install-size-image]][npm-install-size-url]
  [![NPM Downloads][npm-downloads-image]][npm-downloads-url]

# Send SMS to Telegram

## Instructions

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```console
$ npm install
```

Follow [our installing guide](http://expressjs.com/en/starter/installing.html)
for more information.

## Stating bot

1. Open Telegram and search for @botFather.
2. Send the following commands to create a new bot:
    - `/newbot`: Create a new bot.
    - Provide a name for the bot, for example: Elcho911 (you can use your own name).
    - Give a unique username to the bot, following the format: `elcho911_bot` (ensure it ends with "_bot" using an underscore).
3. You will receive an API token for your bot: `**********************`.
4. Save this token in a file named `.env` under the section `TELEGRAM_TOKEN=`.
5. Create a Telegram channel for your messages.
6. Invite your bot (@elcho911_bot) to your Telegram channel and grant it administrative rights.
7. Find the ID of your Telegram channel:
    - Use the @getmyid_bot by sending any message from your channel and forwarding it to @getmyid_bot.
    - Note the `CHAT_ID` in the response (e.g., -235********42).
8. Save the `CHAT_ID` in the `.env` file under the section `TELEGRAM_CHAT_ID=`.
9. Start your project, and you should see a message in the console: 
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
    	"message": "Hello, Elcho911"
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