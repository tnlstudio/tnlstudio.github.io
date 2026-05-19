# TnL Studio GitHub Pages 운영 및 페이지 수정 가이드

## 1. 프로젝트 기본 정보

- 로컬 프로젝트 위치: `D:\python\TnLStudio`
- GitHub Organization: `tnlstudio`
- GitHub Repository: `tnlstudio.github.io`
- 배포 주소: `https://tnlstudio.github.io`
- 라우팅 방식: `HashRouter`
- 배포 방식: `GitHub Actions + GitHub Pages`
- 추후 도메인 관리: 가비아

## 2. 전체 운영 원칙

- 사이트 수정은 `src` 폴더에서 한다.
- `dist`는 빌드 결과물이므로 직접 수정하지 않는다.
- `node_modules`는 GitHub에 올리지 않는다.
- `.env`, API Key, Token, Password, Private Key는 절대 GitHub에 올리지 않는다.
- 수정 후 `npm run build` 또는 `npm.cmd run build`로 확인한다.
- 이후 `git add`, `git commit`, `git push`로 반영한다.
- GitHub Actions가 자동으로 빌드하고 GitHub Pages에 배포한다.

## 3. 프로젝트 구조 설명

```text
TnLStudio/
  .github/
    workflows/
      deploy.yml

  src/
    App.jsx
    App.css
    main.jsx

    components/
      Navigation.jsx
      Footer.jsx

    pages/
      Home.jsx
      About.jsx
      Talents.jsx
      Content.jsx
      GenericPage.jsx
      VTuberAboutPage.jsx

  index.html
  package.json
  package-lock.json
  vite.config.js
  README.md
  .gitignore
```

- `App.jsx`: 페이지 라우팅
- `App.css`: 공통 CSS / 반응형 CSS
- `main.jsx`: React 시작 파일
- `Navigation.jsx`: 상단 메뉴
- `Footer.jsx`: 하단 푸터
- `Home.jsx`: 메인 페이지
- `About.jsx`: 소개 페이지
- `Talents.jsx`: 캐릭터/탤런트 페이지
- `Content.jsx`: 콘텐츠/영상/스케줄 페이지
- `GenericPage.jsx`, `VTuberAboutPage.jsx`: 현재 미사용 또는 추후 정리 후보

## 4. 사이트 주소 구조

HashRouter 기준 주소는 아래와 같다.

```text
홈:
https://tnlstudio.github.io/#/

About:
https://tnlstudio.github.io/#/about

Talents:
https://tnlstudio.github.io/#/talents

Content:
https://tnlstudio.github.io/#/content
```

주소에 `/#/`가 들어가는 이유는 `HashRouter`를 사용하기 때문이다.

GitHub Pages 같은 정적 호스팅은 서버에서 `/about`, `/talents` 같은 경로를 직접 처리하지 못할 수 있다. 이 경우 새로고침하거나 주소를 직접 입력하면 404가 날 수 있다. `HashRouter`는 `#` 뒤쪽 경로를 브라우저 안에서 처리하므로, 정적 호스팅에서도 새로고침 404 문제를 줄일 수 있다.

## 5. 로컬 개발 실행 방법

```powershell
cd D:\python\TnLStudio
npm run dev
```

접속 주소:

```text
http://localhost:5173
```

개발 서버를 실행한 뒤 브라우저에서 위 주소로 접속한다.

## 6. 빌드 확인 방법

```powershell
npm run build
```

PowerShell 정책 문제로 `npm run build`가 막힐 경우:

```powershell
npm.cmd run build
```

빌드가 성공하면 `dist` 폴더가 생성된다. `dist`는 배포용 결과물이므로 직접 수정하지 않는다. 또한 GitHub Actions가 자동으로 다시 생성하므로 `dist`를 GitHub에 직접 올리지 않는다.

## 7. GitHub 반영 기본 순서

수정 후 배포까지 기본 흐름은 아래와 같다.

```powershell
cd D:\python\TnLStudio

npm run build

git status
git add .
git commit -m "Update site content"
git push
```

`git push` 후 GitHub 저장소의 `Actions` 탭으로 이동한다. `Deploy to GitHub Pages` workflow가 초록색 체크로 끝나면 배포 성공이다.

