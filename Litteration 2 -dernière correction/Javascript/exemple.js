let finVignietteRBO;
let boutonBalancierRBO;


    finVignietteRBO = document.getElementById("fin-vigniette-rbo");
    boutonBalancierRBO = document.getElementById("bouton-balancier-rbo");

    boutonBalancierRBO.addEventListener('click',balancerTexteFinVignetteRBO);
    


function balancerTexteFinVignetteRBO(evenement)
{
    if(boutonBalancierRBO.ouvert)
    {
		// https://www.w3schools.com/jsref/event_preventdefault.asp
        evenement.preventDefault();
        finVignietteRBO.style.display="none";
        boutonBalancierRBO.innerHTML = "+";
        boutonBalancierRBO.ouvert = false;
    }
    else
    {
        evenement.preventDefault();
        finVignietteRBO.style.display="inline";
        boutonBalancierRBO.innerHTML = "-";
        boutonBalancierRBO.ouvert = true;
    }
}
let finVignietteRBO2;
let boutonBalancierRBO2;


    finVignietteRBO2 = document.getElementById("fin-vigniette-rbo2");
    boutonBalancierRBO2 = document.getElementById("bouton-balancier-rbo2");

    boutonBalancierRBO2.addEventListener('click',balancerTexteFinVignetteRBO2);

function balancerTexteFinVignetteRBO2(evenement)
{
    if(boutonBalancierRBO2.ouvert)
    {
		// https://www.w3schools.com/jsref/event_preventdefault.asp
        evenement.preventDefault();
        finVignietteRBO2.style.display="none";
        boutonBalancierRBO2.innerHTML = "+";
        boutonBalancierRBO2.ouvert = false;
    }
    else
    {
        evenement.preventDefault();
        finVignietteRBO2.style.display="inline";
        boutonBalancierRBO2.innerHTML = "-";
        boutonBalancierRBO2.ouvert = true;
    }
}
let finVignietteRBO3;
let boutonBalancierRBO3;


    finVignietteRBO3 = document.getElementById("fin-vigniette-rbo3");
    boutonBalancierRBO3 = document.getElementById("bouton-balancier-rbo3");

    boutonBalancierRBO3.addEventListener('click',balancerTexteFinVignetteRBO3);
function balancerTexteFinVignetteRBO3(evenement)
{
    if(boutonBalancierRBO3.ouvert)
    {
		// https://www.w3schools.com/jsref/event_preventdefault.asp
        evenement.preventDefault();
        finVignietteRBO3.style.display="none";
        boutonBalancierRBO3.innerHTML = "+";
        boutonBalancierRBO3.ouvert = false;
    }
    else
    {
        evenement.preventDefault();
        finVignietteRBO3.style.display="inline";
        boutonBalancierRBO3.innerHTML = "-";
        boutonBalancierRBO3.ouvert = true;
    }
}