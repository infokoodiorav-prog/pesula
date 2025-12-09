const keel = localStorage.getItem("valitudKeel") || "est";
const input = document.getElementById("auto");
const list = document.getElementById("auto-list");
let autod = [
  "Audi",
  "Chevrolet",
  "Cadillac",
  "BMW",
  "Chrysler",
  "Ford",
  "Honda",
  "Hyundai",
  "Jeep",
  "Dodge",
  "Jaguar",
  "Kia",
  "Land Rover",
  "Lexus",
  "Mercedes-Benz",
  "Mitsubishi",
  "Lincoln",
  "Mazda",
  "Nissan",
  "MINI",
  "Porsche",
  "Ram",
  "Subaru",
  "Toyota",
  "Volkswagen",
  "Volvo",
  "Alfa Romeo",
  "FIAT",
  "Tesla",
  "Suzuki",
];
input.addEventListener("input", function () {
  const val = this.value.toLowerCase();
  list.innerHTML = "";

  if (!val) return;

  autod
    .filter((a) => a.toLowerCase().includes(val))
    .forEach((a) => {
      const item = document.createElement("div");
      item.textContent = a;

      item.addEventListener("click", () => {
        input.value = a;
        list.innerHTML = "";
      });

      list.appendChild(item);
    });
});

document.addEventListener("click", function (e) {
  if (e.target !== input) {
    list.innerHTML = "";
  }
});

const broneeringForm = document.querySelector("form");


const messageEl = document.querySelector("#sonum");
broneeringForm.appendChild(messageEl);

broneeringForm.addEventListener("submit", function(event) {
  event.preventDefault();

  messageEl.classList.remove("hidden");
  messageEl.classList.add("show");

   setTimeout(() => {
    messageEl.style.opacity = "0";
    messageEl.style.transform = "translateY(-10px)";
    broneeringForm.reset();
  }, 3000);

});

const popup = document.getElementById("popup");
const valiAegBtn = document.getElementById("valiAegBtn");
const sulgePopup = document.getElementById("sulgePopup");
const aegadeList = document.querySelector(".aegade-list");
const kalender = document.getElementById("kalender");
const teenusSelect = document.getElementById("teenus");
const valitudKuupaev = document.getElementById("valitudKuupaev");
const valitudAeg = document.getElementById("valitudAeg");
const ajad = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
];
const igapaevkinniAjad = ["08:00", "15:00"];

const teenused = {
  Välipesu: 1,
  Sisepuhastus: 1,
  Komplektpesu: 2,
  Keemiline: 6,
  Vahatamine: 4,
  Läigestamine: 2,
  Poleerimine: 2,
};

valiAegBtn.addEventListener("click", () => {
  popup.classList.add("open");
  document.body.style.overflow = "hidden";
  genereeriAjad();
});

sulgePopup.addEventListener("click", () => {
  popup.classList.remove("open");
  document.body.style.overflow = "";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.remove("open");
    document.body.style.overflow = "";
  }
});

function genereeriAjad() {
  const kuup = kalender.value;
  const valitudTeenuse = teenusSelect.value;
  const kestus = teenused[valitudTeenuse] || 1;

  aegadeList.innerHTML = "";

  if (!kuup) {
    aegadeList.innerHTML = `<p>${broneeringTekstid[keel].palunValiKuupaev}</p>`;
    return;
  }
  if (!valitudTeenuse || !teenused[valitudTeenuse]) {
    aegadeList.innerHTML = `<p>${broneeringTekstid[keel].palunValiTeenus}</p>`;
    return;
  }

  ajad.forEach((aeg) => {
    const algusTund = parseInt(aeg.split(":")[0]);
    const loppTund = algusTund + kestus;

    const btn = document.createElement("button");
    btn.type = "button";

    if (loppTund > 18) {
      btn.disabled = true;
      btn.classList.add("disabled");
      btn.textContent = `${aeg} ${broneeringTekstid[keel].eiMahu}`;
    } else {
      let kattub = false;
      for (let i = 0; i < kestus; i++) {
        const checkTund = (algusTund + i).toString().padStart(2, "0") + ":00";
        if (igapaevkinniAjad.includes(checkTund)) {
          kattub = true;
          break;
        }
      }

      if (kattub) {
        btn.disabled = true;
        btn.classList.add("kinni");
        btn.textContent = `${aeg} ${broneeringTekstid[keel].kinni}`;
      } else {
        btn.classList.add("vaba");
        btn.textContent = aeg;
        btn.addEventListener("click", () => {
          valitudKuupaev.value = kuup;
          valitudAeg.value = aeg;

          popup.classList.remove("open");
          document.body.style.overflow = "";
        });
      }
    }

    aegadeList.appendChild(btn);
  });
}

