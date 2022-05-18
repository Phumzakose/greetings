var greetElement = document.querySelector("#name");
var message = document.querySelector("#text");
var greetButton = document.querySelector(".bttn1");
var resetButton = document.querySelector(".bttn2");
var checkAlphabets = /^[a-zA-Z]+$/;
var people = [];

if (localStorage["myPeople"]) {
  people = JSON.parse(localStorage.getItem("myPeople"));
}
document.querySelector(".display").innerHTML = people.length;
var namesList = people || [];
var greetingsInstance = GreetingsFactory(people);

greetButton.addEventListener("click", function () {
  var checkedRadioBtn = document.querySelector(
    "input[name='greet-language']:checked"
  );

  message.innerHTML = greetingsInstance.errorMessages(
    greetElement.value.trim().toLowerCase(),
    checkedRadioBtn
  );
  if (checkedRadioBtn && checkAlphabets.test(greetElement.value)) {
    var language = checkedRadioBtn.value;
    var userName = greetElement.value.toLowerCase().trim();
    message.innerHTML = greetingsInstance.greetingMessage(userName, language);
    localStorage.setItem("myPeople", JSON.stringify(people));
    document.querySelector(".display").innerHTML = people.length;
  }

  // if (language === "English") {
  //   message.innerHTML = "Hello," + " " + userName;
  // } else if (language === "IsiXhosa") {
  //   message.innerHTML = "Molo," + " " + userName;
  // } else if (language === "Afrikaans") {
  //   message.innerHTML = "Hallo," + " " + userName;
  // }
  // if (userName === "") {
  //   message.innerHTML = "Please enter your name";
  // }
  // if (!language) {
  //   message.innerHTML = "Please select your language";
  // }

  // counting();
});
// to clear the value in the text box
greetButton.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  greetElement.value = "";
});
// reset button
resetButton.addEventListener("click", function () {
  document.querySelector(".display").innerHTML = people.length;
  localStorage.clear();
  location.reload();
});

function counting() {
  var userName = greetElement.value.toLowerCase();
  // if (userName !== "" && !people.includes(userName) && userName.includes(checkAlphabets)) {
  //   people.push(userName);
  // } else {
  //   message.innerHTML = "you have been greeted";
  // }
  // if (userName === "") {
  //   message.innerHTML = "Please enter your name";
  // }

  localStorage.setItem("myPeople", JSON.stringify(people));
  document.querySelector(".display").innerHTML = people.length;
  // message.innerHTML = greetingsInstance.counter(userName);
  // message.innerHTML = greetingsInstance.errorMessages(userName, language);
}
