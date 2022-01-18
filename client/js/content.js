
function renderHomepage(){
    const sectionHome = document.createElement('div');
    sectionHome.classList.add('row');
    main.appendChild(sectionHome);
    
    // left side with img
    const leftSide = document.createElement('div');
    leftSide.classList.add('col');
    // leftSide.classList.add('col-sm-6');
    // leftSide.classList.add('col-xs-12');
    leftSide.classList.add('left');
    sectionHome.appendChild(leftSide);

    const leftSideDiv = document.createElement('div');
    leftSideDiv.classList.add('centered');
    leftSide.appendChild(leftSideDiv);

    const lifeStyleImg =  document.createElement('img');
    lifeStyleImg.setAttribute('src', "./css/lifestyle.png");
    leftSideDiv.appendChild(lifeStyleImg);

    // right side
    const rightSide = document.createElement('div');
    rightSide.classList.add('col');
    // rightSide.classList.add('col-sm-6');
    // rightSide.classList.add('col-xs-12');
    rightSide.classList.add('right');
    
    sectionHome.appendChild(rightSide);

    const appTitle = document.createElement('h1');
    appTitle.classList.add('appTitle');
    appTitle.innerText = 'Habit Tracker'
    rightSide.appendChild(appTitle);

    const switchFrame = document.createElement('div');
    switchFrame.classList.add('switch-frame');
    rightSide.appendChild(switchFrame);

    // switch
    const switchDiv = document.createElement('div');
    switchDiv.classList.add('switch-button');
    switchDiv.innerHTML = '<input class="switch-button-checkbox" type="checkbox" name="switch"></input> <label class="switch-button-label" for=""><span class="switch-button-label-span">Login</span></label>';
    switchFrame.appendChild(switchDiv);
   
    const rightSideDiv = document.createElement('div');
    rightSideDiv.classList.add('auth');
    rightSide.appendChild(rightSideDiv);

    renderLoginForm()    
}


function renderLoginForm() {
    // renderHomepage();
    document.querySelector('.auth').innerHTML = '';
    const fields = [
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Login' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestLogin)
    // main.appendChild(form);
     // authSection.appendChild(form);
    document.querySelector('.auth').appendChild(form);
   
}

function renderRegisterForm() {
    // renderHomepage();
    document.querySelector('.auth').innerHTML = '';
    const fields = [
        { tag: 'input', attributes: { type: 'text', name: 'username', placeholder: 'Username' } },
        { tag: 'input', attributes: { type: 'email', name: 'email', placeholder: 'Email' } },
        { tag: 'input', attributes: { type: 'password', name: 'password', placeholder: 'Password' } },
        { tag: 'input', attributes: { type: 'password', name: 'passwordConfirmation', placeholder: 'Confirm Password' } },
        { tag: 'input', attributes: { type: 'submit', value: 'Create Account' } }
    ]
    const form = document.createElement('form');
    fields.forEach(f => {
        let field = document.createElement(f.tag);
        Object.entries(f.attributes).forEach(([a, v]) => {
            field.setAttribute(a, v);
            form.appendChild(field);
        })
    })
    form.addEventListener('submit', requestRegistration)
    // authSection.appendChild(form);
    document.querySelector('.auth').appendChild(form);
}

async function renderDashboard() {
    // const feed = document.createElement('section');
    // feed.id = 'feed';
    // const posts = await getAllPosts();
    // if(posts.err){return}
    // const renderPost = postData => {
    //     const post = document.createElement('div');
    //     post.className = 'post';
    //     const user = document.createElement('h3');
    //     const body = document.createElement('p');
    //     user.textContent = postData.username;
    //     body.textContent = postData.body;
    //     post.appendChild(user);
    //     post.appendChild(body);
    //     feed.appendChild(post);
    // }
    // posts.forEach(renderPost);
    // main.appendChild(feed);
    main.innerHTML = '';
    renderNavbar();

}

// function render404() {
//     const error = document.createElement('h2');
//     error.textContent = "Oops, we can't find that page sorry!";
//     main.appendChild(error);
// }
function renderNavbar() {
    nav.innerHTML = '';

    const navFrame = document.createElement('div');
    navFrame.classList.add('navbar');
    navFrame.classList.add('navbar-expand-lg');
    navFrame.classList.add('navbar-dark');
    nav.appendChild(navFrame);

    const navTitle = document.createElement('div');
    navTitle.classList.add('navbar-brand');
    navTitle.innerText = 'Habit Tracker';
    navFrame.appendChild(navTitle);

    // const navGreeting = document.createElement('span');
    // navGreeting.classList.add('navbar-text');
    // navGreeting.innerText = 'Keep going, User!';
    // navFrame.appendChild(navGreeting);

    const navList = document.createElement('ul');
    navList.classList.add('navbar-nav');
    navList.classList.add('ms-auto');
    navFrame.appendChild(navList);

    const navGreeting = document.createElement('li');
    navGreeting.classList.add('navbar-text');
    navGreeting.innerText = 'Keep going, User!';
    navList.appendChild(navGreeting);

    const navLogOut = document.createElement('li');
    navLogOut.classList.add('nav-item');
    navLogOut.innerHTML = '<a class="nav-link active" aria-current="page" href="#">Log Out</a>';
    navList.appendChild(navLogOut);


}