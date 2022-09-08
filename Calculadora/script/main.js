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
        }

        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            console.log('operator key')
        }

        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }
    }
})