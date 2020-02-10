var totalSeconds = 60;
var secondsElapsed = 0;
var timeLeft = 60;
var i = 0;


var timerHolder = document.querySelector("#timerHolder");
var welcomeHolder = document.querySelector("#jumboWelcome");
var explainText = document.querySelector("#explainText");
var startBtn = document.querySelector("#startBtn");
var timer = document.createElement("p");
var buttonHolder = document.querySelector("#qButtonHolder");

function startTimer()
{
    interval = setInterval(function()
    {
        secondsElapsed++;
        showTime();  
    }, 1000)  
}
function setTimer()
{
    timer.className = "float-right";
    timerHolder.appendChild(timer);
}
function showTime()
{
    timeLeft = totalSeconds - secondsElapsed;
    timer.textContent = "Time Remaining: " + timeLeft;
}
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];
  function createButton(Qstring, counter)
  {
    var qbutton = document.createElement("button");
    qbutton.id = "button"+counter;
    qbutton.innerHTML = Qstring;
    buttonHolder.appendChild(qbutton);
  }
  function displayQuestion()
  {
    
    if(timeLeft > 0)
    {
        var counter = 0;
        if(i < questions.length)
        {
            explainText.innerHTML = questions[i].title;
            for(var j = 0; j < questions[i].choices.length; j++)
            {
                createButton(questions[i].choices[j],counter)
                counter++
            }
        }
        var a1 = document.querySelector("#button0");
        var a2 = document.querySelector("#button1");
        var a3 = document.querySelector("#button2");
        var a4 = document.querySelector("#button3");
        
        a1.onclick = function()
        {
            if (a1.innerHTML === questions[i].answer)
            {
                //correct!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }
            else{
                //incorrect!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }

        }
        a2.onclick = function()
        {
            if (a2.innerHTML === questions[i].answer)
            {
                //correct!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }
            else{
                //incorrect!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }
            
        }
        a3.onclick = function()
        {
            if (a3.innerHTML === questions[i].answer)
            {
                //correct!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }
            else{
                //incorrect!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }
            
        }
        a4.onclick = function()
        {
            if (a4.innerHTML === questions[i].answer)
            {
                //correct!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }
            else{
                //incorrect!
                i++;
                displayQuestion();
                a1.remove();
                a2.remove();
                a3.remove();
                a4.remove();
            }
            
        }
    }
    else
    {
        explainText.innerHTML = "end of quiz"
    }
  }
document.getElementById("startBtn").onclick = function()
{
    setTimer();
    startTimer();
    welcomeHolder.innerHTML = "";
    welcomeHolder.className = "";
    explainText.innerHTML = "";
    startBtn.parentNode.removeChild(startBtn);
    displayQuestion();

}
