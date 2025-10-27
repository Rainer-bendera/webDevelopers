
function generateQR(){

    let imgBox = document.getElementById("imgBox");
    let qrImg = document.getElementById("qrImg")
    let qrText = document.getElementById("qrText");

    if(qrText.value.length > 0){
        imgBox.style.maxHeight = "auto";
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodeURIComponent(qrText.value);
        imgBox.style.border = "2px solid #000";
        imgBox.classList.add("show-img");
    }

}