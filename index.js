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
