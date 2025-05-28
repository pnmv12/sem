// Firebase config (замени на свои значения)
const firebaseConfig = {
    apiKey: "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1K8qRZwxPomv9\nYGWmN+X4hLPOxldL9Ovxq5LugSDNeR7qiXhsmPQEj/P2Mb7EzFFoj7sRhNCr1ddT\n83QAWlLda8I+SOCJIA9lS57WUqbREPboO9fkGQAIcFbXHEb35oj4A13ThxfPcGH7\nMzW/rSyU00ORwth8Xg0imgkL79GopVgBS0e0phOjpZ0N0maC6W1Fd68vB5781qhg\nWJD3ag7TXpx8A2DiItcjKh525KfJ7q1xEWfi7DJAxwk/3PpWmepiqeNvNTUuGLbr\n8OY6Q7dCPiepnqPCtucONMXui5x7g898CieBG+cKahMJyUMmaE1ijr4YTzV74ixd\nheKa/1E9AgMBAAECggEAFElfiPGTiNVEp14kc7zdpPrjEXvXKZu20dxm+wr9i9SM\nuDGFiQ+Ff39JD5/ZXzsLwJwbk+Yd4afz0SQ5MJLspXucCBJsBh7PaoXRtukRYea2\n5yFQVuvPu6IsrzCs57RqUO87keSWL3XDmvfMhHaVP+L6NXeuexqi+OVrruj/PpV4\n7sKB0ZwT4uAYta3CSRjvZ79atvkR2OC0rTqtpv0nkIuboTYzgWPFbimD9+WR3lYb\nsc2Ldgywi6CxeKGFwMGNHJ0hnfBbpFTvRwlxPHOjyjD1asehUgkYT6qljpglhUXY\nV+Zpgle1XH6ioY9jxoLJXdtUjKVrlorKmC6pUUZo9wKBgQDXr+qfm/tgK5Fnmpco\nONz3//oSSH5xATEpvdqOCsJseiRFE+v906qo5Ksn+J0UkLm3igg6B1eKCu1owLBH\nVkvhQD4QDKVE0RzaEMHhUDjizoLm5/r4ln/bJMSbV4V7tXHzBg4/EAozFUwCGTuX\n00s9m63F8iqViL2B4M1HIUFMTwKBgQDXCF3LGVDWtDzmCxosjjSOyHkUSAc0yYzq\nqCqAhTGwEZGvpzz8IGhrS1pP58Te+nw++KByVS7O9LrWgQ7/xbSnMMAQU2fjgGyA\nQZjQfItNFq+QF8j06az/FSrX0Wnb3LbpxzicNcrzNqXrZaj0ZMw9DU3CjL1OX6fc\nonUNsI4qswKBgQCyBVSV4Fyeh9c/t+zDGgvn9bMlnAggpWc6mKTnUCIg/r8o9MR3\ngFj/hZ1vJFgiPUHMJ3Waz6yFF3fUWhYlCykeBbQz8vwFzMMPiX08xsXtDZ4lj5sp\nyq5E5hgQTzCxZpVijMD9c/O3LgDKSqFRMuiLNQ88riBPw8kGhdFowB3xKQKBgB19\njD96bVfEyEVUaHaL2jFq1RAvAK4Apk7YWVve6H2ZKz3H1dlOKIPuhahHxPw/piKM\nvpRvkkfX0Hfyozf4yVnUmcKjbbAJwNemJ2sQaZpc7h745BqSoaMqKAIJOldo4b0W\nEXF6/yZz7DVob890s338ARoZay0AeWkM7ri96gF5AoGBAKDD0+pdNeV4sWiRtlwO\n1hhV7D8PhmYM87VLmvH5PsuTjlCQorNtIomS3fsqmVMQOqjHhTZdoZ7nsZ+R6Jxr\nPw6v6MKX7tTikHpA+Z/yXeDJKQmKSndNTlykYwnwnW/nGTtNeObMgbB2P9/zbAzx\nlHEbCCrZS+Ak7ZPpYnLrcSCl\n-----END PRIVATE KEY-----\n",
    authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
    projectId: "semka-36384",
    storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "442535772082",
    appId: "YOUR_FIREBASE_APP_ID",
    databaseURL: "https://semka-36384-default-rtdb.europe-west1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Získávání prvků ze stránky / Inicializace sekcí
const navHome = document.getElementById('nav-home');
const navSubmit = document.getElementById('nav-submit');
const navAdminLogin = document.getElementById('nav-admin-login');
const navLogout = document.getElementById('nav-logout');

const homeSection = document.getElementById('home-section');
const submitIdeaSection = document.getElementById('submit-idea-section');
const adminLoginSection = document.getElementById('admin-login-section');
const adminPanelSection = document.getElementById('admin-panel-section');
const userIdeaListSection = document.getElementById('user-idea-list-section');
const statisticsSection = document.getElementById('statistics-section');

const ideaSubmissionForm = document.getElementById('idea-submission-form');
const adminLoginForm = document.getElementById('admin-login-form');
const loginErrorMessage = document.getElementById('login-error-message');
const adminIdeaList = document.getElementById('admin-idea-list');
const userIdeaList = document.getElementById('user-idea-list');

const adminProblemText = document.getElementById('admin-problem-text');
const adminRewardText = document.getElementById('admin-reward-text');
const postProblemButton = document.getElementById('post-problem-button');
const currentProblemDisplay = document.getElementById('current-problem-display');
const currentRewardDisplay = document.getElementById('current-reward-display');

let currentIdeas = [];
let isAdmin = false;

// Nastavení navigačních odkazů
function showSection(section) {
    homeSection.style.display = 'none';
    submitIdeaSection.style.display = 'none';
    adminLoginSection.style.display = 'none';
    adminPanelSection.style.display = 'none';
    userIdeaListSection.style.display = 'block';
    statisticsSection.style.display = 'block';
    section.style.display = 'block';
}

// Zpracování stisků tlačítek menu
navHome.onclick = function() {
    showSection(homeSection);
    fetchProblemAndReward();
    fetchAndDisplayIdeas();
    isAdmin = false;
};
navSubmit.onclick = function() {
    showSection(submitIdeaSection);
    isAdmin = false;
};
navAdminLogin.onclick = function() {
    showSection(adminLoginSection);
    isAdmin = false;
};
navLogout.onclick = function() {
    auth.signOut().then(function() {
        alert('Logged out!');
        isAdmin = false;
        showSection(homeSection);
        fetchAndDisplayIdeas();
        navAdminLogin.style.display = 'block';
        navLogout.style.display = 'none';
    });
};

// Přihlášení administrátora
adminLoginForm.onsubmit = async function(e) {
    e.preventDefault();
    const email = adminLoginForm['admin-email'].value;
    const password = adminLoginForm['admin-password'].value;
    const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password })
    });
    if(res.ok){
            loginErrorMessage.style.display = 'none';
            alert('Admin logged in!');
            adminLoginForm.reset();
        isAdmin = true;
            showSection(adminPanelSection);
            fetchAndDisplayIdeas();
        }
    else {
            loginErrorMessage.style.display = 'block';
            loginErrorMessage.textContent = 'Invalid email or password.';
        }
    };

    // Sledování stavu přihlášení
