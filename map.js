const arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
  const element = arr[i] + arr[i];
  console.log(element);
}
const result = arr.map(function (element, index, array) {
  console.log(element, index, array);
  const onElement = element;
  const dobole = onElement * onElement;
  console.log(dobole, index, array);

  return element * element;
});

const result = arr.map((x) => x * x);

console.log(result);