## 8. Git 초기 설정 방법

처음 Git을 사용할 때 사용자 이름과 이메일을 설정한다.

```powershell
git config --global user.name "cu-ree"
git config --global user.email "GitHub에 사용할 이메일"
```

공개 저장소에서는 개인 이메일 노출을 줄이기 위해 GitHub noreply 이메일 사용을 권장한다. GitHub 계정 설정의 이메일 메뉴에서 noreply 주소를 확인할 수 있다.

설정 확인:

```powershell
git config --global user.name
git config --global user.email
```

## 9. Git이 꼬였을 때 처음부터 다시 하는 방법

주의: 아래 명령어는 현재 폴더의 Git 기록을 삭제한다. GitHub에 이미 올린 기록이 있거나 보존해야 할 커밋이 있다면 실행 전에 백업한다.

```powershell
cd D:\python\TnLStudio

Remove-Item -Recurse -Force .git

git init
git branch -M main
git status --ignored
```

정상 ignored 예시:

```text
Ignored files:
  dist/
  node_modules/
```

그다음:

```powershell
git add .
git status
git commit -m "Initial clean project setup"
git remote add origin https://github.com/tnlstudio/tnlstudio.github.io.git
git push -u origin main
```

remote 재설정 방법:

```powershell
git remote -v
git remote remove origin
git remote add origin https://github.com/tnlstudio/tnlstudio.github.io.git
git remote -v
```

## 10. .gitignore 기준

현재 프로젝트의 `.gitignore` 기준:

```gitignore
node_modules
dist
.env
.env.local
.env.*.local
.DS_Store
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.vscode/*
!.vscode/extensions.json
```

GitHub에 올라가면 안 되는 파일:

- `node_modules`
- `dist`
- `.env`
- `.env.local`
- API Key
- Secret
- Token
- Password
- Private Key
- 내부 문서
- 개인정보

GitHub에 올라가야 하는 파일:

- `.github/`
- `src/`
- `.gitignore`
- `README.md`
- `index.html`
- `package.json`
- `package-lock.json`
- `vite.config.js`

## 11. GitHub Pages 설정 방법

GitHub 저장소에서 아래 경로로 이동한다.

```text
GitHub Repository
→ Settings
→ Pages
→ Build and deployment
→ Source
→ GitHub Actions 선택
```

주의사항:

`Deploy from a branch / main / root`로 설정하면 Vite 개발용 `index.html`이 그대로 배포될 수 있다. 이 경우 브라우저에서 흰 화면이 나올 수 있다. 이 프로젝트는 GitHub Actions가 `npm run build`를 실행하고 `dist`를 배포하는 방식으로 설정해야 한다.

## 12. GitHub Actions 확인 방법

GitHub 저장소에서 아래 메뉴로 이동한다.

```text
Actions
→ Deploy to GitHub Pages
```

상태 의미:

- 초록색 체크: 성공
- 노란색 동그라미: 실행 중
- 빨간색 X: 실패

실패 시 확인할 항목:

- `npm ci` 실패 여부
- `npm run build` 실패 여부
- `deploy.yml` 들여쓰기 오류
- Pages 권한 문제
- `package-lock.json` 누락 여부

## 13. deploy.yml 기준 설명

현재 workflow 흐름:

```text
main 브랜치 push
→ npm ci
→ npm run build
→ dist 폴더 업로드
→ GitHub Pages 배포
```

현재 기준 예시:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

# 페이지별 수정 가이드

## 14. Home.jsx 수정 방법

파일 위치:

```text
src/pages/Home.jsx
```

`Home.jsx`는 사이트의 메인 페이지다. 대표 문구, 첫 화면 CTA 버튼, 최신 영상 영역, 주요 지표 영역을 관리한다.

수정할 수 있는 주요 항목:

- 대표 문구
- 서브 문구
- CTA 버튼 문구
- 최신 영상 제목
- 최신 영상 설명
- 주요 지표 텍스트

현재 연결 기준:

