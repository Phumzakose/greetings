describe("The greet Function", function () {
  describe("Greet the userame", function () {
    it("should be able to greet the user with isiXhosa", function () {
      let greet = GreetingsFactory();
      greet.greetingMessage();
      assert.equal("Molo, Lakhe", greet.greetingMessage("Lakhe", "IsiXhosa"));
    });
    it("should be able to greet the user with English", function () {
      let greet = GreetingsFactory();
      greet.greetingMessage();
      assert.equal("Hello, Phumza", greet.greetingMessage("Phumza", "English"));
    });
    it("should be able to greet the user with Afrikaans", function () {
      let greet = GreetingsFactory();
      greet.greetingMessage();
      assert.equal(
        "Hallo, Phumza",
        greet.greetingMessage("Phumza", "Afrikaans")
      );
    });

    describe("returning username greeted once", function () {
      it("should check if username was greeted fo ", function () {
        let greet = GreetingsFactory();
        greet.storeName("Phumza");
        greet.storeName("Lakhe");
        greet.storeName("Lakhe");
        greet.storeName("Lakhe");
        assert.deepEqual(["Phumza", "Lakhe"], greet.storedNames());
      });
      it("should return all username greeted once", function () {
        let greet = GreetingsFactory();
        greet.storeName("Phumza");
        greet.storeName("Pearl");
        greet.storeName("Zethu");
        greet.storeName("Lakhe");

        assert.deepEqual(
          ["Phumza", "Pearl", "Zethu", "Lakhe"],
          greet.storedNames()
        );
      });
      describe("returning the number of people greeted", function () {
        it("should return the number of people greeted", function () {
          let greet = GreetingsFactory();
          greet.greetingMessage("Phumza");
          greet.greetingMessage("Phumza");
          greet.greetingMessage("Phumza");
          assert.equal(1, greet.count());
        });
        it("should return the number of people greeted", function () {
          let greet = GreetingsFactory();
          greet.greetingMessage("Phumza");
          greet.greetingMessage("Thembi");
          greet.greetingMessage("Zuko");
          assert.equal(3, greet.count());
        });
      });

      describe("should return error messages", function () {
        it("it should return error messages if there is no language selected and name entered", function () {
          let greet = GreetingsFactory();
          greet.greetingMessage("", null);
          assert.equal(
            "Please select a language and enter your name",
            greet.errorMessages("", null)
          );
        });
        it("it should return error message if there is no language selected", function () {
          let greet = GreetingsFactory();
          greet.greetingMessage("Phumza", null);
          assert.equal(
            "Please select your language",
            greet.errorMessages("Phumza", null)
          );
          greet.greetingMessage("Themba", "");
          assert.equal(
            "Please select your language",
            greet.errorMessages("Themba", "")
          );
        });
        it("should return an error message if the name includes numbers", function () {
          let greet = GreetingsFactory();
          greet.errorMessages("123Phumza", "IsiXhosa");
          assert.equal(
            "Please enter a valid name",
            greet.errorMessages("123Phumza", "IsiXhosa")
          );
          assert.equal(
            "Please enter a valid name",
            greet.errorMessages("123", "Afrikaans")
          );
        });
      });
    });
  });
});
