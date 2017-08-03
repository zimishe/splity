/**
 * Created by eugene on 03.08.2017.
 */

export function authTabs() {
    let controls = [].slice.call(document.querySelectorAll('.auth__tab__control')),
        tabs = [].slice.call(document.querySelectorAll('.auth__tab'));

    controls.forEach(function (control) {
        control.addEventListener('click', function (e) {
            controls.forEach(function (item) {
                item.classList.remove('auth__tab__control--active');
                e.target.classList.add('auth__tab__control--active');
            });

            tabs.forEach(function (tab) {
                tab.classList.remove('auth__tab--visible')
            });

            let index = controls.indexOf(e.target);
            tabs[index].classList.add('auth__tab--visible');
        })
    })
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