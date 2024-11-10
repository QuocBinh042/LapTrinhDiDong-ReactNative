const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const tips = new Array();
const totals = new Array();

const billsLen = bills.length;
for (let index = 0; index < billsLen; index++) {
  const element = bills[index];
  tips.push(calcTip(element));
  totals.push(element + tips[index]);
}

const calcAverage = (arr) => {
  var sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum / arr.length;
};

console.log(calcAverage(totals));
