var elmainContent = document.querySelector(".main-content");
var elContentItems = document.querySelectorAll(".content-item");
var elNavBtn = document.querySelectorAll(".nav-btn");

function navSelected() {
  for (let i = 0; i < elNavBtn.length; i++) {
    elNavBtn[i].addEventListener('click',function() {
      let currentBtn = document.querySelectorAll(".selected");
      currentBtn[0].classList.remove('selected');

      this.className += " selected";
    });
  }
}

navSelected();