auth.onAuthStateChanged(function(user) {
    if (user) {
        navAdminLogin.style.display = 'none';
        navLogout.style.display = 'block';
        showSection(adminPanelSection);
        fetchAndDisplayIdeas();
    } else {
        navAdminLogin.style.display = 'block';
        navLogout.style.display = 'none';
        showSection(homeSection);
        fetchAndDisplayIdeas();
    }
});

// Funkce pro načtení aktuálního problému a odměny
async function fetchProblemAndReward() {
    await fetch('/api/getProblem')
        .then(function(res) { return res.json(); })
        .then(function(data) {
            if (data && data.problemText) {
                currentProblemDisplay.innerHTML = "<p>" + data.problemText + "</p>";
            } else {
                currentProblemDisplay.innerHTML = "<p>No problem posted yet.</p>";
            }
            if (data && data.rewardText) {
                currentRewardDisplay.innerHTML = "<p>" + data.rewardText + "</p>";
            } else {
                currentRewardDisplay.innerHTML = "<p>No reward specified yet.</p>";
            }
        })
        .catch(function() {
            currentProblemDisplay.innerHTML = "<p>Error loading problem.</p>";
            currentRewardDisplay.innerHTML = "<p>Error loading reward.</p>";
        });
}

// Funkce pro načtení a zobrazení nápadů
 async function fetchAndDisplayIdeas() {
   const res = await fetch('/api/get');
   const data = await res.json();
           currentIdeas = [];
            for (key in data) {
                const idea = data[key];
                idea.idFirebase = key;
                currentIdeas.push(idea);
            }
            console.log('penis')
            renderIdeas();
            updateStatisticsChart();
}

