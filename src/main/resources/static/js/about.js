// ChangHwan Lee 텍스트를 클릭했을 때 새 창으로 인스타그램 프로필 링크를 엽니다.
function openInstagram() {
    // 인스타그램 프로필 링크
    var instagramProfileLink = "https://www.instagram.com/leechanghwanspace";
    // 새 창에서 인스타그램 프로필 링크 열기
    window.open(instagramProfileLink, "_blank");
}

// 링크 텍스트 변경 및 클릭 이벤트 추가
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

// 요소가 화면에 나타날 때 페이드인 효과를 주기 위해 클래스 추가
window.addEventListener('load', function() {
    var rectangleP = document.querySelector('.rectangle p');
    var placeBtn = document.getElementById('place-btn');
    var infoBtn = document.getElementById('info-btn');
    rectangleP.classList.add('show');
    placeBtn.classList.add('show');
    infoBtn.classList.add('show');
});

document.getElementById('place-btn').addEventListener('click', function() {
    window.location.href = '/place';  // 이동할 페이지 URL로 변경하세요
});

const placeBtn = document.getElementById('place-btn');
placeBtn.addEventListener('mouseover', function() {
    placeBtn.textContent = '장소';
});
placeBtn.addEventListener('mouseout', function() {
    placeBtn.textContent = 'PLACE';
});

document.getElementById('info-btn').addEventListener('click', function() {
    window.location.href = '/info';  // 이동할 페이지 URL로 변경하세요
});

const infoBtn = document.getElementById('info-btn');
infoBtn.addEventListener('mouseover', function() {
    infoBtn.textContent = '서비스 정보';
});
infoBtn.addEventListener('mouseout', function() {
    infoBtn.textContent = 'SERVICE INFO';
});
