const observerOptions = {
    threshold: 0.6 
}

// Створюю спостерігача за елементами
const observer = new IntersectionObserver(function(entries, obs) {
  let i = 0
  while (i < entries.length) {
    const entry = entries[i]
    if (entry.isIntersecting) {
      const imgEl = entry.target
      imgEl.src = imgEl.dataset.src
      imgEl.classList.add("img-loaded")
      obs.unobserve(imgEl)
    }
    i++
  }
}, observerOptions)

// Беру всі картинки для лінивого завантаження
const imagesList = document.getElementsByClassName("lazy-load")

// використовую цикл for для відстеження фото
for (let j = 0; j < imagesList.length; j++) {
  observer.observe(imagesList[j])
}
