const element = document.querySelector(".demo");
element.style.visibility = "visible";

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      entry.target.classList.add('animate__animated','animate__fadeIn','animate__slower')
    }
  })
}

const options = {}

const myObserver = new IntersectionObserver(callback, options)

myObserver.observe(document.querySelector(".demo"))
