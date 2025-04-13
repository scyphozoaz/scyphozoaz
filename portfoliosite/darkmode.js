var isOn = false;

function darkscyph(){
    var thebody = document.body;
    var scyphmain = document.getElementById("scyph");
    var header = document.getElementById("scyphheader");
    var darkbutton = document.getElementById("darkmodebutton");
    var langbutton = document.getElementById("langtogglebutton");
    thebody.classList.toggle("darkmode");
    scyphmain.classList.toggle("darkmode");
    if (!isOn){
        scyphmain.style.border = "5px solid white";
        darkbutton.style.border = "5px solid white";
        langbutton.style.border = "5px solid white";
        header.setAttribute("src","scyphheaderdark.png");
        if(isEng){
            darkbutton.innerHTML = "Light Mode";
        } else {
            darkbutton.innerHTML = "明るいモード";
        }
    } else {
        scyphmain.style.border = "5px solid black";
        darkbutton.style.border = "5px solid black";
        langbutton.style.border = "5px solid black";
        header.setAttribute("src","scyphheader.png");
        if(isEng){
            darkbutton.innerHTML = "Dark Mode";
        } else {
            darkbutton.innerHTML = "暗いモード";
        }
    }
    isOn = !isOn;
}

function darkDJA(){
    var thebody = document.body;
    var main = document.getElementById("DJA");
    var button = document.getElementById("darkmodebutton");
    thebody.classList.toggle("darkmode");
    main.classList.toggle("darkmode");
    if (!isOn){
        button.innerHTML = "Light Mode";
        if(isEng){
            darkbutton.innerHTML = "Light Mode";
        } else {
            darkbutton.innerHTML = "明るいモード";
        }
    } else {
        button.innerHTML = "Dark Mode";
        if(isEng){
            darkbutton.innerHTML = "Dark Mode";
        } else {
            darkbutton.innerHTML = "暗いモード";
        }
    }
    isOn = !isOn;
}

function darksector(){
    var thebody = document.body;
    var main = document.getElementById("sector");
    var header = document.getElementById("sectorheader");
    var button = document.getElementById("darkmodebutton");
    thebody.classList.toggle("darkmode");
    main.classList.toggle("darkmode");
    if (!isOn){
        header.setAttribute("src","sectorheaderdark.png");
        button.innerHTML = "Light Mode";
    } else {
        header.setAttribute("src","sectorheader.png");
        button.innerHTML = "Dark Mode";
    }
    isOn = !isOn;
}

function darkJTN(){
    var thebody = document.body;
    var main = document.getElementById("JTN");
    var button = document.getElementById("darkmodebutton");
    thebody.classList.toggle("darkmode");
    main.classList.toggle("darkmode");
    if (!isOn){
        button.innerHTML = "Light Mode";
    } else {
        button.innerHTML = "Dark Mode";
    }
    isOn = !isOn;
}