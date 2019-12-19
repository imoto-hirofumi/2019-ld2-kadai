const obj1 = "abc";
JSON.stringify(obj1);
console.log(obj1);

const obj2 = 123;
JSON.stringify(obj2);
console.log(obj2);

const obj3 = false;
JSON.stringify(obj3);
console.log(obj3);

const obj4 = {a: 123};
JSON.stringify(obj4);
console.log(obj4);

const obj5 = {func: ()=> console.log('Hi')};
JSON.stringify(obj5);
console.log(obj5);

const obj6 = {property: undefined};
JSON.stringify(obj6);
console.log(obj6);