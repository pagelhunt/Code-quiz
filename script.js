var totalSeconds = 60;
var secondsElapsed = 0;
var timeLeft = 60;
var i = 0;

var score = 0;
var timerHolder = document.querySelector("#timerHolder");
var welcomeHolder = document.querySelector("#jumboWelcome");
var explainText = document.querySelector("#explainText");
var startBtn = document.querySelector("#startBtn");
var timer = document.createElement("p");
var buttonHolder = document.querySelector("#qButtonHolder");
var a1;
var a2;
var a3;
var a4;

function gameOver()
{
    timerHolder.remove();
    explainText.remove();
    buttonHolder.remove();
    welcomeHolder.className = "text-center"
    var gameOverText = document.createElement("h2");
    gameOverText.innerHTML = "Your score is: " + score +"!"; 
    welcomeHolder.appendChild(gameOverText);
    var gameOverDiv = document.createElement("div");
    var initals = document.createElement("input");
    initals.type = "text";
    var lastPlayer = localStorage.getItem("player");
    var saveButton = document.createElement("button");
    saveButton.innerHTML = "Save initials";
    var lastPlayerText = document.createElement("p");
    lastPlayerText.innerHTML = JSON.parse(lastPlayer);
    var newGameBtn = document.createElement("button");
    newGameBtn.innerHTML = "Try Again?";


    saveButton.onclick = function()
    {
        localStorage.setItem("player", JSON.stringify(initals.value +" "+ score));
        console.log("initals saved!")
    }

    newGameBtn.onclick = function()
    {
        document.location.reload(true);
    }
    console.log(JSON.parse(lastPlayer))
    gameOverDiv.appendChild(lastPlayerText);
    gameOverDiv.appendChild(initals);
    gameOverDiv.appendChild(saveButton)
    gameOverDiv.appendChild(newGameBtn);
    welcomeHolder.appendChild(gameOverDiv);


}

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
  function createButton()
  {
    for(var z = 0; z < 4; z++)
    {
        var qbutton = document.createElement("button");
        qbutton.id = "button"+z;
        buttonHolder.appendChild(qbutton);
    }
    a1 = document.querySelector("#button0");
    a2 = document.querySelector("#button1");
    a3 = document.querySelector("#button2");
    a4 = document.querySelector("#button3");
  }
  function updateButton(button,qstring)
  {
    button.innerHTML = qstring;
  }
  function displayQuestion()
  {
    
    if(timeLeft > 0 || i >= questions.length)
    {
        var counter = 0;
        if(i < questions.length)
        {
            explainText.innerHTML = questions[i].title;
                updateButton(a1,questions[i].choices[0])
                updateButton(a2,questions[i].choices[1])
                updateButton(a3,questions[i].choices[2])
                updateButton(a4,questions[i].choices[3])
        }

        if(i < questions.length)
        {
            a1.onclick = function()
            {
                if(i < questions.length)
                {
                    if (a1.innerHTML === questions[i].answer)
                    {
                        //correct!
                        i++;
                        score++;
                        displayQuestion();                
                    }
                    else{
                        //incorrect!
                        i++;
                        score--;
                        timeLeft = timeLeft - 10;
                        displayQuestion();
                    }
                }else
                {
                    gameOver();
                }      
            }
            a2.onclick = function()
            {
                if(i < questions.length)
                {
                    if (a2.innerHTML === questions[i].answer)
                    {
                        //correct!
                        i++;                    
                        score++;
                        displayQuestion();
                    }
                    else{
                        //incorrect!
                        i++;                    
                        score--;
                        timeLeft = timeLeft - 10;
                        displayQuestion();
                    }
                }else
            {
                gameOver();
            }
            }
            a3.onclick = function()
            {
                if(i < questions.length)
                {
                    if (a3.innerHTML === questions[i].answer)
                    {
                        //correct!
                        i++;
                        score++;
                        displayQuestion();
                    }
                    else{
                        //incorrect!
                        i++;
                        score--;
                        timeLeft = timeLeft - 10;
                        displayQuestion();
                    }
                }else
                {
                    gameOver();
                }
                
            }
            a4.onclick = function()
            {
                if(i < questions.length)
                {
                    if (a4.innerHTML === questions[i].answer)
                    {
                        //correct!
                        i++;
                        score++;
                        displayQuestion();
                    }
                    else{
                        //incorrect!
                        i++;
                        score--;
                        timeLeft = timeLeft-10;
                        displayQuestion();
                    }
                }else
                {
                    gameOver();
                }
            }
        }
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
    createButton();
    displayQuestion();
}
