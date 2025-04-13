const vid0 = "https://www.youtube.com/embed/rK94BbkhzR0?si=Umv5WKW-rxWZ0dVx"
const vid1 = "https://www.youtube.com/embed/AyIKvZGhKf0?si=4MD5TdgwYikpRoDD"
const vid2 = "https://www.youtube.com/embed/oICH1IV557c?si=Jn-30oeuUT7ZPQpt"


const title0 = "Skylive 2024 FULL SET"
const title1 = "INFINTY DARK music video from Skylive 2024"
const title2 = "VOID IMAGINATION music video from Skylive 2024"

const title0jp = "「Skylive 2024」 ライブセット"
const title1jp = "「Skylive 2024」から「INFINITY DARK」MV"
const title2jp = "「Skylive 2024」 から「VOID IMAGINATION」MV"


const media = [vid0, vid1, vid2];
const mediatitle = [title0, title1, title2];
const mediatitleJP = [title0jp, title1jp, title2jp];

var index = 0;
var videoElement = document.getElementById("DJAmedia");
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
