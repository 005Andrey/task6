document.querySelector('a').addEventListener('click',(event)=> 
    {
        const userText = prompt('Введите текст');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в h2 изменён на', userText);


        })

