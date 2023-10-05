let container = document.querySelector('.container');
let emailInput = document.querySelector('.email');
let signupbtn = document.querySelector('.signupbtn');
let success = document.querySelector('.success');
let dismissbtn = document.querySelector('.dismiss');

signupbtn.addEventListener('click', function(event){
    event.preventDefault();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var email = emailInput.value;

    if(emailPattern.test(email)){
        success.classList.remove('hide');
        container.classList.add('hide');

        emailInput.classList.remove('error-background'); 
        document.getElementById("errorText").textContent = "";
    }else{
        document.getElementById("errorText").textContent = "Valid email required";
        emailInput.classList.add('error-background'); 
        emailInput.style.color = 'red'; 
        
    }
});

dismissbtn.addEventListener('click', function(){
    success.classList.add('hide');
    container.classList.remove('hide');
})
