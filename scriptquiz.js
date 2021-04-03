
//array for all of the questions, choices, and answers
var questions = [
    {
        title: "Do you have a large Apartment?",
        choices: ["Yes", "No"],
        answers: ["Yes", "No"]
    },

    {
        title: "Do you have a backyard?",
        choices: ["Yes", "No"],
        answers: ["Yes", "No"]
    }
]

var currentQuestion = -1;
var question1Btnyes = $(".yes")
var question1 = $(".question1");
var question2 = $(".question2");




//stores yes answers into console for Q1
function Yesanswer1 () {
    var yes = document.querySelector(".yes").value;
    localStorage.setItem("yes1", yes); 
    localStorage.setItem("numbervalue", document.getElementsByClassName("yes").value)
    console.log(localStorage.getItem("yes1"));
    $(".question1").hide();
    $(".question2").addClass("shown");
}

//stores no answers into console for Q1
function Noanswer1 () {
    var no = document.querySelector(".no").value;
    localStorage.setItem("no", no); 
    localStorage.setItem("numbervalue", document.getElementsByClassName("no").value)
    console.log(localStorage.getItem("no"));
    $(".question1").hide();
    $(".question2").addClass("shown");
}

//stores yes answers into console for question2
function Yesanswer2() {
    var yes2 = document.querySelector(".yes2").value;
    localStorage.setItem(".yes2", yes2); 
    localStorage.setItem("numbervalue", document.getElementsByClassName("yes2").value)
    console.log(localStorage.getItem(".yes2"));
    $(".question2").hide();
    window.location.href = "file:///C:/Users/Stephan/Pictures/Course/The-Ultimate-Personality-Pet-Finder/location.html";
    $(".question2").addClass("shown");
}


//hides question 2 when answered (step should go to location finder sheet)
function Noanswer2() {
    var no2 = document.querySelector(".no2").value;
    localStorage.setItem("no2", no2); 
    localStorage.setItem("numbervalue", document.getElementsByClassName("no2").value)
    console.log(localStorage.getItem("no2"));
    $(".question2").hide();
        window.location.href = "file:///C:/Users/Stephan/Pictures/Course/The-Ultimate-Personality-Pet-Finder/location.html";
    $(".question2").addClass("shown");
}


