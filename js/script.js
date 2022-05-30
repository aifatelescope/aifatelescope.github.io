function resetImg(img) {
  img.setAttribute('style', '')
  img.setAttribute('class', 'img-fluid card-img-top')
  img.setAttribute('onclick', 'enlargeImg(this)')
  img.src = image_folder + "thumbnail/" + image_name;

   var elements = document.getElementsByClassName('carousel');
        for (var i in elements) {
          elements[i].style.visibility = "visible";
        }
}

var image_name = 0
var image_folder = 0
// Function to increase image size
function enlargeImg(img) {

    const currWidth = window.innerWidth;
    const currHeight = window.innerHeight;
    var desired_scale_x = 0.9 * currWidth / img.width
    var desired_scale_y = 0.9 * currHeight / img.height


    img.className = "fullscreen";
    image_name = img.src.split("thumbnail/").pop();
    image_folder = img.src.split("thumbnail/")[0];
    img.src = image_folder + "full_size/" + image_name;
    img.setAttribute('onclick', 'resetImg(this)');
    img.style.visibility = "visible";

    var elements = document.querySelectorAll('.fullscreen');
    for(var i=0; i<elements.length; i++){

        if (desired_scale_x > desired_scale_y) {
        elements[i].style.height = currHeight + "px";
        elements[i].style.width = "auto";
        }
        else {
        elements[i].style.width = currWidth + "px";
        elements[i].style.height = "auto";
        }

        const height = elements[i].height;
        const width = elements[i].width;


        elements[i].style.borderTop =  (window.innerHeight - 0.95 * height) / 2 + "px solid #f4f4f4";
        elements[i].style.borderBottom = (window.innerHeight - 0.95 * height) / 2 + "px solid #f4f4f4";
        elements[i].style.borderLeft = (window.innerWidth - 0.95 * width)  / 2 + "px solid #f4f4f4";
        elements[i].style.borderRight = (window.innerWidth - 0.95 * width) / 2 + "px solid #f4f4f4";

       var elements = document.getElementsByClassName('carousel');
        for (var i in elements) {
          elements[i].style.visibility ="hidden";
        };

    };


}

