var videoArray = [
    {
        titulo: "Funcion Cuadratica",
        videoInsertado: '//www.youtube.com/embed/6urKrhO0Z-k?list=PLGG_9ReSflXfsyFjgktKqf4Bc4C8xoGmM',
    },
    {
        titulo: "Sistema de Ecuaciones",
        videoInsertado : "//www.youtube.com/embed/3iBLF1eAfgc?list=PLGG_9ReSflXfsyFjgktKqf4Bc4C8xoGmM",
    },
    {
        titulo: "Ecuaciones exponenciales",
        videoInsertado : "//www.youtube.com/embed/8ZyfHgm4T4c?list=PLGG_9ReSflXfsyFjgktKqf4Bc4C8xoGmM",
    },
]
const crearVideos = () => {
    const contenedorVideos = document.getElementById("videos");
    for(const video of videoArray){
        contenedorVideos.innerHTML +=
        `<div id="listaVideos">
        <h2><strong>${video.titulo}</strong></h2>
        <embed src="${video.videoInsertado}" width="380" height="auto"/>
        </div>
        `
    }
}   
crearVideos();
