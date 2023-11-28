// src/index.js

document.addEventListener("DOMContentLoaded", function () {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
  
    // Challenge 1: Fetch and display dog images
    const dogImageContainer = document.getElementById("dog-image-container");
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const images = data.message;
  
        images.forEach(imageUrl => {
          const imgElement = document.createElement("img");
          imgElement.src = imageUrl;
          imgElement.alt = "Dog Image";
          dogImageContainer.appendChild(imgElement);
        });
      })
      .catch(error => {
        console.error("Error fetching dog images:", error);
      });
  
    // Challenge 2: Fetch and display dog breeds
    const dogBreedsList = document.getElementById("dog-breeds");
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        const breeds = Object.keys(data.message);
  
        breeds.forEach(breed => {
          const liElement = document.createElement("li");
          liElement.textContent = breed;
          dogBreedsList.appendChild(liElement);
        });
      })
      .catch(error => {
        console.error("Error fetching dog breeds:", error);
      });
  
    // Challenge 3: Change font color on click
    const breedListItems = document.querySelectorAll("#dog-breeds li");
  
    breedListItems.forEach(item => {
      item.addEventListener("click", function () {
        this.style.color = "red"; // Change the color to your preference
      });
    });
  
    // Challenge 4: Filter breeds by starting letter
    const filterDropdown = document.getElementById("breed-dropdown");
  
    filterDropdown.addEventListener("change", function () {
      const selectedLetter = this.value.toLowerCase();
  
      breedListItems.forEach(item => {
        const breedName = item.textContent.toLowerCase();
  
        if (breedName.startsWith(selectedLetter)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  