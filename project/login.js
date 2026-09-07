const form = document.querySelector("form");
const email = document.querySelector('input[type=email]');
const password = document.querySelector('input[type=password]');
const message = document.querySelector('.login-response');



form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    for(let input of inputs){
        if(input.value.trim() === ""){
           alert('All credentials mus be filled');
           return;
        }
    } 


 const response = await fetch('https://task-5-weather-website.vercel.app/api/auth/login',{
            method : "post",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify({
                email : email.value,
                password : password.value
            })

           
           })
            const data = await response.json()
           console.log(data)
        const token = data.data.token;
if (data.status === "success") {

    localStorage.setItem("token", data.data.token);
}


if (response.ok) {

    message.textContent = "Login successful! 🎉";
    message.style.backgroundColor = "green";
      message.style.width = "120px";
        message.style.borderRadius = "20px";
        message.style.height = "50px";
       

    setTimeout(() => {
        window.location.href = "weather.html";
    }, 1000);

}

})


const round = document.querySelector('.cursor');
document.addEventListener('mousemove',(e)=>{
   round.style.transform =
        `translate(${e.clientX}px, ${e.clientY}px)`;
  
})


          