var Content = document.querySelector(".main-content");
var contentItems = document.querySelectorAll(".content-item");
var navBtns = document.querySelectorAll(".nav-btn");


// Think about a way to transition the element by applying opacity
function pageTransition(){
    for (let i = 0; i < navBtns.length; i++) {
        navBtns[i].addEventListener('click',function(){
            var currentBtn = document.querySelectorAll('.selected');
            var arr = ['selected'];
            currentBtn[0].classList.remove(arr);
            navBtns[i].className += ' selected';
        });
        ConstantSourceNode.addEventListener('click',(e) => {
            const id = e.target.dataset.id;

            console.log(id);

            if(id){
                // change views
            }
        })
    }
}
pageTransition();