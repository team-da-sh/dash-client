# DASH

## 💃 서비스 소개

![image](https://github.com/user-attachments/assets/25a0cb52-00f1-4ce9-8564-1070cb191231)


### 💃 “당신에게 춤을 더 가까이, 세상의 모든 댄서와 클래스를 모은 서비스"


> Da/sh’는 서비스의 핵심 키워드인 Dance(춤)와 Share(공유)를 결합한 이름으로,
> 댄스 클래스와 강사댄서에 대한 정보를 자유롭게 탐색하고 원하는 클래스를 간편하게 신청할 수 있는 플랫폼입니다.
> 이 서비스는 수강생과 강사를 연결하는 다리 역할을 함과 동시에 세상의 모든 댄서들이 함께 소통하고 성장할 수 있는 공간을 제공합니다.


<br/>
<br/>

### 💃서비스 플로우

![image](https://github.com/user-attachments/assets/2bb85425-a7ca-46c3-b4e7-addb522a2629)

<br/>

#### DASH의 웨비들을 소개합니다!

![Image](https://github.com/user-attachments/assets/c475ac1a-1f4d-4ef8-94ab-fa29307849fe)


<br />

## 🎈 팀원

   <div align="center">
     
| <img src="https://github.com/user-attachments/assets/f315094a-0de0-4eca-bc4c-7e48cb2a7b6f" width="150" alt="프로필사진"> | <img src="https://github.com/user-attachments/assets/067c37c2-f544-4238-8358-eb5f051fef4a" width="150" alt="프로필사진">  | <img src="https://github.com/user-attachments/assets/a97c1d70-6107-44c3-8de8-d0fa708090ca" width="150" alt="프로필사진"> |  <img src="https://github.com/user-attachments/assets/713158dd-64a7-40c4-b177-ed85896a6cf1" width="150" alt="프로필사진">  |  <img src="https://github.com/user-attachments/assets/372ad506-b2d2-41fc-ae4e-adbb2466f292" width="150" alt="프로필사진">  |
| :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------:
|                            <div align = "center"><b>이진혁</b></div>                            |                            <div align = "center"><b>김규홍</b></div>                            |                            <div align = "center"><b>박희선</b></div>                            |                             <div align = "center"><b>한수정</b></div>                            |                             <div align = "center"><b>김건휘</b></div>
|                           [@constantly-dev](https://github.com/constantly-dev)                            |                [@rtttr1](https://github.com/rtttr1)                                 |                       [@heesunee](https://github.com/heesunee)                        |                        [@hansoojeongsj](https://github.com/hansoojeongsj)   |                        [@KIMGEONHWI](https://github.com/KIMGEONHWI)   |

</div>

<br />
<br/>

## 🛠 기술 스택 및 선정 이유 (Tech Stack)

| 역할                     | 기술                                                                                                                                                                                                                              | 선정 이유                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Library**              | ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)                                                                                                                                | DASH 서비스는 동적인 사용자 경험과 빠른 인터랙션에 중점을 두고 있기 때문에 CSR 기반으로 작동하며,<br/>초기 렌더링 이후 모든 페이지가 클라이언트에서 동작하도록 설계할 수 있는 SPA 중심 개발을 할 수 있는 리액트를 선택하게 되었다.                                                                                                                                                                     |
| **Programming Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white)                                                                                                                 | 타입을 보장하여 코드의 안정성을 높이고 자동 완성을 통한 유지 보수를 좋게 하기 위함.                                                                                                                                                                                                                                                                                                                    |
| **Styling**              | ![Vanilla Extract CSS](https://img.shields.io/badge/Vanilla%20Extract%20CSS-FFDB4F?style=for-the-badge&logo=Vanilla%20Extract&logoColor=black)                                                                                    | CSS-in-TS 방식으로 기존의 CSS-in-JS 방식과 다르게 타입 안전성을 제공하여 자동 완성, 런타임 오버헤드 없이 빌드 시 정적 CSS로 추출할 수 있다. 또한 빌드 시간에 CSS를 생성하는 zero-runtime의 장점 또한 해당 스택의 선택 기준이 되었다. <br>                                                                                                                                                              |
| **Data Fetching**        | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white) ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=React%20Query&logoColor=white) | Axios: 자동으로 JSON 형태의 데이터를 파싱해주며, HTTP 요청에 대해 효율적인 처리를 제공한다. 또한 우리 프로젝트에서 token을 활용할 때 interceptor등의 기능을 활용할 수 있기 때문에 선택하였다. <br/>TanStack Query: 캐싱 기능을 활용한 다양한 동작을 구현할 수 있고, API 요청 수행을 위한 규격화된 방식을 제공하기 때문에 가독성을 높여준다. 서버 상태 관리에 특화되어 유지 보수 측면 등 DX가 향상된다. |
| **UI Development**       | ![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=Storybook&logoColor=white)                                                                                                                    | UI 컴포넌트 개발 및 테스트 편의성 제공, 디자이너와의 원활한 소통 가능                                                                                                                                                                                                                                                                                                                                  |
| **Formatting**           | ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)                | 코드 일관성을 유지하고, 가독성을 높이며, 스타일 컨벤션을 통합적으로 관리                                                                                                                                                                                                                                                                                                                               |
| **Package Manager**      | ![Pnpm](https://img.shields.io/badge/Pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)                                                                                                                                   | 기존에 사용하던 yarn의 node_modules에 패키지가 중복 저장되어 용량이 절감되는 문제를 해결할 수 있다. 또한 의존성 설치 없이 (zero-install) 사용하게 되면서 빌드와 배포 시간을 크게 단축시켜준다.                                                                                                                                                                                                         |
| **Version Control**      | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)                  | 협업에서 필요한 버전 관리 시스템을 도입하기 위함.                                                                                                                                                                                                                                                                                                                                                      |
| **Deployment**           | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)                                                                                                                             | 짧은 기간에 배포하기 위해 러닝 커브가 작고 초기 배포에 적합한 플랫폼이기 때문에 선택하였다.                                                                                                                                                                                                                                                                                                            |

