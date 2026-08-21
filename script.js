const stages = document.querySelector('.stages');
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
const checkboxes = document.querySelectorAll('.complete input');

if (stages) {
    stages.classList.add('is-enhanced');
}

tabs.forEach(function(tab, index) {

    tab.addEventListener('click', function() {

        const isCurrentlyActive = tab.classList.contains('active');

        // Close all tabs first
        tabs.forEach(function(t) {
            t.classList.remove('active');
            t.setAttribute('aria-expanded', 'false');
        });

        panels.forEach(function(panel) {
            panel.classList.remove('active');
        });

        // If clicking a closed tab, open it. If clicking an open tab, leave it closed.
        if (!isCurrentlyActive) {
            tab.classList.add('active');
            tab.setAttribute('aria-expanded', 'true');
            panels[index].classList.add('active');
        }

    });

});

checkboxes.forEach(function(checkbox, index) {

    checkbox.addEventListener('change', function() {

        if (checkbox.checked) {
            tabs[index].classList.add('done');
        } else {
            tabs[index].classList.remove('done');
        }

    });

});
