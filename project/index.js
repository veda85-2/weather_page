const round = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
round.style.left = e.clientX + "px";
round.style.top = e.clientY + "px";
  
})

const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    // e.preventDefault();
    const inputs = form.querySelectorAll('input');
    for(let input of inputs){
        if(input.value.trim() === ""){
            alert('all credentials must be filled');
            return;
        }
        
    } 
    alert(`form is submitted`)

})
