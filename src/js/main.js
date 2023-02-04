import { CircleBtn, Body } from "./nodes.js"

const generateRandomNumber = () => {

    const rndNumber = (Math.random() *700);
    

    return rndNumber
};
const generateRandomColor= () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor= `rgb(${r},${g},${b})`;

    return rgbColor
};

// Carga un sonido a través de su fuente y lo inyecta de manera oculta
const playSound = (fuente) =>{
    const sound = document.createElement("audio");
    sound.src = fuente;
    sound.setAttribute("preload", "auto");
    sound.setAttribute("controls", "none");
    sound.style.display = "none"; // <-- oculto
    document.body.appendChild(sound);
    sound.play();
    return sound;
};



CircleBtn.addEventListener("click", () =>{    
    playSound('../../public/Desafio2/HalloweenDreamAylen.wav');
    const newColor = generateRandomColor();
    let newNumber = generateRandomNumber();
    Body.style.backgroundColor = newColor;
    CircleBtn.style.backgroundColor = newColor;
    CircleBtn.style.left = newNumber+'px';
    newNumber = generateRandomNumber();    
    CircleBtn.style.top = newNumber+'px';
    
    
});


