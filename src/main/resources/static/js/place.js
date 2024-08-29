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

  function changeCategory(category, newText) {
      var categoryBox = document.getElementById(category);
      categoryBox.getElementsByTagName("span")[0].innerText = newText;
  }

  function resetCategory(category, originalText) {
      var categoryBox = document.getElementById(category);
      categoryBox.getElementsByTagName("span")[0].innerText = originalText;
  }
