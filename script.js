let currentPage = 1;
const pageHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const triggerPoint = windowHeight * 0.5; // Trigger at 50% of viewport height
  
    if (scrollPosition < triggerPoint) {
      updatePageVisibility(1);
    } else if (scrollPosition < windowHeight * 2) {
        updatePageVisibility(2); // Show Page 2
    } else {
        updatePageVisibility(3); // Show Page 3
    }
  });
  
  function updatePageVisibility(pageNumber) {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const aboutMe = document.querySelector('.about-me-container');
    const imageContainer = document.querySelector('.image-container');
  
    page1.classList.toggle('hidden', pageNumber !== 1);
    page2.classList.toggle('visible', pageNumber === 2);
    page3.classList.toggle('visible', pageNumber === 3);
    aboutMe.classList.toggle('visible', pageNumber === 2);
    imageContainer.classList.toggle('visible', pageNumber === 2);
  }


function hamburg(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(0px)';
}

function cancel(){
    const navbar = document.querySelector('.dropdown');
    navbar.style.transform = 'translateY(-500px)';
}

const texts = [
    "VIDEO EDITOR",
    "PHOTOGRAPHER",
    "PROGRAMMER"
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;
