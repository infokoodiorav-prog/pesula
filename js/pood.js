const input = document.getElementById("toode");
const list = document.getElementById("toote-list");

const poodTekstid = {
  est: {
    tühjenda: "Tühjenda ostukorv",
    telli: "Telli",
    korvTyhi: "Ostukorv on tühi!",
    tellimus: "Tellimus esitatud! Kokku: ",
    otsi: "Otsi toodet",
    kategooriad: {
      kõik: "Kõik",
      keemia: "Autokeemia",
      vaha: "Vahad",
      tarvikud: "Tarvikud",
    },
    statics: {
      otsiToode: "Otsi toodet",
      hind: "Hind",
      kogus: "Kogus",
      lisaKorvi: "Lisa ostukorvi",
      tellimuseInfo: "Tellimuse info",
      eesnimi: "Eesnimi",
      email: "E-mail",
      aadress: "Aadress",
      esitaTellimus: "Esita tellimus",
      avaleht: "🏠 Avalehele",
      teenused: "🛠️ Teenused",
      esitaTellimus: "Esita tellimus",
      oigus: "© 2025 KülaPesula Kõik õigused kaitstud.",
    teine: "Veebilahendus: KoodiOrav"
    }
  },
  eng: {
    tühjenda: "Empty cart",
    telli: "Order",
    korvTyhi: "Cart is empty!",
    tellimus: "Order placed! Total: ",
    otsi: "Search product",
    kategooriad: {
      kõik: "All",
      keemia: "Chemicals",
      vaha: "Waxes",
      tarvikud: "Accessories",
    },
    statics: {
      otsiToode: "Search product",
      hind: "Price",
      kogus: "Quantity",
      lisaKorvi: "Add to cart",
      tellimuseInfo: "Order details",
      eesnimi: "Name",
      email: "E-mail",
      aadress: "Address",
      esitaTellimus: "Submit order",
      avaleht: "🏠 Home",
      teenused: "🛠️ Services",
      esitaTellimus: "Submit order",
      oigus: "© 2025 KülaPesula All rights reserved.",
    teine: "Web solution: KoodiOrav"
    }
  },
  rus: {
    tühjenda: "Очистить корзину",
    telli: "Заказать",
    korvTyhi: "Корзина пуста!",
    tellimus: "Заказ оформлен! Итого: ",
    otsi: "Поиск товара",
    kategooriad: {
      kõik: "Все",
      keemia: "Химия",
      vaha: "Воски",
      tarvikud: "Аксессуары",
    },
    statics: {
      otsiToode: "Поиск товара",
      hind: "Цена",
      kogus: "Количество",
      lisaKorvi: "Добавить в корзину",
      tellimuseInfo: "Информация о заказе",
      eesnimi: "Имя",
      email: "E-mail",
      aadress: "Адрес",
      esitaTellimus: "Отправить заказ",
      avaleht: "🏠 Главная",
      teenused: "🛠️ Услуги",
      esitaTellimus: "Отправить заказ",
      oigus: "© 2025 KüлаPesула Все права защищены.",
      teine: "Веб-решение: KoodiOrav"
    }
  },
  fin: {
    tühjenda: "Tyhjennä ostoskori",
    telli: "Tilaa",
    korvTyhi: "Ostoskori on tyhjä!",
    tellimus: "Tilaus tehty! Yhteensä: ",
    otsi: "Hae tuotetta",
    kategooriad: {
      kõik: "Kaikki",
      keemia: "Kemikaalit",
      vaha: "Vahat",
      tarvikud: "Tarvikkeet",
      oigus: "© 2025 KülaPesula Kaikki oikeudet pidätetään.",
      teine: "Verkkoratkaisu: KoodiOrav"
    },
    statics: {
      otsiToode: "Hae tuotetta",
      hind: "Hinta",
      kogus: "Määrä",
      lisaKorvi: "Lisää ostoskoriin",
      tellimuseInfo: "Tilaustiedot",
      eesnimi: "Nimi",
      email: "Sähköposti",
      aadress: "Osoite",
      esitaTellimus: "Lähetä tilaus",
      avaleht: "🏠 Etusivu",
      teenused: "🛠️ Palvelut",
      esitaTellimus: "Lähetä tilaus",
      oigus: "© 2025 KülaPesula Kaikki oikeudet pidätetään.",
      teine: "Verkkoratkaisu: KoodiOrav"
    }
  }
};

