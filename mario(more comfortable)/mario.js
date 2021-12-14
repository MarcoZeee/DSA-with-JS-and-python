// mario(++) JS implementation

function pyra(height) {
  for(let i = 1; i<=height; i++) {
    console.log(' '.repeat(height-i) + '#'.repeat(i) + ' '.repeat(2) + '#'.repeat(i));
  }
}
pyra(5);

/*
       #  #
      ##  ##
     ###  ###
    ####  ####
   #####  #####
  ######  ######
 #######  #######

*/