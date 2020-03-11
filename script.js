Вывести массив без цикла
let arr = [1, 2, 3, 4, 5];
let i = 0;
function rec(){
  let length = arr.length;
  console.log(arr[i]);
  i++;
  if (i >= length){
    return true;
  }
  rec();
}

rec();

//Написать функцию возведения в степень
function power(num, accumulator){
	let intNum = Math.round(num);
	if (accumulator == 1){
		return intNum;
	}else {
		return intNum * power(intNum, accumulator - 1);
	}
}

console.log("Результат степени равен : " + power(2.5, 3)); //27?






let count1 = 0;
let count2 = 30;
function showStatusIncrement(){
	alert(count1);
}
function incrementCounter(){
	setTimeout(function(){
		count1++;
		console.log(count1);
		if(count1 >= 10){
			return true;
		}
		incrementCounter();
	}, 500);
}
incrementCounter();


function showStatusDicrement(){
	alert(count2);
}
function dicrementCounter(){
	setTimeout(function(){
		console.log(count2);
		count2--;
		if(count2 < 0)
			return true;
		dicrementCounter();
	}, 1000);
}
dicrementCounter();