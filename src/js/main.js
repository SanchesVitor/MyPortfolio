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