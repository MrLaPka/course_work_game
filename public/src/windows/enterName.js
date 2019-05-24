import objectOnThePage from "../page_elements/objectOnThePage";
import Input from "../page_elements/Input";
import toRun from "./toRun";
import getInfo from "../getInfo";

export default class enterName {
  run() {
    if (!getInfo.users) {
      const windowName = new objectOnThePage("form");
      windowName.create(
        "32.000em",
        "25.000em",
        undefined,
        "windowName",
        "auto"
      );
      windowName.setDistance("0", "0", "0", "0");
      windowName.positioning("1", "block", "absolute", "center");
      windowName.pointBack(
        undefined,
        undefined,
        undefined,
        "black",
        ".5",
        "white"
      );
      let enterH2 = new objectOnThePage("label");
      enterH2.create(
        undefined,
        undefined,
        undefined,
        "enterH2",
        "auto",
        "Enter your name: "
      );
      enterH2.positioning(undefined, "block");
      enterH2.fonts("1.5em", "sans-serif");
      this.nameArea = new Input();
      this.nameArea.create(
        "text",
        true,
        undefined,
        undefined,
        undefined,
        "nameArea",
        "auto"
      );
      this.nameArea.positioning(undefined, "block");
      let passwordH2 = new objectOnThePage("label");
      passwordH2.create(
        undefined,
        undefined,
        undefined,
        "passwordH2",
        "auto",
        "Enter your password: "
      );
      passwordH2.positioning(undefined, "block");
      passwordH2.fonts("1.5em", "sans-serif");
      this.passwordArea = new Input();
      this.passwordArea.create(
        "password",
        true,
        undefined,
        undefined,
        undefined,
        "passwordArea",
        "auto"
      );
      this.passwordArea.positioning(undefined, "block");
      let errorEnter = new objectOnThePage("label");
      errorEnter.create(
        undefined,
        undefined,
        undefined,
        "errorEnter",
        "auto",
        "Incorrect name!"
      );
      errorEnter.positioning(undefined, "block");
      errorEnter.fonts("1.2em", "sans-serif");
      errorEnter.pointBack(
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        "red",
        "hidden"
      );
      let registerButton = new Input();
      registerButton.create(
        "submit",
        undefined,
        undefined,
        undefined,
        undefined,
        "registerButton",
        "0.3em"
      );
      registerButton.value("SIGN IN");
      registerButton.positioning(undefined, "inline-block");
      registerButton.fonts("1.5em");
      let enterButton = new Input();
      enterButton.create(
        "submit",
        undefined,
        undefined,
        undefined,
        undefined,
        "enterButton",
        "0.3em"
      );
      enterButton.value("GET IN");
      enterButton.positioning(undefined, "inline-block");
      enterButton.fonts("1.5em");
      let mailH2 = new objectOnThePage("label");
      mailH2.create(
        undefined,
        undefined,
        undefined,
        "enterH2",
        "auto",
        "Enter your mail(not obligatory) in format xxx@mail.ru: "
      );
      mailH2.positioning(undefined, "block");
      mailH2.fonts("1.5em", "sans-serif");
      this.mailArea = new Input();
      this.mailArea.create(
        "email",
        undefined,
        undefined,
        undefined,
        undefined,
        "mailArea",
        "auto"
      );
      this.mailArea.positioning(undefined, "block");
      this.mailArea.fonts("1.5em");

      windowName.appendChild(enterH2);
      windowName.appendChild(this.nameArea);
      windowName.appendChild(passwordH2);
      windowName.appendChild(this.passwordArea);
      windowName.appendChild(errorEnter);
      windowName.appendChild(mailH2);
      windowName.appendChild(this.mailArea);
      windowName.appendChild(registerButton);
      windowName.appendChild(enterButton);
      document.body.appendChild(windowName.div);

      $("#nameArea").keyup(function(event) {
        if (event.keyCode == 13) {
          $("#enterButton").click();
        }
      });

      $("#passwordArea").keyup(function(event) {
        if (event.keyCode == 13) {
          $("#enterButton").click();
        }
      });

      $("#mailArea").keyup(function(event) {
        if (event.keyCode == 13) {
          $("#enterButton").click();
        }
      });

      this.nameArea.addEventListener("focus", () => {
        this.nameArea.borders(undefined, "blue");
        errorEnter.pointBack(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          "hidden"
        );
      });

      this.passwordArea.addEventListener("focus", () => {
        this.passwordArea.borders(undefined, "blue");
        errorEnter.pointBack(
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          undefined,
          "hidden"
        );
      });

      this.mailArea.addEventListener("click", () => {
        this.mailArea.borders(undefined, "blue");
      });

      registerButton.addEventListener("click", event => {
        event.preventDefault();
        if (!this.nameArea.value().match(/\w/)) {
          alert("Please enter you nickname to continue!");
        } else if (
          !this.passwordArea.value().match(/\w/) ||
          this.passwordArea.value().length < 8
        ) {
          alert(
            "The password cannot contain less than 8 Latin characters(lowercase or uppercase) or numbers !"
          );
        } else {
          this.register();
        }
      });

      enterButton.addEventListener("click", event => {
        event.preventDefault();
        if (!this.nameArea.value().match(/\w/)) {
          alert("Please enter you nickname to continue!");
        } else if (
          !this.passwordArea.value().match(/\w/) ||
          this.passwordArea.value().length < 8
        ) {
          alert(
            "The password cannot contain less than 8 Latin characters(lowercase or uppercase) or numbers !"
          );
        } else {
          this.enter();
        }
      });
    } else {
      toRun.run();
    }
  }

  escape(string) {
    const htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };

    return string.replace(/[&<>"']/g, function(match) {
      return htmlEscapes[match];
    });
  }

  register() {
    this.nameArea.create(undefined, false);
    this.passwordArea.create(undefined, false);
    const playerName = this.escape(this.nameArea.value());
    const playerPass = this.escape(this.passwordArea.value());
    const mail = this.escape(this.mailArea.value());
    const recordSQL = JSON.stringify({
      name: playerName,
      password: playerPass,
      score: 0,
      mail: mail
    });
    let request = new XMLHttpRequest();
    request.open("POST", "/check", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      if (JSON.parse(request.response).res === "undefined") {
        let request_rc = new XMLHttpRequest();
        request_rc.open("POST", "/record", true);
        request_rc.setRequestHeader("Content-Type", "application/json");
        if (mail.indexOf("@mail.ru") !== -1) this.sendToMail(recordSQL);
        request_rc.send(recordSQL);
        getInfo.getId(recordSQL);
      } else {
        document.getElementById("errorEnter").style.visibility = "visible";
        document.getElementById("enterH2").style.borderColor = "red";
        document.getElementById("errorEnter").innerText =
          "This name already exists!";
      }
    });
    request.send(recordSQL);
  }

  enter() {
    this.nameArea.create(undefined, false);
    this.passwordArea.create(undefined, false);
    const playerName = this.escape(this.nameArea.value());
    const playerPass = this.escape(this.passwordArea.value());
    const checkSQL = JSON.stringify({
      name: playerName,
      password: playerPass
    });
    getInfo.getId(checkSQL);
  }

  sendToMail(recordSQL) {
    let request = new XMLHttpRequest();
    request.open("POST", "/sendToMail", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(recordSQL);
  }
}
