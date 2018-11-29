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
  function white(e) {
  e.currentTarget.style.cssText = "color:black;   background:rgb(189, 195, 199);"
  }

  function black(e) {
    e.currentTarget.style.cssText = "color:white;   background: #67809F;"
  }
  var box = document.querySelectorAll('.option')

    for(var i = 0; i < box.length; i++){
    box[i].addEventListener('click', white,);
    }
    for(var i = 0; i < box.length; i++){
    box[i].addEventListener('click', black,);
    }

    // document.querySelectorAll('.option').forEch(function(div){
    //   div.addEventListener('click', function(e){
    //     if(e.currentTarget.className === 'option') {
    //       e.currentTarget.classList.add('selected');
    //     } else {
    //       e.currentTarget.classList.remove('selected');
    //     }
    //   })
    // })




/* TASK 3 -- Increase total number*/
document.querySelectorAll('.point').forEach(function(btn){
  btn.addEventListener('click', function(){
    var sum = document.querySelector('.total-points');
    sum.texContent = parseInt(sum.textContent) + parseInt(btn.textContent)
  })
})

/* TASK 4 (Adventure Mode)-- Move Item List to List */


/* TASK 5 (Adventure Mode) -- Change Text Background Color From Palette */
