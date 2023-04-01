window.onload = () => {
  loadQuestions(0);
};

// array of objects containing questions

var quiz = [
  {
    id: 1,
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      {
        a: "&lt;script&gt;",
        b: "&lt;javascript&gt;",
        c: "&lt;scripting&gt;",
        d: "&lt;js&gt;",
      },
    ],
    answer: "&lt;script&gt;",
    score: 0,
    status: "",
  },
  {
    id: 2,
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      {
        a: "The &lt;head&gt; section",
        b: "The &lt;body&gt; section",
        c: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
      },
    ],
    answer:
      "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
    score: 0,
    status: "",
  },
  {
    id: 3,
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      {
        a: "&ltscript href=&quot;xxx.js&quot;>",
        b: "&lt;script name=&quot;xxx.js&quot;&gt;",
        c: "&lt;script src=&quot;xxx.js&quot;&gt;",
      },
    ],
    answer: "&lt;script src=&quot;xxx.js&quot;&gt;",
    score: 0,
    status: "",
  },
  {
    id: 4,
    question:
      "The external JavaScript file must contain the &lt;script&gt; tag.",
    options: [{ a: "True", b: "False" }],
    answer: "False",
    score: 0,
    status: "",
  },
  {
    id: 5,
    question: "How do you write &quot;Hello World&quot; in an alert box?",
    options: [
      {
        a: "alertBox(&quot;Hello World&quot;);",
        b: "msg(&quot;Hello World&quot;);",
        c: "alert(&quot;Hello World&quot;);",
        d: "msgBox(&quot;Hello World&quot;);",
      },
    ],
    answer: "alert(&quot;Hello World&quot;);",
    score: 0,
    status: "",
  },
  {
    id: 6,
    question: "How do you create a function in JavaScript?",
    options: [
      {
        a: "function myFunction()",
        b: "function:myFunction()",
        c: "function = myFunction()",
      },
    ],
    answer: "function myFunction()",
    score: 0,
    status: "",
  },
  {
    id: 7,
    question: "How do you call a function named &quot;myFunction&quot;?",
    options: [
      {
        a: "call function myFunction()",
        b: "call myFunction()",
        c: "myFunction()",
      },
    ],
    answer: "myFunction()",
    score: 0,
    status: "",
  },
  {
    id: 8,
    question: "How to write an IF statement in JavaScript?",
    options: [
      {
        a: "if i = 5 then",
        b: "if i == 5 then",
        c: "if (i == 5)",
        d: " if i = 5",
      },
    ],
    answer: "if (i == 5)",
    score: 0,
    status: "",
  },
  {
    id: 9,
    question: "Which of the following is a disadvantage of using JavaScript?",
    options: [
      {
        a: "Client-side JavaScript does not allow the reading or writing of files.",
        b: "JavaScript can not be used for Networking applications because there is no such support available.",
        c: "JavaScript doesn't have any multithreading or multiprocess capabilities.",
        d: "All of the above.",
      },
    ],
    answer: "All of the above.",
    score: 0,
    status: "",
  },
  {
    id: 10,
    question:
      "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
    options: [
      {
        a: "if (i <> 5)",
        b: "if i <> 5",
        c: "if (i != 5)",
        d: "if i =! 5 then",
      },
    ],
    answer: "if (i != 5)",
    score: 0,
    status: "",
  },
  {
    id: 11,
    question: "How does a WHILE loop start?",
    options: [
      {
        a: "while i = 1 to 10",
        b: "while (i &lt;= 10; i++)",
        c: "while (i &lt;= 10)",
      },
    ],
    answer: "while (i &lt;= 10)",
    score: 0,
    status: "",
  },
  {
    id: 12,
    question: "How does a FOR loop start?",
    options: [
      {
        a: "for (i = 0; i &lt;= 5)",
        b: "for (i = 0; i &lt;= 5; i++)",
        c: "for i = 1 to 5",
        d: "for (i &lt;= 5; i++)",
      },
    ],
    answer: "for (i = 0; i &lt;= 5; i++)",
    score: 0,
    status: "",
  },
  {
    id: 13,
    question: "How can you add a comment in a JavaScript?",
    options: [
      {
        a: "//This is a comment",
        b: "&sbquo;This is a comment",
        c: "&lt;!--This is a comment--&gt;",
      },
    ],
    answer: "//This is a comment",
    score: 0,
    status: "",
  },
  {
    id: 14,
    question: "How to insert a comment that has more than one line?",
    options: [
      {
        a: "/*This comment has more than one line*/",
        b: "//This comment has more than one line//",
        c: "&lt;!--This comment has more than one line--&gt;",
      },
    ],
    answer: "/*This comment has more than one line*/",
    score: 0,
    status: "",
  },
  {
    id: 15,
    question: "What is the correct way to write a JavaScript array?",
    options: [
      {
        a: "var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)",
        b: "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
        c: "var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)",
        d: "var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;",
      },
    ],
    answer:
      "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
    score: 0,
    status: "",
  },
  {
    id: 16,
    question: "How do you round the number 7.25, to the nearest integer?",
    options: [
      {
        a: "rnd(7.25)",
        b: "Math.round(7.25)",
        c: "Math.rnd(7.25)",
        d: "round(7.25)",
      },
    ],
    answer: "Math.round(7.25)",
    score: 0,
    status: "",
  },
  {
    id: 17,
    question: "How do you find the number with the highest value of x and y?",
    options: [
      {
        a: "Math.max(x, y)",
        b: "Math.ceil(x, y)",
        c: "top(x, y)",
        d: "ceil(x, y)",
      },
    ],
    answer: "Math.max(x, y)",
    score: 0,
    status: "",
  },
  {
    id: 18,
    question:
      "What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?",
    options: [
      {
        a: "w2 = window.new(&quot;http://www.w3schools.com&quot;);",
        b: "w2 = window.open(&quot;http://www.w3schools.com&quot;);",
      },
    ],
    answer: "w2 = window.open(&quot;http://www.w3schools.com&quot;);",
    score: 0,
    status: "",
  },
  {
    id: 19,
    question: "JavaScript is the same as Java.",
    options: [{ a: "true", b: "false" }],
    answer: "false",
    score: 0,
    status: "",
  },
  {
    id: 20,
    question: "How can you detect the client&rsquo;s browser name?",
    options: [
      { a: "navigator.appName", b: "browser.name", c: "client.navName" },
    ],
    answer: "navigator.appName",
    score: 0,
    status: "",
  },
  {
    id: 21,
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      { a: "onchange", b: "onclick", c: "onmouseclick", d: "onmouseover" },
    ],
    answer: "onclick",
    score: 0,
    status: "",
  },
  {
    id: 22,
    question: "How do you declare a JavaScript variable?",
    options: [{ a: "var carName;", b: "variable carName;", c: "v carName;" }],
    answer: "var carName;",
    score: 0,
    status: "",
  },
  {
    id: 23,
    question: "Which operator is used to assign a value to a variable?",
    options: [{ a: "*", b: "-", c: "=", d: "x" }],
    answer: "=",
    score: 0,
    status: "",
  },
  {
    id: 24,
    question: "What will the following code return: Boolean(10 &gt; 9)",
    options: [{ a: "NaN", b: "false", c: "true" }],
    answer: "true",
    score: 0,
    status: "",
  },
  {
    id: 25,
    question: "Is JavaScript case-sensitive?",
    options: [{ a: "No", b: "Yes" }],
    answer: "Yes",
    score: 0,
    status: "",
  },
];

