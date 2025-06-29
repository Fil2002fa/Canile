const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav ul");
const body = document.body; // Seleziona il body

// Funzione per aprire/chiudere la sidebar
menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("active");
  body.classList.toggle("overlay-active");
});

// Funzione per chiudere la sidebar cliccando sul body
body.addEventListener("click", (e) => {
  // Chiude la sidebar solo se si clicca fuori da essa
  if (!menuList.contains(e.target) && !menuIcon.contains(e.target)) {
    menuList.classList.remove("active");
    body.classList.remove("overlay-active");
  }
});


// Galleria
const swiper = new Swiper('.card-wrapper', {
  loop: false, // Disabilita il loop
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  watchOverflow: true, // Disabilita le frecce di navigazione quando non ci sono più slide da visualizzare
  breakpoints: {
    // Quando la finestra è più grande di 1024px
    1700: {
      slidesPerView: 4, // Mostra 4 immagini
      spaceBetween: 0, // Spaziatura tra le immagini
    },
    1024: {
      slidesPerView: 3, // Mostra 3 immagini
      spaceBetween: 0, // Spaziatura tra le immagini
    },
    // Quando la finestra è più grande di 768px ma più piccola di 1024px
    768: {
      slidesPerView: 2, // Mostra 2 immagini
      spaceBetween: 0, // Spaziatura tra le immagini
    },
    // Quando la finestra è più piccola di 768px
    400: {
      slidesPerView: 1, // Mostra 1 immagine
      spaceBetween: 0, // Spaziatura tra le immagini
    },
  },
});

// NAV BAR LINK 

const navLinks = document.querySelectorAll(".munuList a");
const windowPath = window.location.pathname;

navLinks.forEach(navLink => {
    const navLinkPathname = new URL(navLink.href).pathname;

    if (windowPath === navLinkPathname) {
        navLink.classList.add('active'); // Aggiunge la classe 'active' al link corrispondente
    }
});

// NAV BAR LINK 
function toggleContent(contentId) {
  let ibanContent = document.getElementById("ibanContent");
  let paypalContent = document.getElementById("paypalContent");

  let bttnIban = document.querySelector(".buttnIban");
  let bttnPaypal = document.querySelector(".buttnIPaypal");

  if (contentId === "ibanContent") {
      ibanContent.style.display = "block";
      paypalContent.style.display = "none";

      bttnIban.style.backgroundColor = "rgb(105,105,105)";
      bttnIban.style.color = "white";

      bttnPaypal.style.backgroundColor = "white";
      bttnPaypal.style.color = "black";
  } else if (contentId === "paypalContent") {
      paypalContent.style.display = "block";
      ibanContent.style.display = "none";

      bttnPaypal.style.backgroundColor = "rgb(105,105,105)";
      bttnPaypal.style.color = "white";

      bttnIban.style.backgroundColor = "white";
      bttnIban.style.color = "black";
  }
}
