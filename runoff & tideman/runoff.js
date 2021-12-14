function runoff(votes) {
  const majority = votes.map(vote => vote[0]);
  console.log(majority);
  let count = majority.reduce((allNames, name)=> {
    if(name in allNames) 
      allNames[name]++;
    else allNames[name]=1;
    return allNames;
  }, {});
  console.log(count);
  let mostOccurance = Math.max(...Object.values(count));
  let mostCountPercent = mostOccurance/votes.length;
  let majorityWinner = ()=> {
    if(mostCountPercent>0.5) return Object.keys(count).find(key => count[key] === mostOccurance);
    else runoffRound(votes, count);
  };
  console.log(majorityWinner());
}
function runoffRound(votes, count) {
  let leastOccurance = Math.min(...Object.values(count));
  let eliminatedPlayer = Object.keys(count).find(key=> count[key] === leastOccurance);
  let runoffVotes = votes.map(vote=> vote.filter(element=> eliminatedPlayer !== element));
  let winner = ()=> {
    let finalCount = runoffVotes.map(vote => vote[0]).reduce((allNames, name)=> {
      if(name in allNames)
        allNames[name]++;
      else allNames[name]=1;
      return allNames;
    },{});
    console.log(finalCount);
    let mostOccurance = Math.max(...Object.values(finalCount));
    return Object.keys(finalCount).find(key=> finalCount[key]=== mostOccurance);
  };
  return winner();
}
runoff([['a', 'b', 'c'],['b','a','c'],['a','c','b'],['a','c','b'],["c",'b','a'],['b','a','c']]);