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

function changeCategory(category, newText, imageName) {
    var categoryBox = document.getElementById(category);
    categoryBox.getElementsByTagName("span")[0].innerText = newText;
    document.getElementById('square').style.backgroundImage = 'url(/image/' + imageName + ')';
    document.getElementById('square').style.backgroundSize = 'cover';
    document.getElementById('square').style.backgroundPosition = 'center';
}

function resetCategory(category, originalText) {
    var categoryBox = document.getElementById(category);
    categoryBox.getElementsByTagName("span")[0].innerText = originalText;
    document.getElementById('square').style.backgroundImage = 'url(/image/youtube.jpg)';
    document.getElementById('square').style.backgroundSize = 'cover';
    document.getElementById('square').style.backgroundPosition = 'center';
}

// 초기 이미지를 youtube.jpg로 설정
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('square').style.backgroundImage = 'url(/image/youtube.jpg)';
    document.getElementById('square').style.backgroundSize = 'cover';
    document.getElementById('square').style.backgroundPosition = 'center';
});