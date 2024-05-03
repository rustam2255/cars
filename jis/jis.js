'use strict'

const btn = document.querySelector('#btn')

function  myAnima(){
    const car = document.querySelector('.car')
    let pos = 0

    const timerId = setInterval(frame, 10)

    function frame(){
        if(pos===700){
            clearInterval()
        }
        else{
            console.log(pos)
            pos++
            car.style.left = pos + 'px'
        }
        
    }
}
function myAnimation(){
    
    const car = document.querySelector('.car')
    let position = 700

    const myTime = setInterval(framer,10)

    function framer(){
        if(position===0){
            clearInterval
        }
        else{
            pos--
            car.style.left = pos + 'px'
        }
    }
}
btn.addEventListener('click', myAnima)
btn.addEventListener('click', myAnimation)