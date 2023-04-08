function pokaz() {
    const element = document.getElementById('nav');
    if(element.style.display == "none"){
        setTimeout(2200);
        element.style.display = "block";
        console.log("Wyswietlono");
    }
    else {
        setTimeout(2200);
        element.style.display = "none";
        console.log("Schowano"); 
    }
}