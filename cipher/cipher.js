function cipher(pattern, text) {
  let arrPattern = Array.from(pattern);
  let arrAlph = Array.from("abcdefghijklmnopqrstuvwxyz");
  let newText = [];
  if(arrPattern.length !== 26 || !text== String ) {
    return "Invalid pattern or text is not string";
  }
  
  for(let letter of text) {
    for(let i in arrAlph) {
      if(letter === arrAlph[i] ||
         letter.toLowerCase() === arrAlph[i]) 
        newText.push(arrPattern[i]);
    } 
    if(/\W/.test(letter))
      newText.push(letter);
 }
  
  return (text.toUpperCase() === text)?
   newText.join('') : newText.join('').toLowerCase();

}
cipher('VCHPRZGJNTLSKFBDQWAXEUYMOI', "HELLO, JIJI");

