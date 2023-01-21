// variables

let ratingSection = document.querySelector('.rating__section');
let thankyouSection = document.querySelector('.thankyou__section');
let stars = document.querySelectorAll('.star');
let submit = document.getElementById('submit');
let back = document.getElementById('back');



// submit section

submit.addEventListener('click',() => {
        ratingSection.classList.add('inactive');
        thankyouSection.classList.add('active');  
});

// back section
back.addEventListener('click',() => {
        ratingSection.classList.remove('inactive');
        thankyouSection.classList.remove('active');  
});

// rating section 

stars.forEach((star)=>{
    star.addEventListener('click', () => {
             document.getElementById('rate').innerHTML = star.innerHTML; 
    });

});