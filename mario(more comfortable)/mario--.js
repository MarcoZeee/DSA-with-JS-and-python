// mario(I) JS implementation

function pyro(height) {
  for(let i = 1; i<=height; i++) {
    console.log("*".repeat(i));
  }
}
pyro(5);

/*
    *
    **
    ***
    ****
    *****
*/

//method2: recurssion

function mario(height) {
  if(height<1) return 1;
  mario(height - 1);
  for(let i = 0; i<= height; i++) {
    console.log("*".repeat(height));
    return;
  }
}
mario(6);

/*
    *
    **
    ***
    ****
    *****
    ******
*/