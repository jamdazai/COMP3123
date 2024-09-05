// Program to find the types of a given angle.
function angle_Type(degrees){
    return (typeof degrees !== 'number' || isNaN(degrees) || degrees < 0 || degrees > 180)?
            "Invalid input" :
           (degrees > 0 && degrees < 90) ? "Acute angle":
           (degrees == 90) ? "Right angle":
           (degrees > 90 && degrees < 180) ? "Obtuse angle":
           "Straight angle";        
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));
console.log(angle_Type(280));