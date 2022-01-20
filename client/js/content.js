// const { deepStrictEqual } = require("assert");

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
    renderFooter();
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
    navGreeting.innerText = `Keep going, ${localStorage.username}!`;
    navList.appendChild(navGreeting);

    const navLogOut = document.createElement('li');
    navLogOut.classList.add('nav-item');
    navLogOut.innerHTML = '<a id="logout" class="nav-link active" aria-current="page" href="#">Log Out</a>';
    navList.appendChild(navLogOut);

    document.querySelector('#logout').addEventListener('click',logout);
}

function renderDashboard() {
    main.innerHTML = '';
    showDashboardTitle();
    showDashboard();
}

function renderFooter() {
    footer.innerHTML = '';
    const footerDiv =  document.createElement('div');
    footerDiv.classList.add('footer-m');
    footerDiv.innerHTML = 'made by  <i class="fas fa-coffee"></i>  Coffee before Coding'
    footer.appendChild(footerDiv);
}

function showDashboardTitle() {
    const today = new Date().toISOString().substring(0, 10);

    const dashboard = document.createElement('section');
    dashboard.classList.add('dashboard');
    main.appendChild(dashboard);

    const dashboardContainer = document.createElement('div');
    dashboardContainer.classList.add('dash-container');
    dashboard.appendChild(dashboardContainer);

    const dashboardGrid = document.createElement('div');
    dashboardGrid.classList.add('dash-row');
    dashboardGrid.classList.add('row');
    dashboardGrid.classList.add('justify-content-between');
    dashboardContainer.appendChild(dashboardGrid);
    
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
    dashboardDate.querySelector('.inputHabitsDate').addEventListener('change', showDashboard);
    
    const divContainer= document.createElement('div');
    divContainer.classList.add('container');
    divContainer.classList.add('habit-cont');
    dashboardContainer.appendChild(divContainer);
}

function showDashboard() {
    document.querySelector('.habit-cont').innerHTML = ''
    showTrackNewHabitForm();
    showAllHabits();
}
    
function showTrackNewHabitForm () {
    const today = new Date().toISOString().substring(0, 10);

    const habitGrid = document.createElement('div');
    habitGrid.classList.add('allHabits');
    habitGrid.classList.add('row');
    habitGrid.classList.add('justify-content-between');
    document.querySelector('.habit-cont') .appendChild(habitGrid);

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
    document.querySelector('.btnTrackHabit').addEventListener('click', trackNewHabit);

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
        newHabitOption.setAttribute('value', habit.id);
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
    console.log('habit', habit)

    // get fact data fo plan.id
    // const habitFact = getHabitFacts(habit.id);
    const habitFact = 0;

    const newHabitCard = document.createElement('div');
    newHabitCard.classList.add('col-md-4');
    newHabitCard.classList.add('col-sm-6');
    newHabitCard.classList.add('col-xs-12')
    newHabitCard.classList.add('habit');
    newHabitCard.setAttribute('data-id', habit.id);
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
    newHabitName.innerHTML = `<label class="habit-name">${habit.habit}</label> <p><a class="anchor-streak" ><i class="far fa-chart-bar"> >> </i></a></p>`
    newHabitFrame.appendChild(newHabitName);  
    document.querySelector('.anchor-streak').setAttribute('data-id', habit.id);
    document.querySelector('.fa-chart-bar').setAttribute('data-id', habit.id);
    // streak info click event
    document.querySelector('.anchor-streak').addEventListener('click', renderStreak);

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

    console.log(`width:${habit.count / habit.frequency*100}%`);
    const newBar = document.createElement('div');
    newBar.classList.add('bar');
    newBar.setAttribute('style', `width:${100 - habit.count / habit.frequency*100}%`);
    newShell.appendChild(newBar);
    // progress bar end    

    // footer
    const footerHabit0 = document.createElement('div');
    footerHabit0.classList.add('footer0');
    newHabitFrame.appendChild(footerHabit0);

    const footerHabit = document.createElement('div');
    footerHabit.classList.add('footer');
    footerHabit0.appendChild(footerHabit);

    const delSpan = document.createElement('span');
    delSpan.classList.add('delCross');
    delSpan.innerHTML = '<i class="fa fa-times"></i>';
    footerHabit.appendChild(delSpan)

    const btnAddFact = document.createElement('button');
    btnAddFact.classList.add('btnFact');
    btnAddFact.innerHTML = `<i class="fa fa-plus" data-id=${habit.id}></i>`;
    btnAddFact.setAttribute('data-id', habit.id);
    footerHabit.appendChild(btnAddFact);
    // click event - create habit fact for habit plan
    btnAddFact.addEventListener('click', createHabitFact);

    const newHabitFact = document.createElement('label');
    newHabitFact.classList.add('habit-fact');
    newHabitFact.setAttribute('data-id', habit.id);
    footerHabit0.appendChild(newHabitFact);

    const newHabitPlan = document.createElement('label');
    newHabitPlan.classList.add('habit-plan');
    newHabitPlan.setAttribute('data-id', habit.id);
    // newHabitPlan.innerHTML = `/ ${habit.frequency}`;
    footerHabit0.appendChild(newHabitPlan);

    if(habit.count > 0) {
        if (habit.count >= habit.frequency) {
            newHabitFact.innerHTML = '';
            newHabitPlan.innerHTML = 'Complete!';  
        } else {
            newHabitFact.innerHTML = habit.count;
            newHabitPlan.innerHTML = `/ ${habit.frequency}`;
        }
    } else {
        newHabitFact.innerHTML = '0';
        newHabitPlan.innerHTML = `/ ${habit.frequency}`;
    };
}

