 // ChangHwan Lee 텍스트를 클릭했을 때 새 창으로 인스타그램 프로필 링크를 엽니다.
  function openInstagram() {
    // 인스타그램 프로필 링크
    var instagramProfileLink = "https://www.instagram.com/leechanghwanspace";
    // 새 창에서 인스타그램 프로필 링크 열기
    window.open(instagramProfileLink, "_blank");
  }

  // "WATCH MORE" 버튼 클릭 시 category.html로 이동
  const watchMoreButton = document.getElementById('watch-more');

  watchMoreButton.addEventListener('mouseover', function() {
   watchMoreButton.textContent = '더 보기';
  });

  watchMoreButton.addEventListener('mouseout', function() {
   watchMoreButton.textContent = 'WATCH MORE';
  });

  document.getElementById("watch-more").addEventListener("click", function() {
    window.location.href = "about";
  });
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

   // 타이핑할 문구
  const text = "I LIVE ALONE"
  // 타이핑 속도 (ms 단위)
  const typingSpeed = 200;

  // 타이핑되는 텍스트를 담을 변수
  let index = 0;

  // 타이핑 효과를 구현하는 함수
  function type() {
    // 문자 하나씩 가져와서 출력
    document.querySelector('.hero h2').textContent += text[index];
    // 다음 문자로 이동
    index++;
    // 모든 문자를 출력한 경우 index 초기화
    if (index >= text.length) {
      index = 0;
      clearInterval(typingInterval);
    }
  }

  // 일정한 간격으로 type 함수를 호출하여 타이핑 효과 구현
  const typingInterval = setInterval(type, typingSpeed);

  const heroText = document.getElementById('hero-text');

  heroText.addEventListener('mouseover', function() {
    heroText.innerHTML = '<br>아일라 ,<br>" 혼자 사는 사람들을 위한 "<br><br>';
    heroText.style.color = '#1fdfdf';
  });
  heroText.addEventListener('mouseout', function() {
      heroText.innerHTML = '<br>I L A ,<br>" It is for people who live alone "<br> <br>';
      heroText.style.color = 'white';
  });


  const coopCompButton = document.getElementById('coop-comp-button');

coopCompButton.addEventListener('mouseover', function() {
  coopCompButton.innerHTML = 'WATCH MORE 버튼을 누르세요.';
  coopCompButton.style.color = '#1fdfdf'; // 텍스트 색상 변경
});

coopCompButton.addEventListener('mouseout', function() {
  coopCompButton.innerHTML = 'Press the WATCH MORE button.<br>';
  coopCompButton.style.color = 'white'; // 텍스트 색상 변경
});

