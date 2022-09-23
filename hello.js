let messageHeader = document.createElement("h1");
messageHeader.classList.add("hello");
document.querySelector(".page").append(messageHeader);
const messages = ["hello"];

let hello = document.querySelector(".hello");
hello.innerText = "";
const writeMessage = async function (messages) {
  while (true) {
    let index = 0;
    for (let i in messages[index]) {
      await new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
        console.log("jm");
        hello.innerText += messages[index][i];
      });
    }
    for (let j = messages[index].length - 1; j >= 0; j--) {
      await new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
        hello.innerText = messages[index].substring(0, j);
      });
    }
    index = index + 1 === messages.length ? 0 : index + 1;
  }
};

writeMessage(messages);
