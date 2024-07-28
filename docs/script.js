//モーダルウィンドウ
let btns = document.getElementsByClassName("nextModalBtn");
let topPage = document.getElementsByClassName("topPage");
let onigiri2 = document.getElementsByClassName("onigiri2");
let allModal = document.getElementsByClassName("modal");

function mawarion(){
    onigiri2.style.display = "block";
    topPage.style.display = "none";
}

function mawarioff(){
    onigiri2.style.display = "none";
    topPage.style.display = "display";
}


window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        mawarioff();
    }
}

function closeAllModal() {
    for (let i = 0; i < allModal.length; i++) {
        allModal[i].style.display = "none";
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function() {
        closeAllModal();

        let modalId = this.getAttribute("data-modal");
        let modal = document.getElementById(modalId);

        modal.style.display = "block";
        mawarion();
    }
}


    