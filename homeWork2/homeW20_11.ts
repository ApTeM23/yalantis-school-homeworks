function Anagrams(x1:string, x2:string) {

  let txt1 = x1.split('').sort().join('').trim();
  let txt2 = x2.split('').sort().join('').trim();
  if(txt1 === txt2){
      console.log("True");
  } else {
      console.log("False");
  }
}
Anagrams('str1','s t1r');
