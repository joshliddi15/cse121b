/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement  = document.getElementById("temples");
var templeList = [];

/* async displayTemples Function */
const displayTemples= (temples) => {
  temples.forEach(temple => {
    // declare variables for each element
    const articleElement = document.createElement("article");
    const h3Element = document.createElement("h3");
    const imgElement = document.createElement("img");

    //assign values to each element using data from fetch request
    h3Element.textContent = temple.templeName;
    with (imgElement) {
      src = temple.imageUrl;
      alt = temple.location;
    };

    // append populated children to temple element
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);
    templesElement.appendChild(articleElement);
  });
}

/* async getTemples Function using fetch()*/
const getTemples = async() => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
  displayTemples(templeList);
}

/* reset Function */
const reset = () => {
  templesElement.innerHTML = '';
};

/* filterTemples Function */
const filterTemples = (temples) => {
  reset();
  const filter = document.getElementById('filtered').value;
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
      break;
    case 'notutah':
      displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => {
        const dedicatedDate = new Date(temple.dedicated.replace(',', ''));
        return dedicatedDate < new Date(1950, 0, 1);
      }));
      break;
    default:
      displayTemples(temples);
      break;
  }
};

getTemples();

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
  filterTemples(templeList);
});