kalender.addEventListener("change", genereeriAjad);
teenusSelect.addEventListener("change", genereeriAjad);

const broneeringTekstid = {
  est: {
    nuppAvalehele: "🏠 Avalehele",
    nuppPood: "🛒 E-pood",
    nimi: "Nimi",
    email: "E-mail",
    telefon: "Telefon",
    auto: "Automark",
    teenus: "Vali teenus",
    teenusValikud: [
      "Välipesu",
      "Sisepuhastus",
      "Komplektpesu",
      "Keemiline puhastus",
      "Vahatamine",
      "Läigestamine",
      "Poleerimine",
    ],
    valiAegBtn: "Vali aeg ja kuupäev",
    kuupaev: "Kuupäev",
    aeg: "Aeg",
    saadaBroneering: "Saada broneering",
    sulgePopup: "Sulge",
    palunValiKuupaev: "Palun vali kuupäev!",
    palunValiTeenus: "Palun vali teenus!",
    eiMahu: "(ei mahu tööpäeva)",
    kinni: "(kinni)",
    sulge: "Sulge",
    validaegBtn: "Vali aeg ja kuupäev",
    saataBtn: "Saada broneering",
    sonum: "Broneering saadetud!",
    oigus: "© 2025 KülaPesula Kõik õigused kaitstud.",
    teine: "Veebilahendus: KoodiOrav"
  },
  eng: {
    nuppAvalehele: "🏠 Home",
    nuppPood: "🛒 E-shop",
    nimi: "Name",
    email: "E-mail",
    telefon: "Phone",
    auto: "Car Brand",
    teenus: "Choose a service",
    teenusValikud: [
      "Exterior Wash",
      "Interior Cleaning",
      "Full Package",
      "Chemical Cleaning",
      "Waxing",
      "Polishing",
      "Deep Polishing",
    ],
    valiAegBtn: "Select Date and Time",
    kuupaev: "Date",
    aeg: "Time",
    saadaBroneering: "Send Booking",
    sulgePopup: "Close",
    palunValiKuupaev: "Please select a date!",
    palunValiTeenus: "Please select a service!",
    eiMahu: "(out of work hours)",
    kinni: "(closed)",
    sulge: "Close",
    validaegBtn: "Select date and time",
    saataBtn: "Send booking",
    sonum: "Booking sent!",
    oigus: "© 2025 KülaPesula All rights reserved.",
    teine: "Web solution: KoodiOrav"
  },
  rus: {
    nuppAvalehele: "🏠 Главная",
    nuppPood: "🛒 Интернет-магазин",
    nimi: "Имя",
    email: "Эл. почта",
    telefon: "Телефон",
    auto: "Марка авто",
    teenus: "Выберите услугу",
    teenusValikud: [
      "Внешняя мойка",
      "Внутренняя чистка",
      "Комплексная мойка",
      "Химчистка",
      "Нанесение воска",
      "Полировка",
      "Глубокая полировка",
    ],
    valiAegBtn: "Выбрать дату и время",
    kuupaev: "Дата",
    aeg: "Время",
    saadaBroneering: "Отправить бронирование",
    sulgePopup: "Закрыть",
    palunValiKuupaev: "Пожалуйста, выберите дату!",
    palunValiTeenus: "Пожалуйста, выберите услугу!",
    eiMahu: "(не в рабочее время)",
    kinni: "(закрыто)",
    sulge: "Закрыть",
    validaegBtn: "Выбрать дату и время",
    saataBtn: "Отправить бронирование",
    sonum: "ронирование отправлено!",
    oigus: "© 2025 KüлаPesула Все права защищены.",
    teine: "Веб-решение: KoodiOrav"
  },
  fin: {
    nuppAvalehele: "🏠 Koti",
    nuppPood: "🛒 Verkkokauppa",
    nimi: "Nimi",
    email: "Sähköposti",
    telefon: "Puhelin",
    auto: "Auton merkki",
    teenus: "Valitse palvelu",
    teenusValikud: [
      "Ulkopesu",
      "Sisäpesu",
      "Täyspaketti",
      "Kemiallinen puhdistus",
      "Vahaus",
      "Kiillotus",
      "Syväkiillotus",
    ],
    valiAegBtn: "Valitse päivämäärä ja aika",
    kuupaev: "Päivämäärä",
    aeg: "Aika",
    saadaBroneering: "Lähetä varaus",
    sulgePopup: "Sulje",
    palunValiKuupaev: "Valitse päivämäärä!",
    palunValiTeenus: "Valitse palvelu!",
    eiMahu: "(työajan ulkopuolella)",
    kinni: "(kiinni)",
    sulge: "Sulje",
    validaegBtn: "Valitse aika ja päivämäärä",
    saataBtn: "Lähetä varaus",
    sonum: "Varaus lähetetty!",
    oigus: "© 2025 KülaPesula Kaikki oikeudet pidätetään.",
    teine: "Verkkoratkaisu: KoodiOrav"
  },
};

