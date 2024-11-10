const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  const length = arr.length;
  var temp = "";
  for (let index = 0; index < length; index++) {
    const element = arr[index];
    temp += "..." + element + "ºC in days " + Number.parseInt(index + 1);
  }
  return temp;
};

console.log(printForecast(data1));
console.log(printForecast(data2));
