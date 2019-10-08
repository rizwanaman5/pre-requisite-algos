// Write a program check whether given character is an alphabet or not

/**
 * No point building a check for all the alphabets of course, its better 
 * to do it through ASCII codes...
 */

 const alphabet = (a) => {

     // .charCodeAt gives me the ascii value of a
     let acsiiCode = a.charCodeAt()

     // then we just put an if condition to check whether it is an alphabet or not.
     if (acsiiCode >= 97 && acsiiCode <= 122 || acsiiCode >= 65 && acsiiCode <= 90) {
         console.log(a, 'is an alphabet')
     } else {
         console.log(a, 'is not an alphabet')
     }
 }

 alphabet("10")