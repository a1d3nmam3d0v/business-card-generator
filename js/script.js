// Get the input field
const nameInput = document.getElementById("name");
// Get the card element where the name appears
const cardName = document.querySelector(".card-name");

nameInput.addEventListener("input", function () {
	cardName.textContent = nameInput.value;
});

const jobtitleInput = document.getElementById("jobtitle");
const cardJobtitle = document.querySelector(".card-jobtitle");

jobtitleInput.addEventListener("input", function () {
	cardJobtitle.textContent = jobtitleInput.value;
});

const emailInput = document.getElementById("email");
const cardEmail = document.querySelector(".card-email");

emailInput.addEventListener("input", function () {
	cardEmail.textContent = emailInput.value;
});

const phoneInput = document.getElementById("phone");
const cardPhone = document.querySelector(".card-phone");

phoneInput.addEventListener("input", function () {
	cardPhone.textContent = phoneInput.value;
});

const websiteInput = document.getElementById("website");
const cardWebsite = document.querySelector(".card-website");

websiteInput.addEventListener("input", function () {
	cardWebsite.textContent = websiteInput.value;
});	
