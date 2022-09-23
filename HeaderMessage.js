export default class HeaderMessage {
  constructor() {
    this.messages = [
      "Software Engineer    ",
      "Lifetime Learner    ",
      "Thinker     ",
    ];
    this.text = document.querySelector(".header__message");
  }

  async start() {
    let index = 0;
    while (true) {
      for (let i in this.messages[index]) {
        await new Promise((resolve) =>
          setTimeout(resolve, (2 / this.messages[index].length) * 1000)
        ).then(() => {
          this.text.innerText = this.messages[index].substring(0, i);
        });
      }
      for (let j = this.messages[index].length - 1; j >= 0; j--) {
        await new Promise((resolve) => setTimeout(resolve, 50)).then(() => {
          this.text.innerText = this.messages[index].substring(0, j);
        });
      }
      index = index + 1 === this.messages.length ? 0 : index + 1;
    }
  }
}
