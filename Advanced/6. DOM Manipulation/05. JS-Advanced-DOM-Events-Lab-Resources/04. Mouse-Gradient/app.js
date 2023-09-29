function attachGradientEvents() {
    const gradient = document.getElementById('gradient')
    gradient.addEventListener('mousemove', onMouseOver);
    const result = document.getElementById('result');

    function onMouseOver(e) {
        result.textContent = Math.floor(e.offsetX / gradient.clientWidth * 100) + '%';
        // clientWidth e width na elementa i razdelyame na 100, za da go vidim v  procenti i proportsiya
    }
}