const btnNext = document.querySelector(".btn-next");

// let userName = document.querySelector(".quiz-username");

let score = 0;

let count = 0;

let userName = sessionStorage.getItem("name");

let points = sessionStorage.getItem("score");

document.querySelector(".quiz-username").innerHTML = "welcome " + userName;

// document.querySelector(".points").innerHTML = points;

// submit form : redirect to location

function submitForm(e) {
  e.preventDefault();

  let name = document.querySelector(".input").value;

  sessionStorage.setItem("name", name);

  if (sessionStorage.getItem("name") === "") {
    alert("enter your name ! it's necessary");
    location.href = "index.html";
  } else {
    location.href = "quiz.html";
  }
}

function loadQuestions(count) {
  let questions = document.getElementById("questions-cont");

  questions.innerHTML = `<h2>${quiz[count].question}</h2> 
  
            <ul class="option-group">
              <li class="option">${quiz[count].options[0].a}</li>
              <li class="option">${quiz[count].options[0].b}</li>
              <li class="option">${quiz[count].options[0].c}</li>
              <li class="option">${quiz[count].options[0].d}</li>
            </ul>

  `;

  toggleActive();
}

//toggle active class

function toggleActive() {
  let option = document.querySelectorAll(`li.option`);

  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let j = 0; j < option.length; j++) {
        if (option[j].classList.contains("active")) {
          option[j].classList.remove("active");
        }
      }

      option[i].classList.add("active");

      // console.log(option[i].textContent);
    };
  }
}

const btnAnswer = document.querySelector(".btn-ans");

// funciton next button

btnNext.addEventListener("click", function () {
  let userAnswer = document.querySelector("li.option.active").innerHTML;

  if (userAnswer === quiz[count].answer) {
    score++;
    sessionStorage.setItem("score", score);
  }

  if (count === quiz.length - 1) {
    sessionStorage.setItem(
      "time",
      `${min} minutes and
    ${seconds} seconds`
    );
    location.href = "results.html";

    return;
  }

  count++;

  loadQuestions(count);
});
