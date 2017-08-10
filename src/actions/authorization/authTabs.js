/**
 * Created by eugene on 03.08.2017.
 */

export function authTabs() {
    let container = document.querySelector('.auth__tabs__controls');
    
    container.addEventListener('click', (e) => {
        let controls = [].slice.call(document.querySelectorAll('.auth__tab__control')),
            tabs = [].slice.call(document.querySelectorAll('.auth__tab')),
            index = controls.indexOf(e.target);
        
        controls.forEach(control => control.classList.remove('auth__tab__control--active'));
        
        e.target.classList.add('auth__tab__control--active');
        
        tabs.forEach(tab => tab.classList.remove('auth__tab--visible'));
        
        tabs[index].classList.add('auth__tab--visible');
    });
}

export function toggleAuthModal() {
    let control = document.querySelector('.auth__toggle'),
        form = document.querySelector('.auth');

    if (control !== null) {
        control.addEventListener('click', () => {
            form.classList.toggle('auth--visible');
        })
    }

}