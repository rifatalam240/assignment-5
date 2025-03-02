let minusbtn = document.getElementById("decrasebtn");
let activitydiv = document.getElementById("activitydiv");
let sixbtn = document.querySelectorAll(".sixbtn");
let title = document.querySelectorAll(".title");
console.log(title);
let activity = [];

function printActivity() {
  let htmldata = "";
  for (let j = 0; j < activity.length; j++) {
    htmldata += `<div class="bg-blue-100 rounded-2xl p-4 text-2xl">${activity[j]}</div>`;
  }
  activitydiv.innerHTML = htmldata;
}
for (let i = 0; i < sixbtn.length; i++) {
  sixbtn[i].addEventListener("click", function () {
    sixbtn[i].classList.add("btn-disabled");
    let msg =
      "You have completed the task " +
      title[i].innerHTML +
      " at " +
      new Date().toLocaleTimeString();
    activity.push(msg);
    printActivity();

    let converted = parseInt(minusbtn.innerText);
    if (converted > 0) {
      let subtract = converted - 1;
      minusbtn.innerText = subtract;
    }
    let plusbtn = document.getElementById("increasebtn");
    let converted1 = parseInt(plusbtn.innerText);
    if (converted1 > 0) {
      let addition = converted1 + 1;
      plusbtn.innerText = addition;
    }
    alert("Board updated Successfully");
  });
}
document.getElementById("lastbtn").addEventListener("click", function () {
  alert("Congrates!!! you have completed all the current task");
});
printActivity();
let clearbtn = document.getElementById("clear-btn");
clearbtn.addEventListener("click", function () {
  activity = [];
  printActivity();
});
document.getElementById("qnapart").addEventListener("click", function () {
  window.location.href = "./qna.html";
});

function randomcolor() {
  let hexadecimal = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + hexadecimal[Math.floor(Math.random() * 16)];
  }
  return color + "44";
}
function hexacolor() {
  document.body.style.backgroundColor = randomcolor();
}

const day = document.getElementById("day");
const datetime = document.getElementById("datetime");

const date = new Date().toDateString().split(" ");
day.innerHTML = date[0];
const datetimestring = date.slice(1);
datetime.innerHTML = datetimestring.join(" ");