function tootleTekstid(keel) {
  const t = poodTekstid[keel].statics;

  document.getElementById("toode").placeholder = t.otsiToode;

  document.getElementById("popupHindLabel").childNodes[0].textContent =
    t.hind + ": ";
  document.getElementById("popupKogusLabel").childNodes[0].textContent =
    t.kogus + ": ";
  document.getElementById("lisaKorviBtn").textContent = t.lisaKorvi;
  document.getElementById("oigus").textContent = t.oigus;
  document.getElementById("teine").textContent = t.teine;

  document.querySelector("#telliPopup h2").textContent = t.tellimuseInfo;

  const form = document.getElementById("telliForm");
  form.children[0].childNodes[0].textContent = t.eesnimi + ": ";
  form.children[1].childNodes[0].textContent = t.email + ": ";
  form.children[2].childNodes[0].textContent = t.aadress + ": ";
  form.querySelector("button[type='submit']").textContent = t.esitaTellimus;

  document.getElementById("avaleht").textContent = t.avaleht;
  document.getElementById("teenused").textContent = t.teenused;

  const nupudDiv = document.querySelector(".nupud");
  nupudDiv.children[0].textContent = t.avaleht;
  nupudDiv.children[1].textContent = t.teenused;
}

const tooted = [
  {
    id: 1,
    kategooria: "keemia",
    hind: 20,
    pilt: "img/keemia1.png",
    nimi: {
      est: "Ultra Shampoon 500ml",
      eng: "Ultra Shampoo 500ml",
      rus: "Ультра Шампунь 500мл",
      fin: "Ultra Shampoo 500ml",
    },
    kirjeldus: {
      est: "Tõhus šampoon, mis eemaldab mustuse ja rasvased plekid, jättes auto pinna säravaks.",
      eng: "Effective shampoo removing dirt and greasy spots, leaving car surface shiny.",
      rus: "Эффективный шампунь, удаляющий грязь и жирные пятна, оставляя поверхность автомобиля блестящей.",
      fin: "Tehokas shampoo, joka poistaa lian ja rasvaiset tahrat, jättäen auton pinnan kiiltäväksi.",
    },
  },
  {
    id: 2,
    kategooria: "keemia",
    hind: 12,
    pilt: "img/keemia2.jpg",
    nimi: {
      est: "Klaasipuhastus 500ml",
      eng: "Glass Cleaner 500ml",
      rus: "Очиститель стекол 500мл",
      fin: "Lasinpuhdistusaine 500ml",
    },
    kirjeldus: {
      est: "Jätab klaaspinnad puhtaks ja säravaks.",
      eng: "Leaves glass surfaces clean and shiny.",
      rus: "Оставляет стеклянные поверхности чистыми и блестящими.",
      fin: "Jättää lasipinnat puhtaiksi ja kiiltäviksi.",
    },
  },
  {
    id: 3,
    kategooria: "keemia",
    hind: 18,
    pilt: "img/keemia3.jpg",
    nimi: {
      est: "Mootoriruumi puhastus spray 500ml",
      eng: "Engine Bay Cleaner 500ml",
      rus: "Очиститель моторного отсека 500мл",
      fin: "Moottoritilan puhdistussuihke 500ml",
    },
    kirjeldus: {
      est: "Eemaldab õlijäägid mootori pinnalt, ilma et kahjustaks komponente.",
      eng: "Removes oil residues from engine surface without damaging components.",
      rus: "Удаляет остатки масла с поверхности двигателя без повреждения компонентов.",
      fin: "Poistaa öljyjäämät moottorin pinnalta vahingoittamatta osia.",
    },
  },
  {
    id: 4,
    kategooria: "keemia",
    hind: 15,
    pilt: "img/keemia4.jpg",
    nimi: {
      est: "Nahahooldus pudel 300ml",
      eng: "Leather Care 300ml",
      rus: "Уход за кожей 300мл",
      fin: "Nahkahoito 300ml",
    },
    kirjeldus: {
      est: "Niisutav ja kaitsev vahend nahahoolduseks.",
      eng: "Moisturizing and protective leather care product.",
      rus: "Увлажняющее и защитное средство для ухода за кожей.",
      fin: "Kosteuttava ja suojaava nahanhoitotuote.",
    },
  },
  {
    id: 5,
    kategooria: "keemia",
    hind: 14,
    pilt: "img/keemia5.jpg",
    nimi: {
      est: "Salongipuhastus Spray 400ml",
      eng: "Interior Cleaner Spray 400ml",
      rus: "Очиститель салона 400мл",
      fin: "Sisätilojen puhdistussuihke 400ml",
    },
    kirjeldus: {
      est: "Eemaldab tolmu ja plekid auto salongist, jättes hea lõhna.",
      eng: "Removes dust and stains from car interior, leaving a fresh scent.",
      rus: "Удаляет пыль и пятна в салоне автомобиля, оставляя приятный запах.",
      fin: "Poistaa pölyn ja tahrat auton sisätiloista, jättäen raikkaan tuoksun.",
    },
  },
  {
    id: 6,
    kategooria: "tarvikud",
    hind: 8,
    pilt: "img/lapp1.jpg",
    nimi: {
      est: "Mikrokiudlapid (5 tk)",
      eng: "Microfiber Cloths (5 pcs)",
      rus: "Микрофибровые тряпки (5 шт)",
      fin: "Mikrokuituliinat (5 kpl)",
    },
    kirjeldus: {
      est: "Pehmed mikrokiudlapid pindade puhastamiseks.",
      eng: "Soft microfiber cloths for cleaning surfaces.",
      rus: "Мягкие микрофибровые тряпки для очистки поверхностей.",
      fin: "Pehmeitä mikrokuituliinoja pintojen puhdistukseen.",
    },
  },
  {
    id: 7,
    kategooria: "tarvikud",
    hind: 10,
    pilt: "img/lapp3.jpg",
    nimi: {
      est: "Autopesusvamm (5tk)",
      eng: "Car Wash Sponge (5 pcs)",
      rus: "Губка для мойки авто (5 шт)",
      fin: "Autopesusieni (5 kpl)",
    },
    kirjeldus: {
      est: "Pesusvamm auto kere pesuks.",
      eng: "Wash sponge for cleaning car body.",
      rus: "Губка для мытья кузова автомобиля.",
      fin: "Pesusieni auton pesuun.",
    },
  },
  {
    id: 8,
    kategooria: "tarvikud",
    hind: 25,
    pilt: "img/lapp2.jpg",
    nimi: {
      est: "Hoolduskomplekt (5tk)",
      eng: "Maintenance Kit (5 pcs)",
      rus: "Набор для ухода (5 шт)",
      fin: "Huoltosarja (5 kpl)",
    },
    kirjeldus: {
      est: "Komplekt sisaldab lappe, svamme ja vahapadjakesi erinevate tööde hoolduseks.",
      eng: "Set includes cloths, sponges and wax pads for various maintenance tasks.",
      rus: "Набор включает тряпки, губки и восковые подушечки для различных задач по уходу.",
      fin: "Sarja sisältää liinoja, sieniä ja vahapatjoja erilaisiin huoltotöihin.",
    },
  },
  {
    id: 9,
    kategooria: "vaha",
    hind: 22,
    pilt: "img/vaha1.jpg",
    nimi: {
      est: "Bright White 500ml",
      eng: "Bright White Wax 500ml",
      rus: "Яркий белый воск 500мл",
      fin: "Bright White Vaha 500ml",
    },
    kirjeldus: {
      est: "Kaitsev vaha, mis annab auto värvile läike ja pikaajalise kaitse.",
      eng: "Protective wax giving car paint shine and long-lasting protection.",
      rus: "Защитный воск, придающий краске автомобиля блеск и долгую защиту.",
      fin: "Suojaava vaha, joka antaa auton maalipinnalle kiillon ja pitkäaikaisen suojan.",
    },
  },
  {
    id: 10,
    kategooria: "vaha",
    hind: 28,
    pilt: "img/vaha2.jpg",
    nimi: {
      est: "Metal Wax 473ml",
      eng: "Metal Wax 473ml",
      rus: "Металлический воск 473мл",
      fin: "Metal Vaha 473ml",
    },
    kirjeldus: {
      est: "Metallikvärvidele sobiv vaha, mis toob esile sügava sära.",
      eng: "Wax suitable for metallic paints, enhancing deep shine.",
      rus: "Воск, подходящий для металликов, усиливающий глубокий блеск.",
      fin: "Vaha sopii metalliväreille, korostaen syvää kiiltoa.",
    },
  },
  {
    id: 11,
    kategooria: "vaha",
    hind: 18,
    pilt: "img/vaha4.jpg",
    nimi: {
      est: "LäikeVaha Spray 300ml",
      eng: "Gloss Wax Spray 300ml",
      rus: "Спрей блеска 300мл",
      fin: "Kiilto Vaha Suihke 300ml",
    },
    kirjeldus: {
      est: "Kiirelt kuivav spray, mis jätab pinna läikima ja kaitstud.",
      eng: "Fast-drying spray leaving surface shiny and protected.",
      rus: "Быстро сохнущий спрей, оставляющий поверхность блестящей и защищенной.",
      fin: "Nopeasti kuivuva suihke, joka jättää pinnan kiiltäväksi ja suojatuksi.",
    },
  },
  {
    id: 12,
    kategooria: "vaha",
    hind: 16,
    pilt: "img/vaha3.jpg",
    nimi: {
      est: "Vahakreem 250ml",
      eng: "Wax Cream 250ml",
      rus: "Восковой крем 250мл",
      fin: "Vahavoide 250ml",
    },
    kirjeldus: {
      est: "Kreemjas vaha, sobib täpsemaks viimistluseks ja pinna sügavaks läikeseks.",
      eng: "Creamy wax for detailed finishing and deep shine.",
      rus: "Кремовый воск для детальной отделки и глубокого блеска.",
      fin: "Kermainen vaha tarkkaan viimeistelyyn ja syvään kiiltoon.",
    },
  },
];

