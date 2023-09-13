# Foodlog Demo

## #01. 작업 개요

### 1) 대상 사이트

`https://www.w3schools.com/`에서 운영하는 기본 예제 중에서 하나를 선정하여 재구성

> https://www.w3schools.com/w3css/tryw3css_templates_food_blog.htm

### 2) 웹 페이지 기본 작업 구조

HTML파일 이외의 재료(css, 이미지 파일등)가 보관될 폴더를 `assets`이라는 이름으로 만들고 그 안에 파일 종류별로 폴더를 구분한다.

HTML파일 이외의 재료를 통칭 리소스(resource)라고 한다.

```
├─assets        <-- 리소스(재료)가 저장될 폴더
│  ├─css        <-- 스타일시트 파일 (scss가 변환되어 자동 생성됨)
│  ├─fonts      <-- 웹폰트 파일
│  ├─helper     <-- 직접 작성한 JS 모듈
│  ├─img        <-- 이미지 파일
│  ├─js         <-- 각 html별로 개별 동작하는 js 소스코드
│  └─scss       <-- 디자인 구성 파일
└─*.html        <-- 웹 페이지 소스코드 (html파일에 대한 폴더 구성은 자율적으로...)
```

- 이 작업에서는 웹폰트를 CDN 방식으로 사용 (fonts 폴더 불필요)
- 아직 Javascript에 대한 내용을 학습하기 전이므로 `helper`, `js` 폴더 불필요
- `scss` 역시 학습 전이므로 폴더 불필요

### 3) 사이트 내의 이미지 가져오기

크롬 브라우저에 `Image Downloader` 설치

[https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj/related?hl=ko](https://chrome.google.com/webstore/detail/image-downloader/cnpniohnfphhjihaiiggeabnkjhpaldj/related?hl=ko)

웹 페이지에서 익스텐션을 실행하면 해당 페이지 내의 모든 이미지 파일을 일괄 다운
로드 받을 수 있다.