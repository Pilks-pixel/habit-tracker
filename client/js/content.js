
function renderHomepage(){
    // const logo = document.createElement('img');
    // logo.id = 'logo';
    // logo.src = 'https://res.cloudinary.com/getfutureproof/image/upload/v1595323029/futureproof_logotype_withBleed_huge_kl2rol.png';
    // logo.alt = 'futureproof logo'
    // main.appendChild(logo);

    const sectionHome = document.createElement('row');
    main.appendChild(sectionHome);
    // left side with img
    const leftSide = document.createElement('col');
    leftSide.classList.add('split');
    leftSide.classList.add('left');
    sectionHome.appendChild(leftSide);

    const leftSideDiv = document.createElement('div');
    leftSideDiv.classList.add('centered');
    leftSide.appendChild(leftSideDiv);

    const lifeStyleImg =  document.createElement('img');
    lifeStyleImg.setAttribute('src', "./css/lifestyle.png");
    leftSideDiv.appendChild(lifeStyleImg);

    // right side
    const rightSide = document.createElement('col');
    rightSide.classList.add('split');
    rightSide.classList.add('right');
    sectionHome.appendChild(rightSide);

    const appTitle = document.createElement('h1');
    appTitle.classList.add('appTitle');
    appTitle.innerText = 'Habit Tracker'
    rightSide.appendChild(appTitle);

    // switch
    const switchDiv = document.createElement('div');
    switchDiv.classList.add('switch-button');
    switchDiv.innerHTML = '<input class="switch-button-checkbox" type="checkbox" name="switch"></input> <label class="switch-button-label" for=""><span class="switch-button-label-span">Login</span></label>';
    rightSide.appendChild(switchDiv);
   
    const rightSideDiv = document.createElement('div');
    rightSideDiv.classList.add('centered');
    rightSideDiv.classList.add('auth');
    rightSide.appendChild(rightSideDiv);

    renderLoginForm()    
}


function renderLoginForm() {
    // renderHomepage();
    document.querySelector('.auth').innerHTML = '';
    // rightSideDiv.classList.add('centered');
    // rightSideDiv.classList.add('auth');
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

async function renderFeed() {
    const feed = document.createElement('section');
    feed.id = 'feed';
    const posts = await getAllPosts();
    if(posts.err){return}
    const renderPost = postData => {
        const post = document.createElement('div');
        post.className = 'post';
        const user = document.createElement('h3');
        const body = document.createElement('p');
        user.textContent = postData.username;
        body.textContent = postData.body;
        post.appendChild(user);
        post.appendChild(body);
        feed.appendChild(post);
    }
    posts.forEach(renderPost);
    main.appendChild(feed);
}

function renderProfile() {
    const profile = document.createElement('section');
    const greeting = document.createElement('h3');
    greeting.textContent = `Hi there, ${localStorage.getItem('username')}!`;
    profile.appendChild(greeting);
    main.appendChild(profile);
}

function render404() {
    const error = document.createElement('h2');
    error.textContent = "Oops, we can't find that page sorry!";
    main.appendChild(error);
}
