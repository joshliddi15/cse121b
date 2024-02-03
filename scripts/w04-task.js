/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: 'Josh Liddiard',
  photo: 'images/josh.JPG',
  favoriteFoods : ['Lasagna', 'Burgers', 'Tom Kha Gai', 'Ahi Poke', 'Guacamole', 'Tacos', 'Salads', 'Corn', 'Steak'],
  hobbies: ['hiking', 'biking', 'running', 'juggling', '3d printing', 'woodworking'],
  placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
	{
		place: "Provo, Utah",
		length: "6 Years"
	},
  {
		place: "Sprigville, Utah",
		length: "12 Years"
	},
  {
		place: "Ephraim, Utah",
		length: "7 Years"
	}
);

/* DOM Manipulation - Output */

/* Name */
const Name = document.getElementById("name");
Name.textContent= myProfile.name;

/* Photo with attributes */
const Photo = document.getElementById("photo");
Photo.src = myProfile.photo;
Photo.alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
	document.getElementById("favorite-foods").appendChild(document.createElement('li')).textContent = food;
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
	document.getElementById("hobbies").appendChild(document.createElement('li')).textContent = hobby;
});

/* Places Lived DataList */
myProfile.placesLived.forEach(placeLived => {
  with (placeLived) {
      document.getElementById("places-lived").appendChild(document.createElement('dt')).textContent = place;
      document.getElementById("places-lived").appendChild(document.createElement('dd')).textContent = length;
  };
});