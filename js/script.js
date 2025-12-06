// IE 체크
const ver = navigator.userAgent;
const isIE = /trident/i.test(ver);

if(isIE){
	alert("익스플로러 브라우저로 접속하셨네요. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해주세요.");
}

// 멤버 네비게이션 클릭 이벤트
const memberLinks = document.querySelectorAll('nav.others a');

memberLinks.forEach((link, index) => {
	link.addEventListener('click', (e) => {
		// href 속성이 있으면 페이지 이동 허용
		if (link.getAttribute('href') && link.getAttribute('href') !== '#') {
			// 페이지 이동 허용 (preventDefault 하지 않음)
			return;
		}
		
		// href가 #인 경우에만 기본 동작 방지
		e.preventDefault();
		
		// 모든 링크의 'on' 클래스 제거
		memberLinks.forEach(l => l.classList.remove('on'));
		
		// 클릭한 링크에 'on' 클래스 추가
		link.classList.add('on');
	});
});
