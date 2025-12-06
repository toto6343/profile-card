# 🎨 Profile Card Project

인터랙티브하고 모던한 디자인의 온라인 프로필 카드 프로젝트입니다. 5명의 팀 멤버가 각각 고유한 테마와 스타일을 가진 프로필 페이지로 구성되어 있습니다.

## 🌟 프로젝트 소개

이 프로젝트는 각 팀 멤버의 개성과 직무를 반영한 독특한 디자인의 프로필 카드를 제공합니다. 각 멤버는 완전히 다른 색상 팔레트, 애니메이션 효과, 그리고 인터랙티브 요소를 가지고 있습니다.

## 👥 팀 멤버

### Member 1 - Emma Mitchell (Frontend Developer)
- 🎨 **테마**: 밝고 화려한 보라-핑크 그라데이션
- ✨ **특징**: 글라스모피즘, 부유하는 파티클 효과, 회전하는 프로필 테두리
- 💻 **스킬**: React, TypeScript, CSS3, UI/UX

### Member 2 - Luna Noir (QA Specialist)
- 🎨 **테마**: 다크 사이버펑크, 네온 그린/시안
- ✨ **특징**: 네온 그리드 배경, 반짝이는 별, 회전하는 육각형 테두리
- 💻 **스킬**: Testing, Automation, Selenium, CI/CD

### Member 3 - Marcus Green (Database Administrator)
- 🎨 **테마**: 청량한 그린 그라데이션
- ✨ **특징**: 물결 애니메이션, 떠다니는 입자, 나뭇잎 형태 테두리
- 💻 **스킬**: MySQL, PostgreSQL, MongoDB, Optimization

### Member 4 - Jay Urban (Backend Developer)
- 🎨 **테마**: 도시적 다크 퍼플
- ✨ **특징**: 도시 스카이라인, 별빛 효과, 유동적인 blob 테두리
- 💻 **스킬**: Node.js, Python, Docker, AWS

### Member 5 - Kim Woohyuk (Project Manager)
- 🎨 **테마**: 프로페셔널한 블루 그라데이션
- ✨ **특징**: 기하학적 패턴, 프리즘 효과, 다이아몬드 테두리
- 💻 **스킬**: Agile, Scrum, Jira, Leadership

## 🚀 주요 기능

- ✅ **반응형 디자인**: 모바일과 데스크톱 환경 모두 지원
- ✅ **인터랙티브 애니메이션**: 호버 효과, 클릭 효과, 자동 애니메이션
- ✅ **멤버 네비게이션**: 하단의 인디케이터로 다른 멤버 프로필로 쉽게 이동
- ✅ **스킬 태그**: 각 멤버의 전문 기술을 시각적으로 표시
- ✅ **연락처 정보**: GitHub, 이메일, 소속 팀 정보 제공
- ✅ **IE 브라우저 감지**: 구형 브라우저 사용자에게 안내 메시지 표시

## 📂 프로젝트 구조

```
profile-card-master/
├── css/                    # 스타일시트 파일
│   ├── member1.css        # Member 1 전용 스타일
│   ├── member2.css        # Member 2 전용 스타일
│   ├── member3.css        # Member 3 전용 스타일
│   ├── member4.css        # Member 4 전용 스타일
│   └── member5.css        # Member 5 전용 스타일
├── js/                     # JavaScript 파일
│   └── script.js          # 공통 스크립트 (IE 감지, 네비게이션)
├── img/                    # 이미지 파일
│   ├── member1.jpg        # Member 1 프로필 이미지
│   ├── member2.jpg        # Member 2 프로필 이미지
│   ├── member3.jpg        # Member 3 프로필 이미지
│   ├── member4.jpg        # Member 4 프로필 이미지
│   └── member5.jpg        # Member 5 프로필 이미지
├── member1.html           # Member 1 페이지
├── member2.html           # Member 2 페이지
├── member3.html           # Member 3 페이지
├── member4.html           # Member 4 페이지
├── member5.html           # Member 5 페이지
├── favicon.ico            # 파비콘
└── README.md              # 프로젝트 설명서
```

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - Flexbox & Grid Layout
  - CSS Animations & Transitions
  - Gradient & Backdrop Filter
  - Custom Properties
- **JavaScript (ES6+)**:
  - DOM Manipulation
  - Event Handling
  - Browser Detection

