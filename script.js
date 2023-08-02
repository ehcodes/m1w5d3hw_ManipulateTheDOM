let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Part 1
  const mainTitleEl = document.querySelector(`#main-title`)

  // Part 2
  const bodyEl = document.querySelector(`body`)

  // Part 3
  const favoritesUL = document.querySelector(`#favorite-things`)
  favoritesUL.lastElementChild.remove()
  
  // Part 4
  const specialTitles = document.querySelectorAll(`.special-title`)
  specialTitles.forEach((el)=>{
    el.style.fontSize=`2rem`
  })

  // Part 5
  let pastRaces = document.querySelector(`#past-races`)
  pastRaces.children[3].remove()

  // Part 6
  let newlyAddedLI = document.createElement(`li`)
  newlyAddedLI.innerText='San Juan'
  pastRaces.appendChild(newlyAddedLI)

  // Part 7
  let newlyAddedBlogPost = document.createElement(`div`)
  newlyAddedBlogPost.classList.add('blog-post', 'purple')
  // ugly out of place h2
  let newlyAddedBlogPostH2 = document.createElement(`h2`)
  newlyAddedBlogPostH2.innerText = `San Juan`
  let newlyAddedBlogPostText = document.createElement(`p`)
  newlyAddedBlogPostText.innerText = `I heard the marvelous sound of the coqui!`
  newlyAddedBlogPost.appendChild(newlyAddedBlogPostH2)
  newlyAddedBlogPost.appendChild(newlyAddedBlogPostText)
  document.querySelector(`.main`).appendChild(newlyAddedBlogPost)

  // Part 8
  const quoteTitle = document.querySelector(`#quote-title`)
  quoteTitle.addEventListener('click',(e)=>{
      e.preventDefault()
      randomQuote()
  })
  // Part 9
  const blogPosts = document.querySelectorAll(`.blog-post`)
  blogPosts.forEach((el)=>{
    el.addEventListener('mouseout',(e)=>{
      e.preventDefault()
      el.classList.toggle('purple')
      
    })
    el.addEventListener('mouseenter',(e)=>{
      e.preventDefault()
      el.classList.toggle('red')
    })
  })




});
