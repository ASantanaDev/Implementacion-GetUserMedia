// Solicitar permiso para acceder a la cámara
navigator.mediaDevices.getUserMedia({ video: true })
.then(function(stream) {
    // Asignar el stream de medios a un elemento de video en la página
    var video = document.querySelector('#webcam');
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
        video.play();
    };
})
.catch(function(err) {
    console.log("Lo siento, ocurrió el siguiente error: " + err.name);
});