// Zobrazení nápadů pro uživatele a administrátora
function renderIdeas() {
    console.log(currentIdeas);
    userIdeaList.innerHTML = '';
    adminIdeaList.innerHTML = '';
    for (let i = 0; i < currentIdeas.length; i++) {
        const idea = currentIdeas[i];
        const userLi = document.createElement('li');
        userLi.className = 'idea-item';
        userLi.innerHTML = "<div><h3>" + idea.name + "</h3><p>Date: " + idea.date + "</p><p>Proposal: " + (idea.proposal || 'N/A') + "</p><p>Contact: " + idea.telefon + " | ID: " + idea.id + "</p></div>" +
                '<div class="actions">' +
                '<span class="star-icon' + (idea.isGood ? ' starred' : '') + '" data-id="' + idea.idFirebase + '">&#9733;</span>' +
                '<button class="edit-btn" data-id="' + idea.idFirebase + '">Edit</button>' +
                '<button class="delete-btn" data-id="' + idea.idFirebase + '">Delete</button>' +
                '</div>';
        userIdeaList.appendChild(userLi);

        if (idea.isGood) {
            const adminLi = document.createElement('li');
            adminLi.className = 'idea-item';
            adminLi.setAttribute('data-id', idea.idFirebase);
            adminLi.innerHTML = "<div><h3>" + idea.name + "</h3><p>Date: " + idea.date + "</p><p>Proposal: " + (idea.proposal || 'N/A') + "</p><p>Contact: " + idea.telefon + " | ID: " + idea.id + "</p></div>" +
                '<div class="actions">' +
                '<span class="star-icon' + (idea.isGood ? ' starred' : '') + '" data-id="' + idea.idFirebase + '">&#9733;</span>' +
                '<button class="edit-btn" data-id="' + idea.idFirebase + '">Edit</button>' +
                '<button class="delete-btn" data-id="' + idea.idFirebase + '">Delete</button>' +
                '</div>';
            adminIdeaList.appendChild(adminLi);
        }
    }

    if (auth.currentUser) {
        const deleteBtns = document.querySelectorAll('.delete-btn');
        for (let i = 0; i < deleteBtns.length; i++) {
            deleteBtns[i].onclick = handleDelete;
        }
        var editBtns = document.querySelectorAll('.edit-btn');
        for (let i = 0; i < editBtns.length; i++) {
            editBtns[i].onclick = handleEdit;
        }
        var starIcons = document.querySelectorAll('.star-icon');
        for (let i = 0; i < starIcons.length; i++) {
            starIcons[i].onclick = handleStarToggle;
        }
    }
}

// Odeslání nápadu uživatelem
ideaSubmissionForm.onsubmit = async function(e) {
    e.preventDefault();
    const newIdea = {
        id: 'user-' + Date.now(),
        date: ideaSubmissionForm['submit-date'].value,
        email: ideaSubmissionForm['submit-email'].value,
        name: ideaSubmissionForm['submit-name'].value,
        pocet: 1,
        proposal: ideaSubmissionForm['submit-proposal'].value,
        isGood: false
    };
   await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newIdea)
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
        if (result.success) {
            alert('Idea submitted!');
            ideaSubmissionForm.reset();
            fetchAndDisplayIdeas();
            showSection(homeSection);
        } else {
            alert('Failed to submit idea.');
        }
    })
    .catch(function() {
        alert('Error submitting idea.');
    });
};

