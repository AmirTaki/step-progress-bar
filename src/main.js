const nextEl =  document.getElementById("next")
const prevEl = document.getElementById("prev")
const progressEl = document.querySelector(".progress-bar-front")
const stepsEl = document.querySelectorAll('.step')
const checkedNumber = document.querySelectorAll(".checked");
let currentChecked = 1;

nextEl.addEventListener("click", ()=> {
    currentChecked++;
    if(currentChecked > stepsEl.length){
        currentChecked = stepsEl.length;
    }
    updateStepProgess()  
})


prevEl.addEventListener("click", (e) => {
    currentChecked--;
    if(currentChecked < 1) {
        currentChecked = 1;
    }
    updateStepProgess()
})

const updateStepProgess = () => {
    check()
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
            <i  class = "fas fa-times"></i>`
        }
    })
}

progressEl.style.width = ((checkedNumber.length - 1) / (stepsEl.length - 1)) * 100 + "%";



const check = () => {
    if(currentChecked == 1){
        prevEl.disabled = true;
    }
    else if(currentChecked === stepsEl.length){
        nextEl.disabled = true
    }
    else {
        nextEl.disabled = false;
        prevEl.disabled = false;
    }
}
check()