/**
 * Created by eugene on 08/05/17.
 */

export function loginSuccess() {
    let authContainer = document.querySelector('.auth'),
        regForm = document.querySelector('.auth__tab__registration'),
        regControls = document.querySelectorAll('.auth__tab__control'),
        loginForm = document.querySelector('.auth__tab__login');

    (authContainer !== null) && authContainer.classList.remove('auth--visible');
    (loginForm !== null) && loginForm.reset();
    (regForm !== null) && regForm.classList.toggle('auth__tab--visible');
    
    Array.from(regControls).forEach(control => control.classList.toggle('auth__tab__control--active'))
}
