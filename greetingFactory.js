function GreetingsFactory(people) {
  var namesList = people || [];
  var counter = 0;

  function storeName(userName) {
    if (!namesList.includes(userName)) {
      namesList.push(userName);
      return true;
    } else {
      return false;
    }
  }

  function greetingMessage(userName, language) {
    let check = storeName(userName);
    if (check) {
      console.log("inside");
      if (language === "English") {
        return "Hello," + " " + userName;
      } else if (language === "IsiXhosa") {
        return "Molo," + " " + userName;
      } else if (language === "Afrikaans") {
        return "Hallo," + " " + userName;
      }
    } else {
      return "you have been greeted";
    }
  }

  function errorMessages(userName, language) {
    if (userName === "" && !language) {
      return "Please select language and enter your name";
    }
    if (userName === "") {
      return "Please enter your name";
    } else if (!language) {
      return "Please select your language";
    }
  }
  function resetButton() {
    return people.length;
  }
  function clearName() {
    preventDefault();
    greetElement.value = "";
  }
  return {
    storeName,
    greetingMessage,
    errorMessages,
    resetButton,
  };
}
