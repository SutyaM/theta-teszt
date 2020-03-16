// 1. kerdes
// szam
const a = 5;
// string
const b = "poloska";
// object
const c = {key1: 1, key2: 2};
// boolean
let d = true;
let e = false;

//2. kerdes
// Egy string vagy egy szam ertekkent adodik at. Ezeket tudjuk modositani a fuggvenyen belul, de az eredeti valtozo
// nem modosul(ertek). De ha peldaul tombot adunk at parameterul akkor maga az eredeti tomb is modosulni fog(referencia).

//ertek
let number = 1

const changeNumber = (num) => {
  num = 2
  console.log(num)
}

console.log(number)
changeNumber(number)
console.log(number)

//referencia
const refArr = [1, 2, 3]

const changeArr = (arr) => {
  arr.push(4)
  arr[0] = 10
  console.log(arr)
}
console.log(refArr)
changeArr(refArr)
console.log(refArr)

//3. kerdes
const sum =(num1, num2) => {
  let solution = num1 + num2
  return solution
}

console.log(sum(5, 2))

//4. kerdes
const array = [1, 2, 3, 4, 3, 5, 3]

const countElement = (num, arr) => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}

console.log(countElement(3, array))

//5. kerdes
const switchFunc = (num, arr) => {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++
    }
  }
  switch (count) {
    case 0:
      console.log(num, + "egyszer talalhato meg a tombben")
      break;
    case 1:
      console.log(num, count + "szer talalhato meg a tombben")
      break;
    case 2:
      console.log(num, count + "szor talalhato meg a tombben")
      break;
    case 3:
      console.log(num, count + "szor talalhato meg a tombben")
  }
}

switchFunc(3, array)

//6. kerdes
const array1 = [1, 2, 3, 4, 5]
const array2 = [3, 4, 5, 6, 7]

const common = (arr1, arr2) => {
  const commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]){
        if (!commonArr.includes(arr1[i])) {
          commonArr.push(arr1[i])
        }
      }
    }
  }
  return commonArr
}

console.log(common(array1, array2))