// Fetch advise from API
// Render Advise
const getQuoteBtn = document.querySelector('#get-quote')
const quoteTitleEl = document.querySelector('.quote-title')
const quoteTextEl = document.querySelector('.quote-text')


getQuoteBtn.addEventListener('click',  () => {
  fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(advice => {
      quoteTitleEl.textContent = `Advice #${advice.slip.id}`
      quoteTextEl.innerHTML = `<q>${advice.slip.advice}</q>`
    })
})