### 외부 라이브러리
- **Font Awesome 6.4.0**: 아이콘
- **Google Fonts**: 
  - Orbitron (코드/기술적 느낌)
  - Inter, Poppins, Raleway, Space Grotesk, Montserrat (본문)

## 📦 설치 및 실행

### 1. 저장소 클론
```bash
git clone https://github.com/toto6343/profile-card.git
cd profile-card
```

### 2. 실행
프로젝트는 순수 HTML/CSS/JavaScript로 작성되어 있어 별도의 빌드 과정이 필요 없습니다.

```bash
# 방법 1: 직접 HTML 파일 열기
member1.html을 브라우저에서 열기

# 방법 2: Live Server 사용 (VS Code 확장)
Live Server로 실행

# 방법 3: Python 간단한 서버
python -m http.server 8000
# 브라우저에서 http://localhost:8000/member1.html 접속
```

## 🎯 사용 방법

1. **프로필 확인**: 각 멤버의 HTML 파일(member1.html ~ member5.html)을 열어서 프로필을 확인합니다.
2. **멤버 전환**: 페이지 하단의 컬러 인디케이터를 클릭하여 다른 멤버 프로필로 이동합니다.
3. **인터랙션**: 프로필 이미지, 버튼, 연락처 항목에 마우스를 올려 애니메이션을 확인합니다.
4. **포트폴리오 버튼**: "View Portfolio" 버튼을 클릭하여 포트폴리오 페이지로 이동할 수 있습니다.

## 🎨 디자인 특징

### Member 1 (Frontend Developer)
- 밝고 화려한 보라-핑크 톤
- 부유하는 파티클 애니메이션
- 회전하는 그라데이션 테두리
- Shimmer 버튼 효과

### Member 2 (QA Specialist)
- 어두운 네이비 + 네온 그린
- 움직이는 네온 그리드
- Conic gradient 회전 테두리
- 펄스 배경 효과

### Member 3 (Database Admin)
- 청록색 + 라임 그린
- 물결치는 배경 애니메이션
- 나뭇잎 형태 회전 테두리
- 자연스러운 그림자 효과

### Member 4 (Backend Developer)
- 다크 네이비 + 퍼플
- 도시 스카이라인 실루엣
- 변형되는 blob 테두리
- 반짝이는 별 효과

### Member 5 (Project Manager)
- 딥 블루 + 로얄 블루
- 기하학적 삼각형 패턴
- 다이아몬드 그라데이션 테두리
- 리플 펄스 효과

## 🌐 브라우저 지원

- ✅ Chrome (최신 버전)
- ✅ Firefox (최신 버전)
- ✅ Safari (최신 버전)
- ✅ Edge (최신 버전)
- ❌ Internet Explorer (지원하지 않음, 경고 메시지 표시)

## 📱 반응형 디자인

- **Desktop**: 최적화된 레이아웃 (450px 카드)
- **Mobile**: 화면 너비의 95%로 자동 조정
- **Breakpoint**: 480px 이하에서 모바일 레이아웃 적용

## 🔧 커스터마이징

### 프로필 이미지 변경
```html
<!-- member1.html 예시 -->
<img src="img/member1.jpg" alt="Profile Image">
```

### 색상 테마 변경
```css
/* css/member1.css 예시 */
body {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
}
```

### 스킬 태그 수정
```html
<div class="skills">
    <span class="skill-tag">React</span>
    <span class="skill-tag">TypeScript</span>
    <!-- 원하는 스킬 추가 -->
</div>
```

## 🤝 기여하기

1. 이 저장소를 Fork 합니다.
2. 새로운 브랜치를 생성합니다 (`git checkout -b feature/AmazingFeature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 Push 합니다 (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다.

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👨‍💻 개발자

**Kim Woohyuk**
- GitHub: [@toto6343](https://github.com/toto6343)
- Email: yongbum0202@naver.com

## 🙏 감사의 말

- Font Awesome - 아이콘 제공
- Google Fonts - 폰트 제공
- Claude AI - 프로젝트 고도화 지원

## 📅 업데이트 내역

### v2.0.0 (2024-12-06)
- 🎨 5개 멤버 페이지 완전 재디자인
- ✨ 인터랙티브 애니메이션 추가
- 🎯 스킬 태그 섹션 추가
- 📱 반응형 디자인 개선
- 🔄 멤버 네비게이션 기능 수정

### v1.0.0
- 🎉 초기 프로젝트 릴리즈

---

⭐ 이 프로젝트가 마음에 드셨다면 Star를 눌러주세요!
