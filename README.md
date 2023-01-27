# AIfA Telescope Gallery

Welcome everyone to the AIfA telescope gallery. This is a place where we share exciting results from observations with the 50cm rooftop telescope of the Argelander Institute for Astronomy (AIfA) in Bonn.
If you also have some exciting results to show, get in touch, we're happy to show you how to add it by yourself.

Visit the Gallery at https://aifatelescope.github.io

## How it works

The source that you push to this repository is automatically served at the URL mentioned above.

In this repository you find a folder called *card_template*. In this folder is everything you need to create your own card on the website. Just create such a card, following this template or an existing card, in the *cards* directory. In there you should place two versions of your image(s). 
One is just the thumbnail, which should not be **no larger than 100 kB** (and for sure less than 1000 pixels wide). The other one is the large version of your image, which will be shown if a visitor of the website clicks on the image. This one should be **no larger than about 1 MB**. All you need to do now is fill out the cards template in the HTML. Give the file paths to your thumbnail images **with respect to index.html**. You don't need to give paths to the fullsize images, they will be used for the enlarged images automatically. For the JS implementation to work, it is important that your two images (one thumbnail one full-size) are named **exactly the same** but only placed in different folders. If you want to use the carousel for multiple images, do not forget to give an unique id to your carousel and replace the placeholders <unique_id> in the template with that id for the carousel to work. In more details: Give your div for example the id "id1" and then you have to set the data-bs-target of the buttons to "#id1" in order to make them work. Just keep in mind that the id you are giving the div must be unique on the webpage.  
It would be nice if you would write something about the image in the content div; like technical details or interesting side notes. If you are happy with your card, the last step is going into the index.html and include your cards at the indicated position.
You can just copy paste one of the already existing div's, which imports a card. You only need to change the filepath to your cards html. There is no automatic sorting going on currently, so it would be nice if you could insert your card at the right position, such that 
everything is in inverse chronological order (if your image is the newest, place it on top). 

Opening the *index.html* without a underlying server (which might also be a local server on your PC) will not display the cards. So do not bother if your card is not shown locally as the cards are imported via a HTTP request, which only works with a server. 

### Thank you for sharing your results!
