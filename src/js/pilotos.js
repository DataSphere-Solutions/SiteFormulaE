let isColor1 = true;
const color1 = '#424242'; // Primeira cor de fundo (vermelho)
const color2 = '#ffffff'; // Segunda cor de fundo (verde)

function mudarCor() {
    document.body.style.backgroundColor = isColor1 ? color1 : color2;
    isColor1 = !isColor1;
}