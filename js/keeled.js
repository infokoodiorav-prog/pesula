
  const tekstid = {
  est: {
    pealkiri: "Kõik, mida Sinu auto vajab - ühest kohast",
    kirjeldus: "Välipesust kuni salongi keemilise puhastuseni",
    alampealkiri: "Miks usaldada oma auto meie hoolde?",
    list: ["⭐ Kvaliteetsed teenused","🤝 Sõbralik teenindus","⏱️ Lühike ooteaeg","📅 Paindlik aja broneerimine"],
    cta: "Tutvu meie teenustega või broneeri mugavalt endale autopesu aeg!",
    teenus1: "🛠️ Teenused",
    teenus2: "📅 Broneeri aeg",
    ePood: "Külasta ka meie E-poodi ja leia kõik vajalik oma auto hoolduseks.",
    pood: "🛒 E-pood",
    kontakt1: "📞 +372 555 1234",
    kontakt2: "✉️ info@kulapesula.ee",
    eR: "E-R:",
    eRAeg: "08:00 - 18:00",
    lP: "L-P:",
    lPAeg: "10:00 - 16:00",
    nb: "NB:",
    riigipuhad: "Riigipühadel oleme suletud",
    leiad: "Leiad meid ka",
    oigus: "© 2025 KülaPesula Kõik õigused kaitstud.",
    teine: "Veebilahendus: KoodiOrav"
  },
  eng: {
    pealkiri: "Everything Your Car Needs - All in One Place",
    kirjeldus: "From exterior wash to interior deep cleaning",
    alampealkiri: "Why trust your car with us?",
    list: ["⭐ Quality services","🤝 Friendly service","⏱️ Short waiting time","📅 Flexible booking"],
    cta: "Check our services or book a time!",
    teenus1: "🛠️ Services",
    teenus2: "📅 Book a time",
    ePood: "Visit our online store and find everything for your car care.",
    pood: "🛒 Online store",
    kontakt1: "📞 +372 555 1234",
    kontakt2: "✉️ info@kulapesula.ee",
    eR: "Mon-Fri:",
    eRAeg: "08:00 - 18:00",
    lP: "Sat-Sun:",
    lPAeg: "10:00 - 16:00",
    nb: "Note:",
    riigipuhad: "Closed on public holidays",
    leiad: "Find us also on",
    oigus: "© 2025 KülaPesula All rights reserved.",
    teine: "Web solution: KoodiOrav"
  },
    rus: {
    pealkiri: "Все, что нужно вашему автомобилю - в одном месте",
    kirjeldus: "От мойки до химчистки салона",
    alampealkiri: "Почему доверять свой автомобиль нам?",
    list: [
      "⭐ Качественные услуги",
      "🤝 Дружелюбное обслуживание",
      "⏱️ Короткое время ожидания",
      "📅 Гибкое бронирование"
    ],
    cta: "Ознакомьтесь с нашими услугами или забронируйте время!",
    teenus1: "🛠️ Услуги",
    teenus2: "📅 Забронировать время",
    ePood: "Посетите наш интернет-магазин и найдите все необходимое для ухода за автомобилем.",
    pood: "🛒 Интернет-магазин",
    kontakt1: "📞 +372 555 1234",
    kontakt2: "✉️ info@kulapesula.ee",
    eR: "Пн-Пт:",
    eRAeg: "08:00 - 18:00",
    lP: "Сб-Вс:",
    lPAeg: "10:00 - 16:00",
    nb: "Примечание:",
    riigipuhad: "В праздничные дни закрыто",
    leiad: "Найдите нас также в",
    oigus: "© 2025 KüлаPesула Все права защищены.",
    teine: "Веб-решение: KoodiOrav"
  },
  fin: { 
    pealkiri: "Kaikki, mitä autosi tarvitsee - yhdestä paikasta",
    kirjeldus: "Ulko- ja sisäpesusta kemialliseen puhdistukseen",
    alampealkiri: "Miksi luottaa autoosi meille?",
    list: [
      "⭐ Laadukkaat palvelut",
      "🤝 Ystävällinen palvelu",
      "⏱️ Lyhyt odotusaika",
      "📅 Joustava ajanvaraus"
    ],
    cta: "Tutustu palveluihimme tai varaa aika helposti!",
    teenus1: "🛠️ Palvelut",
    teenus2: "📅 Varaa aika",
    ePood: "Vieraile myös verkkokaupassamme ja löydä kaikki tarvittava autosi huoltoon.",
    pood: "🛒 Verkkokauppa",
    kontakt1: "📞 +372 555 1234",
    kontakt2: "✉️ info@kulapesula.ee",
    eR: "Ma-Pe:",
    eRAeg: "08:00 - 18:00",
    lP: "La-Su:",
    lPAeg: "10:00 - 16:00",
    nb: "Huom:",
    riigipuhad: "Juhlapäivinä suljettu",
    leiad: "Löydät meidät myös",
    oigus: "© 2025 KülaPesula Kaikki oikeudet pidätetään.",
    teine: "Verkkoratkaisu: KoodiOrav"
  }


};

let valitudKeel = localStorage.getItem('valitudKeel');


if (!valitudKeel) {
  valitudKeel = "est";
  localStorage.setItem('valitudKeel', valitudKeel);
}

muudaKeel(valitudKeel);

function muudaKeel(keel) {
  localStorage.setItem('valitudKeel', keel);
  document.getElementById('pealkiri').textContent = tekstid[keel].pealkiri;
  document.getElementById('kirjeldus').textContent = tekstid[keel].kirjeldus;
  document.getElementById('alampealkiri').textContent = tekstid[keel].alampealkiri;

  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach((item, index) => {
    item.textContent = tekstid[keel].list[index];
  });

  document.getElementById('cta').textContent = tekstid[keel].cta;
  document.getElementById('teenus1').textContent = tekstid[keel].teenus1;
  document.getElementById('teenus2').textContent = tekstid[keel].teenus2;
  document.getElementById('e-pood').textContent = tekstid[keel].ePood;
  document.getElementById('pood').textContent = tekstid[keel].pood;
  document.getElementById('kontakt1').textContent = tekstid[keel].kontakt1;
  document.getElementById('kontakt2').textContent = tekstid[keel].kontakt2;
  document.getElementById('e-r').textContent = tekstid[keel].eR;
  document.getElementById('e-r-aeg').textContent = tekstid[keel].eRAeg;
  document.getElementById('l-p').textContent = tekstid[keel].lP;
  document.getElementById('l-p-aeg').textContent = tekstid[keel].lPAeg;
  document.getElementById('nb').textContent = tekstid[keel].nb;
  document.getElementById('riigipuhad').textContent = tekstid[keel].riigipuhad;
  document.getElementById('leiad').textContent = tekstid[keel].leiad;
  document.getElementById('oigus').textContent = tekstid[keel].oigus;
  document.getElementById('teine').textContent = tekstid[keel].teine;
}