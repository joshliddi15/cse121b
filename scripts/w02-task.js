/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Josh Liddiard';
let currentYear = 2024;
let profilePicture = 'images/josh.JPG';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img[alt="Placeholder Image"]');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Lasagna', 'Burgers', 'Tom Kha Gai', 'Ahi Poke', 'Guacamole', 'Tacos', 'Salads', 'Corn', 'Steak'];
foodElement.innerHTML = favoriteFoods.join(', ');
const newFood = 'Cookies';
favoriteFoods.push(newFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
