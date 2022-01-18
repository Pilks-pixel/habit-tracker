const habits = [
    {
        id: 0,
        title: "Do 10 min exercise",
        plan:  8,
        fact: 4 
     },
     {
        id: 1,
        title: "Sleep 8 hours",
        plan:  1,
        fact: 1 
     },
     {
        id: 2,
        title: "Drink water",
        plan:  12,
        fact: 6 
     }

]


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
    form.addEventListener('submit', requestLogin);
    document.querySelector('.auth').appendChild(form);
   
}

function renderRegisterForm() {
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
    document.querySelector('.auth').appendChild(form);
    form.addEventListener('submit', requestRegistration);
    
}

async function renderMain() {
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
    renderNavbar();
    renderDashboard();
}

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
    navLogOut.innerHTML = '<a id="logout" class="nav-link active" aria-current="page" href="#">Log Out</a>';
    navList.appendChild(navLogOut);

    document.querySelector('#logout').addEventListener('click',logout);
};

// render dashboard view 
function renderDashboard() {
    main.innerHTML = '';
    showTrackNewHabitForm();
    showAllHabits();
}

// create grid for all habits and track new habit form (1st in a row)
function showTrackNewHabitForm () {
    // const dashboard = document.querySelector('#dashboard');
    const dashboard = document.createElement('section');
    dashboard.classList.add('dashboard');
    main.appendChild(dashboard);

    const habitGrid = document.createElement('row');
    habitGrid.classList.add('allHabits');
    dashboard.appendChild(habitGrid);

    const newHabit = document.createElement('div');
    newHabit.classList.add('col-md-4');
    newHabit.classList.add('col-sm-6');
    newHabit.classList.add('col-xs-12');
    newHabit.classList.add('habit');
    // newHabit.setAttribute('data-id', habit.hplan_id);
    habitGrid.append(newHabit);

    const newHabitFrame = document.createElement('div');
    newHabitFrame.classList.add('habitFrame');
    // newHabitFrame.setAttribute('data-id', habit.hplan_id);
    habitGrid.append(newHabitFrame);

    const labelTrackNew = document.createElement('label');
    labelTrackNew.classList.add('labelTrackNew');
    newHabitFrame.appendChild(labelTrackNew);

    const formTrackNew = document.createElement('form');
    formTrackNew.setAttribute('id', "trackNewHabit");
    newHabitFrame.appendChild(formTrackNew);

    const newHabitName = document.createElement('div');
    newHabitName.classList.add('input-group');
    newHabitName.classList.add('mb-3');
    newHabitName.innerHTML = '<input type="text" name = habitName class="form-control inputHabitName" placeholder="habit name" aria-label="HabitName" aria-describedby="basic-addon1">';
    newHabitFrame.appendChild(newHabitName);

    const newBeginHabit = document.createElement('div');
    newBeginHabit.classList.add('input-group');
    newBeginHabit.classList.add('mb-3');
    newBeginHabit.innerHTML = '<span class="input-group-text" id="basic-addon2">start</span> <input type="date" class="form-control inputStartHabit" name="inputStartHabit" aria-describedby="basic-addon2">';
    newHabitFrame.appendChild(newBeginHabit);

    const newFreqHabit = document.createElement('div');
    newFreqHabit.classList.add('input-group');
    newFreqHabit.classList.add('mb-3');
    newFreqHabit.innerHTML = '<input type="number" class="form-control inputFreqHabit" name="inputFreqHabit" aria-describedby="basic-addon3"><span class="input-group-text" id="basic-addon3">time(s) per day</span> ';
    newHabitFrame.appendChild(newFreqHabit);

    const newBtnTrackHabit = document.createElement('div');
    // newBtnTrackHabit.classList.add('input-group');
    // newBtnTrackHabit.classList.add('mb-3');
    newBtnTrackHabit.innerHTML = '<button class="btn btn-dark btnTrackHabit" type="submit">Track habit</button>';
    newHabitFrame.appendChild(newFreqHabit);
    
   


// { tag: 'input', attributes: { type: 'text', name: 'habitName', class: 'inputHabitName', placeholder: 'habit name' } },
// { tag: 'label', attributes: { class: 'labelStartDate' }},
//  { tag: 'input', attributes: { type: 'date', name: 'date', class: 'inputDate', placeholder: '' } },
// { tag: 'label', attributes: { class: 'labelTimesPerDay'}},
// { tag: 'input', attributes: { type: 'number', name: 'freq', class: 'inputFreq', placeholder: '1' } },
// { tag: 'button', attributes: { type: 'submit', class: 'btn', class: 'btn-dark', class: 'postNewHabit', value: 'Track habit' } }
    

}

async function showAllHabits() {
    // server data
    // const response = await fetch('http://localhost:3000/habits');  
    // const habits  = await response.json();
    console.log(habits)
    appendHabits(habits);
    // habits.forEach(post => getComments(habit.id))
}

function appendHabits(habits) {
     habits.forEach(habit => showHabit(habits));
  };

function showHabit(habit) {
    
}


// function render404() {
//     const error = document.createElement('h2');
//     error.textContent = "Oops, we can't find that page sorry!";
//     main.appendChild(error);
// }

