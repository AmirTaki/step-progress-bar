const nextEl =  document.getElementById("next")
const prevEl = document.getElementById("prev")
const progressEl = document.querySelector(".progress-bar-front")
const stepsEl = document.querySelectorAll('.step')

let currentChecked = 1;

nextEl.addEventListener("click", ()=> {
    currentChecked++;
    if(currentChecked > stepsEl.length){
        currentChecked = stepsEl.length;
    }
      
})


prevEl.addEventListener("click", (e) => {
    currentChecked--;
    if(currentChecked < 1) {
        currentChecked = 1;
    }
})

const updateStepProgess = () => {
    stepsEl.forEach((step, index)=>{
        if(index < currentChecked){
            step.classList.add("checked")
            step.innerHTML = `
            <i class = "fas fa-check"></i>
            <small>${
                index === 0 ? "start" : index === stepsEl.length - 1 ? "Final" : "Step " + index
            }</small>`
        }
        else {
            step.classList.remove("checked");
            step.innerHTML = `
            <i  class = "fas fa-items"></i>`
        }
    })
}