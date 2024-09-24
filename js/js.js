'use strict';

// console.log(10);
// console.log('JAVASCRIPT');

// const age = 20;
// const username = 'Mango';
// console.log(age);
// console.log(username);

// let Username = 'Poly';
// console.log(Username);
// Username = 'Bob';
// console.log(Username);

// let value = null;
// console.log(value);
// let Value;
// const isModalOpen = true;
// console.log(Value);

// console.log(typeof age);
// console.log(typeof username);
// console.log(typeof value);
// console.log(typeof isModalOpen);
// console.log(typeof Value);

// let x = 21;
// let y = 4;
// console.log(x + y);
// console.log(x - y);
// console.log(x * y);
// console.log(x / y);
// console.log(x % y);
// console.log(x ** y);
// x *= y;
// console.log(x);

// let Age = 25;
// Age += 1;
// console.log(Age);

// const message = 'Mango ' + 'is' + ' happy';
// console.log(message);

// const message1 = 'Poly is ' + Age + ' years old';
// console.log(message1);
// console.log(typeof message1);

// console.log(String(5));
// console.log('5' + 3);

// console.log('false' + null);

// const guestName = 'Banana';
// const roomNumber = 207;
// const greeting = `Welcome ${guestName}, you room number is ${roomNumber}!`;
// console.log(greeting);

// console.log(greeting.length);

// const username2 = 'Denzel';
// const message2 = `Username ${username2} is ${username2.length} characters long`;
// console.log(message2);

// const product = 'Repair droid';
// console.log(product[0]);
// console.log(product[5]);
// console.log(product[11]);
// console.log(product[7]);
// console.log(product[6]);
// console.log(product[1]);
// console.log(product[product.length - 1]);

// const courseTopic = 'JavaScript essentials';
// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length - 1];
// console.log(lastElement);

// const a = 2;
// const b = 5;
// const c = 5;
// console.log(a > b);
// console.log(a < b);
// console.log(b < a);
// console.log(b > a);
// console.log(a <= b);
// console.log(a >= b);
// console.log(b >= c);
// console.log(b <= c);

// console.log(5 === '5');
// console.log(5 == '5');

// console.log(5 + false);
// console.log(5 + true);

// console.log(Number.parseInt('qweqwe'));

// const value1 = '24.5px';
// const numerical = Number.parseFloat(value1);
// console.log(numerical);

// console.log(Math.random());

// console.log(0.1 + 0.2);
// const baba = (0.1 + 0.2).toFixed(1);
// console.log(baba);
// console.log(typeof baba);
// let z = 12;

// function doSummary() {
//   let ax = 41;
//   let bx = 9;
//   const ab = ax + bx;
//   const cc = `This is summaty function result: ${ab}`;
//   console.log(cc);
// }
// doSummary();

// function multiply(x, y, z) {
//   console.log(`Result: ${x + y + z}`);
// }
// multiply(3, 2, 1);
// multiply(54, 47, 124);

// function multy(x, y, z) {
//   return x + y + z;
// }
// const totalsuma = multy(15, 15, 15);
// console.log(totalsuma);

// function makeMessage1(username) {
//   console.log(`Hello ${username}`);
//   return username;
// }
// console.log(makeMessage1('Jacob'));

// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// function foo() {
//   const value = 'I am a local variable';
//   console.log(value);
// }
// foo();

function makeMessage(name, price) {
  return `You picked ${name}, price per item is ${price} credits`;
}

console.log(makeMessage('Radar', 6150));
console.log(makeMessage('Skaner', 3500));
console.log(makeMessage('Reactor', 8000));
console.log(makeMessage('Engine', 4070));
