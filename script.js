let math = prompt('Математична операція, яку необхідно виконати: введіть для виконання додавання - add, віднімання - sub, множення - mult, ділення - div');
let num1 = prompt('Введіть перше число:', '0');
let num2 = prompt('Введіть друге число:', '0');

switch (math) {
    case 'add': alert(`${num1} + ${num2} = ${Number(num1)+Number(num2)}`); break;
    case 'sub': alert(`${num1} - ${num2} = ${Number(num1)-Number(num2)}`); break;
    case 'mult': alert(`${num1} * ${num2} = ${Number(num1)*Number(num2)}`); break;
    case 'div': alert(`${num1} / ${num2} = ${Number(num1)/Number(num2)}`); break;
    default: alert('Введено некоректне значення.');
}


