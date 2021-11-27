function rot13(str) {
  // Create a list of letters in the alphabet
  let lettInAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  
  // Split string into letters
  let lettInStr = str.split('')

  // Create a storage variable containing an empty string that 
  //  will contain the new letters
  let lettInRot13 = ""

  // Loop through the lettersInString
  // sIndex: string index
  for (let sIndex in lettInStr) {
    
    // If it is a letter from A to Z etc.
    if (/[A-Z]/.test(lettInStr[sIndex])) {
      
      // Loop through letters in the alphabet
      // aIndex: alphabet index
      for (let aIndex in lettInAlp) {
        
        // If lettersInString equals letterInAlphabet
        if (lettInStr[sIndex] == lettInAlp[aIndex]) {
          
          // Add 13 to the alphabet index
          aIndex = parseInt(aIndex) + 13
          
          // If it spills over 25
          if (aIndex > 25) {
            
            // Values with index more than 25 should start counting
            //  all over from "A" again
            aIndex = aIndex % 26
          }

          // concatenate the letter having index + 13 with the storage variable
          lettInRot13 += lettInAlp[aIndex]
        }
      }
    }
    // Else 
    else {
      //  concatenate the letter with the storage variable
      lettInRot13 += lettInStr[sIndex]
    }
  }
  console.log(lettInRot13)
  return lettInRot13
}

rot13("SERR PBQR PNZC");