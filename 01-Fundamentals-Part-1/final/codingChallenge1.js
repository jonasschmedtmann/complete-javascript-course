////////////////////////////////////
// Coding Challenge #1

/*
Mark와 John은 그들의 체질량지수(BMI)를 비교하려고 노력하고 있는데, 이것은 다음 공식을 사용하여 계산된다.

BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Mark와 John의 질량과 키를 변수로 저장
2. 공식을 사용하여 그들의 두 BMI를 모두 계산하세요 (두 버전을 모두 구현할 수도 있습니다)
3. boolean 변수 'markHigherBMI'를 생성합니다.마크가 존보다 체질량지수(BMI)가 높은지에 대한 정보를 담고 있는 'BMI'입니다.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const markHeight = 1.69;
// const markMass = 78;
// const johnHeight = 1.95;
// const johnMass = 92;

const markHeight = 1.88;
const markMass = 95;
const johnHeight = 1.76;
const johnMass = 85;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);
