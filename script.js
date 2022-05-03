const imglist = document.querySelectorAll(".anim");    

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(entry)
      for (const pic of imglist) { 
         pic.style.visibility = "visible"
        }
      entry.target.classList.add('animate__animated','animate__fadeIn', 'animate__slow')
         
    }
  })
}

const myObserver = new IntersectionObserver(callback, {threshold: 0.0000001})

for (const pic of imglist) { 
  myObserver.observe(pic)
 }



// const element = document.querySelector('.demo')

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log('Element is entering the screen',entry)
//       element.style.visibility = "visible"
//       entry.target.classList.add('animate__animated','animate__fadeIn', 'animate__slow')
         
//     }
//   })
// }

// const myObserver = new IntersectionObserver(callback, {threshold: 0.0000001})

// myObserver.observe(element)
