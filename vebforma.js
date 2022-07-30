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

  validText(el, i) {
    el.addEventListener("change", (e) => {
      if (e.target.value.length > 0) {
        e.target.style.borderColor = "green";
        if (
          e.target.name === "form_text_1" ||
          e.target.name === "form_text_2"
        ) {
          e.target.value = e.target.value.replace(/[0-9]/g, "");
          console.log(e.target.value.length);
        } else if (e.target.name === "form_text_3") {
          e.target.value = e.target.value.replace(/[a-z | а-я]/g, "");
        }
      } else if (e.target.value.length === 0) {
        e.target.style.borderColor = "red";
      }
      if (e.target.value.length === 0) {
        //    e.target.style.borderColor = "red";
      }
    });
  }

  update() {
    let inputs = Array.from(this.getSelectorAll(".inputtext"));
    inputs.map((input, i) => this.validText(input, i));
  }

  display() {
    this.update();
  }
}

const VEBFORMA = new Vebforma();
VEBFORMA.display();
