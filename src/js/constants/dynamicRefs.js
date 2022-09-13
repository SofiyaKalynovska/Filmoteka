export const dynRefs = (id = 0) => {
  return {
    addToWatchedBtn: document.querySelector('.modal-card__watched-btn'),
    addToQueueBtn: document.querySelector('.modal-card__queue-btn'),
    switchSignUpBtn: document.getElementById('switchSignUp'),
    switchSignInBtn: document.getElementById('switchSignIn'),
    authContainer: document.getElementById('auth-container'),
    formLogIn: document.getElementById('sign-in-form'),
    formSignUp: document.getElementById('sign-up-form'),
    btnLogOut: document.getElementById('btn_logout'),
    notLoggedIn: document.getElementById('not-logged-in'),
    LoggedIn: document.getElementById('logged-in'),
    userEmail: document.getElementById('user_email'),
    activeFilm: document.querySelector(`[data-action='${id}']`),
    closeModalBtnEl: document.querySelector('[data-modal-close]'),
    backdropEl: document.querySelector('[data-backdrop]'),
    closeBtnAuth: document.querySelector('modal-card__close-btn')
  };
};
