class Vebforma {
  name = "";
  surName = "";
  phone = 0;
  eMail = "";

  getSelector(e) {
    return document.querySelector(e);
  }

  getSelectorAll(e) {
    return document.querySelectorAll(e);
  }

  validText(e) {
    let element = this.getSelector(e);
    element.addEventListener("change", () => {
      //  alert(e);
    });
  }

  update() {
    this.validText("form-table");
  }

  display() {
    this.update();
  }
}

const VEBFORMA = new Vebforma();
VEBFORMA.display();
