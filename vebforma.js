class Vebforma {
  name = false;
  surName = false;
  phone = false;
  eMail = false;
  displayEroor = false;
  getName(e, i) {
    return document.getElementsByName(e)[i];
  }

  getSelector(e) {
    return document.querySelector(e);
  }

  getSelectorAll(e) {
    return document.querySelectorAll(e);
  }

  sendingRequest() {
    console.log(this.name);
    this.getName("web_form_submit", 0).onclick = () => {
      if (this.name && this.surName && this.phone && this.eMail) {
        console.log("Проверка");

        alert("Отправка");
      }
    };
  }

  validText(el, i) {
    el.addEventListener("change", (e) => {
      function controlLength(el, t) {
        if (el.target.value.length === 0) {
          el.target.style.borderColor = "red";
          t.name = false;
          t.phone = false;
          t.surName = false;
        } else {
          t.name = true;
          t.phone = true;
          t.surName = true;
        }
      }

      function controlEmail(el, t) {
        if (el.target.value.indexOf("@") === -1) {
          el.target.style.borderColor = "red";
          t.eMail = false;
        } else {
          t.eMail = true;
        }
      }

      if (e.target.value.length > 0) {
        e.target.style.borderColor = "green";
        if (
          e.target.name === "form_text_1" ||
          e.target.name === "form_text_2"
        ) {
          e.target.value = e.target.value.replace(/[0-9]/g, "");
          this.name = true;
          this.surName = true;
          controlLength(e, this);
        } else if (e.target.name === "form_text_3") {
          e.target.value = e.target.value.replace(/[a-z | а-я]/g, "");
          this.phone = true;
          controlLength(e, this);
        } else if (e.target.name === "form_text_4") {
          this.eMail = true;
          controlLength(e, this);
          controlEmail(e, this);
        }
      } else {
        e.target.style.borderColor = "red";
        this.name = false;
      }
      this.sendingRequest();
    });
  }

  update() {
    this.getName("web_form_submit", 0).setAttribute("type", "button");
    this.getName("web_form_submit", 0).setAttribute("value", "Отправить");
    let inputs = Array.from(this.getSelectorAll(".inputtext"));
    inputs.map((input, i) => this.validText(input, i));
  }

  display() {
    this.update();
  }
}

const VEBFORMA = new Vebforma();
VEBFORMA.display();
