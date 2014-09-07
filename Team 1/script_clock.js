function Watch(){
       var hoursArrow = document.getElementById("hours");
       var minutesArrow = document.getElementById("minutes");
       var secondsArrow = document.getElementById("seconds");

       var date = new Date();
       var hours = date.getHours();
       var minutes = date.getMinutes();
       var seconds = date.getSeconds();
	
	hours=hours>12?hours-=12:hours

  
    hoursArrow.style.webkitTransform = 'rotate('+(hours+minutes*0.0166666)*30+'deg)'; 
    hoursArrow.style.mozTransform    = 'rotate('+(hours+minutes*0.0166666)*30+'deg)'; 
    hoursArrow.style.msTransform     = 'rotate('+(hours+minutes*0.0166666)*30+'deg)'; 
    hoursArrow.style.oTransform      = 'rotate('+(hours+minutes*0.0166666)*30+'deg)'; 
    hoursArrow.style.transform       = 'rotate('+(hours+minutes*0.0166666)*30+'deg)'; 

    minutesArrow.style.webkitTransform = 'rotate('+minutes*6+'deg)'; 
    minutesArrow.style.mozTransform    = 'rotate('+minutes*6+'deg)'; 
    minutesArrow.style.msTransform     = 'rotate('+minutes*6+'deg)'; 
    minutesArrow.style.oTransform      = 'rotate('+minutes*6+'deg)'; 
    minutesArrow.style.transform       = 'rotate('+minutes*6+'deg)'; 

    secondsArrow.style.webkitTransform = 'rotate('+seconds*6+'deg)'; 
    secondsArrow.style.mozTransform    = 'rotate('+seconds*6+'deg)'; 
    secondsArrow.style.msTransform     = 'rotate('+seconds*6+'deg)'; 
    secondsArrow.style.oTransform      = 'rotate('+seconds*6+'deg)'; 
    secondsArrow.style.transform       = 'rotate('+seconds*6+'deg)'; 
    }