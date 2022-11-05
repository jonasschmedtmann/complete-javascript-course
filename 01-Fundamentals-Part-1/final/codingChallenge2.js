////////////////////////////////////
// Coding Challenge #2

/*
과제 #1의 BMI 예제와 이미 작성한 코드를 사용하여 개선하십시오.

1. 누가 체질량지수(BMI)가 더 높은지 말해주는 좋은 출력물을 콘솔에 출력한다. 메시지는 다음 중 하나일 수 있습니다. "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. 템플릿 리터럴을 사용하여 BMI 값을 출력에 포함합니다. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉


GOOD LUCK 😀
*/

const markHeight = 1.69;
const markMass = 78;
const johnHeight = 1.95;
const johnMass = 92;

// const markHeight = 1.88;
// const markMass = 95;
// const johnHeight = 1.76;
// const johnMass = 85;

const markBMI = (markMass / markHeight ** 2).toFixed(1);
const johnBMI = (johnMass / (johnHeight * johnHeight)).toFixed(1);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`john's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
