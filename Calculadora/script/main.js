const calculator = document.querySelector(".calculator")//Retorna o primeiro elemento correspondente ao grupo de seletores
const keys = calculator.querySelector(".calculator__keys")
const display = document.querySelector(".calculator__display")


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {//referencia ao objeto que enviou o evento
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent//define ou retorna o conteúdo de texto do nó especificado e todos os seus descendentes
        const displayedNum = display.textContent
        if (!action) {
            console.log('number key')
        }

        if (displayedNum === "0") {
            display.textContent = keyContent
        }else{
            display.textContent = displayedNum + keyContent
        }

        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            console.log('operator key')
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
        
        //Remove a classe .is-depressed de todas as teclas
        Array.from(key.parentNode.children)//parentNode temos o elemento como seu parent (elemento pai)
            .forEach(k => k.classList.remove('is-depressed'))//passa uma fn de callback(valor atual(obrigatório) indice do array(opcional))
    }
})