# Welcome to flights service

# Project Setup

-   clone the project on your local
-   Execute `npm install` on the same path as fo your root directory of the downloaded project
-   create a `.env` file in the root directory and add the following environment variable
-   `PORT=3000`
-   Inside the `src/config` folder create a new file `config.json` and then add the following piece of json.

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flight_Search_DB",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

-   Once you've added your db config as listed above, go to your src folder from your terminal and execute the command `npx sequelize db:create `
