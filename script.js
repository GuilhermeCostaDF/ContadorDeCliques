    const buttonUp = document.getElementById('buttonUp');
    const buttonDown = document.getElementById('buttonDown');
    const buttonClear = document.getElementById('buttonClear');
    const numberDisplay = document.getElementById('number-display');
    const projectsButton = document.getElementById('projectsButton');
    const divMenuProjects = document.querySelector('.menu-projects');
    
    let number= 0;

    const showNumber = () => numberDisplay.innerHTML=number;

    const countUp = () => {
        number++;
        showNumber();
    }

    const countDown = () => {
        number--;
        showNumber();
    }

    const countClear = () => {
        number = 0;
        showNumber();
    }

    const hideProjectsItems = () => divMenuProjects.classList.toggle('hidden');
    
    const showProjectsItems = () => {
        divMenuProjects.classList.toggle('hidden');
    }

    buttonUp.addEventListener('click', countUp);
    buttonDown.addEventListener('click', countDown);
    buttonClear.addEventListener('click', countClear);
    projectsButton.addEventListener('mouseover', showProjectsItems);
    divMenuProjects.addEventListener('mouseout', hideProjectsItems);