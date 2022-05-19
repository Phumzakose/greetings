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
var greetingsInstance = GreetingsFactory(people);

greetButton.addEventListener("click", function () {
  var checkedRadioBtn = document.querySelector(
    "input[name='greet-language']:checked"
  );
  message.innerHTML = greetingsInstance.errorMessages(
    greetElement.value.trim().toLowerCase(),
    checkedRadioBtn
  );
  message.style.color = "red";
  if (checkedRadioBtn && checkAlphabets.test(greetElement.value)) {
    var language = checkedRadioBtn.value;
    var userName = greetElement.value.toLowerCase();
    message.innerHTML = greetingsInstance.greetingMessage(userName, language);
    message.style.color = "black";
    localStorage.setItem(
      "myPeople",
      JSON.stringify(greetingsInstance.storedNames())
    );
    document.querySelector(".display").innerHTML = people.length;
  }
  setTimeout(() => {
    message.innerHTML = "Your greet message";
    message.style.color = "black";
  }, "3000");
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
