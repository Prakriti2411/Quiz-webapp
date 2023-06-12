const Questions =  [{
    'Question': 'which of the following is markup language?',
       'a':  'HTML',
       'b':  'SQL',
       'c':  'JAVA',
       'd':  'Javascript',
       'correct': 'a',
},
{
    'Question': 'which of the following is stands for ES6?',
       'a':  'ECAKScript 6',
       'b':  'ECMAScript 6',
       'c':  'ECPAScript 6',
       'd':  'EWEAScript 6',
       'correct': 'b',
},
{
    'Question': 'when was google established?',
       'a':  ' September 4, 1990',
       'b':  'september  4, 1995',
       'c':  ' September 4, 1998',
       'd':  ' September 4, 1997',
       'correct': 'a',
},
]
let index = 0;
let total = Questions.length;
let right = 0,
    wrong = 0;
    const quesBox = document.getElementById("quesBox")
    const optionsInputs = document.querySelectorAll('.option')
    const loadquestions = () => {
        if (index == total)
         {
            return endQuiz()
        }
        reset()
        const data = Questions[index]
        quesBox.innerText = `${index + 1} ${data.Question}`;
        optionsInputs[0].nextElementSibling.innerText = data.a; 
        optionsInputs[1].nextElementSibling.innerText = data.b; 
        optionsInputs[2].nextElementSibling.innerText = data.c; 
        optionsInputs[3].nextElementSibling.innerText = data.d; 
    }
  
    const submitQuiz = () => {
        const data = Questions[index];
        const ans = getAnswer()
        if (ans == data.correct) {
            right++;
        
        }else {
            wrong++;
        
        }
        index++;
        loadquestions();
        return;
    }
    const submitbutton = document.getElementById('submit').addEventListener('click' , submitQuiz)
    const getAnswer = () => {
        let answer ; 
        optionsInputs.forEach(
            (input) => {
                if (input.checked) {
                    answer = input.value;
                }
            }
        )
        return answer;
    }

    const reset = () => {
        optionsInputs.forEach(
            (input) => {
                input.checked = false
            }
        )
    }
     
    const endQuiz = () => {
        document.getElementById("box").innerHTML = `<div style="display:flex; flex-direction:column; justify-content:center; text-align:center;"><h1 style="padding-left:100px">Thankyou for giving Quiz 🎉🎉🎉</h1></br>
             <h2 style="padding-left:60px;">Your Scores are : ${right} / ${total} </h2></div>`
        
    }
    
   loadquestions();


   