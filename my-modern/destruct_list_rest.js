const list = [10, 20, 30];
const [one, ...rest] = list;
console.log(one, rest);     // 결과: 10 [20, 30]