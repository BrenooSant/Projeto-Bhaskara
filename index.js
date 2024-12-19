const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const btn = document.getElementById("btn");

function calcularBhaskara() {
    const numberA = Number(a.value);
    const numberB = Number(b.value);
    const numberC = Number(c.value);

    if (!numberA || !numberB || !numberC) {
        alert("Por favor, preencha todos os valores corretamente.");
        return;
    }

    if (numberA === 0) {
        alert("O valor de A não pode ser zero em uma equação quadrática.");
        return;
    }

    const delta = Math.pow(numberB, 2) - 4 * numberA * numberC;

    if (delta < 0) {
        alert("Delta negativo! A equação não possui raízes reais.");
        return;
    }

    const x1 = (-numberB + Math.sqrt(delta)) / (2 * numberA);
    const x2 = (-numberB - Math.sqrt(delta)) / (2 * numberA);

    document.getElementById("resultX1").value = x1.toFixed(2);
    document.getElementById("resultX2").value = x2.toFixed(2);
    document.getElementById("resultD").value = delta.toFixed(2);
}

btn.onclick = calcularBhaskara;
