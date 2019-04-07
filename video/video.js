var video;
window.onload = function() {
    video = document.getElementById('video');
}
function Fullscreen(){
    video.webkitEnterFullscreen();
}
// function video() {   
//                 if (document.getElementById('video')) {      
//                     var obj = document.getElementById('video'); 
//                     if (obj.style.display != "block") { 
//                         obj.style.display = "block"; 
//                     }
//                     else obj.style.display = "none"; 
//                 }
//                 else alert("Элемент с id: " + video + " не найден!"); 
//             }   