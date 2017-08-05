/**
 * Created by eugene on 08/05/17.
 */

export function loginSuccess() {
    let authContainer = document.querySelector('.auth'),
        form = document.querySelector('.auth__tab__login');
    
    authContainer.classList.remove('auth--visible');
    form.reset();
}
