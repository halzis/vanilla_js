const images = [
    "0.jpg",'1.png','2.jpg','3.png','4.png','5.png','6.png','7.png',
    '8.png','9.png','10.png','11.png','12.png','13.png','14.png',
    '15.png','16.png','17.png','18.png','19.png','20.png','21.png',
    '22.png','23.png','24.png','25.png','26.png',
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);     // html의 body에 html을 추가. prepend는 가장 위에 추가.
