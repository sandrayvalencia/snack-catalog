/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
// Snacks data images
const CHIP_URL = "https://thumb.ac-illust.com/58/58bc88b421cb766240d7ae6193a8e165_t.jpeg";
const COOKIE_URL = "https://img.freepik.com/free-photo/delicious-cookies-arrangement_23-2150707201.jpg?semt=ais_hybrid&w=740&q=80";
const CHOCOLATE_URL = "https://t4.ftcdn.net/jpg/02/04/31/93/360_F_204319311_NwspQuun2GWdO5KnA8Grgg5CpPczQXPd.jpg";
const CANDY_URL ="https://cdn.pixabay.com/photo/2012/06/27/15/02/candy-50838_1280.jpg";
const ICECREAM_URL ="https://cdn.pixabay.com/photo/2016/03/22/00/59/ice-1271986_640.jpg";
const POPCORN_URL ="https://cdn.pixabay.com/photo/2015/12/09/17/12/new-years-eve-1085072_1280.jpg"; 

// This is an array of snacks objects
let snacks = [
  {name:"Chips", type: "salty",rating: "5/5", store: "wholesfoods/sprouds",image:CHIP_URL},
  {name:"Cookie", type: "sweet",rating: "5/5", store: "wholesfoods/sprouds",image:COOKIE_URL},
  {name:"Chocolate", type: "semi-sweet",rating: "5/5", store: "wholesfoods/sprouds",image: CHOCOLATE_URL},
  {name:"Candy", type: "sugar cane",rating: "5/5", store: "wholesfoods/sprouds",image: CANDY_URL},
  {name:"Icecream", type: "sweet",rating: "5/5", store: "wholesfoods/sprouds", image: ICECREAM_URL},
  {name:"Popcorn", type: "salty",rating: "5/5", store: "wholesfoods/sprouds", image: POPCORN_URL},
];


// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < snacks.length; i++) {
    let snack = snacks[i];


    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, snack); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

//This function edits each card
function editCardContent(card, snack) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = snack.name;

  const cardImage = card.querySelector("img");
  cardImage.src = snack.image;
  cardImage.alt = snack.name + " snack image"; 

  const cardList=card.querySelector("ul");
  cardList.innerHTML= 
  "<li> type: "+ snack.type+"</li>"+"<li> Rating: "+ snack.rating +"</li> "+"<li> store:"+ snack.store+"</li>";
}
//show cards when page loads


  //button message
function quoteAlert(){
  alert("Snacks make everything better!");
}
 
//removes the last card
function removeLastCard() {
  snacks.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

showCards();
