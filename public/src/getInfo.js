import toRun from "./windows/toRun";

export default class getInfo {
  static getId(checkSQL) {
    let request = new XMLHttpRequest();
    request.open("POST", "/check", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.addEventListener("load", () => {
      if (JSON.parse(request.response).res === "undefined") {
        document.getElementById("errorEnter").style.visibility = "visible";
        document.getElementById("enterH2").style.borderColor = "red";
        document.getElementById("errorEnter").innerText = "Incorrect name!";
      } else if (JSON.parse(request.response).id !== 0) {
        this.users = JSON.parse(request.response).id;

        document.getElementById("windowName").style.display = "none";

        toRun.run();
      }
    });

    request.send(checkSQL);
  }
}
