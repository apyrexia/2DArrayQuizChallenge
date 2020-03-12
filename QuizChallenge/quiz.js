
function print(message) {
    document.getElementById('output').innerHTML = message;
  }
  
  let QA = [
    ['What color does blue and yellow make?', 'green'],
    ['How many states are in the USA?', '50'],
    ['What color is an orange?', 'orange'],
  ];
  
  // Function takes a 2D quiz array formatted like above as parameter
  // returns quiz results in HTML
    
  function quiz(quizArray) {
    let score = 0;
    let correct = `<h1>You got these questions correct:</h1> <ol>`;
    let wrong = `<h1>You got these questions wrong:</h1> <ol>`;
    for (let i = 0; i < quizArray.length; i++) {
      let userAnswer = prompt(`${ quizArray[i][0] }`);
      if ( userAnswer.toLowerCase() == quizArray[i][1] ) {
        score ++;
        correct += `<li>${quizArray[i][0]}</li>`;
      } else {
        wrong += `<li>${quizArray[i][0]}</li>`;
      }
    }
    let scoreMessage = `You got ${score} question(s) right.`;
    correct += `</ol>`;
    wrong += `</ol>`;
    return scoreMessage + correct + wrong;
  }
  
  print(quiz(QA) );
  