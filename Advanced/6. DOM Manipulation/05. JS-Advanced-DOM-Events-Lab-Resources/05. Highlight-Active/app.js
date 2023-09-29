function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(i => { // kogato iskame da dobavim poveche ot 1 funktsiya kum 1 element, mnogoredova lambda
            // za da dobavim event listener kum vsqko pole
            i.addEventListener('focus', onFocus);
            i.addEventListener('blur', onBlur);
        });

    function onFocus(ev) {
        ev.target.parentElement.classList.add('focused'); // eventa vinagi ima target
        // tova e preporuchitelniyat nachin, po-guvkav e i ne iztriva nastoqshti klasove, ako ima takiva
    }

    function onBlur(ev) {
        ev.target.parentElement.classList.remove('focused'); // smenyame class za stil
        //  ev.target.parentElement.className = 'blurred';
    }
}