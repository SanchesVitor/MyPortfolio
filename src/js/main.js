/*------SHOW SIDEBAR------- */

/* SIDEBAR SHOW*/
/*Validade if Constant Exists */

/* SIDEBAR HIDDEN */
/* Validade if COnstant Exists */

/* SKILLS TABS */
const tabs = document.querySelectorAll('[data-target]'),
      tabsContent = document.querySelectorAll('[data-content');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const target = document.querySelector(tab.dataset.target);

          tabsContent.forEach(tabContents => {
            tabContents.classList.remove('skills-active');
          });

            target.classList.add('skills-active');

            tabs.forEach(tab => {
              tab.classList.remove('skills-active');
            });

            tab.classList.add('skills-active');
        });
      });

/* MIXITUP FILTER PORTFOLIO */
let mixerPortfolio = mixitup('.work-container', {
  selectors: {
      target: '.work-card'
  },
  animation: {
      duration: 300
  }
});

/* LINK ACTIVE WORK */
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'));
  this.classList.add('active-work');
}

linkWork.forEach(l => l.addEventListener('click', activeWork));

/* WORK POPUP */
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('work-button')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

function togglePortfolioPopup() {
  document.querySelector('.portfolio-popup').classList.toggle('open');
}

document.querySelector('.portfolio-popup-close').addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.work-img').src;
  document.querySelector('.portfolio-popup-subtitle span').innerHTML = portfolioItem.querySelector('.work-title').innerHTML;
  document.querySelector('.portfolio-popup-body').innerHTML = portfolioItem.querySelector('portfolio-item-details').innerHTML;
}

/* SERVICES MODAL */
const modalViews = document.querySelectorAll('.services-modal'),
      modelBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close');

let modal = function(modalClick) {
  modalViews[modalClick].classList.add('active-modal');
}

modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener('click', () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});

/* SWIPER TESTIMONIAL */
let swiper = new Swiper(".testimonials-container", {
  spaceBetween: 24,
  loop: true,
  grabCursos: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/* INPUT ANIMATION */
const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if(this.value == '') {
    parent.classList.remove('focus');
  }
}

inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});


/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*-' + sectionId + ']').classList.add('active-link');
    }else {
      document.querySelector('nav.menu a[href*-' + sectionId + ']').classList.remove('active-link');
    }
  })
}