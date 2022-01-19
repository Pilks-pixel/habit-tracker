const habits = [
    {
        hplan_id: 0,
        habit_name: "Do 10 min exercise",
        frequency:  8,
        hfact: 4 
     },
     {
        hplan_id: 1,
        habit_name: "Sleep 8 hours",
        frequency:  1,
        hfact: 1 
     },
     {
        hplan_id: 2,
        habit_name: "Drink water",
        frequency:  12,
        hfact: 9 
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
}

function renderDashboard() {
    main.innerHTML = '';
    showTrackNewHabitForm();
    showAllHabits();
}

function showTrackNewHabitForm () {
    const today = new Date().toISOString().substring(0, 10);

    const dashboard = document.createElement('section');
    dashboard.classList.add('dashboard');
    main.appendChild(dashboard);

    const dashboardGrid = document.createElement('div');
    dashboardGrid.classList.add('dash-row');
    dashboardGrid.classList.add('row');
    dashboardGrid.classList.add('justify-content-between');
    dashboard.appendChild(dashboardGrid);
    
    const dashboardTitle = document.createElement('div');
    dashboardTitle.classList.add('col-md-9');
    dashboardTitle.innerHTML = '<h1 class="label-dash">Dashboard</h1>'
    dashboardGrid.append(dashboardTitle);

    const dashboardDate = document.createElement('div');
    dashboardDate.classList.add('col-md-3');
    // dashboardDate.classList.add('justify-content-center');
    dashboardDate.innerHTML = '<input type="date" class="form-control inputHabitsDate" name="inputHabitsDate">'
    dashboardGrid.append(dashboardDate);
    dashboardDate.querySelector('.inputHabitsDate').setAttribute('value', today);

    const divContainer= document.createElement('div');
    divContainer.classList.add('container');
    dashboard.appendChild(divContainer);

    const habitGrid = document.createElement('div');
    habitGrid.classList.add('allHabits');
    habitGrid.classList.add('row');
    habitGrid.classList.add('justify-content-between');
    divContainer.appendChild(habitGrid);

    const newHabitCard = document.createElement('div');
    newHabitCard.classList.add('col-md-4');
    newHabitCard.classList.add('col-sm-6');
    newHabitCard.classList.add('col-xs-12');
    newHabitCard.classList.add('habit');
    // newHabit.setAttribute('data-id', habit.hplan_id);
    habitGrid.append(newHabitCard);

    const newHabitFrame = document.createElement('div');
    newHabitFrame.classList.add('habitFrame');
    // newHabitFrame.setAttribute('data-id', habit.hplan_id);
    newHabitCard.append(newHabitFrame);

    const labelTrackNew = document.createElement('div');
    labelTrackNew.classList.add('labelTrackNew-row');
    labelTrackNew.innerHTML= '<label class="labelTrackNew">Track new</label>';
    newHabitFrame.appendChild(labelTrackNew);

    const formTrackNew = document.createElement('form');
    formTrackNew.setAttribute('id', "trackNewHabit");
    newHabitFrame.appendChild(formTrackNew);

    // new habit name - text  
    // const newHabitName = document.createElement('div');
    // newHabitName.classList.add('input-group');
    // newHabitName.classList.add('mb-3');
    // newHabitName.innerHTML = '<input type="text" name = habitName class="form-control inputHabitName" placeholder="habit name" aria-label="HabitName" aria-describedby="basic-addon1">';
    // formTrackNew.appendChild(newHabitName);

    // new habit name - select box
    createSelectHabitName(formTrackNew);

    const newBeginHabit = document.createElement('div');
    newBeginHabit.classList.add('input-group');
    newBeginHabit.classList.add('mb-3');
    newBeginHabit.innerHTML = '<span class="input-group-text S" id="basic-addon2">start</span> <input type="date" class="form-control inputStartHabit" name="inputStartHabit" aria-describedby="basic-addon2">';
    formTrackNew.appendChild(newBeginHabit);
    // today = new Date().toISOString().substring(0, 10);
    document.querySelector('.inputStartHabit').setAttribute('value', today);

    const newFreqHabit = document.createElement('div');
    newFreqHabit.classList.add('input-group');
    newFreqHabit.classList.add('mb-3');
    newFreqHabit.innerHTML = '<input type="number" class="form-control inputFreqHabit" value="1", min="1" max="100" name="inputFreqHabit" aria-describedby="basic-addon3"><span class="input-group-text" id="basic-addon3">time(s) per day</span> ';
    formTrackNew.appendChild(newFreqHabit);

    const newBtnTrackHabit = document.createElement('div');
    newBtnTrackHabit.classList.add('input-group');
    newBtnTrackHabit.classList.add('text-right');
    // newBtnTrackHabit.classList.add('mb-3');
    newBtnTrackHabit.innerHTML = '<button class="btn btn-dark btnTrackHabit" type="submit">Track habit</button>';
    formTrackNew.appendChild(newBtnTrackHabit);  

}

async function createSelectHabitName(formTrackNew) {
    const newHabitName = document.createElement('div');
    newHabitName.classList.add('input-group');
    newHabitName.classList.add('mb-3');
    newHabitName.innerHTML = '<select name = habitName class="form-select inputHabitName" placeholder="habit name" aria-label="HabitName">';
    formTrackNew.appendChild(newHabitName);
    // 
    const habits = await getAllHabits();
    console.log(habits);
    habits.forEach(habit => {
        const newHabitOption = document.createElement('option');
        const newHabitOptionText = document.createTextNode(habit.habitName);
        newHabitOption.appendChild(newHabitOptionText);
        newHabitOption.setAttribute('value','Option Value');
        newHabitName.querySelector('.inputHabitName').appendChild(newHabitOption)
    })
}

async function showAllHabits() {
    // uncomment for data from server
    const userHabits = await getAllUserHabits(); 
    console.log(userHabits)
    appendUserHabits(userHabits);
    // habits.forEach(post => getComments(habit.id))
}

function appendUserHabits(habits) {
     habits.forEach(habit => showUserHabit(habit));
  };

function showUserHabit(habit) {
    console.log('habit')
    const newHabitCard = document.createElement('div');
    newHabitCard.classList.add('col-md-4');
    newHabitCard.classList.add('col-sm-6');
    newHabitCard.classList.add('col-xs-12')
    newHabitCard.classList.add('habit');
    newHabitCard.setAttribute('data-id', habit.hplan_id);
    document.querySelector('.allHabits').append(newHabitCard);

    const newHabitFrame = document.createElement('div');
    newHabitFrame.classList.add('habitFrame');
    // newHabitFrame.classList.add('container');
    // newHabitFrame.setAttribute('data-id', habit.hplan_id);
    newHabitCard.append(newHabitFrame);
    

    // const newTitleRow = document.createElement('div')
    // newTitleRow .classList.add('row');
    // newTitleRow.classList.add('title-row');
    // newHabitFrame.appendChild(newTitleRow);

    const newHabitName = document.createElement('div');
    newHabitName.classList.add('title-row');
    // newHabitName.innerText = habit.habit_name;
    newHabitName.innerHTML = `<label class="habit-name">${habit.habit}</label> <p><a class="anchor-streak" href="#streak">streak info >> </a></p>`
    newHabitFrame.appendChild(newHabitName);  

    const newHabitFreq = document.createElement('div');
    newHabitFreq.classList.add('habit-freq');
    // newHabitFreq.innerText = `${habit.frequency} time(s) per day`;
    newHabitFreq.innerHTML = `<label class="habit-freq">${habit.frequency} time(s) per day</label>`;
    newHabitFrame.appendChild(newHabitFreq);  
    
    // start progress bar
    const newBarRow = document.createElement('div');
    // newBarRow.classList.add('row');
    newBarRow.classList.add('bar-row');
    newHabitFrame.appendChild(newBarRow);

    const newShell = document.createElement('div');
    newShell.classList.add('shell');
    newBarRow.appendChild(newShell);

    console.log(`width:${habit.hfact / habit.frequency*100}%`);
    const newBar = document.createElement('div');
    newBar.classList.add('bar');
    newBar.setAttribute('style', `width:${100 - habit.hfact / habit.frequency*100}%`);
    newShell.appendChild(newBar);
    // progress bar end    

    // footer
    const footerHabit = document.createElement('div');
    footerHabit.classList.add('footer');
    newHabitFrame.appendChild(footerHabit);

    const delSpan = document.createElement('span');
    delSpan.classList.add('delCross');
    delSpan.innerHTML = '<i class="fa fa-times"></i>';
    footerHabit.appendChild(delSpan)

    const btnAddFact = document.createElement('button');
    btnAddFact.classList.add('btnFact');
    btnAddFact.innerHTML = '<i class="fa fa-plus"></i>';
    footerHabit.appendChild(btnAddFact);



}

function renderStreak(hplan_id) {
    window.location.hash = '#streak';
    console.log("streak info ",hplan_id);
}

// function render404() {
//     const error = document.createElement('h2');
//     error.textContent = "Oops, we can't find that page sorry!";
//     main.appendChild(error);
// }
