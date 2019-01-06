// GO! (check the 'TASK *' html comments for the relevant elements to manipulate )


/* TASK 1 -- Show/Hide Nav */

  document.querySelector('.btn-toggle-menu').innerHTML = "Hide Nav";
  document.querySelector('.btn-toggle-menu').addEventListener('click', function(){
    var menu = document.querySelector('.answer-box nav')
    if (menu.className === "nav-menu") {
      menu.className = 'nav-menu-hidden';
      document.querySelector('.btn-toggle-menu').innerHTML = "Show Nav"
    } else if(menu.className != "nav-menu") {
      menu.className = 'nav-menu';
      document.querySelector('.btn-toggle-menu').innerHTML = "Hide Nav"
    }
  })

/* TASK 2 -- Select/Deslect an Icon */

const options = document.querySelectorAll('.option')

options.forEach( function(option) {
  option.addEventListener('click', function(e) {
    if (e.currentTarget.className === 'option') {
      e.currentTarget.classList.add('selected')
    } else {
      e.currentTarget.classList.remove('selected');
    }
  })
})

/* TASK 3 -- Increase total number*/

const buttonNumbers = document.querySelectorAll('.point')
var sum = document.querySelector('.total-points');

buttonNumbers.forEach(function(btn){
  btn.addEventListener('click', function(e){
    sum.textContent = parseInt(sum.textContent) + parseInt(btn.textContent)
  })
})

/* TASK 4 (Adventure Mode)-- Move Item List to List */

const elements0fList = document.querySelectorAll('.individual')
const firstUl = document.querySelector('.good-standing-list')
const secondUl = document.querySelector('.probation-list')

elements0fList.forEach(function(element){
  element.addEventListener('click', function(e){
    if (e.target.parentNode.className === "good-standing-list"){
      secondUl.appendChild(element)
    } else if (e.target.parentNode.className === "probation-list"){
      firstUl.appendChild(element)
    }
  })
})

/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */

const squares = document.querySelectorAll('.palette span')
var message = document.querySelector('.msg')

squares.forEach(function(square){
  square.addEventListener('click', function(e){
    message.classList.remove(message.classList[1])
    message.classList.add(square.classList[0])
  })
})
