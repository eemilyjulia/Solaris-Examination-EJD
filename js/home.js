let bodies = [];
const baseURL = "https://majazocom.github.io/Data/solaris.json";

getData();

//Search bar funktion
let searchInput = document.querySelector("#search");
searchInput.addEventListener("input", filterBodies);

async function getData() {
  try {
    const response = await fetch(baseURL);
    bodies = await response.json();

    renderDataToUI();
  } catch (error) {
    console.log("There was an error ", error);
  }
}

function renderDataToUI() {
    let solarsystemContainer = document.querySelector(".solarsystem-container");
  
    bodies.forEach((body) => {
      // Skapar en div för varje objekt 
      let bodyEl = document.createElement("div");
  
      //Lägger till klassnamn och id för styling och funktion
      bodyEl.classList.add("body");
      bodyEl.classList.add(body.name);
      bodyEl.setAttribute("id", body.id);
  
      //Kallar varje planet till solarsystem containern
      solarsystemContainer.appendChild(bodyEl);
  
      body.HTML = bodyEl;
    });
  
    //Lägger till en eventlyssnare till varje planet
    eventlistenerToBody();
  }
  
  function eventlistenerToBody() {
    //Gör alla planeter klickbara
    let clickableItems = document.querySelectorAll(".body");
  
    clickableItems.forEach((clickableItem) => {
      clickableItem.addEventListener("click", () => {
        //Dirigerar om till body.html och visar info om varje planet
        let index = clickableItem.id;
        //Lagrar klickade objekt i localstorage
        localStorage.setItem("body", JSON.stringify(bodies[index]));
        window.location.href = "body.html";
      });
    });
  }
  
  // Funktion som filtrerar planeter beroende på vad som skrivs i sökfältet
  function filterBodies() {
    const value = searchInput.value.toLowerCase();
  
    bodies.forEach((body) => {
      const match = body.name.toLowerCase().includes(value);
      body.HTML.classList.toggle("hide", !match);
  
      if (match) {
        body.HTML.classList.add("highlight"); //Lägger till styling för varje planet i sökresultat
      }
  
      if (value === "") {
        body.HTML.classList.remove("highlight"); // Om sökrutan är tom syns alla planeter
      }
    });
  }
