
let today=new Date();
let todayYear=today.getFullYear();
let todayMonth=today.getMonth() + 1;
let todayDay=today.getDate();
let dayValid=false;
let monthValid=false;
let yearValid=false;
console.log(todayDay,todayMonth,todayYear);
let userDays=document.querySelector('#day');
userDays.addEventListener("keyup",function(){
    if(userDays.value==null || userDays.value=='') {  
        document.getElementById("message").innerHTML = "This field is required";    
        userDays.classList.add("error");
        userDays.previousElementSibling.classList.add('error')}
        else if(userDays.value>30 || userDays.value<1) {  
            document.getElementById("message").innerHTML = "Must be valid day";    
            userDays.classList.add("error");
            userDays.previousElementSibling.classList.add('error')

        }else{
            dayValid=true;
            document.getElementById("message").innerHTML = "";    
            userDays.classList.remove("error");
            userDays.previousElementSibling.classList.remove('error')
        }
})

let userMonths=document.querySelector('#month');
userMonths.addEventListener("keyup",function(){
    if(userMonths.value==null || userMonths.value=='') {  
        document.getElementById("message1").innerHTML = "This field is required";    
        userMonths.classList.add("error");
        userMonths.previousElementSibling.classList.add('error')}
        else if(userMonths.value>12 || userMonths.value<1) {  
            document.getElementById("message1").innerHTML = "Must be valid month";    
            userMonths.classList.add("error");
            userMonths.previousElementSibling.classList.add('error')
            console.log(error);
        }else{
            monthValid=true;
            document.getElementById("message1").innerHTML = "";    
            userMonths.classList.remove("error");
            userMonths.previousElementSibling.classList.remove('error')
        }
})
let userYears=document.querySelector('#year');
userYears.addEventListener("keyup",function(){
    if(userYears.value==null || userYears.value=='') {  
        document.getElementById("message2").innerHTML = "This field is required";    
        userYears.classList.add("error");
        userYears.previousElementSibling.classList.add('error')}
        else if(userYears.value>todayYear ) {  
            document.getElementById("message2").innerHTML = "Must be In the past";    
            userYears.classList.add("error");
            userYears.previousElementSibling.classList.add('error')

        }else{
            yearValid=true;
            document.getElementById("message2").innerHTML = "";    
            userYears.classList.remove("error");
            userYears.previousElementSibling.classList.remove('error')
        }
})
console.log(userDays);
function calculate(){   
        if (dayValid && monthValid && yearValid){

             //get years  
    yearAge = todayYear- userYears.value;  
      
    //get months  
    if (todayMonth >= userMonths.value)  
      //get months when current month is greater  
      var monthAge = todayMonth - userMonths.value;  
    else {  
      yearAge--;  
      var monthAge = 12 + todayMonth - userMonths.value;  
    }  
  
    //get days  
    if (todayDay >= userDays.value)  
      //get days when the current date is greater  
      var dateAge = todayDay - userDays.value;  
    else {  
      monthAge--;  
      var dateAge = 31 + todayDay - userDays.value;  
  
      if (monthAge < 0) {  
        monthAge = 11;  
        yearAge--;  
      }  
    }  
     document.querySelector('#days').innerHTML=dateAge;
            document.querySelector('#months').innerHTML=monthAge;
          
                document.querySelector('#years').innerHTML=yearAge;
          
            
      }
    }