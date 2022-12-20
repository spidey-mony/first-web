$(document).ready(function(){
   const date = new Date();
   const hour = date.getHours();
    let message = " ";
    if(hour <= 12){
        message = "Good Morning";
    }
    if(hour > 12){
        message = "Good Afternoon";
    }
    if (hour >= 17){
        message = "Good Evening";
    }
    if (hour >=8 ){
        message = "Good Night"; 
    }
    $('#headingText').append(message + " " + "From Spider Man");
})
