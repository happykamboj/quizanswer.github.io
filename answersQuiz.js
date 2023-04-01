var quiz = [
  {
    question: "Inside which HTML element do we put the JavaScript?",

    answer: "&lt;script&gt;",
  },
  {
    question: "Where is the correct place to insert a JavaScript?",

    answer:
      "Both the &lt;head&gt; section and the &lt;body&gt; section are correct",
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'xxx.js'?",

    answer: "&lt;script src=&quot;xxx.js&quot;&gt;",
  },
  {
    question:
      "The external JavaScript file must contain the &lt;script&gt; tag.",

    answer: "False",
  },
  {
    question: "How do you write &quot;Hello World&quot; in an alert box?",
    answer: "alert(&quot;Hello World&quot;);",
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
    question: "How do you call a function named &quot;myFunction&quot;?",

    answer: "myFunction()",
  },
  {
    question: "How to write an IF statement in JavaScript?",

    answer: "if (i == 5)",
  },
  {
    question: "Which of the following is a disadvantage of using JavaScript?",

    answer: "All of the above.",
  },
  {
    question:
      "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",

    answer: "if (i != 5)",
  },
  {
    question: "How does a WHILE loop start?",

    answer: "while (i &lt;= 10)",
  },
  {
    question: "How does a FOR loop start?",

    answer: "for (i = 0; i &lt;= 5; i++)",
  },
  {
    question: "How can you add a comment in a JavaScript?",

    answer: "//This is a comment",
  },
  {
    question: "How to insert a comment that has more than one line?",

    answer: "/*This comment has more than one line*/",
  },
  {
    question: "What is the correct way to write a JavaScript array?",

    answer:
      "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
  },
  {
    question: "How do you round the number 7.25, to the nearest integer?",

    answer: "Math.round(7.25)",
  },
  {
    question: "How do you find the number with the highest value of x and y?",

    answer: "Math.max(x, y)",
  },
  {
    question:
      "What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?",

    answer: "w2 = window.open(&quot;http://www.w3schools.com&quot;);",
  },
  {
    question: "JavaScript is the same as Java.",

    answer: "false",
  },
  {
    question: "How can you detect the client&rsquo;s browser name?",

    answer: "navigator.appName",
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",

    answer: "onclick",
  },
  {
    question: "How do you declare a JavaScript variable?",

    answer: "var carName;",
  },
  {
    question: "Which operator is used to assign a value to a variable?",

    answer: "=",
  },
  {
    question: "What will the following code return: Boolean(10 &gt; 9)",

    answer: "true",
  },
  {
    question: "Is JavaScript case-sensitive?",

    answer: "Yes",
  },
];

window.addEventListener("scroll", function () {
  const title = this.document.querySelector(".title");

  body.classList.add("show", (this.scrollY = 50));
});

quiz.forEach((el, i) => {
  const main = document.querySelector(".main");

  console.log(main);

  // create card

  const card = document.createElement("div");

  card.classList = "card";

  const cardAnswers = `

<div class="card-body">
          <h3 class="card-title">Q : ${quiz[i].question}</h3>

          <p class="paras"> Ans : ${quiz[i].answer} </p>
          
        </div>

`;

  card.innerHTML = cardAnswers;

  main.appendChild(card);
});
