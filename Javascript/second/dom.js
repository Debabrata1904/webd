console.log("Hello World");

// methods for bring tag as veriable from html to javascript
// 1. getElementById
// 2. getElementsByClassName
// 3. getElementsByTagName
// 4. querySelector
// 5. querySelectorAll

// getElementById
const title = document.getElementById("title");
title.innerText = "Dom Manipulation in Javascript";
title.style.color = "red";
console.log(title);
// id is unique -> getElementById gets Unique tag associated to the id

// getElementsByClassName
const Biography = document.getElementsByClassName("bio");
Biography[0].innerText = "I am Debabrata Bhowmik from West Bengal, India. I am pursuing my degree at IIT Patna. currently, I am in my 2nd year. I am interested in web development and data science. Today I am learning dom manipulation. this is the updated biography.";
Biography[0].style.color = "blue";
console.log(Biography);
// classname is not unique -> getElementByClassName return an array || return HTML Collection which is nothing but a array of html element.

// getElementsByTagName
const paragraphs = document.getElementsByTagName("p");
paragraphs[1].innerText = "This is second paragraph.";
paragraphs[1].style.color = "green";
console.log(paragraphs);

// querySelector
const new_heading = document.querySelector("#id1");
new_heading.innerText = "This is the new heading.";
new_heading.style.color = "#074444";
console.log(new_heading);
// querySelector return the first element which is found in the document

// experiment
const body = document.querySelector("body");
body.animate([
    {backgroundColor: "#ddd9a5"},
        {backgroundColor: "#a5d9d9"}, 
        {backgroundColor: "#ddd9a5"}
],{
    duration: 2000,
    iterations: Infinity
});
//body.style.backgroundColor = "#ddd9a5";
console.log(body);