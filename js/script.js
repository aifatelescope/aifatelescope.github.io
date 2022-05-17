function resetImg(img) {
  img.setAttribute('class', 'img-fluid card-top-img')
  img.setAttribute('onclick', 'enlargeImg(this)')

}
// Function to increase image size
function enlargeImg(img) {

    var currWidth = img.clientWidth;
    var currHeight = img.clientHeight;
    var desired_scale_x = 0.9 * screen.width / currWidth
    var desired_scale_y = 0.9 * screen.height / currHeight

    var image_x = 0.1 * screen.width
    var image_y = 0.1 * screen.height
    img.className = "fullscreen";
    img.setAttribute('onclick', 'resetImg(this)')


}

