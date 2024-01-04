export {
    pageLoad,
    home,
    menu,
    contact,
}

function pageLoad () {
    let content = document.querySelector('#content');

    // HEADING
    let heading = document.createElement('div');
    heading.innerHTML = `Good Food Homes`;
    heading.classList.add('heading');
    content.appendChild(heading);

    // MENUBAR
    let menubar = document.createElement('div');
    menubar.innerHTML = `<button>Home</button><button>Menu</button><button>Contact</button>`;
    menubar.classList.add('menubar');
    content.appendChild(menubar);

    // MAIN CONTENT
    let mainContent = document.createElement('div');
    mainContent.classList.add('mainContent');
    content.appendChild(mainContent);
}

function home () {
    let mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = `This is the restaurant HOME.`
}

function menu () {
    let mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = `This is the restaurant MENU.`
}

function contact () {
    let mainContent = document.querySelector('.mainContent');
    mainContent.innerHTML = `This is the restaurant CONTACT.`
}

