
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

//stores yes answers into console
function Yesanswer1 () {
    console.log("Yes")
    var yes = document.querySelector(".yes");
    console.log(yes);
    localStorage.setItem(".yes", yes); 
    $(".question1").hide();
    $(".question2").addClass("shown");
}

//stores yes answers into console
function Noanswer1 () {
    console.log("No")
    var no = document.querySelector(".no");
    console.log(no);
    localStorage.setItem(".no", no); 
    $(".question1").hide();
    $(".question2").addClass("shown");
}

//stores yes answers into console for question2
function Yesanswer2() {
    console.log("Yes")
    var yes2 = document.querySelector(".yes2");
    console.log(yes2);
    localStorage.setItem(".yes2", yes2); 
    $(".question2").hide();
    // $(".question2").addClass("shown");
}

//stores yes answers into console for question2
function Yesanswer2() {
    console.log("Yes")
    var yes2 = document.querySelector(".yes2");
    console.log(yes2);
    localStorage.setItem(".yes2", yes2); 
    $(".question2").hide();
    // $(".question2").addClass("shown");
}

//stores no answers into console for question2
function Noanswer2() {
    console.log("No")
    var no2 = document.querySelector(".no2");
    console.log(no2);
    localStorage.setItem(".no2", no2); 
    $(".question2").hide();
    // $(".question2").addClass("shown");
}