<br />
<br/>

## 📢 Git/GitHub 컨벤션

### Git 브랜치 전략 (GIit Flow)

1. **`main(=master)`** : 오직 배포를 위한 브랜치 → 특별한 상황이 아니라면 배포만 진행
2. **`develop`** : 작업한 내용을 취합하는 곳 (default branch)
3. **`feat(=feature)`** : 각 작업물을 분기해 새로 만들어 사용할 브랜치

<img width="2366" alt="git flow" src="https://github.com/user-attachments/assets/d4742974-031a-4073-b7e6-dcaa6286fbd5" />

<br />

### 커밋 네이밍 컨벤션

**Commit 메시지 종류 설명**

| 제목               | 내용                                                            |
| ------------------ | --------------------------------------------------------------- |
| `init`             | 초기 세팅 (초기 이후는 setting 사용)                            |
| `setting`          | 패키지 설치, 개발 설정                                          |
| `feat`             | 새로운 기능 추가 / 퍼블리싱                                     |
| `fix`              | 버그 수정                                                       |
| `style`            | CSS 등 사용자 UI 디자인 변경                                    |
| `api`              | API 연결 로직 작성                                              |
| `refactor`         | 프로덕션 코드 리팩토링 및 QA 반영                               |
| `chore`            | 빌드 테스트 업데이트, 패키지 매니저 설정 (프로덕션 코드 변경 X) |
| `deploy`           | 배포 작업                                                       |
| `comment`          | 필요한 주석 추가 및 변경                                        |
| `test`             | 테스트 추가, 테스트 리팩토링 (프로덕션 코드 변경 X)             |
| `rename`           | 파일 또는 폴더 이름 수정 및 이동 작업                           |
| `remove`           | 파일 삭제 작업만 수행                                           |
| `docs`             | 문서 수정                                                       |
| `!HOTFIX`          | 급하게 치명적인 버그 수정                                       |
| `!BREAKING CHANGE` | 커다란 API 변경                                                 |

