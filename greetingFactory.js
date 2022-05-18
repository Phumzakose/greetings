function GreetingsFactory(people) {
  var namesList = people || [];
  var checkAlphabets = /^[a-zA-Z]+$/;

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
      if (language === "English") {
        return "Hello," + " " + userName;
      } else if (language === "IsiXhosa") {
        return "Molo," + " " + userName;
      } else if (language === "Afrikaans") {
        return "Hallo," + " " + userName;
      }
    } else {
      return userName + " you have been greeted";
    }
  }

  function errorMessages(userName, language) {
    if (userName === "" && !language) {
      return "Please select a language and enter your name";
    }
    if (userName === "") {
      return "Please enter your name";
    } else if (!language) {
      return "Please select your language";
    } else if (userName !== checkAlphabets) {
      return "Please enter a valid name";
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
