//////// 在這裡寫你的答案 /////////

const romanArray = {
  0: '',
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

const numArray = Object.keys(romanArray) //組成由key組成的陣列
const convertBtn = document.getElementById('convertBtn')
const input = document.getElementById('input')
const number = document.getElementById('showNumber')
const rome = document.getElementById('showRome')

let showNumber = randomNumRange(1, 3999)
let showRome = toRoman(showNumber)

number.innerText = showNumber
rome.innerText = showRome

convertBtn.addEventListener('click', function (event) {
  if (input.value < 1 || input.value > 3999 || !isNumber(input.value)) {
    console.log(input.value < 1)
    console.log(input.value > 3999)
    console.log(!isNumber(input.value))
    input.value = ''
    alert('Input error!')
  } else {
    number.innerText = Math.floor(input.value)
    rome.innerText = toRoman(input.value)
    input.value = ''
  }
})


function toRoman(num) {
  if (num > 3999) {
    console.log('超出範圍！')
  } else {
    num = Math.floor(num)
    let thousands = Math.floor(num / 1000) * 1000
    let hundreds = Math.floor((num - thousands) / 100) * 100
    let tens = Math.floor((num - thousands - hundreds) / 10) * 10
    let ones = num - thousands - hundreds - tens
    output = thousandsToRome(thousands) + hundredsToRome(hundreds) + tensToRome(tens) + onesToRome(ones)
    return output

  }


}

function thousandsToRome(thousands) {
  let thousandsInRome = ''
  while (thousands > 0) {
    thousandsInRome += romanArray[1000]
    thousands -= 1000
  }
  return thousandsInRome
}

function hundredsToRome(hundreds) {
  let hundredsInRome = ''
  while (hundreds > 0) {
    switch (true) {
      case hundreds === 900:
        hundredsInRome += romanArray[900]
        hundreds -= 900
        break;

      case hundreds >= 500:
        hundredsInRome += romanArray[500]
        hundreds -= 500
        break;

      case hundreds >= 400:
        hundredsInRome += romanArray[400]
        hundreds -= 400
        break;

      case hundreds >= 100:
        hundredsInRome += romanArray[100]
        hundreds -= 100
        break;

      default:
        break;
    }
  }
  return hundredsInRome
}

function tensToRome(tens) {
  let tensInRome = ''
  while (tens > 0) {
    switch (true) {
      case tens === 90:
        tensInRome += romanArray[90]
        tens -= 90
        break;

      case tens >= 50:
        tensInRome += romanArray[50]
        tens -= 50
        break;

      case tens >= 40:
        tensInRome += romanArray[40]
        tens -= 40
        break;

      case tens >= 10:
        tensInRome += romanArray[10]
        tens -= 10
        break;

      default:
        break;
    }
  }
  return tensInRome
}

function onesToRome(ones) {
  let onesInRome = ''
  while (ones > 0) {
    switch (true) {
      case ones === 9:
        onesInRome += romanArray[9]
        ones -= 9
        break;

      case ones >= 5:
        onesInRome += romanArray[5]
        ones -= 5
        break;

      case ones >= 4:
        onesInRome += romanArray[4]
        ones -= 4
        break;

      case ones >= 1:
        onesInRome += romanArray[1]
        ones -= 1
        break;

      default:
        break;
    }
  }
  return onesInRome
}


function randomNumRange(min, max) { //限制範圍的生成隨機數
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function isNumber(value) {
  return !Number.isNaN(Number(value))
}


////// 以下是測試程式，請勿更動 /////////
// const expect = (name, value, result) => {
//   if (value === result) { return true; }

//   throw new Error(`${name} failed successfully`);
// };

// expect('toRoman(1)', toRoman(1), 'I');
// expect('toRoman(2)', toRoman(2), 'II');
// expect('toRoman(3)', toRoman(3), 'III');
// expect('toRoman(4)', toRoman(4), 'IV');
// expect('toRoman(5)', toRoman(5), 'V');
// expect('toRoman(6)', toRoman(6), 'VI');
// expect('toRoman(9)', toRoman(9), 'IX');
// expect('toRoman(27)', toRoman(27), 'XXVII');
// expect('toRoman(48)', toRoman(48), 'XLVIII');
// expect('toRoman(59)', toRoman(59), 'LIX');
// expect('toRoman(93)', toRoman(93), 'XCIII');
// expect('toRoman(141)', toRoman(141), 'CXLI');
// expect('toRoman(163)', toRoman(163), 'CLXIII');
// expect('toRoman(402)', toRoman(402), 'CDII');
// expect('toRoman(575)', toRoman(575), 'DLXXV');
// expect('toRoman(911)', toRoman(911), 'CMXI');
// expect('toRoman(1024)', toRoman(1024), 'MXXIV');
// expect('toRoman(3000)', toRoman(3000), 'MMM');

// console.log('all pass!');