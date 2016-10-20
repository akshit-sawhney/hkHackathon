$(document).ready(function(){
 
    $(".main-cat").on("click",function(eve){

         if($(this).attr("aria-expanded") == "false"){
             $(this).find("i").removeClass("fa-chevron-down");
        $(this).find("i").addClass("fa-chevron-up"); 
         }
        else {
             $(this).find("i").removeClass("fa-chevron-up");
         $(this).find("i").addClass("fa-chevron-down");
    }
        
    });
    $(".header-sprite-user.user").addClass("shake");   
$(".shake").on("click",function(){
    $(".overlayContent").show();
});
    $(".gotIt").on("click",function(){
        $(".overlayContent").hide();
    });
    
});
$( function() {
    $( "#accordion" ).accordion({
        collapsible: true,
      heightStyle: "content"
    });
  } );