- `크리에이터 만나기`는 `/talents`로 이동
- `더 알아보기`는 `/about`으로 이동
- `전체 음원 보기`는 `/content`로 이동
- `WATCH NOW`는 실제 URL이 없으면 준비 중 안내

실제 영상 URL 연결 예시:

```jsx
window.open("https://www.youtube.com/watch?v=실제ID", "_blank", "noopener,noreferrer")
```

Codex 요청 예시:

```text
src/pages/Home.jsx만 수정해주세요.

조건:
1. 기존 UI/디자인/레이아웃은 최대한 유지
2. 다른 파일은 수정하지 않기
3. 홈 페이지 마지막에 새 소식 섹션 추가
4. 모바일 반응형이 깨지지 않게 기존 스타일 재사용
5. 수정 후 npm.cmd run build 확인

추가 문구:
제목:
내용:
```

## 15. About.jsx 수정 방법

파일 위치:

```text
src/pages/About.jsx
```

`About.jsx`는 스튜디오 소개, 세계관, 운영 철학, 비전, 기술 또는 협업 안내를 담는 페이지다.

페이지 마지막에 섹션을 추가할 때는 기존 섹션의 배경색, 여백, 글자 크기, 카드 스타일을 최대한 재사용한다.

예시 섹션:

```jsx
<section className="about-extra-section">
  <h2>PARTNERSHIP</h2>
  <p>
    TnL Studio는 다양한 크리에이터, 아티스트, 브랜드와의 협업을 기다리고 있습니다.
  </p>
</section>
```

Codex 요청 예시:

```text
src/pages/About.jsx만 수정해주세요.

조건:
1. 기존 UI/디자인/레이아웃은 유지
2. 기존 섹션 구조를 크게 바꾸지 않기
3. 페이지 마지막에 Partnership 섹션 추가
4. 다른 파일은 수정하지 않기
5. 수정 후 npm.cmd run build 확인

추가할 문구:
제목:
내용:
```

## 16. Talents.jsx 수정 방법

파일 위치:

```text
src/pages/Talents.jsx
```

`Talents.jsx`는 탤런트/캐릭터 목록, 카드, 상세 모달을 관리한다. 새 캐릭터를 추가할 때는 기존 `talents` 배열의 필드 구조를 유지한다.

예시 데이터:

```jsx
{
  id: 4,
  name: "Lina",
  role: "Virtual Singer",
  description: "감성적인 노래와 조용한 소통을 중심으로 활동하는 버추얼 싱어입니다.",
  tags: ["Music", "Talk", "Cover"],
  status: "COMING SOON",
  image: null,
  fullImage: null,
  url: null
}
```

이미지 경로 예시:

```text
public/images/talents/talent-lina.png
public/images/talents/talent-lina-full.png
```

데이터 연결:

```jsx
image: "/images/talents/talent-lina.png",
fullImage: "/images/talents/talent-lina-full.png"
```

주의사항:

- id 중복 금지
- 실제 이미지 없으면 null 유지
- 기존 필드명 유지
- 한글 파일명/공백 파일명 피하기

Codex 요청 예시:

```text
src/pages/Talents.jsx만 수정해주세요.

조건:
1. 기존 UI/디자인/레이아웃은 유지
2. 기존 talents 데이터 구조를 그대로 사용
3. 새 탤런트 1명을 추가
4. 실제 이미지가 없으면 image/fullImage는 null로 유지
5. 카드 클릭 시 기존 모달이 정상 작동해야 함
6. 다른 파일은 수정하지 않기
7. 수정 후 npm.cmd run build 확인

추가할 탤런트:
이름:
역할:
소개:
태그:
상태:
이미지 경로:
상세 이미지 경로:
```

## 17. Content.jsx 수정 방법

파일 위치:

```text
src/pages/Content.jsx
```

`Content.jsx`는 대표 영상, 콘텐츠 카드 목록, 방송 스케줄을 관리한다.

대표 영상 예시:

```jsx
const featuredVideo = {
  title: "Debut Trailer",
  description: "TnL Studio의 첫 번째 공식 트레일러입니다.",
  url: "https://www.youtube.com/watch?v=실제ID"
}
```

콘텐츠 카드 예시:

