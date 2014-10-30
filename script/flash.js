
$(function() {

  document.addEventListener("deviceready", onDeviceready, false);

  document.addEventListener("backbutton", exitApp, false);

  document.addEventListener("pause", exitApp, false);

  document.addEventListener("resume", resumeApp, false);

  $btn_primary = $(".btn-primary");

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
    $btn_primary.prop("disabled",true);
    if($btn_primary.hasClass( "flash-off" )){
      flashOff();
    }else{
      flashOn();
    }        
  }

  function flashOff(){
    window.plugins.flashlight.switchOff(function(){
      $btn_primary.addClass("flash-on");
      $btn_primary.removeClass("flash-off");
      $btn_primary.prop("disabled",false);
    });
  } 

  function flashOn(){
    window.plugins.flashlight.switchOn(function(){
      $btn_primary.addClass("flash-off");
      $btn_primary.removeClass("flash-on");
      $btn_primary.prop("disabled",false);
    });
  }

  function exitApp() {
    /*try{
      navigator.app.exitApp();
    }catch{*/
      $btn_primary.prop("disabled",true);
      flashOff();
    //}
  }

  function resumeApp() {  
    $btn_primary.prop("disabled",true);
    flashOn();
  }

  $btn_primary.unbind("click").bind("click", function(e){
    e.preventDefault();
    flashlight();
  });

}); 