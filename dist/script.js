let btn = document.querySelector("button");
let list = document.querySelector(".list");
let values = document.querySelectorAll(".input-field");

let players = [];
window.onload = displayData();

btn.addEventListener("click", function (e) {
  e.preventDefault();
  this.style.boxShadow =
    "0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1, 0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa";

  setTimeout(() => {
    this.style.boxShadow = "none";
  }, 100);

  for (let i = 0; i < values.length; i++) {
    if (!values[i].value.trim()) {
      allFieldsFilled = false;
      alert("All fields are required");

      return;
    }
  }

  let player = {
    firstName: values[0].value,
    lastName: values[1].value,
    country: values[2].value,
    score: values[3].value,
    time: formatDate(),
    id: players.length,
  };
  players.push(player);

  displayData();

  values.forEach((element) => {
    element.value = "";
  });
});

list.addEventListener("click", (e) => {
  let index = parseInt(e.target.getAttribute("data-id"));

  if (e.target.classList.contains("plus")) {
    players[index].score = Number(players[index].score) + 5;
  }

  if (e.target.classList.contains("minus")) {
    if (players[index].score <= 0) {
      return;
    }
    players[index].score = Number(players[index].score) - 5;
  }

  if (e.target.classList.contains("delete")) {
    players = players.filter((player, idx) => idx !== index);
  }
  // players[index].time = formatDate();
  displayData();
});

function displayData() {
  players.sort((a, b) => b.score - a.score);
  list.innerHTML = "";

  if (players.length == 0) {
    list.innerHTML += ` <div class=" mx-auto p-5 text-center odd:bg-slate-400 even:bg-slate-500 shadow-md ">
    <span class="text-4xl  text-white">No Player Added</span>
</div>`;
  } else {
    players.forEach((element, index) => {
      list.innerHTML += `
      <div class="flex justify-between  mx-auto p-5  odd:bg-slate-400 even:bg-slate-500 text-2xl shadow-md ">
        <span>${
          element.firstName.charAt(0).toUpperCase() +
          element.firstName.slice(1) +
          " " +
          element.lastName.charAt(0).toUpperCase() +
          element.lastName.slice(1)
        }
        |  <span>${element.time}</span> </span>
        <span>${element.country.toUpperCase()}</span>
        <span>${element.score}</span>
        <span class="flex justify-between updateSpan gap-4 cursor-pointer">
          <span  data-id="${index}" class = "select-none delete odd:bg-white  even:bg-black rounded-md px-2">&#x1F5D1;</span>
          <span   data-id="${index}" class = "bg-red-500 px-2 text-white rounded-lg plus select-none">+5</span >
          <span   data-id="${index}" class = "bg-red-500 px-3 text-white rounded-lg minus select-none">-5</span>
        </span>
      </div>
    `;
    });
  }
}
function formatDate() {
  let date = new Date();
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
    timeZone: "UTC",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}
