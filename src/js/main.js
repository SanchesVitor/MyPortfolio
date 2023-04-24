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