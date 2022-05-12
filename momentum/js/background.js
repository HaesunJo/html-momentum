const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// console.log(chosenImage);

const bg = document.createElement("img");
bg.src = `img/${chosenImage}`;
// console.log(bg);

document.body.appendChild(bg);
bg.id = 'bgImage';