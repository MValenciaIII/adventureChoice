
const windowConfirm = ()=> {
    confirmWindow = window.confirm('Are you sure you\'re ready to enter this adventure?')
    
}
windowConfirm ();

function yourself(text) {
    let msg = document.createElement('p'); //create a function with these 3 msges
    msg.style.color = 'gray';
    textBox.append(msg); 
    msg.innerHTML += text
}

function rolaf(text) {
    let msg = document.createElement('p'); //create a function with these 3 msges
    msg.style.color = 'rgb(116, 2, 2);'; // class, color,
    textBox.append(msg); 
    msg.innerHTML += text
}


var textBox = document.getElementById('screen');
var userText = document.getElementById('userText');
var userAnswer = document.getElementById('answerBox');
var answerStore = '';



const textConsole = ()=> {
    setTimeout(() => {
        rolaf('Guy: Hey, you. You\'re finally awake.'); 
        setTimeout(() => {
            yourself('Myself: Am i awake? (Yes/No)');
        }, 2000);
    }, 3000);
    //userAnswer = answerStore
    userAnswer.addEventListener('blur', (event) => {

        if (userAnswer.value == 'Yes') {
            yourself(' Myself: Yes, I am fully awake. Where am i? ');
        } 
            
        else {
             yourself(' Myself: No. *closes eyes* ');
            setTimeout(() => {
                rolaf('Guy: ...');
                setTimeout(() => {
                    rolaf('Guy: You jusy answered me..');
                }, 2000);
            }, 2000);
        }

    })
}

textConsole();
