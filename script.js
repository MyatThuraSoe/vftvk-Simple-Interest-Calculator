
const rate = document.getElementById('rate');
const percentage = document.getElementById("percentage");

const compute = document.getElementById("compute");


rate.addEventListener('change',()=>{
    percentage.innerHTML = rate.value;
});
compute.addEventListener('click',()=>{
    const amount = document.getElementById("amount").value;
    if(amount < 0 || amount === ''){
        alert("Please Enter a positive number");
    }
    else{
         const years = document.getElementById("years").value;

        var recieveAmount = amount * years * rate.value /100;
        var year = new Date().getFullYear() + parseInt(years);
        document.getElementById("details").innerHTML="If you deposit <strong>"+amount+"</strong>,\<br\>at an interest rate of <strong>"+rate.value+"%</strong>\<br\>You will receive an amount of <strong>"+recieveAmount+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>";

    }

});

        
