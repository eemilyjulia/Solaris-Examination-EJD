renderObjectToUI();

function renderObjectToUI() {
  //hämta objekt från local storage
  let body = JSON.parse(localStorage.getItem("body"));

  let objectContainer = document.querySelector(".body-section");

  // styla/strukturera info om planeter
  objectContainer.innerHTML = `
        <section>
            <h1>${body.name}</h1>
            <h2>${body.latinName}</h2>
            <p>${body.desc}</p>
        </section>
        <section class=body-desc>
            <section>
                <H3>Omkrets <span>${body.circumference} km</span></H3>
                <H3>Max temperatur <span>${body.temp.day} C</span></H3>
            </section>
            <section>
                <H3>KM från solen <span>${body.distance} km</span></H3>
                <H3>Min temperatur <span>${body.temp.night} C</span></H3>
            </section>
        </section>
        <section>
            <H3>Månar <span>${body.moons
              .map(
                // Loopar genom listan och skapar ett li-element for varje måne
                (moon) => `<li>${moon}
            </li>`
              )
              .join("|")}</span></H3>
        </section>
  `;
}
