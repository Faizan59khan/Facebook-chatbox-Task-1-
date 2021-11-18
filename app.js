function openChat(){
   var display=document.getElementById("chat-box");
   var closeBtn=document.getElementById("close-btn");
   var openBtn=document.getElementById("openBtn");

   display.style.display="table"
   closeBtn.style.display="table"
   openBtn.style.display="none";
}

function closeChat(){
    var display=document.getElementById("chat-box");
    var closeBtn=document.getElementById("close-btn");
    var openBtn=document.getElementById("openBtn");

    display.style.display="none"
    closeBtn.style.display="none"
    openBtn.style.display="table"
 }