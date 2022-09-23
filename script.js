const formInfo = document.querySelector(".form__info");
const contactForm = document.querySelector(".form--contact");
const experiences = document.getElementsByClassName("experience__block");

let hasJob = false;
if (hasJob) {
  showMessage("Thanks for visiting, I'm currently employed.");
} else {
  showMessage("Please look around, I am currently looking for a position");
}

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
  showMessage(
    "Since it is the weekend, please be patient with my returning your email."
  );
}

contactForm.addEventListener("submit", sendMessage);

function showMessage(message) {
  clearMessage();
  const p = document.createElement("p");
  p.innerText = message;
  formInfo.append(p);
}

function clearMessage() {
  formInfo.innerText = "";
}

function sendMessage(event) {
  event.preventDefault();
  showMessage("Please wait, sending your email");
}

for (let experience of experiences) {
  console.log(experience);
  experience.addEventListener("mouseenter", function (event) {});
}
