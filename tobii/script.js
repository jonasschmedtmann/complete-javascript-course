'Use strict';
/*const tobi={
    firstName:'Tobi',
    lastName:'Feyi',
    birthYear:1999,
    job: 'Tech-babe',
    friends:['Kayode','Dave', 'Toba'],
    hasDriversLicense:true,

    age:function(){
        return 2022-1999;
    },
    getSummary:function(){
            console.log(`${this.firstName} is a ${this.age()} -year old ${this.lastName} and she has ${this.hasDriverlicense?'a':'no'`} driver's license'),
    }
    */

    const mark={
        fullName:'Mark Miller',
        mass:78,
        height:1.69,
        calBmi:function(){
            this.bmi=this.mass/this.height **2;
            return this.bmi;

        }
    }
    const john ={
       fullName:'John Smith',
        Mass:92,
        height:1.95,
        calBmi:function(){
            this.bmi=this.mass/this.height **2;
            return this.bmi;

    }
}
  
mark.calBmi();
john.calBmi();

console.log(mark.calBmi,john.calBmi);
    if(mark.bmi> john.bmi){
        console.log(`${mark.fullName} BMI is higher ${this.bmi} than ${john.fullName} ${john.bmi}`)
    }
else if(john.bmi>mark.bmi){
    console.log(`${john.fullName} BMI is higher ${john.bmi} than ${mark.fullName} ${mark.bmi}`)

}

for(let rep=1; rep<=10; rep++){
    console.log(`Lifting weight repitition ${rep}`)

}  

const years=[1998,1997,1996,1995];
const ages=[];
for( let i=0;i<years.length ;i++){
   ages.push (2022-years[i])
}
console.log(ages);

/*for(let i=0; i<jonas.length; 1++){
    if(typeof jonas[i]=== 'string')
    continue;
}
console.log(jonas[i], typeof jonas[i]);
 for (let i=jonas.length-1; i>0; i-- );
// 43210

 for(let i=0; i<=jonas.length; i++);{
     console.log(jonas[i]);
 }

 for(let exercise=1; exercise<4; exercise++){
     console.log(`Starting exercise $(exercise)`);
 };

 for(let rep =1; rep<6; rep++){
     console.log(` Exercise $(exercise):Lifting weight repitition $(rep)`)
 }*/
 



const calTip =function(bill){
    return bill >=50 && bill <=300 ? bill* 0.5: bill* 0.2
}

const tips =[];
const totals = [];

const bills =[22,295,176,440,37,105,10,1100,86,52]
    for(let i=0 ;i<bills.length; i++){
        const tip= calTip(bills[i]);
        tips.push (tip);
        totals.push(tip+ bills[i])
    }
console.log(bills,tips,totals);


const birthYear=function(year){
    return 2037-year; 
}

const tobi=[]
const feyi=[]
const esther=[]
const dob =[1998,1999,2000,2001,2004]

for(let i=0; i<dob.length; i++){
     const everyone =birthYear(dob[i]);
     tobi.push (everyone);
     feyi.push (everyone);
     esther.push (everyone);
}

console.log(tobi,feyi,esther);


const sobi = {
    name:'Tobi',
    age:birthYear(1999),
    job:'Tech-babe',
    friends:['Fisayo','Tomi','Esther'],
    driverLicense:true
    

};
console.log(sobi.friends)
console.log(sobi['job'])
console.log(`I'm ${sobi.name} a ${sobi.job}`)


const jonas = ['Micheal', 'Titi', 'Fisayo']
console.log(`Jonas has three ${jonas} and his best friend is ${jonas[0]}`);

const about = function(){
    return` ${sobi.name} is ${birthYear(1999)} and has  ${sobi.driverLicense ? "a": "no"} driver's license`
}

console.log(sobi['age'])


const lobi= function(name,age,school,church){
    this.name= name
    this.age= age
    this.school= school
    this.church= church

}

const yeyi= new lobi('Tobi','19','AAUA','CAC')
console.log(yeyi)

const hhbi= [2,3,3,5]
hhbi.push[4]
hhbi.shift[1]

hhbi.unshift()
hhbi.pop()
const bthYear= year => 2022-year
console.log(bthYear(1999));