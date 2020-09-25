// First approach
// var myRect = {
//     area : (x,y) => (x*y),
//     perimeter: (x,y) => (2*(x+y))
// };

// Second approach with module
var myRect = require ("./rectangle")

function calRect(l,w) {
    console.log("**** Calculating area & perimeter of rectanglr for length: " + l + " and width: " + w +" ****");

    if (l<=0 || w<=0) {
        console.log("Error: The diameter should be greater than zero");
        console.log("\n");
    } else {
        console.log("Length: " + l + " Width: "+ w +" The area of rectangle is: " + myRect.area(l,w));
        console.log("Length: " + l + " Width: "+ w +" The perimeter of rectangle is: " + myRect.perimeter(l,w));
        console.log("\n");
    }
    
}

calRect(2,3);
calRect(3,5);
calRect(0,5);
calRect(6,-1);





