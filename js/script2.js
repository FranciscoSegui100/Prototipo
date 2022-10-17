var videoArray = [
    {
        titulo: "Funcion Cuadratica",
        videoInsertado: '//www.youtube.com/embed/769fqyd6_gg',
    },
    {
        titulo: "Funcion lineal",
        videoInsertado : "//www.youtube.com/embed/SBwAWLyoATA",
    },
    {
        titulo: "Circunferencia",
        videoInsertado : "//www.youtube.com/embed/BMOUsI8JIaI",
    },
]
const crearVideos = () => {
    const contenedorVideos = document.getElementById("videos");
    for(const video of videoArray){
        contenedorVideos.innerHTML +=
        `<h2>${video.titulo}</h2>
        <embed src="${video.videoInsertado}" width="400" height="250" />`
    }
}   
crearVideos();