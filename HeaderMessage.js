export default class HeaderMessage {
  start() {
    console.log("started");
    const messages = [
      "Software Engineer    ",
      "Lifetime Learner    ",
      "Thinker     ",
    ];

    let hello = document.querySelector(".header__message");
    hello.innerText = "";
    const writeMessage = async function (messages) {
      let index = 0;
      while (true) {
        for (let i in messages[index]) {
          await new Promise((resolve) =>
            setTimeout(resolve, (2 / messages[index].length) * 1000)
          ).then(() => {
            console.log("jm");
            hello.innerText = messages[index].substring(0, i);
          });
        }
        for (let j = messages[index].length - 1; j >= 0; j--) {
          await new Promise((resolve) => setTimeout(resolve, 50)).then(() => {
            hello.innerText = messages[index].substring(0, j);
          });
        }
        index = index + 1 === messages.length ? 0 : index + 1;
      }
    };

    writeMessage(messages);
  }
}
