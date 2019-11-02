
Вопросы:
1. Если есть alert или promt, то JS выполняется раньше HTML?
2. На уроке не успел спросить по поводу изменения знаний примитивных переменныю
Например:
let a = 5;
a = 4;
cosole.log(a) //4

это не изменение или она в процессе удаляется и записывается заново?

3. Вопрос по поводу отладчика VS code:

Я настроил у себя отладчик для chrome:

{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [

        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:5500/Базовый_курс_JavaScript/YasinskiyVA/lesson_1/",
            "webRoot": "${workspaceFolder}",
            

        },

    ]
}

запускаю live server потом отладчик VS для Chrome, работает, но я никак не могу найти разницы между штатным отладчиком chrome и тем что в VS, может я что-то не понимаю, покажите как настроен отладчик у вас и json с его настройкой если несложно.