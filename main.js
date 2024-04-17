const noButton = document.getElementById('noButton');

noButton.addEventListener('mouseover', () => {
    noButton.style.position = 'absolute';

    const largura = Math.floor(Math.random() * 1230 ) - 530; //ajustado pro meu monitor
    const altura = Math.floor(Math.random() * 520) - 220;    //usar window.innerHeight/Width
    window.inn
    noButton.style.left = largura + "px";
    noButton.style.top = altura + "px";
})