<br />
<br/>

## 📢 폴더 구조

1. **`src/`** 아래 폴더는 전부 common(공통)의 의미로 생각한다.
2. **`pages/`** 아래 세부 폴더(components, constants 등등)가 각각 위치한다.

```
|-- 📁 .github
|-- 📁 node_modules
|-- 📁 public
|-- 📁 src // src 바로 하위 폴더는 모두 common(공통)의 의미
  |-- 📁 apis
    |-- 📁 common
    |-- 📁 페이지1
    |-- 📁 페이지2
  |-- 📁 assets
	    |-- 📁 images
	    |-- 📁 svg
  |-- 📁 components // 공통 컴포넌트
	  |-- 📁 Button
		  |-- 📄ex) Button.tsx
		  |-- 📄ex) Button.style.ts
  |-- 📁 constants
  |-- 📁 hooks
	  |-- 📄ex) useOutsideClick.ts
  |-- 📁 pages
    |-- 📁 components
    |-- 📁 constants
    |-- 📁 types 등 // (페이지에 해당하는 개별 데이터 폴더 따로 존재)
  |-- 📁 styles
  |-- 📁 types
  |-- 📁 utils
  |-- 📁 routes
|-- index.html 등 ETC
```

<br/>
<br/>

## 📢 네이밍 컨벤션

 <details> 
	 
 ### 1. 기본 (Default)

1. 컴포넌트 / class `PascalCase`
2. 폴더명 `carmelCase`
3. 파일 명 _(컴포넌트 제외)_ `carmelCase`
4. 변수, 함수 `carmelCase`
5. 파라미터 `carmelCase`
6. 상수 `BIG_SNAKE_CASE`

<br/>

### 2. 타입 (Type)

1. interface는 필수로 `PascalCase` 사용한다.
2. Props 타입 → `컴포넌트명+PropTypes`
   - 예시
     ```jsx
     interface PostPagePropTypes {
     		title: string | undefined;
     		setTitle: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
     		tempContent: string;
     		editContent: string;
     		setEditorContent: (content: string) => void;
     		setContentWithoutTag: (content: string) => void;
     }

     const PostPage = (props: PostPagePropTypes) => {
     		const {title, setTitle, tempContent, editContent, setEditorContent,
     		setContentWithoutTag
     		...
     }
     ```
3. 일반 타입 → **`… + Types`**
4. PropsTypes는 컴포넌트 파일 내 / 그 외 타입은 pages/…/types 폴더에 따로 분리

<br/>

### 3. 스타일 (Style)

1. ~~컴포넌트 Wrapper 네이밍 규칙 : `Wrapper` → (`Layout`)→ `Container` → `Box`~~ (미정)
2. semantic tag는 적극 활용한다.
   1. **`aria-label`**도 적극적 활용!
3. SVG 파일 사용시
   1. svgr로 컴포넌트화 후 사용하므로 svg이름을 그대로 변환하여 사용한다.

<br/>

### 4. 함수

1. 이벤트 핸들러 네이밍 **`handle + 기능 + 이벤트`**

   - 예시
     ```jsx
     const handleBtnClick = () => {};
     const handleTabChange = () => {};
     ```

   → props로 넘길 때 key값은 **`on + 이벤트`**

   - 예시
     ```jsx
     const BoxComponent = () => {
       return <memoComponent onClick={handleBtnClick} />;
     };
     ```

2. 유틸(utils) 함수 네이밍 **`동사(기능) + 명사(대상)`**
3. 값이 boolean일 경우는 **`is + 상태` (default)**

   - 예시
     ```tsx
     const [isLogined, setIsLogined] = useState(false);
     ```

   → 추가적으로 **`can / should / has`** 정도를 상황에 맞게 추가한다.

4. api 함수 **`HTTP 메서드 + 명사`**
   - 예시
     ```tsx
     const getList = () => {};
     const getMovie = () => {};
     ```
5. 네이밍 시 단수를 기본으로 사용하고 / 복수면 뒤에 List 키워드를 붙인다.

<br/>

### 5. 기타