let ostukorv = [];

const kategNupud = document.querySelectorAll(".kategooriad button");
const tootedGrid = document.getElementById("tootedGrid");
const popup = document.getElementById("tootePopup");
const sulge = document.getElementById("sulgePopup");
const korvIkoon = document.getElementById("toodekorvis");
const ostukorvContainer = document.getElementById("ostukorvContainer");
const ostukorvList = document.getElementById("ostukorvList");

const nupudDiv = document.createElement("div");
nupudDiv.style.marginTop = "10px";

const tühjendaBtn = document.createElement("button");
tühjendaBtn.classList.add("tuhjendabtn");
tühjendaBtn.style.marginRight = "10px";
nupudDiv.appendChild(tühjendaBtn);

const telliBtn = document.createElement("button");
telliBtn.classList.add("tellibtn");
nupudDiv.appendChild(telliBtn);

ostukorvContainer.appendChild(nupudDiv);

let valitudKeel;
if (
  window.location.pathname.endsWith("index.html") ||
  window.location.pathname === "/"
) {
  valitudKeel = "est";
  localStorage.setItem("valitudKeel", "est");
}

valitudKeel = localStorage.getItem("valitudKeel") || "est";
muudaKeelPood(valitudKeel);

function tootleTekstid(keel) {
  const t = poodTekstid[keel].statics;

  document.getElementById("toode").placeholder = t.otsiToode;
  document.getElementById("popupHindLabel").childNodes[0].textContent =
    t.hind + ": ";
  document.getElementById("popupKogusLabel").childNodes[0].textContent =
    t.kogus + ": ";
  document.getElementById("lisaKorviBtn").textContent = t.lisaKorvi;
  document.getElementById("oigus").textContent = t.oigus;
  document.getElementById("teine").textContent = t.teine;

  document.querySelector("#telliPopup h2").textContent = t.tellimuseInfo;

  tühjendaBtn.textContent = poodTekstid[keel].tühjenda;
  telliBtn.textContent = poodTekstid[keel].telli;

  const form = document.getElementById("telliForm");
  form.children[0].childNodes[0].textContent = t.eesnimi + ": ";
  form.children[1].childNodes[0].textContent = t.email + ": ";
  form.children[2].childNodes[0].textContent = t.aadress + ": ";
  form.querySelector("button[type='submit']").textContent = t.esitaTellimus;

  document.getElementById("avaleht").textContent = t.avaleht;
  document.getElementById("teenused").textContent = t.teenused;
}

