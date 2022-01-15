   var acc = document.getElementsByClassName("accordion");
 var i;
 
 for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function() {
     this.classList.toggle("active");
     var panel = this.nextElementSibling;
     if (panel.style.display === "block") {
       panel.style.display = "none";
     } else {
       panel.style.display = "block";
     }
   });
 }




 function print(pdf) {
 var iframe = document.createElement('iframe');   
 iframe.style.visibility = "hidden"; 
 iframe.src = pdf;           
 document.body.appendChild(iframe);  
 iframe.contentWindow.focus();       
 iframe.contentWindow.print();
 }
