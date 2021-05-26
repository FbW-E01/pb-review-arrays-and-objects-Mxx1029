// # Review - Arrays and Objects

// NOTE! Pay close attention to creating code with good and consistent code style.

// 1. Create an array that contains three strings.

const arrOfThreeStrings = ["I am a string!", "Me too!", "Me threeeee!!"];

// 2. Create an array that contains one string, one number and one boolean.

const arrOfStrNumBool = ["String here", 2, false];

// 3. Create an array hat contains three empty arrays.

const arrOfThreeEmptyArrays = [[], [], []];

// 4. Create an empty object.

const emptyObj = {};

// 5. Create an object with three properties: id, email, password.

const user = {
    id: 1,
    email: "me@ononline.com",
    password: "Sup3rSecur3P4ssw0rd",
};

// 6. Create an array that contains three objects. All objects should have a width and a height property.

const arrOfThreeObj = [
    {width: 2, height: 3},
    {width: 3, height: 4},
    {width: 4, height: 5},
];

// 7. Create an object that contains three properties: a string, an array and an object. Invent your own property names and values.

const obj = {
    userName: "Omega298",
    hobbies: ["reading", "hiking", "gardening", "intersectional feminism"],
    favoriteBook:
    {
        title: "Homegoing",
        author: "Yaa Gyasi",
        published: 2016,
    },
};

// 8. Print the `type` of a variable that has an array value.

console.log(typeof arrOfThreeEmptyArrays);
// to check if arrOfThreeEmptyArrays is an array:
// console.log(Array.isArray(arrOfThreeEmptyArrays));

// 9. Print the `type` of a variable that has an object value. 

console.log(typeof user);

// 10. Create an array with five random values. 

const arrOfRandomValues = [1, "pickaboo", true, [2, 3, 4], {id: 2, userName: "alpha", admin: false,}];

// 10.1. Add one value to the end of the array.

arrOfRandomValues.push("let's push this");
// console.log(arrOfRandomValues); // test log

// 10.2. Add one thing to the beginning of the array.

arrOfRandomValues.unshift("before index 0");
// console.log(arrOfRandomValues); // test log


// 10.3. Take out one thing from the end of the array.

arrOfRandomValues.pop();
// console.log(arrOfRandomValues); // test log


// 10.4. Print the length of the array.

console.log(arrOfRandomValues.length);

// 10.5. Take out one thing from the end of the array.

const lastItemofArray = arrOfRandomValues.pop()
// console.log(arrOfRandomValues); // test log
// console.log(lastItemofArray); // test log

// 10.6. Take out one the 2nd thing from the array.

const secondItemofArray = arrOfRandomValues.splice(1, 1);
// console.log(arrOfRandomValues); // test log
// console.log(secondItemofArray); // test log