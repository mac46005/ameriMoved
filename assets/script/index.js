var mainContent = document.querySelector(".main-content");
var contentItems = document.querySelectorAll(".content-item");
var navBtns = document.querySelectorAll(".nav-btn");
var mainBody = document.querySelector('.main-body');


// Think about a way to transition the element by applying opacity
function pageTransition(){
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener('click',function(){
            // changes current btn to not selected
            // and changes the newly clicked button to selected

            var currentBtn = document.querySelectorAll('.selected');
            var arr = ['selected'];
            currentBtn[0].classList.remove(arr);
            navBtns[i].className += ' selected';

        });
    }

    mainBody.addEventListener('click', (e) => {
        console.log(e.target);
        // var id = e.target.dataset.id;
        // console.log(id);
        console.log(e.target.dataset.id);
    });



}
pageTransition();