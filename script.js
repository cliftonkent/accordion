const button1 = document.getElementById('but1')
const coll1 = document.getElementById('coll1')

const button2 = document.getElementById('but2')
const coll2 = document.getElementById('coll2')

const button3 = document.getElementById('but3')
const coll3 = document.getElementById('coll3')

const button4 = document.getElementById('but4')
const coll4 = document.getElementById('coll4')

const button5 = document.getElementById('but5')
const coll5 = document.getElementById('coll5')



button1.addEventListener('click', () => {
    if (button1.classList.contains('open')) {
        button1.classList.remove('open')
    }else(
        button1.classList.add('open')
    )
    if (coll1.classList.contains('close')) {
        coll1.classList.remove('close')
    }else(
        coll1.classList.add('close')
    )
})

button2.addEventListener('click', () => {
    if (button2.classList.contains('open')) {
        button2.classList.remove('open')
    }else(
        button2.classList.add('open')
    )
    if (coll2.classList.contains('close')) {
        coll2.classList.remove('close')
    }else(
        coll2.classList.add('close')
    )
})

button3.addEventListener('click', () => {
    if (button3.classList.contains('open')) {
        button3.classList.remove('open')
    }else(
        button3.classList.add('open')
    )
    if (coll3.classList.contains('close')) {
        coll3.classList.remove('close')
    }else(
        coll3.classList.add('close')
    )
})

button4.addEventListener('click', () => {
    if (button4.classList.contains('open')) {
        button4.classList.remove('open')
    }else(
        button4.classList.add('open')
    )
    if (coll4.classList.contains('close')) {
        coll4.classList.remove('close')
    }else(
        coll4.classList.add('close')
    )
})

button5.addEventListener('click', () => {
    if (button5.classList.contains('open')) {
        button5.classList.remove('open')
    }else(
        button5.classList.add('open')
    )
    if (coll5.classList.contains('close')) {
        coll5.classList.remove('close')
    }else(
        coll5.classList.add('close')
    )
})