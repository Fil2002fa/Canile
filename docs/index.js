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
// Funzione per cambiare il contenuto e lo stile dei bottoni
function toggleContent(contentId) {
  let ibanContent = document.getElementById("ibanContent");
  let paypalContent = document.getElementById("paypalContent");

  let bttnIban = document.querySelector(".buttnIban");
  let bttnPaypal = document.querySelector(".buttnIPaypal");

  if (contentId === "ibanContent") {
      ibanContent.style.display = "block";
      paypalContent.style.display = "none";

      bttnIban.style.backgroundColor = "rgb(105,105,105)"; // Grigio scuro
      bttnIban.style.color = "white";

      bttnPaypal.style.backgroundColor = "white";
      bttnPaypal.style.color = "black";
  } else if (contentId === "paypalContent") {
      paypalContent.style.display = "block";
      ibanContent.style.display = "none";

      bttnPaypal.style.backgroundColor = "rgb(105,105,105)"; // Grigio scuro
      bttnPaypal.style.color = "white";

      bttnIban.style.backgroundColor = "white";
      bttnIban.style.color = "black";
  }
}

// Funzione per impostare lo stato iniziale al caricamento della pagina
function setInitialState() {
  // Mostra il contenuto del conto corrente (IBAN) di default
  toggleContent("ibanContent");
}

// Esegui la funzione setInitialState al caricamento della pagina
window.onload = setInitialState;

// refresh logo


document.addEventListener("DOMContentLoaded", function() {
  const logo = document.getElementById("logo");
  logo.addEventListener("click", function() {
    setTimeout(function() {
      location.reload();
    }, );
  });
});

// animazione
document.addEventListener("DOMContentLoaded", function() {
  const fadeElements = document.querySelectorAll('.fade-in');

  const checkVisibility = () => {
    fadeElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      // Se l'elemento è nel viewport
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('visible');
      }
    });
  };

  // Controlla la visibilità all'avvio e durante lo scroll
  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
});

document.addEventListener("DOMContentLoaded", function() {
  const nav = document.querySelector('nav');

  // Funzione per gestire lo scroll
  const handleScroll = () => {
    if (window.scrollY > 50) { // Se la pagina è stata scrollata di più di 50px
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  // Aggiungi l'event listener per lo scroll
  window.addEventListener('scroll', handleScroll);
});