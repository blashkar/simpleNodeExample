// First approach
// var myRect = {
//     area : (x,y) => (x*y),
//     perimeter: (x,y) => (2*(x+y))
// };

// Second approach with module
var myRect = require ("./rectangle")

function calRect(l,w) {
    console.log("**** Calculating area & perimeter of rectanglr for length: " + l + " and width: " + w +" ****");

    myRect(l,w, (err,behi) => {

        if (err) {
            console.log("Error:", err.message);
            console.log("\n");
            
        } else {

            console.log("Length: " + l + " Width: "+ w +" The area of rectangle is: " + behi.area(l,w));
            console.log("Length: " + l + " Width: "+ w +" The perimeter of rectangle is: " + behi.perimeter(l,w));
            console.log("\n");
            
        }
    });

    console.log("This statement is after the call to MyRect");
    
}

calRect(2,3);
calRect(3,5);
calRect(0,5);
calRect(6,-1);





