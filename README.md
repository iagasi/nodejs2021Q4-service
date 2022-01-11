link to taskl:
https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/cross-check/docker-basics.md

date of deadline: 10.01.2022
date submit: 9.01.2022

Чтобы запустить приложение запустите-
docker-compose up потом npm run docker-dev

score maybe 130
1 For service start write in console .... docker-compose up .... await APP and DbPostgress start .then write in console ....npm run docker-dev...... Now if you make changes in ./src folder App container can restart with changes.
Database container delays a bit because of ....volumes... in docker -compose.yaml
2 If you want to test container auto reload on failure goto ...Dockerfile... and change CMD["npm", "start"] on CMD [ "node","ts-compile/server.js" ] .then rebuild image of App. Nodemon not allows container reload on failure

ok Наличие в Readme.md секции с инструкцией как запустить приложение плюс 20 баллов
ok Используется user-defined bridge плюс 30 баллов///// ...docker-compose.yaml network .... section//
ok При возникновении ошибки контейнер должен перезапускается автоматически плюс 30 баллов /// goto----- ...Dockerfile... and change CMD["npm", "start"] on CMD [ "node","ts-compile/server.js" ] .then rebuild image of App. NODEMON not allows container reload on failure/// --Maybe it is partial implementation of requrement

ok Логи и файлы базы данных хранятся в volumes, а не в контейнере плюс 30 баллов ./postgressData
ok Итоговый docker-образ с приложением имеет размер меньше 300 мб плюс 20 баллов

Штрафы:0
