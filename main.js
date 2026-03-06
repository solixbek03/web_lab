const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


















const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");

// Open modal
function openModal(product){
    modal.style.display="flex";

    if(product==='divan'){
        modalTitle.innerText="Yumshoq Divan";
        modalText.innerText="Zamonaviy va qulay divan. Material: mato, kafolat: 2 yil.";
    }

    if(product==='krovat'){
        modalTitle.innerText="Krovat";
        modalText.innerText="Yotoqxona uchun mustahkam krovat.";
    }

    if(product==='shkaf'){
        modalTitle.innerText="Kiyim Shkafi";
        modalText.innerText="3 eshikli katta shkaf. MDF material.";
    }

    if(product==='stol'){
        modalTitle.innerText="Oshxona Stoli";
        modalText.innerText="4 stulli oshxona komplekti. Yog‘och material.";
    }
}

// Close modal
function closeModal(){
    modal.style.display="none";
}

// Click outside modal closes it
window.onclick = function(event){
    if(event.target===modal){
        closeModal();
    }
}