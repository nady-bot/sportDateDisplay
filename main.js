
let headerDisplay = document.querySelector(".header .hd-display");
let headerForm = document.querySelector(".header .hd-form");

let divForm = document.querySelector(".body .bd-form");
let divDisplay = document.querySelector(".body .bd-display");

let table = document.querySelector(".body .bd-display .table");



let inpTeamOne = document.querySelector(".form .teamOne");
let inpLogoOne = document.querySelector(".form .logoOne");
let inpTeamTwo = document.querySelector(".form .teamTwo");
let inpLogoTwo = document.querySelector(".form .logoTwo");
let inpDate = document.querySelector(".form .date");
let inpTime = document.querySelector(".form .time");
let inpChannel = document.querySelector(".form .channel");
let inpChampionship = document.querySelector(".form .championship");
let inpLink = document.querySelector(".form .link");

let textArea = document.querySelector(" textarea");


let addRow = document.querySelector(".form .btn-input button");

let copyContent = document.querySelector(".btn-output button");



function checkInputNotEmpty() {
  let inputs = document.querySelectorAll(".form input");

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value.trim() == "") {
      return false;
    }
  }
  return true;
}

function emptyInput() {
  let inputs = document.querySelectorAll(".form input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = ""
  }

}

function createRow(obj) {

  let newRow = ` 
    <a href = ${obj.link} target = "_blank" style = " 
    display: block;
    margin-bottom: 2px ;
    background-color: rgba(206, 147, 216);
    padding: 10px;
    text-decoration: none;
    border-radius: 0 0 30px 30px;
    color: black ;
        font-size : 22px ;
    font-weight: bold;
    ">

    <div  style = "
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    "> 
      <div style = " width: 20%; ">
        <img src = ${obj.logoOne} style = "
        width: calc(100vw/6);
        height: calc(100vw/6);
        border-radius: 50%;" > 
        <p> ${obj.teamOne} </p>
      </div>
      <div style = " width: 20%; ">
      <p style = "
      background-color :rgb(106, 27, 154) ; 
      padding : 10px 0 ; 
      color: white  ;
      "> ${obj.time} </p>
        <p > ${obj.date} </p>
      </div>
      <div style = " width: 20%; ">
      <img src = ${obj.logoTwo}  style = "
      width: calc(100vw/6);
      height: calc(100vw/6);
      border-radius: 50%;" > 
      <p> ${obj.teamTwo} </p>
      </div>
    </div>
    <div  style = "
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    ">
      <p style = "
      background-color: rgb(106, 27, 154) ;
      border-radius:  0 0 20px 20px ;
      padding: 10px;
      color: white  ;
      "> ${obj.channel} </p>
      <p style = "
      background-color: rgb(106, 27, 154) ;
      border-radius:  0 0 20px 20px ;
      padding: 10px;
      color: white  ;
      "> ${obj.championship}  </p>
    </div>

  </a>
    `
  table.innerHTML = table.innerHTML + newRow;

}

headerDisplay.addEventListener("click", () => {

  divDisplay.style.display = "block";
  divForm.style.display = "none";

});

headerForm.addEventListener("click", () => {

  divDisplay.style.display = "none";
  divForm.style.display = "block";

});

addRow.addEventListener("click", () => {

  if (checkInputNotEmpty()) {

    let obj = {
      teamOne: inpTeamOne.value.trim(),
      logoOne: inpLogoOne.value.trim(),
      teamTwo: inpTeamTwo.value.trim(),
      logoTwo: inpLogoTwo.value.trim(),
      date: inpDate.value.trim(),
      time: inpTime.value.trim(),
      channel: inpChannel.value.trim(),
      championship: inpChampionship.value.trim(),
      link: inpLink.value.trim(),
    }
    createRow(obj);
    emptyInput();
    textArea.value = table.innerHTML;
  }

});

copyContent.addEventListener("click", () => {
  textArea.select();
  document.execCommand("copy");
  let tmp = document.createElement("div");
  tmp.className = "div-copy";
  document.body.append(tmp);
  tmp.innerHTML = "copied";
  setTimeout(() => {
    tmp.remove()
  }, 300)


})