```jsx
{
  id: 5,
  title: "Official Teaser",
  category: "Teaser",
  date: "2026.05.11",
  description: "TnL Studio의 첫 공식 티저 영상입니다.",
  thumbnail: null,
  url: null
}
```

썸네일 경로:

```text
public/images/content/teaser01.jpg
```

데이터 연결:

```jsx
thumbnail: "/images/content/teaser01.jpg"
```

스케줄 예시:

```jsx
MON: [
  {
    time: "20:00",
    title: "Weekly Live",
    description: "주간 소통 방송",
    url: null
  }
]
```

요일 키:

```text
MON
TUE
WED
THU
FRI
SAT
SUN
```

Codex 요청 예시:

```text
src/pages/Content.jsx만 수정해주세요.

조건:
1. 기존 UI/디자인/레이아웃은 유지
2. videos 배열에 새 콘텐츠 1개 추가
3. 실제 URL이 있으면 url에 넣고, 없으면 null
4. thumbnail이 있으면 경로를 넣고, 없으면 null
5. 클릭 시 기존 방식대로 URL이 있으면 새 탭, 없으면 준비 중 안내
6. 다른 파일은 수정하지 않기
7. 수정 후 npm.cmd run build 확인

추가 콘텐츠:
제목:
카테고리:
날짜:
설명:
URL:
썸네일 경로:
```

스케줄 추가 요청 예시:

```text
src/pages/Content.jsx의 scheduleData만 수정해주세요.

조건:
1. 기존 UI/디자인/레이아웃은 수정하지 않기
2. MON/TUE/WED/THU/FRI/SAT/SUN 구조 유지
3. 아래 스케줄을 추가
4. URL이 없는 일정은 null로 유지
5. 다른 파일은 수정하지 않기
6. 수정 후 npm.cmd run build 확인

추가 스케줄:
요일:
시간:
제목:
설명:
URL:
```

## 18. Navigation.jsx 수정 방법

파일 위치:

```text
src/components/Navigation.jsx
```

`Navigation.jsx`는 상단 메뉴를 관리한다. 메뉴명을 바꾸거나 새 메뉴를 추가할 때 수정한다.

예시:

```jsx
<Link to="/about">ABOUT</Link>
<Link to="/talents">TALENTS</Link>
<Link to="/content">CONTENT</Link>
```

새 페이지 추가 시:

1. `src/pages/Contact.jsx` 생성
2. `src/App.jsx`에 Route 추가
3. `src/components/Navigation.jsx`에 메뉴 추가

## 19. Footer.jsx 수정 방법

파일 위치:

```text
src/components/Footer.jsx
```

`Footer.jsx`는 하단 정보, 저작권, 문의 이메일, SNS 링크, 사업자 정보 등을 관리한다.

예시:

```jsx
© 2026 TnL Studio. All rights reserved.
```

가비아 이메일 생성 후 추가 예시:

```text
contact@도메인.com
admin@도메인.com
```

Codex 요청 예시:

```text
src/components/Footer.jsx만 수정해주세요.

조건:
1. 기존 UI/디자인/레이아웃은 유지
2. 다른 파일은 수정하지 않기
3. 수정 후 npm.cmd run build 확인

요청:
Footer에 공식 문의 이메일을 추가해주세요.

추가 이메일:
```

## 20. App.jsx 수정 방법

파일 위치:

```text
src/App.jsx
```

`App.jsx`는 페이지 라우팅을 관리한다. 현재 프로젝트는 `HashRouter`를 사용하므로 이를 유지한다.

예시:

```jsx
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/talents" element={<Talents />} />
    <Route path="/content" element={<Content />} />
  </Routes>
</HashRouter>
```

새 페이지 추가 예시:

```jsx
import Contact from "./pages/Contact";
```

```jsx
<Route path="/contact" element={<Contact />} />
```

## 21. 이미지 추가 기본 규칙

추천 폴더 구조:

```text
public/
  images/
    talents/
      talent-lina.png
      talent-lina-full.png

    content/
      teaser01.jpg
      mv01.jpg

    logo/
      logo.png
```

경로 사용 예시:

