const apiUrl = " https://api.nasa.gov/planetary/apod";
const api ="Gpmv5R1qrkXRrhgfoNt5loyMZXOjREcuhs4GqJwk"; 
const worldImage = document.getElementById("world");
const descriptionOne = document.getElementById("explanationOne");
const datePicker = document.getElementById("datePicker");
const fetchButton = document.getElementById("fetchButton");
const fullScreenButton = document.getElementById("fullScreenButton");
const comments = document.getElementById("comments"); 

// Array to store the comment
const commentsArr = [];

// To generalize HTML list based on the comments array
const displayComments = () => {
    let list = '';
    commentsArr.forEach(comment => {
        list += `<li class="comment-item">${comment}</li>`;
    });
    list += '</li>';
    comments.innerHTML = list;
};

clear.onclick = function (e) {
    e.preventDefault();
    // Reset the array
    commentsArr.length = 0;

    // Re-generate the comment HTML list
    displayComments();
};

submit.onclick = function (e) {
    e.preventDefault();
    const field = document.getElementById("field");
    const content = field.value;
    if (content.length > 0) {
        commentsArr.push(content);
        displayComments();
        field.value = '';
    }
};

let currentDate = new Date().toISOString().split('T')[0];

fetchButton.addEventListener('click', fetchImage);
fullScreenButton.addEventListener('click', toggleFullScreen);


function fetchImage() {
    const selectedDate = datePicker.value;

    if (selectedDate) {
        fetch(`${apiUrl}?api_key=${api}&date=${selectedDate}`)
            .then((response) => response.json())
            .then((data) => {
                displayImage(data);
            })
            .catch((error) => {
                alert(`Error fetching NASA image`, error);
            });
    } else {
        alert('Please select a date.');
    }
}

function displayImage(data) {
    worldImage.src = data.url;
    descriptionOne.textContent = data.explanation;
}

function toggleFullScreen() {
    const element = worldImage;
   element.requestFullscreen();
}

// Initial load with today's date
fetchImage();