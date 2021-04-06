
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
}

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
window.location.href = "file:///C:/Users/Stephan/Pictures/Course/The-Ultimate-Personality-Pet-Finder/location.html";

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




