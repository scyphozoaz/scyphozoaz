const vid0 = "wouldamv.mp4"

const title0 = "Jikuu Tenshou Nazca AMV - Would? (Alice in Chains)"

const title0jp = "時空転抄ナスカAMV - 「Would?」(Alice in Chains)"

const media = [vid0];
const mediatitle = [title0];
const mediatitleJP = [title0jp];

var index = 0;
var videoElement = document.getElementById("JTNmedia");
var videoTitleEN = document.getElementById("mediatitleEN");
var videoTitleJP = document.getElementById("mediatitleJP");

function next(){
    if (index < (media.length - 1)){
        videoElement.removeAttribute("src");
        index = index+1;
        videoElement.setAttribute("src", media[index]);
        videoTitleEN.innerHTML=mediatitle[index];
        videoTitleJP.innerHTML=mediatitleJP[index];
    } else {
        videoElement.removeAttribute("src");
        index = 0;
        videoElement.setAttribute("src", media[index]);
        videoTitleEN.innerHTML=mediatitle[index];
        videoTitleJP.innerHTML=mediatitleJP[index];
    }
}

function prev() {
    if (index > 0){
        videoElement.removeAttribute("src");
        index = index-1;
        videoElement.setAttribute("src", media[index]);
        videoTitleEN.innerHTML=mediatitle[index];
        videoTitleJP.innerHTML=mediatitleJP[index];
    } else {
        videoElement.removeAttribute("src");
        index = media.length - 1;
        videoElement.setAttribute("src", media[index]);
        videoTitleEN.innerHTML=mediatitle[index];
        videoTitleJP.innerHTML=mediatitleJP[index];
    }
}

function loadIndex(int){
    videoElement.removeAttribute("src");
    index = int;
    videoElement.setAttribute("src", media[index]);
    videoTitleEN.innerHTML=mediatitle[index];
    videoTitleJP.innerHTML=mediatitleJP[index];
}
