console.log(name);

function simpleFunc(name) {
  name = prompt('Ello, stranger, please enter your name so that I can save it for later in my awesome database...!!!');
  if(name === 'Dave') {
    return alert(`Well, hello ${name}, you are no stranger afterall!  Where have you been my old friend?`);
  } else {
    console.log(name);
    return alert(`It's a pleaseure to make your acquaintence, ${name}, I've added your beautiful name, ${name}, to our database. I hope to see you around here more often.`);
  }
}

console.log(name);
// simpleFunc();
