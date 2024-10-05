//  1 
const Hellofunc = function (string, action) {
    action(string);
    return;
  };
  const writeLine = (string) => console.log(string);
  const haveConfirmed = confirm("Output 'Hello world!' in the console?");
  if (haveConfirmed === true) {
    Hellofunc("Hello world!", writeLine);
  }
  
  // 2 
  const num = Number.parseInt(Math.random() * (2 - 1) + 1);
  const userPrompt = Number(prompt("Вгадайте число від 1 до 100"));
  const shouldCheck = confirm("Перевірити чи ви вгадали?");
  if (shouldCheck === true) {
  if (num === userPrompt) {
    alert("Відповідь правильна!");
  } else {
    alert("Відповідь не правильна!");
  }
  }
  
  // 4 
  const CallBack= (arr, callback) => {
    const newArray = [];
    for (const number of arr) {
      newArray.push(callback(number));
    }
    return newArray;
  };
  const arr = [1, 2, 3, 4, 5];
  const squareCallback = (number) => Math.pow(number, 2);
  const result = applyCallbackToEachElement(arr, squareCallback);
  console.log(result);
  
  // 5 
  const calculateDiscountedPrice = (price, discount, callback) => {
    const discountedPrice = (price / 100) * (100 - discount);
    callback(discountedPrice);
  };
  const showDiscountedPrice = (price) => {
    console.log(price);
  };

  calculateDiscountedPrice(1000, 10, showDiscountedPrice);