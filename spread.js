function foo(...rest) {
  console.log(rest);
}
foo(...[1, 2, 3]);

let arr3 = [1, 4];
let arr4 = [2, 3];
// arr3.splice(1, 0, arr4);
// console.log(arr3);
arr3.splice(1, 0, ...arr4);
console.log(arr3);

const origin = [1, 2];
const copy = [...origin];
console.log(copy);
console.log(copy === origin);

const object = { x: 1, y: 2 };
const copy1 = { ...object };
console.log(copy1);
console.log(object === copy1);

const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
console.log(merged);

// const merged1 = Object.assign({}, { x: 1, y: 2 }, { y: 3, x: 3 });
// console.log(merged1);
const merged1 = { ...{ x: 1, y: 2 }, ...{ y: 3, x: 3 } };
console.log(merged1);

const arr5 = [1, 2, 3];
const [one, two, three] = arr5;
console.log(one, two, three);

const [a, b] = [1, 2];
console.log(a, b);
const [c, d] = [1];
console.log(c, d); //1 undefined => 배열 기준은 인덱스

const user = { firstName: "Kim", lastName: "Lee" };
const { lastName, firstName } = user;
console.log(lastName, firstName);

function printTodo({ content, completed }) {
  console.log(`할 일 ${content}는 ${completed ? "완료" : "미완료"}`);
}
printTodo({ id: 1, content: "HTML", completed: true });

const user2 = {
  name: "Lee",
  address: {
    zipCode: "07638",
    city: "Seoul",
  },
};
const {
  address: { city },
} = user2;
console.log(city);

// Quiz. 객체 person을 만들고, name과 age를 구조 분해 할당하고 변수 userName과 userAge에 각각 저장한 후, 두 변수를 활용하여 console.log(`이름: ${userName}, 나이: ${userAge}`)출력하시오.
const person = {
  name: "Kim",
  age: 25,
};
const { name: userName, age: userAge } = person;
console.log(`이름: ${userName}, 나이: ${userAge}`);
