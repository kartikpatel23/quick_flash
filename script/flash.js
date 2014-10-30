
$(function() {

  document.addEventListener("deviceready", onDeviceready, false);

  document.addEventListener("backbutton", exitApp, false);

  document.addEventListener("pause", exitApp, false);

  document.addEventListener("resume", resumeApp, false);

  $flashButton = $("#flashButton");

  function onDeviceready(){
    window.plugins.flashlight.available(function(isAvailable) {  
      if (isAvailable) {
        flashlight();
      }else{
        alert("Flashlight not available on this device");
      }
    });
  }  

  function flashlight(event){
    $flashButton.prop("disabled",true);
    if($flashButton.hasClass( "flash-off" )){
      flashOff();
    }else{
      flashOn();
    }        
  }

  function flashOff(){
    window.plugins.flashlight.switchOff(function(){
      $flashButton.addClass("flash-on");
      $flashButton.removeClass("flash-off");
      $flashButton.prop("disabled",false);
    });
  } 

  function flashOn(){
    window.plugins.flashlight.switchOn(function(){
      $flashButton.addClass("flash-off");
      $flashButton.removeClass("flash-on");
      $flashButton.prop("disabled",false);
    });
  }

  function exitApp() {
    try{
      navigator.app.exitApp();
    }catch(e){
      

    }finally{
      $flashButton.prop("disabled",true);
      flashOff();
    }
    
  }

  function resumeApp() {  
    $flashButton.prop("disabled",true);
    flashOn();
  }

  $flashButton.unbind("click").bind("click", function(e){
    e.preventDefault();
    flashlight();
  });

}); 