const newsData = [
  {
    image: "./images/prezident.jpg",
    title:
      "Мирзиёев рассказал, зачем было построено Сардобинское водохранилище",
    date: "05:28 / 16.05.2020",
  },
  {
    image: "./images/karantin.jpg",
    title: "Карантин в Узбекистане продлен до 1 июня",
    date: "05:28 / 16.05.2020",
  },
  {
    image: "./images/sardoba.jpg",
    title: "Обмелевшая Сардоба: стихия или человеческий фактор?",
    date: "05:28 / 16.05.2020",
  },
  {
    image: "./images/prokuror.jpg",
    title: "Следствие проверяет четыре версии прорыва Сардобинской плотины",
    date: "05:28 / 16.05.2020",
  },
  {
    image: "./images/tez-yordam.jpg",
    title: "Выявлено еще 7 случаев коронавируса",
    date: "05:28 / 16.05.2020",
  },
  {
    image: "./images/stop-karantin.jpg",
    title: "Итоги второго месяца карантина",
    date: "05:28 / 16.05.2020",
  },
];

let CardsSection = document.getElementById("news-cards-wrapper");

newsData.map((news) => {
  let card = document.createElement("div");
  card.className = "news-card";

  let cardImage = document.createElement("img");
  cardImage.src = news.image;
  cardImage.className = "news-img";

  let cardTitle = document.createElement("h3");
  cardTitle.className = "news-card-title";
  cardTitle.textContent = news.title;

  let cardDate = document.createElement("p");
  cardDate.className = "news-card-date";
  cardDate.textContent = news.date;

  card.appendChild(cardImage);
  card.appendChild(cardTitle);
  card.appendChild(cardDate);
  CardsSection.appendChild(card);
});

const latestNews = [
  {
    image: "./images/sardoba_2.png",
    title:
      "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
    subtitle:
      "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.",
    img: "/images/calendar.png",
    date: "11:31 / 15.05.2020",
  },
  {
    image: "./images/prezident_2.png",
    title:
      "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
    subtitle:
      "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
    img: "/images/calendar.png",
    date: "11:31 / 15.05.2020",
  },
  {
    image: "./images/bus.png",
    title:
      "В Ташкенте планируют ввести новую систему электронных проездных билетов",
    subtitle:
      "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
    img: "/images/calendar.png",
    date: "11:31 / 15.05.2020",
  },
  {
    image: "./images/sardoba_2.png",
    title:
      "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
    subtitle:
      "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.",
    img: "/images/calendar.png",
    date: "11:31 / 15.05.2020",
  },
  {
    image: "./images/prezident_2.png",
    title:
      "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
    subtitle:
      "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
    img: "/images/calendar.png",
    date: "11:31 / 15.05.2020",
  },
  {
    image: "./images/bus.png",
    title:
      "В Ташкенте планируют ввести новую систему электронных проездных билетов",
    subtitle:
      "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
    img: "/images/calendar.png",
    date: "11:31 / 15.05.2020",
  },
];

const latestNewsWrapper = document.getElementById("latest-cards-wrapper");

latestNews.map((lNews) => {
  let latestCard = document.createElement("div");
  latestCard.className = "latest-card";

  let lImgBox = document.createElement("div");
  lImgBox.className = "l-image-box";

  let cardImage = document.createElement("img");
  cardImage.src = lNews.image;
  cardImage.className = "l-news-img";

  let textBox = document.createElement("div");
  textBox.className = "l-texts-box";

  let cardTitle = document.createElement("h3");
  cardTitle.textContent = lNews.title;

  let cardSubtitle = document.createElement("p");
  cardSubtitle.textContent = lNews.subtitle;

  let dateBox = document.createElement("div");
  dateBox.className = "date-box";

  let calendarImg = document.createElement("img");
  calendarImg.src = lNews.img;

  let cardDate = document.createElement("p");
  cardDate.textContent = lNews.date;

  lImgBox.appendChild(cardImage);
  textBox.appendChild(cardTitle);
  textBox.appendChild(cardSubtitle);
  textBox.appendChild(dateBox);
  dateBox.appendChild(calendarImg);
  dateBox.appendChild(cardDate);
  latestCard.appendChild(lImgBox);
  latestCard.appendChild(textBox);

  latestNewsWrapper.appendChild(latestCard);
});

// const policyNews = [
//   {
//     image: "./images/sardoba_2.png",
//     title:
//       "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
//     subtitle:
//       "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.",
//     img: "/images/calendar.png",
//     date: "11:31 / 15.05.2020",
//   },
//   {
//     image: "./images/prezident_2.png",
//     title:
//       "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
//     subtitle:
//       "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
//     img: "/images/calendar.png",
//     date: "11:31 / 15.05.2020",
//   },
//   {
//     image: "./images/bus.png",
//     title:
//       "В Ташкенте планируют ввести новую систему электронных проездных билетов",
//     subtitle:
//       "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
//     img: "/images/calendar.png",
//     date: "11:31 / 15.05.2020",
//   },
//   {
//     image: "./images/sardoba_2.png",
//     title:
//       "По факту прорыва Сардобинского водохранилища возбуждено уголовное дело",
//     subtitle:
//       "После прорыва дамбы Сардобинского водохранилища возбуждено уголовное дело, сообщили в пресс-службе Генпрокуратуры Узбекистана.",
//     img: "/images/calendar.png",
//     date: "11:31 / 15.05.2020",
//   },
//   {
//     image: "./images/prezident_2.png",
//     title:
//       "Мирзиёев: «Нам следовало бы принять некоторые правила карантина как часть повседневной жизни»",
//     subtitle:
//       "Президент Узбекистана заявил, что после того, как угроза коронавируса исчезнет, в стране следовало бы принять некоторые правила периода карантина как часть своей повседневной жизни.",
//     img: "/images/calendar.png",
//     date: "11:31 / 15.05.2020",
//   },
//   {
//     image: "./images/bus.png",
//     title:
//       "В Ташкенте планируют ввести новую систему электронных проездных билетов",
//     subtitle:
//       "Целью этих изменений является максимально возможное сокращение количества других маршрутов на улицах, где проходят основные маршруты.",
//     img: "/images/calendar.png",
//     date: "11:31 / 15.05.2020",
//   },
// ];

// const policyNewsWrapper = document.getElementById("policy-cards-wrapper");

// policyNews.map((pNews) => {
//   let latestCard = document.createElement("div");
//   latestCard.className = "policy-card";

//   let lImgBox = document.createElement("div");
//   lImgBox.className = "policy-image-box";

//   let cardImage = document.createElement("img");
//   cardImage.src = pNews.image;
//   cardImage.className = "policy-news-img";

//   let textBox = document.createElement("div");
//   textBox.className = "policy-texts-box";

//   let cardTitle = document.createElement("h3");
//   cardTitle.textContent = pNews.title;

//   let cardSubtitle = document.createElement("p");
//   cardSubtitle.textContent = pNews.subtitle;

//   let dateBox = document.createElement("div");
//   dateBox.className = "policy-date-box";

//   let calendarImg = document.createElement("img");
//   calendarImg.src = pNews.img;

//   let cardDate = document.createElement("p");
//   cardDate.textContent = pNews.date;

//   lImgBox.appendChild(cardImage);
//   textBox.appendChild(cardTitle);
//   textBox.appendChild(cardSubtitle);
//   textBox.appendChild(dateBox);
//   dateBox.appendChild(calendarImg);
//   dateBox.appendChild(cardDate);
//   latestCard.appendChild(lImgBox);
//   latestCard.appendChild(textBox);

//   policyNewsWrapper.appendChild(latestCard);
// });
