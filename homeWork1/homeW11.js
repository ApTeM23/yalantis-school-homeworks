// Write function, which takes two strings, and returns true if they are anagrams of one another.
function Anagrams(x1, x2) {

    let txt1 = x1.split('').sort().join('').trim();
    let txt2 = x2.split('').sort().join('').trim();
    if(txt1 === txt2){
        console.log("True");
    } else {
        console.log("False");
    }
}
Anagrams('str1','s t1r');

