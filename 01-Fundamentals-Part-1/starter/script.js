// let firstName = "Batuk"
// alert("kya re lawdya")
// console.log(firstName)

// const massMark = 78
// const highMark = 1.69

// const massJohn = 95
// const highJohn = 1.76

// const markBMI = massMark / highMark ** 2
// const johnBMI = massJohn / highJohn ** 2

// console.log(markBMI, johnBMI)

// if (markBMI > johnBMI) {
//     alert(`Mark (${markBMI}) is more.`)
// } else {
//     alert(`John (${johnBMI}) bade bhai!`)
// }
// ******************************************************
// const age = 12

// if (age >= 18) {
//     alert("Khub bhalooooooo!🥳")
// } else {
//     yearsLeft = 18 - age
//     alert(`Bhakk lawde! \n\ ${yearsLeft} saal k baad aana!🥸`)
// }
// ******************************************************
// dp1 = prompt('Dolphin score 1: ')
// dp2 = prompt('Dolphin score 2: ')
// dp3 = prompt('Dolphin score 3: ')

// kp1 = prompt('Koalas score 1: ')
// kp2 = prompt('Koalas score 2: ')
// kp3 = prompt('Koalas score 3: ')

// dAvg = (dp1 + dp2 + dp3) / 3
// kAvg = (kp1 + kp2 + kp3) / 3

// console.log(dAvg, kAvg)

// if (dAvg >= 100 && kAvg >= 100) {
//     if (dAvg > kAvg) {
//         alert('Dolphins win!')
//     } else if (dAvg < kAvg) {
//         alert('Koalas win!')
//     } else {
//         alert('Tie')
//     }
// } else if (dAvg <= 100) {
//     alert('Dolphins lost!')
// } else if (kAvg <= 100) {
//     alert('Koalas lost!')
// }
// ******************************************************

// bill = prompt('Total amount')
// tip = bill <= 300 && bill >= 50 ? 0.15 * bill : 0.2 * bill
// alert(`The bill was ${bill}, The tip was ${tip}, and total value ${Number(bill) + Number(tip)}.`)
// ******************************************************

// calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3

// function checkWinner(team1, t11, t12, t13, team2, t21, t22, t23) {
//     avg1 = calcAverage(t11, t12, t13)
//     avg2 = calcAverage(t21, t22, t23)
//     if ((avg1 / avg2) >= 2 || (avg2 / avg1) >= 2) {
//         win = avg1 > avg2 ? team1 : team2
//         alert(`${win} win (${avg1} vs ${avg2})`)
//     } else {
//         alert('Low score!')
//     }
// }

// checkWinner('Dolphins', 85, 54, 41, 'Koalas', 23, 34, 27)
// ******************************************************

// jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schneider',
//     birth: 1991,
//     pronouns: ['he', 'him'],
//     job: 'techer',
//     friends: ['ooo', 'lala', 'baby'],
//     hasDriversLicense: false,

//     calcAge: function () {
//         this.age = 2023 - this.birth
//         return this.age
//     },

//     licenseStr: function () {
//         this.str = this.hasDriversLicense ? 'a' : 'no'
//         return this.str
//     },

//     getSummary: function () {
//         alert(`${this.firstName} is a ${this.calcAge()} year old ${this.job}, and ${this.pronouns[0]} has ${this.licenseStr()} Diver's License.`)
//     }
// }

// jonas.getSummary()
// ******************************************************

// mark = {
//     fullname: 'Mark Miller', mass: 78, height: 1.69,
//     BMI: function () {
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }
// }

// john = {
//     fullname: 'John Smith', mass: 92, height: 1.95,
//     BMI: function () {
//         this.BMI = this.mass / this.height ** 2
//         return this.BMI
//     }
// }

// console.log(mark.BMI(), john.BMI())

// if (mark.BMI > john.BMI) {
//     alert(`${mark.fullname}'s BMI (${mark.BMI}) is greater than ${john.fullname}'s BMI (${john.BMI})`)
// } else if (mark.BMI < john.BMI) {
//     alert(`${john.fullname}'s BMI (${john.BMI}) is greater than ${mark.fullname}'s BMI (${mark.BMI})`)
// } else {
//     alert('Dono chuttad')
// }
// ******************************************************

// bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// tips = [];
// totals = [];

// for (i = 0; i < bills.length; i++) {
//   tip = bills[i] <= 300 && bills[i] >= 50 ? 0.15 * bills[i] : 0.2 * bills[i];
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log("Bills: ", bills);
// console.log("Tips: ", tips);
// console.log("Totals: ", totals);

// ******************************************************

// function calcAvg(arr) {
//   sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   alert(sum);
// }

// calcAvg(bills);
// ******************************************************
