NodeJS-MySQL Project
==============================

#### In this small project I created a Database Model called Product Management which comprises of five tables. The main tables are categories, product and attributes as well as two other tables with proper relation of PK and FK of relational database. I used the *express* framework to setup the server, import necessary libraries to create the a RESTful api endpoints for the application. Used Router to properly navigate to api endpoints and Postman as a testing tool for the API.


### Tech Used
<p align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="36" height="36" alt="Express" /></a>
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="36" height="36" alt="TypeScript" /></a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a>
</p>


#### Packages 
<a href="https://www.npmjs.com/" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/color/48/null/npm.png" width="36" height="36" alt="NPM"/></a>
#### [Knex.js] : Knex.js (pronounced /kəˈnɛks/) is a "batteries included" SQL query builder for PostgreSQL, CockroachDB, MSSQL, MySQL, MariaDB, SQLite3, Better-SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.

## Installation


##### Run the following commands to run this project on localhost

```sh
git clone https://github.com/TBM-MAHI/NodeJs-MySQL-Project/
```
```sh
cd NodeJs-MySQL-Project
```
```sh
npm install
```
##### Migrate the knexfile.js to setup database model In MySQL
```sh
npx knex migrate:latest --knexfile ./src/knexfile.ts
```
##### Run the Project
```sh
npm run watch
```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [Knex.js]:<https://www.npmjs.com/package/knex>
   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>

