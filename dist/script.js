let btn = document.querySelector("button");
let list = document.querySelector(".list");
let firstName = document.querySelector(".firstName");
let lastName = document.querySelector(".lastName");
let country = document.querySelector(".country");
let score = document.getElementById("score");

const players = [];

btn.addEventListener("click", function (e) {
  // e.preventDefault();
  let player = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    score: score.value,
  };
  players.push(player);
  players.sort((a, b) => b.score - a.score);

  player.forEach((element) => {
    list.innerHTML += `
    <div
    class="flex justify-between text-white w-[80%] mx-auto bg-slate-500 p-5 text-2xl"
  >
    <span>santosh</span>
    <span>india</span>
    <span>score</span>
    <span class="flex gap-6">
      <span>&#x1F5D1;</span>
      <span>+5</span>
      <span>-5</span>
    </span>
  </div>
    `;
  });

  firstName.value = "";
  lastName.value = "";
  country.value = "";
  score.value = "";

  this.style.boxShadow =
    "0 4px 3px 1px #fcfcfc, 0 6px 8px #d6d7d9, 0 -4px 4px #cecfd1, 0 -6px 4px #fefefe, inset 0 0 5px 3px #999, inset 0 0 30px #aaa";

  setTimeout(() => {
    this.style.boxShadow = "none";
  }, 100);
});
