const myImage = document.querySelector('img')

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src'); 
    if (mySrc === 'images/2586245939_3e5a6be2fb_z.jpeg'){
        myImage.setAttribute('src','images/images.jpeg');
    } else {
    myImage.setAttribute('src','images/2586245939_3e5a6be2fb_z.jpeg');
}
}

let myButton = document.querySelector( 'button');
let myHeading = document.querySelector('h1');



function setUserName() {
    const myName = prompt('please enter your name.');
    localStorage.setItem('name', myName);
    console.log(myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
    if(!myName){
        setUserName();
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, '+ storedName;
}
myButton.onclick = () => {
    setUserName();
}