const getListIcons = function getAllSidebarListIcons() {
    const iconElements = document.querySelectorAll('.nav-block li .icon');
    
    return Array.from(iconElements);
}

const addIconsToNav = function addIconsToNav() {
    const iconElements = getListIcons();
    const iconNames = [
        'home', 
        'card-account-details-outline',
        'message-reply',
        'clock-time-four',
        'file-multiple',
        'account-group',
        'cog',
        'help-box',
        'shield-check'
    ];

    iconElements.forEach((icon, index) => {
        icon.style.backgroundImage = `url('./res/icons/${iconNames[index]}.svg')`
    });

    iconElements[0].style.backgroundImage = "url('./res/icons/view-dashboard.svg')";
}

const initializeScript = function initializeScript() {
    addIconsToNav();
}

initializeScript();