/* const tab1 = document.querySelector('#tab1') */
/* const tab2 = document.querySelector('#tab2') */
/* const tab3 = document.querySelector('#tab3') */
const tabs = document.querySelectorAll('.tab')
const content = document.querySelectorAll('.tabs__info')
const text = document.querySelectorAll('.tabs__info-text')
/* const tabInfo = document.querySelectorAll('.tab__info') */
/* const background = document.querySelectorAll('.tab_background') */



for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', getActive)

  function getActive(){
    document.querySelector('.active').classList.remove("active")
    this.classList.toggle('active')
   
    document.querySelector('.show').classList.remove("show")
    content[i].classList.add('show')

    document.querySelector('.show-text').classList.remove("show-text")
    text[i].classList.add('show-text')
   }
   
}