1. assets (Icon이나 Img)의 경우 피그마 네이밍을 적극 활용한다.

   **→** `Ic + 피그마 네이밍` (icon의 경우)으로 사용

2. URL, HTML 같은 범용적인 대문자 약어는 대문자 그대로 사용한다.
3. 변수/최대한 직관적으로 작성하여 네이밍을 보고도 무슨 데이터, 행위인지 바로 유추할 수 있도록 한다.
   - 주석이 필요한 경우에는 어떤 역할을 하는지 다른 사람이 이해할 수 있도록 작성한다.
   - 변수/함수 명은 20자 미만, 주석으로 변수 설명
4. 주석은 작성하려고 하는 대상 **바로 위**에 작성

<br/>
<br/>

 </details>


## 📢 코딩 (개발) 컨벤션

 <details> 
	 
### 변수

- var 금지.
- `const` → `let` 순서로 위부터 선언.
- 변수를 조합하여 문자열 생성시 “+ “ 금지. → 리터럴 사용(백틱 ```)
- 변수명 : 의미를 확실히 나타낼 수 있도록
  - 예시 : 배열에 Arr 보다는 변수s = fruits, userlists 등등
- 줄임말 쓰지말기. 이름이 길어지더라도 어떤 변수인지 정확하게
  - 예시 : Btn X → Button으로 사용
- map 사용시 변동되는 리스트라면 key값을 고유하게 잘 설정해주기 **`index 사용 금지`**
  - 서버에서 내려주는 id값 or uuid 사용
- **전역 변수**는 되도록 사용하지 않기

### 함수

- 화살표 함수. function 키워드 쓰지말기
- 중복함수는 utils 폴더에 모아서 재사용한다.
- 변수/함수 명은 20자 미만.
  - 최대한 네이밍에 의미를 담아서 작성하고 필요 시에 주석으로 설명 추가
- 필요하다면 early return 패턴을 적극적으로 활용
  - 예시
    ```jsx
    **// early return 패턴**
    function processUser(user) {
      if (!user || !user.isActive) return; // **조건이 맞지 않으면 일찍 반환**
      // 나머지 처리 코드...
    }
    ```

### 컴포넌트

- `rafce` → 고정
- 의미없는 div 또는 컴포넌트 최상단은 fragment 사용하기

```jsx
const InfoText = () => {
  return (
    <>
      <h1>Welcome!</h1>
      <p>This our new page, we're glad you're are here!</p>
    </>
  );
};
```

- children이 불필요할 땐 selfClosing사용하기 `<Component/>`
- children 적극적으로 활용하기!

### 타입

- object → interface
- 단일 변수 → type alias
- 컴포넌트 인자에 대한 타입은 컴포넌트 상단에
- 그 외의 타입들은 types 폴더에
- api response 타입명은 OOOResponseTypes

### 메소드

- 배열 복사 시 → 스프레드 연산자(…) 사용

  - `const copys = […originals]`

- for 보단, `forEach`/`map`을 사용
- 구조 분해 할당을 적극 이용
  ```tsx
  interface userDataProps {
    userName: string;
    userBirth: string;
  }

  function checkIsUser({ userName, userBirth }: userDataProps) {}
  ```
- 불필요한 반복문 지양 : filter, array.include() 등
  - 조건부로 데이터를 확인하거나 뽑아야하는 로직을 사용할 때에는 `Map` 이나 `Object`처럼 `key`값을 이용해서 원소를 찾는 자료형을 이용하는것을 고려해보거나, 배열을 순회하지 않고 index로 바로 접근할 수 있는 방법이 없는지 고려.
 


### Style → X

[mozila 추천 css 순서 (참고)](https://www.notion.so/mozila-css-ae87c8e58b2149ab8f90c2110e537c31?pvs=21)

→ 추가 예정

### 기타

- button 태그에 **`type`**은 명시적으로 작성
- 비교 연산자는 **`===`**와 **`!==`**만을 사용
- axios 안에서 **`then/catch`** 대신 **`async/await`** 지향

    </details>