```jsx
"/images/talents/talent-lina.png"
"/images/content/teaser01.jpg"
"/images/logo/logo.png"
```

파일명 규칙:

- 영어 소문자 추천
- 공백 금지
- 한글 파일명 피하기
- 대소문자 주의
- 너무 큰 이미지 파일은 압축
- 영상 파일은 GitHub에 직접 올리지 말고 YouTube 등 외부 링크 사용

## 22. 영상/외부 링크 추가 규칙

URL이 있을 때:

```jsx
url: "https://www.youtube.com/watch?v=xxxx"
```

URL이 없을 때:

```jsx
url: null
```

피해야 할 예:

```jsx
url: "#"
url: "https://example.com"
```

## 23. 가비아 도메인 연결 전 준비

GitHub Pages 기본 주소 확인:

```text
https://tnlstudio.github.io/#/
```

가비아 DNS 루트 도메인 A 레코드:

```text
@    A    185.199.108.153
@    A    185.199.109.153
@    A    185.199.110.153
@    A    185.199.111.153
```

www 연결:

```text
www  CNAME  tnlstudio.github.io
```

GitHub 설정:

```text
Repository
→ Settings
→ Pages
→ Custom domain
→ 구매한 도메인 입력
→ Enforce HTTPS 체크
```

## 24. 문제 해결 가이드

### 흰 화면이 나올 때

확인 순서:

1. Settings → Pages → Source가 GitHub Actions인지 확인
2. Actions 최신 workflow가 초록색 체크인지 확인
3. 사이트에서 Ctrl + F5 강력 새로고침
4. 시크릿 창에서 접속
5. F12 → Console 빨간 에러 확인

페이지 소스에 아래가 보이면 문제:

```html
<script type="module" src="/src/main.jsx"></script>
```

정상 배포라면 아래처럼 보임:

```html
<script type="module" crossorigin src="/assets/index-xxxxx.js"></script>
<link rel="stylesheet" crossorigin href="/assets/index-xxxxx.css">
```

### Actions 실패 시

확인 항목:

- `package-lock.json` 존재 여부
- `npm ci` 실패 여부
- `npm run build` 실패 여부
- `deploy.yml` 들여쓰기
- GitHub Pages Source가 GitHub Actions인지

### 수정했는데 반영 안 될 때

확인 항목:

- `git push` 했는지
- Actions가 완료됐는지
- Ctrl + F5 했는지
- 시크릿 창에서 확인했는지

## 25. Codex에게 안전하게 요청하는 기본 규칙

공통 조건:

```text
조건:
1. 기존 UI/디자인/레이아웃은 최대한 유지
2. 요청한 파일만 수정
3. 불필요한 리팩토링 금지
4. 임의 URL/임의 이미지 생성 금지
5. 수정 후 npm.cmd run build 확인
6. 수정한 파일 목록과 변경 내용 보고
```

## 26. 수정 후 배포 체크리스트

```text
1. npm run dev로 로컬 확인
2. npm run build 성공 확인
3. git status 확인
4. node_modules, dist, .env가 올라가지 않는지 확인
5. git add .
6. git commit
7. git push
8. GitHub Actions 초록 체크 확인
9. 실제 사이트 확인
```

명령어:

```powershell
cd D:\python\TnLStudio

npm run build

git status
git add .
git commit -m "Update site content"
git push
```

확인 주소:

```text
https://tnlstudio.github.io/#/
https://tnlstudio.github.io/#/about
https://tnlstudio.github.io/#/talents
https://tnlstudio.github.io/#/content
```

## 27. 최종 운영 순서 추천

```text
1. About 문구 최종 정리
2. Talents 실제 캐릭터 데이터 추가
3. Content 실제 영상/스케줄 추가
4. 이미지 파일 추가
5. Footer 문의 정보 추가
6. 가비아 도메인 구매
7. GitHub Pages에 커스텀 도메인 연결
8. 가비아 이메일 생성
9. Footer에 공식 이메일 반영
```

사이트 수정은 src에서 하고,
빌드는 npm run build로 확인하고,
반영은 git commit 후 git push로 한다.
GitHub Pages 배포는 Actions가 자동으로 처리한다.
