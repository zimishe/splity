/**
 * Created by eugene on 08/05/17.
 */

export function registrationSuccess() {
    let form = document.querySelector('.auth__tab__registration'),
        success = document.querySelector('.auth__tab.auth__tab--visible .auth__tab__success'),
        controls = Array.from(document.querySelectorAll('.auth__tab__control')),
        tabs = Array.from(document.querySelectorAll('.auth__tab'));

    success.classList.add('auth__tab__success--visible');
    form.reset();

    setTimeout(() => {
        success.classList.remove('auth__tab__success--visible');
        controls.forEach(control => control.classList.toggle('auth__tab__control--active'));
        tabs.forEach(control => control.classList.toggle('auth__tab--visible'));
    }, 2500)
}