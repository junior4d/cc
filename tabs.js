let tabs = ['web', 'desktop'];
let selectedTab = 0;

window.addEventListener('load', function() {
    selectedTab = 0;
    for (var i = 0; i < tabs.length; i++) {
        document.getElementById(tabs[i]).style.display = 'none';
    }
    document.getElementById(tabs[selectedTab]).style.display = 'block';
});

// web tab
document.getElementById('webTab').onclick = function() {
    selectedTab = 0;
    changeTabs();
}

// desktop tab
document.getElementById('desktopTab').onclick = function() {
    selectedTab = 1;
    changeTabs();
}

function changeTabs() {
    for (var i = 0; i < tabs.length; i++) {
        document.getElementById(tabs[i]).style.display = 'none';
    }
    document.getElementById(tabs[selectedTab]).style.display = 'block';

    // restore
    window.location = '#store';
}