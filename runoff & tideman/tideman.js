function tally(list) {
  const withoutMethod = (candidate)=> {
    return list.map(item => item.filter(element => element!==candidate));
  }
  let AB = withoutMethod("C"), 
      CA = withoutMethod("B"),
      BC = withoutMethod("A");
  console.log(AB, BC, CA);
const calMargin = (pair, firstItem, secondItem)=> {
  return pair.filter(item => item[0]=== firstItem).length - pair.filter(item=> item[0]===secondItem).length;
}
//in this case if the calMargin is negative, then it means the edge is pointing at different direction
let marginAB = calMargin(AB, "A","B");
let marginCA =calMargin(CA, "C","A");
let marginBC = calMargin(BC, "B","C");
return {AB: marginAB, BC: marginBC, CA: marginCA};

}
function tideman(list) {
const tallyList = tally(list);
console.log(tallyList);
voteTally = Object.values(tallyList); //only keep the values of tally
let lastEdge = Math.min(...voteTally);
return Object.entries(tallyList).find(item => item.includes(lastEdge))[0][1];

// last edge of all edges is the source in this case and it should produce the tideman winner
// here I use [0] to find the name of last edge, and [1] to find the node of where edge points to

}
tideman([["A","C","B"],["B","A","C"],["A","B","C"],["B","C","A"],["C","A","B"],["B","C","A"],["A","B","C"],["B","C","A"],["A","C","B"]]);