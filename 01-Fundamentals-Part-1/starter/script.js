const data1 = {
  mark: {
    weight: 78,
    height: 1.69,
  },
  john: {
    weight: 92,
    height: 1.95,
  },
};

const data2 = {
  mark: {
    weight: 95,
    height: 1.88,
  },
  john: {
    weight: 85,
    height: 1.76,
  },
};

function getBmi(person) {
  return person.weight / person.height ** 2;
}

let markHigherBMI;
markHigherBMI = getBmi(data1.mark) > getBmi(data1.john);
console.log(markHigherBMI);
markHigherBMI = getBmi(data2.mark) > getBmi(data2.john);
console.log(markHigherBMI);
