// creo array con immagini
const arrayImg = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

// richiamo container
let container = document.querySelector(".container");

// estrapolo elementi array img
for(let i = 0; i < arrayImg.length; i++) {
    let itemImg = arrayImg[i];

    // inserisco i div
    let itemContent = `
                <div class="item">
                    <img src="${itemImg}">
                </div>`;
    
    // inserisco il div nel container
    container.innerHTML += itemContent;
}

// seleziono gli item della pagina
const items = document.getElementsByClassName("item");

// assegno classe active al primo elemento
let activeItem = 0;

items[activeItem].classList.add("active");

// seleziono il bottone next
const next = document.querySelector(".next");

// gestisco click su next
next.addEventListener("click",
    function() {
        // verifico di non essere alla fine delle img
        if(activeItem < arrayImg.length - 1) {
            // tolgo active su elemento attivo
            items[activeItem].classList.remove("active");

            // aumento valore indice
            activeItem++;

            // aggiungo classe a nuovo elemento active
            items[activeItem].classList.add("active");
        }
    }
)

// seleziono il bottone prev
const prev = document.querySelector(".prev");

// gestisco click su prev
prev.addEventListener("click",
    function() {
        // verifico di non essere alla fine delle img (al contario)
        if(activeItem === 0) {
            // aggiungo classe active
            items[activeItem].classList.add("active");

        }else if(activeItem <= arrayImg.length - 1) {
            // rimuovo classe active
            items[activeItem].classList.remove("active");

            // diminuisco valore indice
            activeItem--;

            // aggiungo classe a nuovo elemento active
            items[activeItem].classList.add("active");
        }
    }
)