const nav = document.querySelector('nav');
const main = document.querySelector('main');
const authSection = document.querySelector('.auth'); 

// const publicRoutes = ['#', '#login', '#register'];
const publicRoutes = ['#login', '#register'];
const privateRoutes = ['#dashboard', '#streak'];

window.addEventListener('hashchange', updateContent);

function updateNav(){
    nav.innerHTML = '';
    let links;
    let logoutBtn;
    if (currentUser()){
        links = privateRoutes.map(createNavLink);
        logoutBtn = document.createElement('button');
        logoutBtn.textContent = 'Logout';
        logoutBtn.onclick = logout;
        nav.appendChild(logoutBtn);
    } else {
        links = publicRoutes.map(createNavLink);
    }
    links.forEach(l => nav.insertBefore(l, logoutBtn))
}

function updateMain(path) {
    // main.innerHTML = '';

    console.log("updateMain",path)
    if (path) {
        switch(path){
            case '#login':
                console.log("render login form")
                renderLoginForm(); break;
            case '#register':
                console.log("render register form")
                // renderRegisterForm(); break;
            // case '#dashboard':
            //     renderFeed(); break;
            // case '#streak':
            //     renderProfile(); break;
            default:
                render404(); break;
        }
    } else {
        console.log("render login")
        renderLoginForm();
        // renderHomepage();
    }
}

function createNavLink(route){
    const link = document.createElement('a');
    link.textContent = route === '#' ? 'Home' : `${route[1].toUpperCase()}${route.substring(2)}`;
    console.log("createNavlink",link.textContent)
    link.href = route;
    return link;
}

function updateContent(){
    const path = window.location.hash;
    console.log("updateContent ",path)
    console.log("privateRoutes.includes(path)",privateRoutes.includes(path)),
    console.log("currentUser",currentUser())
    if (privateRoutes.includes(path) && !currentUser()){
        window.location.hash = '#';
    } else if (!privateRoutes.includes(path) && currentUser()) {
        window.location.hash = '#dashboard';
    } else {
        updateNav();
        updateMain(path);
    }
}

updateContent();