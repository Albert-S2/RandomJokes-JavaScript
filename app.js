const url = "https://icanhazdadjoke.com/"

// Main function to retrieve and display a new joke
async function fetchJoke() {
	// Declare a variable to store the HTTP response
	const response = await fetch(url, {
		headers: {
			Accept: "application/json",
		},
	});

	// If the request fails log out an error
	if (!response.ok) {
		console.error(response.status);
		console.error(response.text());
		return;
	}

	// Parse the response body or data as JSON
	const data = await response.json();
  // console.log(data);

	// Log out the joke data
	// console.log(data.joke);

  let jokeText = data.joke;

  // console.log(jokeText);

  function displayJoke() {
    const jokeElement = document.getElementById("joke");
    jokeElement.textContent = jokeText;
  }

  displayJoke();

}

// Waits for the DOM to be fully loaded and then displays an initial joke.
document.addEventListener("DOMContentLoaded", fetchJoke);

// Retrieves the "new joke" button
const newJokeButton = document.getElementById("newJokeBtn");

// Sets up a click event listener to fetch and display a new joke upon clicking the newJokeButton.
newJokeButton.addEventListener("click", fetchJoke);

let starIcon = document.querySelector(".star-icon");
let slider = document.getElementById("starSlider");

// Store an array of 5 messages
const ratingMessages = [
  "You need a better sense of humour!",
  "Come on, liven up!",
  "I'm sure we'll make you laugh next time!",
  "You liked that one, did you?",
  "I know, I'm just so funny!!!",
]

let submitButton = document.getElementById("submitBtn");
let ratingText = document.getElementById("ratingResponse")
let sliderValue = 0;

function multiplier (e) {
  sliderValue = parseInt(e.target.value);
  let starIconText = "★".repeat(sliderValue);
  starIcon.textContent = starIconText;
}

slider.addEventListener("input", multiplier);

submitButton.addEventListener("click", function() {

  if (sliderValue === 1) {
    ratingText.textContent = ratingMessages[0];
  } else if (sliderValue === 2) {
    ratingText.textContent = ratingMessages[1];
  } else if (sliderValue === 3) {
    ratingText.textContent = ratingMessages[2];
  } else if (sliderValue === 4) {
    ratingText.textContent = ratingMessages[3];
  } else if (sliderValue === 5) {
    ratingText.textContent = ratingMessages[4];
  } else {
    ratingText.textContent = ratingMessages[0];
  }

});

// submitButton.addEventListener("click", buttonMessage);

// Event listener - Display the relevant message in the DOM under the submit button

// Locate Submit button and store in a variable
// let submitButton = document.getElementById("submitBtn");

// Locate current slider value and store in a variable
// let sliderValue = slider.value;

// Store an array of 5 messages

// If the slider value is 5, return the corresponsing indexed message

// If the slider value is 4, return the corresponsing indexed message

// If the slider value is 3, return the corresponsing indexed message

// If the slider value is 2, return the corresponsing indexed message

// If the slider value is 1, return the corresponsing indexed message

// Average the scores for each joke