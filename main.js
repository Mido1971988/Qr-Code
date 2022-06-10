import {QRCode} from "./qrcode.js"

let form = document.getElementById("form")
let output = document.getElementById("output")

form.addEventListener("submit",function(ev){
    ev.preventDefault()
    output.textContent = ""
    let url = document.getElementById("url").value
    let reg = /\b(?!www\.)\w+(?=\..)/ig
    let fileName = url.match(reg)[0]
    let color = document.getElementById("color").value
    let qrcode = new QRCode("output", {
        text: url,
        width: 177,
        height: 177,
        colorDark : color,
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    setTimeout(function(){
        let img = document.querySelector("img").getAttribute("src")
        let a = document.getElementById("download");
        a.style.display ="block";
        a.href = img; 
        a.download = `${fileName}.png`; 
    },100)
    document.getElementById("url").value = ""
    document.getElementById("color").value = ""
})