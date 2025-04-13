var isEng = true;

var langbutton = document.getElementById("langtogglebutton")
var darkbutton = document.getElementById("darkmodebutton")
var prevbutton = document.getElementById("prev");
var nextbutton = document.getElementById("next");
var engP = document.getElementById("en");
var jpP = document.getElementById("jp");
var engTitle = document.getElementById("mediatitleEN")
var jpTitle = document.getElementById("mediatitleJP")

function switchLangscyph(){
    if (isEng) {
        langbutton.innerHTML = "English";
        engP.style.display = "none";
        jpP.style.display = "block";
        if(!isOn){
            darkbutton.innerHTML = "暗いモード";
        } else {
            darkbutton.innerHTML = "明るいモード";
        }
    } else {
        langbutton.innerHTML = "日本語";
        engP.style.display = "block";
        jpP.style.display = "none";
        if(!isOn){
            darkbutton.innerHTML = "Dark Mode";
        } else {
            darkbutton.innerHTML = "Light Mode";
        }
    }
    isEng = !isEng;
}

function switchLang(){
    if (isEng) {
        langbutton.innerHTML = "English";
        engP.style.display = "none";
        jpP.style.display = "block";
        engTitle.style.display = "none";
        jpTitle.style.display = "block";
        if(!isOn){
            darkbutton.innerHTML = "暗いモード";
        } else {
            darkbutton.innerHTML = "明るいモード";
        } 
        nextbutton.innerHTML = "次";
        prevbutton.innerHTML = "前";
    } else {
        langbutton.innerHTML = "日本語";
        engP.style.display = "block";
        jpP.style.display = "none";
        engTitle.style.display = "block";
        jpTitle.style.display = "none";
        if(!isOn){
            darkbutton.innerHTML = "Dark Mode";
        } else {
            darkbutton.innerHTML = "Light Mode";
        }
        nextbutton.innerHTML = "Next";
        prevbutton.innerHTML = "Prev";
    }
    isEng = !isEng;
}