function muudaKeelPood(keel) {
  valitudKeel = keel;
  localStorage.setItem("valitudKeel", keel);

  tühjendaBtn.textContent = poodTekstid[keel].tühjenda;
  telliBtn.textContent = poodTekstid[keel].telli;

  kategNupud.forEach((btn) => {
    const kateg = btn.getAttribute("data-kateg");
    btn.textContent = poodTekstid[keel].kategooriad[kateg.toLowerCase()];
  });

  tootleTekstid(keel);

  input.placeholder = poodTekstid[keel].otsi;

  kuvaOstukorv();
  kuvatooted("kõik");
}

input.addEventListener("input", function () {
  const val = this.value.toLowerCase();
  list.innerHTML = "";
  if (!val) return;

  tooted
    .filter((t) => t.nimi[valitudKeel].toLowerCase().includes(val))
    .forEach((toode) => {
      const item = document.createElement("div");
      item.classList.add("autocomplete-item");
      item.textContent = toode.nimi[valitudKeel];

      item.addEventListener("click", () => {
        input.value = toode.nimi[valitudKeel];
        list.innerHTML = "";
        avapopup(toode);
      });

      list.appendChild(item);
    });
});

document.addEventListener("click", function (e) {
  if (e.target !== input && !e.target.classList.contains("autocomplete-item")) {
    list.innerHTML = "";
  }
});

