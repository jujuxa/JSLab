// Элементы языка
let num = 10;
let str = "Привет";
let bool = true;
let nothing = null;
let obj = { a: 1 };

console.log("1) typeof num =", typeof num);
console.log("1) typeof str =", typeof str);
console.log("1) typeof bool =", typeof bool);
console.log("1) typeof nothing =", typeof nothing);
console.log("1) typeof obj =", typeof obj);


let x = 7;
let y = 10;

console.log("\n2) x =", x, ", y =", y);
console.log("2) x == y -", x == y);
console.log("2) x < y  -", x < y);
console.log("2) x <= y -", x <= y);
console.log("2) x > y  -", x > y);


let a = false;
let b = null;
let c = undefined;

console.log("\n3) a =", a);
console.log("3) b =", b);
console.log("3) c =", c);


console.log("\n4) Проверка операций:");

console.log('"1" + 2 + 3 =', "1" + 2 + 3); // "1"+2 = "12", "12"+3 = "123"
console.log('1 + 2 + "3" =', 1 + 2 + "3"); // 1+2 = 3,  3 +"3" = "33"
console.log('"1" - 2 =', "1" - 2); // "-" превращает строку "1" в число 1 
console.log('"1" + -2 =', "1" + -2); // -2 это число, "+" со строкой делает строку "1-2"
console.log('"1" + "1" - "1" =', "1" + "1" - "1"); // "1"+"1"="11", "11"-"1" == 11-1=10
console.log('"foo" + -"bar" =', "foo" + -"bar"); // -"bar" = NaN, "foo"+NaN = "fooNaN"
console.log('0 == "0" =', 0 == "0"); // нестрогое сравнение = true
console.log("0.5 + 0.1 == 0.6 =", 0.5 + 0.1 == 0.6); // из-за double может быть неожиданно
console.log("0.1 + 0.2 == 0.3 =", 0.1 + 0.2 == 0.3); // из-за double может быть неожиданно
console.log("true + true + true == 3 =", true + true + true == 3); // true = 1, 1+1+1=3 = true
console.log("true == 1 =", true == 1); // нестрогое сравнение = true
console.log("true === 1 =", true === 1); // строгое сравнение = false
console.log("1 < 2 < 3 =", 1 < 2 < 3); // (1<2)=true, true = 1, 1<3 = true
console.log("3 > 2 > 1 =", 3 > 2 > 1); // (3>2)=true, true = 1, 1>1 = false
console.log("9007199254740991 + 1 == 9007199254740991 + 2 =", 9007199254740991 + 1 == 9007199254740991 + 2); // из-за ограничения точности true
console.log("Math.sqrt(-1) == Math.sqrt(-1) =", Math.sqrt(-1) == Math.sqrt(-1)); // NaN == NaN = false


let str1 = "Джантаев ";
let str2 = "Байэль ";
let str3 = "ФИТ241";
let concatenation = str1 + str2 + str3;

console.log("\n5) concatenation =", concatenation);


str = "20";
a = 5;

console.log("\n6) str =", str, ", a =", a);
console.log("6) str + a =", str + a); // строка + число = строка "205"
console.log("6) str - a =", str - a); // "-" делает числа == 20-5=15
console.log('6) str * "2" =', str * "2"); // "*" делает числа == 20*2=40
console.log("6) str / 2 =", str / 2); // "/" делает числа == 20/2=10


a = "12";
b = "7.15";

let aNum = Number(a);
let bNum = Number(b);

let remainder = aNum % bNum;
let rounded = Math.round(remainder);

console.log("\n7) aNum % bNum =", remainder);
console.log("7) Math.round(...) =", rounded);


let Xv = 7; 
let top = Xv * Xv - 7 * Xv + 10;
let bottom = Xv * Xv - 8 * Xv + 12;
let formulaResult = top / bottom;

console.log("\n8) x =", Xv);
console.log("8) result =", formulaResult);


let email = "kemgu@mail.ru"; 
if (email.includes("@")) {
    console.log("\n9) Email ок:", email);
} else {
    console.warn("\n9) ВНИМАНИЕ: в email нет символа @ -", email);
}



// Управление потоком

let age = 19; 

if (age >= 18 && age <= 30) {
    console.log('1) Для молодежи');
} else {
    console.log('1) Для всех возрастов');
}

if (age >= 1 && age <= 17) {
    console.log('1) Для детей');
} else if (age >= 18 && age <= 30) {
    console.log('1) Для молодежи');
} else {
    console.log('1) Для всех возрастов');
}


let a2 = 10;
let b2 = 7;
let max = (a2 > b2) ? a2 : b2;
console.log("\n2) a =", a2, "b =", b2, "max =", max);


let n = 4;

let word;
switch (n) {
    case 1:
        word = "ворона";
        break;
    case 2:
    case 3:
    case 4:
        word = "вороны";
        break;
    default:
        word = "ворон";
        break;
}
console.log("\n3) На ветке сидит", n, word);


console.log("\n4) while нечетные 0-50:");
let i = 0;
while (i <= 50) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}

console.log("\n4) for нечетные 0-50:");
for (let j = 0; j <= 50; j++) {
    if (j % 2 !== 0) {
        console.log(j);
    }
}


let sum = 0;

for (let k = 1; k <= 15; k++) {
    if (k === 5 || k === 7) {
        continue;
    }
    sum += k;
}
console.log("\n5) sum =", sum);


let x2 = 2;
let y2 = 5;
let power = 1;
let count = y2;

while (count > 0) {
    power *= x2;
    count--;
}
console.log("\n6) x =", x2, "y =", y2, "x^y =", power);