function muudaKeelBroneering(keel) {
  document.querySelector('.nupud a[href="index.html"]').textContent =
    broneeringTekstid[keel].nuppAvalehele;
  document.querySelector('.nupud a[href="pood.html"]').textContent =
    broneeringTekstid[keel].nuppPood;

  document.querySelector('input[name="nimi"]').placeholder =
    broneeringTekstid[keel].nimi;
  document.querySelector('input[name="email"]').placeholder =
    broneeringTekstid[keel].email;
  document.querySelector('input[name="telefon"]').placeholder =
    broneeringTekstid[keel].telefon;
  document.getElementById("auto").placeholder = broneeringTekstid[keel].auto;
  document.getElementById("saadaBroneering").textContent =
    broneeringTekstid[keel].saadaBroneering;
  document.getElementById("sulgePopup").textContent =
    broneeringTekstid[keel].sulgePopup;
    document.getElementById("sonum").textContent =
    broneeringTekstid[keel].sonum;
    document.getElementById("oigus").textContent =
    broneeringTekstid[keel].oigus;
    document.getElementById("teine").textContent =
    broneeringTekstid[keel].teine;

  const teenusSelect = document.getElementById("teenus");
  teenusSelect.options[0].textContent = broneeringTekstid[keel].teenus;
  broneeringTekstid[keel].teenusValikud.forEach((valik, index) => {
    teenusSelect.options[index + 1].textContent = valik;
  });

  document.getElementById("valiAegBtn").textContent =
    broneeringTekstid[keel].valiAegBtn;
  document.getElementById("valitudKuupaev").placeholder =
    broneeringTekstid[keel].kuupaev;
  document.getElementById("valitudAeg").placeholder =
    broneeringTekstid[keel].aeg;
}

const salvestatudKeel = localStorage.getItem("valitudKeel") || "est";
muudaKeelBroneering(salvestatudKeel);

const keeleValik = document.getElementById("keeleValik");
if (keeleValik) {
  keeleValik.value = salvestatudKeel;
  keeleValik.addEventListener("change", () => {
    const valitud = keeleValik.value;
    localStorage.setItem("valitudKeel", valitud);
    muudaKeelBroneering(valitud);
  });
}