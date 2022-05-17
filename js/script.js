function resetImg(img) {
  img.setAttribute('style', '')
  img.setAttribute('class', 'img-fluid card-top-img')
  img.setAttribute('onclick', 'enlargeImg(this)')

}
// Function to increase image size
function enlargeImg(img) {

    var currWidth = window.innerWidth;
    var currHeight = window.innerHeight;
    var desired_scale_x = 0.9 * currWidth / img.width
    var desired_scale_y = 0.9 * currHeight / img.height


    img.className = "fullscreen";
    img.setAttribute('onclick', 'resetImg(this)')
    var elements = document.querySelectorAll('.fullscreen');
    for(var i=0; i<elements.length; i++){
        if (desired_scale_x > desired_scale_y) {
        elements[i].style.height = currHeight + "px";
        elements[i].style.width = "auto";
        elements[i].style.left = (currWidth - elements[i].width) / 2 + "px";
        }
        else {
        elements[i].style.width = currWidth + "px";
        elements[i].style.height = "auto";
        elements[i].style.top = (currHeight - elements[i].height) / 2 + "px";
        }
        elements[i].style.margin = "0 auto";
}


}

