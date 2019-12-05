
const windowConfirm = ()=> {
    confirmWindow = window.confirm('Are you sure you\'re ready to enter this adventure?')
    
}
windowConfirm ();


var textBox = document.getElementById('screen');
var userText = document.getElementById('userText');
var userAnswer = document.getElementById('answerBox');
const textConsole = ()=> {
    setTimeout(() => {
        textBox.innerHTML = 'Ralof: Hey, you. You\'re finally awake.' 
        setTimeout(() => {
            userText.innerHTML += 'Myself: Am i awake? (Yes/No) '    
        }, 2000);
    }, 3000);
    
    
}

textConsole();
