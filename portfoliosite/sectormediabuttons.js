const vid0 = "https://www.youtube.com/embed/HLB-U8xkvaY?si=hz5ngUbN4vU71mwg"
const vid1 = "https://www.youtube.com/embed/pfa6kK1Qu0U?si=ADZtyitrb4q8wDIa"
const vid2 = "https://www.youtube.com/embed/WZ744YiAbQ0?si=kKRpKNhars8ZdOsf"

const title0 = "replika music video from <i>someone to watch over us </i>"
const title1= "excerpt of ExSHA set visuals from SLUSHWAVE 2024"
const title2= "excerpt of PUDERPOLLI set visuals from SLUSHWAVE 2023"

const title0jp = "「someone to watch over us」から「replika」MV"
const title1jp = "「SLUSHWAVE 2024」から「ExSHA」のライブセットの抜粋"
const title2jp = "「SLUSHWAVE 2023」から「PUDERPOLLI」のライブセットの抜粋"


const media = [vid0, vid1, vid2];
const mediatitle = [title0, title1, title2];
const mediatitleJP = [title0jp, title1jp, title2jp];

var index = 0;
var videoElement = document.getElementById("sectormedia");
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
