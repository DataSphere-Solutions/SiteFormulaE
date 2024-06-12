document.getElementById('btn1').addEventListener('click', function() {
    var section = document.getElementById('sec1');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
});

document.getElementById('btn2').addEventListener('click', function() {
    var section = document.getElementById('sec2');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
});

document.getElementById('btn3').addEventListener('click', function() {
    var section = document.getElementById('sec3');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
});

document.getElementById('btn4').addEventListener('click', function() {
    var section = document.getElementById('sec4');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
});

document.getElementById('btn5').addEventListener('click', function() {
    var section = document.getElementById('sec5');
    if (section.classList.contains('hidden')) {
        section.classList.remove('hidden');
    } else {
        section.classList.add('hidden');
    }
});

let isColor1 = true;
const color1 = '#424242'; // Primeira cor de fundo (vermelho)
const color2 = '#ffffff'; // Segunda cor de fundo (verde)

function mudarCor() {
    document.body.style.backgroundColor = isColor1 ? color1 : color2;
    isColor1 = !isColor1;
}