
// //array for all of the questions, choices, and answers
// var questions = [
//     {
//         title: "Do you have a large Apartment?",
//         choices: ["Yes", "No"],
//         answers: ["Yes", "No"]
//     },

//     {
//         title: "Do you have a backyard?",
//         choices: ["Yes", "No"],
//         answers: ["Yes", "No"]
// //     }
// ]





//stores yes answers into console for Q1
function question1 (answer) {
    console.log(answer)
if (parseInt(answer) === 1) {
    var hasDog = true;

} else {
    var hasDog = false;
}

localStorage.setItem("hasdog", hasDog); 
console.log(localStorage.getItem("hasdog"));
$(".question1").hide();
$(".question2").addClass("shown");
};

//stores yes answers into console for question2
function question2 (answer) {
    console.log(answer)
if (parseInt(answer) === 1) {
    var hasCat = true;

} else {
    var hasCat = false;
}

localStorage.setItem("hascat", hasCat); 
console.log(localStorage.getItem("hascat"));
$(".question2").hide();
$(".question3").addClass("shown");
// window.location.href = "location.html";
}


//stores answers into console for Q3
function question3 (answer) {
    console.log(answer)
if (parseInt(answer) === 1) {
    var hasOld = [
        "adult", "senior"
    ]
} else {
    var hasOld = [
        "baby","young"]    
}
localStorage.setItem("hasold", hasOld); 
console.log(localStorage.getItem("hasold"));
$(".question3").hide();
$(".question4").addClass("shown");
}
//baby, young. Adult, senior

//stores answers into console for Q4
function question4 (answer) {
    console.log(answer)
if (parseInt(answer) === 1) {
    var hasSpecialneeds = true;
} else {
    var hasSpecialneeds = false;
}
localStorage.setItem("hasspecialneeds", hasSpecialneeds); 
console.log(localStorage.getItem("hasspecialneeds"));
$(".question4").hide();
window.location.href = "location.html";
}
    
    


// //hides question 2 when answered (step should go to location finder sheet)
// function Noanswer2() {
//     var no2 = document.querySelector(".no2").value;
//     localStorage.setItem("no2", no2); 
//     localStorage.setItem("numbervalue", document.getElementsByClassName("no2").value)
//     console.log(localStorage.getItem("no2"));
//     $(".question2").hide();
//         window.location.href = "file:///C:/Users/Stephan/Pictures/Course/The-Ultimate-Personality-Pet-Finder/location.html";
//     $(".question2").addClass("shown");
// }