function trackNewHabit(e) {
    postNewHabit(e);
    window.location.reload(); 
}

function createHabitFact(e) {
    
    id = e.target.getAttribute('data-id')
    const habitFact = document.querySelector(`.habit-fact[data-id='${id}']`);
    const habitPlan = document.querySelector(`.habit-plan[data-id='${id}']`);
    
    if (habitPlan.innerHTML != "Complete!") {
        postHabitFact(e);

        let fact = habitFact.innerHTML;
        let plan = habitPlan.innerText[2];
        console.log(plan)

        if (Number(fact)+1  == Number(plan)) {
            habitFact.innerHTML = '';
            habitPlan.innerHTML = "Complete!"
        } else {
            fact = Number(habitFact.innerHTML) + 1;
            habitFact.innerHTML = fact;
            console.log("fact",fact);
        }
    }
       
}

function renderStreak(e) {
    // window.location.hash = '#streak';
    const id = e.target.getAttribute('data-id')
    console.log("streak info for ", e.target, id );

    main.innerHTML = '';
    showStreakTitle(id);
    // showStreak(id);
};

function showStreakTitle(id) {
    const today = new Date().toISOString().substring(0, 10);

    const streak = document.createElement('section');
    streak.classList.add('streak');
    main.appendChild(streak);

    const streakContainer = document.createElement('div');
    streakContainer.classList.add('streak-container');
    streak.appendChild(streakContainer);

    const streakGrid = document.createElement('div');
    streakGrid.classList.add('dash-row');
    streakGrid.classList.add('row');
    streakGrid.classList.add('justify-content-between');
    streakContainer.appendChild(streakGrid);
    
    const streakTitle = document.createElement('div');
    streakTitle.classList.add('col-md-9');
    streakTitle.innerHTML = '<h1 class="label-dash">Streak Info</h1>'
    streakGrid.append(streakTitle);

    const streakDate = document.createElement('div');
    streakDate.classList.add('col-md-3');
    // dashboardDate.classList.add('justify-content-center');
    streakDate.innerHTML = '<input type="date" class="form-control inputHabitsDate" name="inputHabitsDate">'
    streakGrid.append(streakDate);
    // streakDate.querySelector('.inputHabitsDate').setAttribute('value', today);
    // streakDate.querySelector('.inputHabitsDate').addEventListener('change', showDashboard);
    
    const divContainer= document.createElement('div');
    divContainer.classList.add('container');
    divContainer.classList.add('streak-cont');
    streakContainer.appendChild(divContainer);
}

function showStreak(id) {
    const streakCard = document.createElement('div');
    streakCard.classList.add('streak-card');
    document.querySelector('.streak-cont').appendChild(streakCard);

    const newHabitName = document.createElement('div');
    newHabitName.innerHTML = `<h3 class="habit-name">${habit.name}</h3>`
    streakCard.appendChild(newHabitName);

    const streakTable = document.createElement('table');
    streakCard.appendChild(streakTable);

    const streakTHead = document.createElement('thead');
    streakTable.appendChild(streakTHead);

    const headTr = document.createElement('tr');
    streakTHead.appendChild(headTr);

    const headth = document.createElement('th');
    headth.setAttribute('scope',"col");
    headth.innerHTML = 'Mon';
    headtr.appendChild(headTh);

    const streakTBody = document.createElement('tbody');
    streakTable.appendChild(streakTBody);

    const bodyTr = document.createElement('tr');
    streakTHead.appendChild(bodyTr);

//     <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
}