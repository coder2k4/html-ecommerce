/*============ SHOW MENU ===========*/

const showMenu = (toggleID, navID) => {
    const $toggle = document.getElementById(toggleID)
    const $nav = document.getElementById(navID)


    if ($toggle && $nav) {
        $toggle.addEventListener('click', () => {
            $nav.classList.toggle('show')
        })
    }
}


showMenu('nav-toggle', 'nav-menu')



/*============ ACTIVE LINKS ===========*/

const $navLinks = document.querySelectorAll('.nav__link')

function linkAction() {
    $navLinks.forEach($link => $link.classList.remove('active'))
    this.classList.add('active')

    const $navMenu = document.getElementById('nav-menu')
    $navMenu.classList.remove('show')
}

$navLinks.forEach($link => $link.addEventListener('click', linkAction))