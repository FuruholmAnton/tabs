
var el = document.querySelector('.tabs');

el.addEventListener('click', function(e) {
    var target = e.target;

    if (target.matches('.navItem')) {
        e.preventDefault();
        console.log('test');
        const id = parseInt(target.dataset.tab);
        switchTabs(id);
    }
});

var tabs = {
    el: el,
    active: 1,
    links: el.querySelectorAll('.navItem'),
    tabs: el.querySelectorAll('.tab'),
}

function switchTabs(id) {
    
    // remove prev active
    tabs.tabs[tabs.active - 1].classList.remove('active');
    tabs.links[tabs.active - 1].classList.remove('active');
    // Set new active
    tabs.tabs[id - 1].classList.add('active');
    tabs.links[id - 1].classList.add('active');
    
    tabs.active = id;
    return;
}

