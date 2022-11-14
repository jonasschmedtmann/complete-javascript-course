////////////////////////////////////
// Coding Challenge #4

/*
스티븐은 그가 레스토랑에 가서 식사를 할 때마다 사용할 수 있는 아주 간단한 팁 계산기를 만들고 싶어한다. 
그의 나라에서는 음식 값이 50에서 300 사이이면 15%를 팁으로 주는 것이 보통이다. 값이 다를 경우 팁은 20%입니다.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

let bill = 275;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

let result = `The bill was ${bill}, the tip was ${tip}, and the total value ${
  bill + tip
}`;
console.log(result);
