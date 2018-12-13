// john
var johnAvg = (89 + 120 + 103) / 3;
var johnRoundedAvg = Math.round(johnAvg);
// Mark
var markAvg = (89 + 122 + 103) / 3;
var markRoundedAvg = Math.round(markAvg);
// Mary
var maryAvg = (89 + 122 + 103) / 3;
var maryRoundedAvg = Math.round(maryAvg);


// John vs Mark
if ( johnRoundedAvg < markRoundedAvg ) {
  console.log('Mark wins ' + markRoundedAvg + ' - ' + johnRoundedAvg);
} else if ( johnRoundedAvg > markRoundedAvg ) {
  console.log('John wins ' + johnRoundedAvg + ' - ' + markRoundedAvg);
} else {
  console.log('John and Mark have tied at ' + johnRoundedAvg + ' - ' + markRoundedAvg);
}


// John vs Mark vs Mary
if ( johnRoundedAvg > markRoundedAvg && johnRoundedAvg > maryRoundedAvg) {
  console.log('John wins with the high score of ' + johnRoundedAvg);
} else if ( markRoundedAvg > johnRoundedAvg && markRoundedAvg > maryRoundedAvg ) {
  console.log('Mark wins with the high score of ' + markRoundedAvg);
} else if ( maryRoundedAvg > johnRoundedAvg && maryRoundedAvg > markRoundedAvg ) {
  console.log('Mary wins with the high score of ' + maryRoundedAvg);
} else if ( maryRoundedAvg < johnRoundedAvg && maryRoundedAvg < markRoundedAvg ) {
    console.log('John and Mark tied with a score of ' + maryRoundedAvg);
} else if ( johnRoundedAvg < maryRoundedAvg && johnRoundedAvg < markRoundedAvg ) {
    console.log('Mark and Mary tied with a score of ' + maryRoundedAvg);
} else if ( markRoundedAvg < johnRoundedAvg && markRoundedAvg < maryRoundedAvg ) {
    console.log('John and Mary tied with a score of ' + johnRoundedAvg);
} else {
  console.log('John, Mary, and Mark have all tied with a score of ' + johnRoundedAvg + ' ' + markRoundedAvg + ' ' + maryRoundedAvg);
}
