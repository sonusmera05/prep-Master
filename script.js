// Filter Cards by Class
function filterClass(className, evt) {
    const cards = document.querySelectorAll('.card');
    const tabs = document.querySelectorAll('.tab-btn');

    tabs.forEach(tab => tab.classList.remove('active'));
    if (evt && evt.target) {
        evt.target.classList.add('active');
    }

    cards.forEach(card => {
        if (className === 'all') {
            card.style.display = 'flex';
        } else {
            if (card.classList.contains(className)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Modal Toggle
function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close Modal on outside click
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Handle Login Form Submit
function handleLogin(event) {
    event.preventDefault();
    alert('Login Successful!');
    closeLoginModal();
}

// Start Test Redirect Placeholder
function startTest(testTitle) {
    alert(testTitle + ' is loading...');
}