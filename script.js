// DOM ELEMENTS
const mainPage = document.querySelector('.main-page')
const loginPage = document.querySelector('.login-page');

const middleContent = document.querySelector('.middle-content');

const btnTop = document.querySelector('.btn-top')

const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');

const modalX = document.querySelector('.login-modal i');

const loginFormBtn = document.querySelector('.login-form-btn');

const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');

const modalFeedsPageX = document.querySelector('.modal-head i');

const modalFeedInput = document.querySelector('.modal-input');

const modalFeedBtn = document.querySelector('.modal-head button');

const modalFeedPlus = document.querySelector('.modal-footer span');

const user = document.querySelector('.user');

const sidebar = document.querySelector('.sidebar');

const sidebarWrapper = document.querySelector('.sidebar-wrapper');

const sidebarX = document.querySelector('.sidebar-header i');

const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

/***************************************************/
/***************************************************/


// Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
    loginModal.style.display = 'block';
};

middleContent.addEventListener('click', e => {
    if(e.target.classList[1] === 'main-btn') {
        goToLoginPage();
    }
});

btnTop.addEventListener('click', () => {
    const userInfo = document.querySelector('.user-info');
    const userPassword = document.querySelector('.password');

    if(userInfo.value !== "" && userPassword.value !== "") {
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';

    } else {
        goToLoginPage();
        loginModal.style.display = 'block';
    }
})

// Login Page
modalX.addEventListener('click', () => {
    loginModal.style.display = 'none';
})

loginFormBtn.addEventListener('click', () => {
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');


    if (loginUserInfo.value !== "" && loginPassword.value !== "") {
        loginPage.style.display = "none";
        newsFeedPage.style.display = 'block';
    } else {
        loginModal.style.display = 'block';
        loginPage.style.displa = 'block';
    }
})

// News feed page
// Post content

const changeOpacity = (x) => {
    modalFeedBtn.style.opacity = x;
    modalFeedPlus.style.opacity = x;
};

postBtn.addEventListener('click', () => {
    modalWrapper.style.display = 'block';
})

modalFeedsPageX.addEventListener('click', () => {
    if(modalFeedInput.value !== "") {
        modalFeedInput.value = "";
        changeOpacity(0.5);
    }
    modalWrapper.style.display = 'none';
})

modalFeedInput.addEventListener('keypress', (e) => {
    if(e.target.value !== "") {
        changeOpacity(1);
    }
})

modalFeedInput.addEventListener('blur', (e) => {
    if(e.target.value === "") {
        changeOpacity(0.5);
    }
})

user.addEventListener('click', () => {
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
})

sidebarX.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})

// Dark Mode
const darkElements1 = document.querySelectorAll('.dark-mode-1');

const darkElements2 = document.querySelectorAll('.dark-mode-2');

const lightTexts = document.querySelectorAll('.light-text');

const borders = document.querySelectorAll('.border');

toggle.addEventListener('click', () => {
    circle.classList.toggle('move');
    Array.from(darkElements1).map((darkEl1) => darkEl1.classList.toggle('dark-1'));
    Array.from(darkElements2).map((darkEl2) => darkEl2.classList.toggle('dark-2'));
    Array.from(lightTexts).map((lightText) => lightText.classList.toggle('light'));
    Array.from(borders).map((borderColor) => borderColor.classList.toggle('border-color'));
});


