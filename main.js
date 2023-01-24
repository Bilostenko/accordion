
const tabs = document.querySelectorAll('.tab')
const content = document.querySelectorAll('.tabs__info')
const text = document.querySelectorAll('.tabs__info-text')




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


