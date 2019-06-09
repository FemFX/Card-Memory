const cards    = document.querySelectorAll('.memory-card');
let hasFlipped = false
let firstCard,secondCard;
function flipCard() { 
    this.classList.add('flip')
    if (!hasFlipped) {
        hasFlipped = true
        firstCard  = this
        console.log(firstCard)
    }
    else{
        hasFlipped = false
        secondCard = this
        console.log(secondCard)
        if (firstCard.dataset.card === secondCard.dataset.card) {
            
        }
        else{
            setTimeout(()=>{
                firstCard.classList.remove('flip')
                secondCard.classList.remove('flip')
            },1500)
            
        }
    }
    
    
}

(function shufgle() { 
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 12)
        card.style.order = randomPos
    })
 })()
cards.forEach(card => card.addEventListener('click', flipCard));