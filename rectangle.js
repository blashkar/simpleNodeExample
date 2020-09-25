// exports.area = (x,y) => (x*y) 
// exports.perimeter = (x,y) => (2*(x+y))

// module.exports = {
//     area: (x,y) => (x*y),
//     perimeter: (x,y) => (2*(x+y))
// }


module.exports = (x,y,callback) => {

    if (x<=0 || y<=0) {

        setTimeout(() => callback(new Error("Diameter should be greater than zero"),null),2000);
        
    } else {

        setTimeout(() => callback(null,{area: (x,y) => (x*y), perimeter: (x,y) => (2*(x+y))}),2000);
        
    }



}
