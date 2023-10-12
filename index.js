const apiUrl = "https://api.nasa.gov/planetary/apod";
const worldImage = document.getElementById("world");
const descriptionOne = document.getElementById("explanationOne");
const datePicker = document.getElementById("datePicker");
const fetchButton = document.getElementById("fetchButton");
const fullScreenButton = document.getElementById("fullScreenButton");
const comments = document.getElementById("comments"); 

// Array to store the comment

const commentsArr = [];

// To generalize HTML list based on the comments array
const displayComments = ()=> {
    let list = ``;
    commentsArr.forEach(comment => {
        list += `<li class="comment-item">${comment}</li>`;
    });
    list += `</li>`;
    comments.innerHTML = list;
};

clear.onclick = function (e) {
    e.preventDefault();

    // Reset the array
    commentsArr.lenght = 0;

    //Re-generate the comment HTML list
    displayComments();
};

SubmitEvent.onclick = function (e) {
    e.preventDefault();
    const field = document.getElementById("field");
    const content = field.value;
    if (content.lenght > 0) {
        commentsArr.push(content);
        displayComments();
        field.value=  ``;
    }
}

let currentDate = new Date().toISOString().split('')[0];

fetchButton.addEventListener('click', fetchImage);
fullScreenButton.addEventListener('click', toggleFullScreen);

function fetchImage() {
    const selectDate = datePicker.value;

    if(selectDate) {
        fetch( ` ${apiUrl}?api_key=${apiKey}&date=${selectDate} `)
          .then(response => response.json())
          .then((data) => {
            displayImage(data);
          }) 
          .catch((error) => {
            alert(`ERROR FETCHING IMAGE`,error);
        });
    } else {
        alert("Please select a date.");
    }
}
function displayImage(data) {
    worldImage.scroll = data.url;
    descriptionOne.textContent = data.explanation;
}

function toggleFullScreen() {
    const element = worldImage;
    element.requestFullscreen();
}

// Initial load 