function kuvatooted(kategooria) {
  const filtreeritud =
    kategooria === "kõik"
      ? tooted
      : tooted.filter((t) => t.kategooria === kategooria);
  tootedGrid.innerHTML = "";
  filtreeritud.forEach((toode) => {
    const div = document.createElement("div");
    div.classList.add("toode");
    div.innerHTML = `<img src="${toode.pilt}" alt="${toode.nimi[valitudKeel]}"><h3>${toode.nimi[valitudKeel]}</h3><p>${toode.hind}€</p>`;
    div.addEventListener("click", () => avapopup(toode));
    tootedGrid.appendChild(div);
  });
}

function avapopup(toode) {
  document.getElementById("popupPilt").src = toode.pilt;
  document.getElementById("popupNimi").textContent = toode.nimi[valitudKeel];
  document.getElementById("popupKirjeldus").textContent =
    toode.kirjeldus[valitudKeel];
  document.getElementById("popupHind").textContent = toode.hind;
  document.getElementById("popupKogus").value = 1;

  const lisaBtn = document.getElementById("lisaKorviBtn");
  lisaBtn.onclick = () => {
    const kogus = parseInt(document.getElementById("popupKogus").value);
    lisaOstukorvi(toode, kogus);
    popup.style.display = "none";
  };
  popup.style.display = "flex";
}

sulge.addEventListener("click", () => (popup.style.display = "none"));

