const form = document.querySelector("form");
const email = document.querySelector('input[type=email]');
const password = document.querySelector('input[type=password]');
const Name = document.querySelector('input[type=text]');



form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    for(let input of inputs){
        if(input.value.trim() === ""){
           alert('All credentials mus be filled');
           return;
        }
    } 


 const response = await fetch('https://task-5-weather-website.vercel.app/api/auth/signup',{
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                email : email.value,
                password : password.value,
                name : Name.value
            })

           
           })
            const data = await response.json()
           console.log(data)

if (data.status === "success") {
    window.location.href = "index.html";
}
else{
    alert(data.message);
}
})


const round = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
   round.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px)`;
  
})





          