// Odeslání problému a odměny administrátorem
postProblemButton.onclick = async function() {
    const problemText = adminProblemText.value;
    const rewardText = adminRewardText.value;
    if (!problemText.trim() && !rewardText.trim()) {
        alert('Enter problem or reward.');
        return;
    }
   await fetch('/api/postProblem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ problemText: problemText, rewardText: rewardText })
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
        if (result.success) {
            alert('Problem and Reward posted!');
            adminProblemText.value = '';
            adminRewardText.value = '';
            fetchProblemAndReward();
        } else {
            alert('Failed to post.');
        }
    })
    .catch(function() {
        alert('Error posting problem/reward.');
    });
};

// Smazání nápadu administrátorem
async function handleDelete(e) {
    var idFirebase = e.target.getAttribute('data-id');
    if (!confirm('Delete this idea?')) return;
    await fetch('/api/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(idFirebase)
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
        if (result.success) {
            alert('Idea deleted!');
            fetchAndDisplayIdeas();
        } else {
            alert('Failed to delete.');
        }
    })
    .catch(function() {
        alert('Error deleting idea.');
    });
}

// Editace nápadu administrátorem
async function handleEdit(e) {
    const idFirebase = e.target.getAttribute('data-id');
    const idea = null;
    for (let i = 0; i < currentIdeas.length; i++) {
        if (currentIdeas[i].idFirebase === idFirebase) {
            idea = currentIdeas[i];
            break;
        }
    }
    if (!idea) {
        alert('Idea not found.');
        return;
    }
    const newName = prompt('New First Name:', idea.name);
    const newProposal = prompt('New Proposal:', idea.proposal);
    const newDate = prompt('New Date (YYYY-MM-DD):', idea.date);
    const newNumber = prompt('New Phone:', idea.number || '');
    if (newName === null || newProposal === null || newDate === null || newNumber === null) return;
    const parametry = ['name', 'proposal', 'date', 'number'];
    const values = [newName, newProposal, newDate, newNumber];
    await fetch('/api/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idFirebase: idFirebase, parametry: parametry, values: values })
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
        if (result.success) {
            alert('Idea updated!');
            fetchAndDisplayIdeas();
        } else {
            alert('Failed to update.');
        }
    })
    .catch(function() {
        alert('Error updating idea.');
    });
}

// Přepínání hvězdičky pro označení dobrého nápadu
async function handleStarToggle(e) {
    const idFirebase = e.target.getAttribute('data-id');
    const idea = null;
    for (let i = 0; i < currentIdeas.length; i++) {
        if (currentIdeas[i].idFirebase === idFirebase) {
            idea = currentIdeas[i];
            break;
        }
    }
    if (!idea) {
        alert('Idea not found.');
        return;
    }
    const newIsGood = !idea.isGood;
    await fetch('/api/edit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idFirebase: idFirebase, parametry: ['isGood'], hodnoty: [newIsGood] })
    })
    .then(function(res) { return res.json(); })
    .then(function(result) {
        if (result.success) {
            fetchAndDisplayIdeas();
        } else {
            alert('Failed to update status.');
        }
    })
    .catch(function() {
        alert('Error updating status.');
    });
}

// Inicializace grafu pro statistiky nápadů
var ideasChart;
function updateStatisticsChart() {
    const total = currentIdeas.length;
    const good = 0;
    for (let i = 0; i < currentIdeas.length; i++) {
        if (currentIdeas[i].isGood) good++;
    }
    const regular = total - good;
    const ctx = document.getElementById('idea-statistics-chart').getContext('2d');
    if (ideasChart) ideasChart.destroy();
    ideasChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Good Ideas', 'Regular Ideas'],
            datasets: [{
                data: [good, regular],
                backgroundColor: ['rgba(75,192,192,0.7)', 'rgba(255,99,132,0.7)'],
                borderColor: ['rgba(75,192,192,1)', 'rgba(255,99,132,1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { title: { display: true, text: 'Idea Evaluation Statistics' } }
        }
    });
}

// Inicializace Firebase a načtení počátečních dat
document.addEventListener('DOMContentLoaded', function() {
    fetchProblemAndReward();
    fetchAndDisplayIdeas();
    showSection(homeSection);
});
