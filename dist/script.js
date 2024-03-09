let btn = document.querySelector("button");
let list = document.querySelector(".list");
let firstName = document.querySelectorAll(".input-field");

let players = [];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let player = {
    firstName: firstName[0].value,
    lastName: firstName[1].value,
    country: firstName[2].value,
    score: firstName[3].value,
  };
  players.push(player);

  displayData();

  firstName.forEach((element) => {
    element.value = "";
  });

  this.style.boxShadow =
    "0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1, 0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa";

  setTimeout(() => {
    this.style.boxShadow = "none";
  }, 100);
});

list.addEventListener("click", (e) => {
  let index = parseInt(e.target.title);

  if (e.target.classList.contains("plus")) {
    players[index].score = Number(players[index].score) + 5;

    displayData();
  }

  if (e.target.classList.contains("minus")) {
    players[index].score = Number(players[index].score) - 5;

    displayData();
  }

  if (e.target.classList.contains("delete")) {
    let index = parseInt(e.target.title);
    players = players.filter((player, idx) => idx !== index);
    displayData();
  }
});

function displayData() {
  players.sort((a, b) => b.score - a.score);
  list.innerHTML = "";
  players.forEach((element, index) => {
    list.innerHTML += `
      <div class="flex justify-between w-[80%] mx-auto  p-5 text-2xl ">
        <span>${element.firstName}</span>
        <span>${element.country}</span>
        <span>${element.score}</span>
        <span class="flex justify-between updateSpan gap-4 ">
          <span title="${index}" class = "delete">&#x1F5D1;</span>
          <span title="${index}" class = "bg-green-500 px-2 rounded-lg plus">+5</span >
          <span title="${index}" class = "bg-green-500 px-3 rounded-lg minus">-5</span>
        </span>
      </div>
    `;
  });
}
