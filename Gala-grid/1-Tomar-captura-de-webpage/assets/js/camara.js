let video = document.querySelector("#video");
// primero antes de mostrar la camara se da click en el boton para los permisos
document.querySelector("#boton").addEventListener("click", function(ev){
    navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(record)
    .catch(err => console.log(err));

})

function record(stream){
    video.srcObject = stream;
    
}