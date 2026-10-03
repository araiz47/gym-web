const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");
const amounts = document.querySelectorAll(".amount");


menuBtn.addEventListener("click",() =>{
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded',isOpen);
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener("click",()=>{
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded','false');
    });
});


function setBilling(period){
    amounts.forEach(el =>{
        el.textContent = el.dataset[period];
    });
    monthlyBtn.classList.toggle('active', period === 'monthly');
    yearlyBtn.classList.toggle('active', period === 'yearly');
}

monthlyBtn.addEventListener('click', () => setBilling('monthly'));
yearlyBtn.addEventListener('click', () => setBilling('yearly'));