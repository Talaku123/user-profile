


function starsCount(){

  let stars = []

  return function(){

    stars++

    return stars;
  }
}

const counter = starsCount()
const button = document.getElementById('starClicked')
const disp = document.getElementById('display')
button.addEventListener('click',()=>{
  disp.innerHTML = counter()
})

function likes(){

  let pages = 0

  return function(){

    pages++

    return pages;
  }
}

const added = likes()
const btn = document.getElementById('pageLikes')
const lik = document.getElementById('like')
btn.addEventListener('click', () => {
  lik.innerHTML = added()
})