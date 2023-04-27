// Получаю элементы полей ФИО, ссылка и ккоментарий
const userNameElement = document.getElementById("username"); 
const userLinkElement = document.getElementById("link"); 
const userCommentElement = document.getElementById("comment"); 

// Получаю элемент кнопки и чата, куда будет попадать комментарий
const button = document.querySelector(".form__button"); 
const chatInfo = document.querySelector(".chat__info"); 
const chatComment = document.querySelector(".chat__comment"); 


//Добавление комментария в чат при клике на кнопку
button.addEventListener ('click', () => {
    const userName = userNameElement.value; //извлекаю значение поля ФИО
    const userLink = userLinkElement.value; //извлекаю значение поля "Ссылка на аватар"
    const userComment = userCommentElement.value; //извлекаю значение поля "Комментарий"

    // Функция для работы с регистром
    function normalizeName(name) {
        // Удаляем лишние пробелы в начале и конце имени
        name = name.trim();
        
        // Преобразуем первую букву имени в верхний регистр
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        
        // Разделяем имя на части по пробелам, чтобы преобразовать каждое слово отдельно
        let words = name.split(" ");
        for (let i = 0; i < words.length; i++) {
        // Если слово состоит только из одной буквы, преобразуем ее в верхний регистр
            words[i] =  words[i][0].toUpperCase() + words[i].substr(1);
        }
    // Объединяем части имени снова в одну строку
        return words.join(" ");
    }

    let correctName = normalizeName(userName); // присваиваем переменную корректному имени

    const censorUserComment = userComment.replace(/виагра/gi, "***").replace(/viagra/gi, "***").replace(/xxx/gi, "***").replace(/ххх/gi, "***"); // добавлена цензура в комментариях
    chatInfo.innerHTML = `<img class="chat__image" src="${userLink}" alt="">
    <div class="chat__username">${correctName}</div>`; //добавила разметку для добавления аватара и ФИО пользователя
    chatComment.innerHTML = `<p>${censorUserComment}</p>`; //добавила разметку для добавления комментария пользователя
    document.getElementById("form").reset(); //очистка полей формы после отправки
});

