const policyNews = [
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

const policyNewsWrapper = document.getElementById("policy-cards-wrapper");

policyNews.map((pNews) => {
  let latestCard = document.createElement("div");
  latestCard.className = "policy-card";

  let lImgBox = document.createElement("div");
  lImgBox.className = "policy-image-box";

  let cardImage = document.createElement("img");
  cardImage.src = pNews.image;
  cardImage.className = "policy-news-img";

  let textBox = document.createElement("div");
  textBox.className = "policy-texts-box";

  let cardTitle = document.createElement("h3");
  cardTitle.textContent = pNews.title;

  let cardSubtitle = document.createElement("p");
  cardSubtitle.textContent = pNews.subtitle;

  let dateBox = document.createElement("div");
  dateBox.className = "policy-date-box";

  let calendarImg = document.createElement("img");
  calendarImg.src = pNews.img;

  let cardDate = document.createElement("p");
  cardDate.textContent = pNews.date;

  lImgBox.appendChild(cardImage);
  textBox.appendChild(cardTitle);
  textBox.appendChild(cardSubtitle);
  textBox.appendChild(dateBox);
  dateBox.appendChild(calendarImg);
  dateBox.appendChild(cardDate);
  latestCard.appendChild(lImgBox);
  latestCard.appendChild(textBox);

  policyNewsWrapper.appendChild(latestCard);
});