function lisaOstukorvi(toode, kogus) {
  const olemas = ostukorv.find((item) => item.id === toode.id);
  if (olemas) olemas.kogus += kogus;
  else ostukorv.push({ ...toode, kogus });
  kuvaOstukorv();
}

function kuvaOstukorv() {
  ostukorvList.innerHTML = "";
  let summa = 0;
  ostukorv.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.nimi[valitudKeel]} - ${item.kogus} tk - ${
      item.hind * item.kogus
    }€`;
    ostukorvList.appendChild(li);
    summa += item.hind * item.kogus;
  });

  let summaEl = document.getElementById("ostukorvSumma");
  if (!summaEl) {
    summaEl = document.createElement("p");
    summaEl.id = "ostukorvSumma";
    ostukorvContainer.appendChild(summaEl);
  }
  summaEl.textContent = `Kokku: ${summa}€`;
  korvIkoon.textContent = `🛒 ${ostukorv.reduce((sum, i) => sum + i.kogus, 0)}`;
}

korvIkoon.addEventListener("click", () => {
  ostukorvContainer.style.display =
    ostukorvContainer.style.display === "block" ? "none" : "block";
});

const sulgeKorv = document.createElement("span");
sulgeKorv.textContent = "X";
sulgeKorv.style.cursor = "pointer";
sulgeKorv.style.float = "right";
ostukorvContainer.prepend(sulgeKorv);

sulgeKorv.addEventListener(
  "click",
  () => (ostukorvContainer.style.display = "none")
);

document.addEventListener("click", (e) => {
  if (
    ostukorvContainer.style.display === "block" &&
    !ostukorvContainer.contains(e.target) &&
    e.target !== korvIkoon
  )
    ostukorvContainer.style.display = "none";
});

tühjendaBtn.addEventListener("click", () => {
  ostukorv = [];
  kuvaOstukorv();
});

telliBtn.addEventListener("click", () => {
  if (ostukorv.length === 0) {
    alert(poodTekstid[valitudKeel].korvTyhi);
    return;
  }
  telliPopup.style.display = "flex";
});

const telliPopup = document.getElementById("telliPopup");
const sulgeTelliPopup = document.getElementById("sulgeTelliPopup");
const telliForm = document.getElementById("telliForm");

sulgeTelliPopup.addEventListener(
  "click",
  () => (telliPopup.style.display = "none")
);
window.addEventListener("click", (e) => {
  if (e.target === telliPopup) telliPopup.style.display = "none";
});

telliForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let tellimusMsg = document.getElementById("tellimusMsg");
  if (!tellimusMsg) {
    tellimusMsg = document.createElement("div");
    tellimusMsg.id = "tellimusMsg";
    tellimusMsg.style.opacity = "0";
    tellimusMsg.style.marginTop = "10px";
    tellimusMsg.style.padding = "10px";
    tellimusMsg.style.backgroundColor = "#4CAF50";
    tellimusMsg.style.color = "white";
    tellimusMsg.style.borderRadius = "5px";
    tellimusMsg.style.textAlign = "center";
    tellimusMsg.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    tellimusMsg.style.transform = "translateY(-10px)";
    tellimusMsg.textContent =
      poodTekstid[valitudKeel].tellimus +
      ostukorv.reduce((sum, item) => sum + item.hind * item.kogus, 0) +
      "€";
    telliForm.appendChild(tellimusMsg);
  }

  tellimusMsg.style.opacity = "1";
  tellimusMsg.style.transform = "translateY(0)";

  setTimeout(() => {
    tellimusMsg.style.opacity = "0";
    tellimusMsg.style.transform = "translateY(-10px)";
    telliForm.reset();
    ostukorv = [];
    kuvaOstukorv();
    telliPopup.style.display = "none";
  }, 3000);
});

kategNupud.forEach((btn) => {
  btn.addEventListener("click", () =>
    kuvatooted(btn.getAttribute("data-kateg"))
  );
});



muudaKeelPood(valitudKeel);
tootleTekstid(valitudKeel);
kuvatooted("kõik");
