// Получаю элементы полей ФИО, ссылка и ккоментарий
const userNameElement = document.getElementById("username"); 
const userLinkElement = document.getElementById("link"); 
const userCommentElement = document.getElementById("comment"); 

// Получаю элемент кнопки и чата, куда будет попадать комментарий
const button = document.querySelector(".form__button"); 
const chatComments = document.querySelector(".chat__comments"); 

// Создаем переменную для массива со стандартными аватарами пользователя
const images = [
    "assets/images/bee.png",
    "assets/images/chick.png",
    "assets/images/crab.png",
    "assets/images/fox.png",
    "assets/images/jellyfish.png",
    "assets/images/koala.png",
    "assets/images/owl.png",
    "assets/images/penguin.png",
];

let time = new Date();


//Добавление комментария в чат при клике на кнопку
button.addEventListener ('click', () => {
    let userName = userNameElement.value; //извлекаю значение поля ФИО
    const userLink = userLinkElement.value; //извлекаю значение поля "Ссылка на аватар"
    const userComment = userCommentElement.value; //извлекаю значение поля "Комментарий"

    // Рандом аватара
    let userImage = "";
    if (userLink =="") {
        const randomImage = Math.floor(Math.random() * 9);
        userImage = images[randomImage];
    } else {
        userImage = userLink;
    }
    console.log(userImage)

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
    // Проверка radio для имени пользователя
    if (document.getElementById('check').checked) {
        userName = correctName;
    } else {
        userName = "Username";
    }
    chatComments.innerHTML += `<div class="chat__comment">
    <img class="chat__image" src="${userImage}" alt="image">
    <div class="chat__username">${userName}</div>
    <div class="chat__date">${time}</div>
    <div class="chat__text">${censorUserComment}</div>
    </div>`; //добавила разметку для добавления комментария пользователя
    document.getElementById("form").reset(); //очистка полей формы после отправки
});

