const questions = [
  {
    id: 1,
    question: "What does JS stands for?",
    answer: "javascript",
    options: ["Java", "Javascript", "All of the above", "None of the above"],
  },
  {
    id: 2,
    question: "What does JS stands for?",
    answer: "javascript",
    options: ["Java", "Javascript", "All of the above", "None of the above"],
  },
  {
    id: 3,
    question: "What does JS stands for?",
    answer: "javascript",
    options: ["Java", "Javascript", "All of the above", "None of the above"],
  },
  {
    id: 4,
    question: "What does JS stands for?",
    answer: "javascript",
    options: ["Java", "Javascript", "All of the above", "None of the above"],
  },
  {
    id: 5,
    question: "What does JS stands for?",
    answer: "javascript",
    options: ["Java", "Javascript", "All of the above", "None of the above"],
  },
  {
    id: 6,
    question: "What does JS stands for?",
    answer: "javascript",
    options: ["Java", "Javascript", "All of the above", "None of the above"],
  },
];

const questionsEl = document.querySelector(".question-container");
const questionsEl1 = document.querySelector(".question-container1");
const questionsEl2 = document.querySelector(".question-container2");
const questionsEl3 = document.querySelector(".question-container3");
const questionsEl4 = document.querySelector(".question-container4");
const questionsEl5 = document.querySelector(".question-container5");
const nextBtn = document.querySelector("#btn");
// let i = 0;

//

window.onload = function () {
  questionsEl.innerHTML = `  
              <p>
                ${questions[0].id}. ${questions[0].question}
              </p>
              <div>
                <input type="radio" name="obj0" id="a" />
                <label for="">${questions[0].options[0]}</label>
              </div>
              <div>
                <input type="radio" name="obj0" id="b" />
                <label for="">${questions[0].options[1]}</label>
              </div>
              <div>
                <input type="radio" name="obj0" id="c" />
                <label for="">${questions[0].options[2]}</label>
              </div>
              <div>
                <input type="radio" name="obj0" id="d" />
                <label for="">${questions[0].options[3]}</label>
              </div>`;

  questionsEl1.innerHTML = `  
              <p>
                ${questions[1].id}. ${questions[1].question}
              </p>
              <div>
                <input type="radio" name="obj1" id="a" />
                <label for="">${questions[1].options[0]}</label>
              </div>
              <div>
                <input type="radio" name="obj1" id="b" />
                <label for="">${questions[1].options[1]}</label>
              </div>
              <div>
                <input type="radio" name="obj1" id="c" />
                <label for="">${questions[1].options[2]}</label>
              </div>
              <div>
                <input type="radio" name="obj1" id="d" />
                <label for="">${questions[1].options[3]}</label>
              </div>`;

  questionsEl2.innerHTML = `  
              <p>
                ${questions[2].id}. ${questions[2].question}
              </p>
              <div>
                <input type="radio" name="obj2" id="a" />
                <label for="">${questions[2].options[0]}</label>
              </div>
              <div>
                <input type="radio" name="obj2" id="b" />
                <label for="">${questions[2].options[1]}</label>
              </div>
              <div>
                <input type="radio" name="obj2" id="c" />
                <label for="">${questions[2].options[2]}</label>
              </div>
              <div>
                <input type="radio" name="obj2" id="d" />
                <label for="">${questions[2].options[3]}</label>
              </div>`;

  questionsEl3.innerHTML = `  
              <p>
                ${questions[3].id}. ${questions[3].question}
              </p>
              <div>
                <input type="radio" name="obj3" id="a" />
                <label for="">${questions[3].options[0]}</label>
              </div>
              <div>
                <input type="radio" name="obj3" id="b" />
                <label for="">${questions[3].options[1]}</label>
              </div>
              <div>
                <input type="radio" name="obj3" id="c" />
                <label for="">${questions[3].options[2]}</label>
              </div>
              <div>
                <input type="radio" name="obj3" id="d" />
                <label for="">${questions[3].options[3]}</label>
              </div>`;

  questionsEl4.innerHTML = `  
              <p>
                ${questions[4].id}. ${questions[4].question}
              </p>
              <div>
                <input type="radio" name="obj4" id="a" />
                <label for="">${questions[4].options[0]}</label>
              </div>
              <div>
                <input type="radio" name="obj4" id="b" />
                <label for="">${questions[4].options[1]}</label>
              </div>
              <div>
                <input type="radio" name="obj4" id="c" />
                <label for="">${questions[4].options[2]}</label>
              </div>
              <div>
                <input type="radio" name="obj4" id="d" />
                <label for="">${questions[4].options[3]}</label>
              </div>`;

  questionsEl5.innerHTML = `  
              <p>
                ${questions[5].id}. ${questions[5].question}
              </p>
              <div>
                <input type="radio" name="obj5" id="a" />
                <label for="">${questions[5].options[0]}</label>
              </div>
              <div>
                <input type="radio" name="obj5" id="b" />
                <label for="">${questions[5].options[1]}</label>
              </div>
              <div>
                <input type="radio" name="obj5" id="c" />
                <label for="">${questions[5].options[2]}</label>
              </div>
              <div>
                <input type="radio" name="obj5" id="d" />
                <label for="">${questions[5].options[3]}</label>
              </div>`;
};
