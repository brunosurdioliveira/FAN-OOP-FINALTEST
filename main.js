let pics = ["Chrysanthemum", "Desert", "Hydrangeas", "Jellyfish", "Koala", "Lighthouse", "Penguins", "Tulips"];
let objArray = []; // empty object array
let ctx; // context object
let xPic = 0; // current picture index
const wait = 500; // wait time (milliseconds) for picture to load

class PicType {
    // define Constructor
    constructor(name, width, height) {
        this._name = name; // String
        this._width = width; // Integer
        this._height = height; // Integer
    }

    // Setter method for each property
    set name(newName) {
        if (newName) {
            this._name = newName;
        }
    }

    set width(newWidth) {
        if (newWidth) {
            this._width = newWidth;
        }
    }

    set height(newHeight) {
        if (newHeight) {
            this._height = newHeight;
        }
    }

    // Getter method for each property
    get name() {
        return this._name;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}

function startMeUp() {
    // create the "objArray" of picture objects
    // code up a “for.. loop” that will traverse the global array called “pics”
    pics.forEach(element => {
        // Create a new PicType and push it to the objArray
        objArray.push(new PicType(element, 256, 192));
    });
    
    ctx = document.getElementById("canvas").getContext("2d");
    
    // load and display the first image
    document.getElementById("pic").src = "Pictures/" + objArray[xPic].name + ".jpg";
    setTimeout(showHTML5Pic, wait);
}

// usually called from setTimeout because we want to know
// the "pic" image control has finished loading before trying to redraw
// the image on the HTML5 "canvas"
// the only exception is when we call from within the "saveProps" function
// because in "saveProps" we don't need to wait for an image to load
function showHTML5Pic() {
    // get a reference to the current "pic" image
    let img = document.getElementById("pic");
    
    // clear the full canvas and then draw the canvas image from the "pic" image control
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // draw the canvas image using the "pic" version
    // start the image in the upper left hand corner and use current width and height
    // see HTML5_Pic.html for example showing how to do this
    ctx.drawImage(img, 0, 0, objArray[xPic].width, objArray[xPic].height);
    
    // using the currently selected picture object, display the name, width and height properties
    // in the 3 text boxes
    document.getElementById("txtName").value = objArray[xPic].name;
    document.getElementById("txtWidth").value = objArray[xPic].width;
    document.getElementById("txtHeight").value = objArray[xPic].height;
}

// save the width and height values to the currently selected object properties
// and then redisplay the HTML5 version of the picture
function saveProps() {
    objArray[xPic].width = document.getElementById("txtWidth").value;
    objArray[xPic].height = document.getElementById("txtHeight").value;
    setTimeout(showHTML5Pic, wait);
}

// move to the previous object and then display...
// name, width and height properties and the correct image
// check for array bounds
function previousPic() {
    if (xPic <= 0) {
        xPic;
        alert("There are no more Pictures to display previous!")
    }
    else {
        xPic--;
    }
    // xPic = (xPic <= 0) ? xPic : (xPic - 1);
    // load the new picture into the "pic" image
    // use the "showHTML5Pic" function to update "canvas" image and text boxes
    document.getElementById("pic").src = "Pictures/" + objArray[xPic].name + ".jpg";
    setTimeout(showHTML5Pic, wait);
}

// move to the next object and then display...
// name, width and height properties and the correct image
// check for array bounds
function nextPic() {
    if (xPic >= objArray.length - 1) {
        xPic;
        alert("There are no more Pictures to show next!");
    }
    else {
        xPic++;
    }
    // xPic = (xPic >= objArray.length - 1) ? xPic : (xPic + 1);
    // load the new picture into the "pic" image
    // use the "showHTML5Pic" function to update "canvas" image and text boxes
    document.getElementById("pic").src = "Pictures/" + objArray[xPic].name + ".jpg";
    setTimeout(showHTML5Pic, wait);
}