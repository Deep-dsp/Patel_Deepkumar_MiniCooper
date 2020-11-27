(()=>{

    const burger = document.querySelector('.burgerMenu'),
          nav = document.querySelector('.menu');


          function openNavBar(){
            nav.classList.toggle('show');
            burger.classList.toggle('toggle');
          }

          burger.addEventListener('click', openNavBar);
})();