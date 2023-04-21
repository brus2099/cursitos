
const label = document.querySelector(".label");
const attributes = label.attributes;

console.log(attributes[0].nodeValue)


function updateLabels () {
    const userNameLabel = document.createElement("td");
    userNameLabel.className = "newLabelUser";
    userNameLabel.innerHTML = attributes[0].nodeValue;
    const userEmailLabel = document.createElement("td");
    userEmailLabel.className = "newLabelEmail";
    userEmailLabel.innerHTML = "email";
    
    const beforeName = document.querySelector('.row');
    beforeName.prepend(userEmailLabel);
    beforeName.prepend(userNameLabel);
    console.log('not working');
}

const boton = document.querySelector(".button");
boton.addEventListener('click', updateLabels);