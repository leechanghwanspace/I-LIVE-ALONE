function openInstagram() {
    var instagramProfileLink = "https://www.instagram.com/leechanghwanspace";
    window.open(instagramProfileLink, "_blank");
}

const mainLink = document.getElementById('main');
const aboutLink = document.getElementById('about');
const placeLink = document.getElementById('place');
const placeinfo = document.getElementById('info');

mainLink.addEventListener('mouseover', function() {
    mainLink.textContent = '메 인';
});
mainLink.addEventListener('mouseout', function() {
    mainLink.textContent = 'MAIN';
});

aboutLink.addEventListener('mouseover', function() {
    aboutLink.textContent = '소  개';
});
aboutLink.addEventListener('mouseout', function() {
    aboutLink.textContent = 'ABOUT';
});

placeLink.addEventListener('mouseover', function() {
    placeLink.textContent = '장  소';
});
placeLink.addEventListener('mouseout', function() {
    placeLink.textContent = 'PLACE';
});

placeinfo.addEventListener('mouseover', function() {
    placeinfo.textContent = '정  보';
});
placeinfo.addEventListener('mouseout', function() {
    placeinfo.textContent = 'INFO';
});

function togglePostForm() {
    const popup = document.getElementById('popup');
    popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
}

const posts = Array.from(document.querySelectorAll('.post-item')).reverse();
const pagination = document.getElementById('pagination');
const postsPerPage = 4;
let currentPage = 1;

function displayPosts(page) {
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    posts.forEach((post, index) => {
        post.style.display = 'none';
    });

    const currentPosts = posts.slice(start, end);
    currentPosts.forEach(post => {
        post.style.display = 'block';
    });

    const postContainer = document.getElementById('post-items');
    postContainer.innerHTML = '';
    currentPosts.forEach(post => {
        postContainer.appendChild(post);
    });
}

function setupPagination() {
    const pageCount = Math.ceil(posts.length / postsPerPage);
    pagination.innerHTML = '';
    for (let i = 1; i <= pageCount; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.innerText = i;
        pageBtn.onclick = () => {
            currentPage = i;
            displayPosts(i);
        };
        pagination.appendChild(pageBtn);
    }
}

displayPosts(currentPage);
setupPagination();
