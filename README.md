# dnd-mentee-4th-5-frontend

- [Project Structure](#project-structure)
- [Coding Conventions](#coding-conventions)
- [Commit Conventions](#commit-conventions)
- [Branching Model](#branching-model)
- [Contributing](#contributing)

## Project Structure

```sh
src
+-- atoms
+-- molecules
+-- organisms
+-- templates
+-- screens (pages)
```

컴포넌트는 [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) 패턴을 기반으로 구성

## Coding Conventions

- 라인 너비 80
- 2 스페이스
- 세미콜론(;) 붙임
- 스크립트 구문에서 single quotes (') 사용
- ES5 기준으로 trailing comman (,) 적용
- 이외의 스타일은 prettier 기본 설정을 참조
- lint 규칙은 [universe](https://github.com/expo/expo/tree/master/packages/eslint-config-universe) config 적용

> - 커밋시 `husky`와 `lint-staged`를 통한 `eslint`, `prettier` 자동화

## Commit Conventions

Commit message 규칙은 [Conventional Commits](https://www.conventionalcommits.org/) 명세를 만족할 수 있게 [commitizen](https://github.com/commitizen/cz-cli) 등의 도구 사용을 권장하되, 별도의 lint는 진행하지 않음

## Branching Model

[Github flow](https://guides.github.com/introduction/flow/)를 따라 `main`을 중심으로 각각의 이슈, 기능과 관련된 branch를 생성해서 작업 진행

## Contributing

그룹 소유의 저장소를 `upstream`으로 두고, upstream을 fork한 개인 소유의 `origin`에서 생성한 branch를 GitHub `Pull Request`로 upstream에 반영 (`origin/...` => `upstream/main`)

## 5조 - 5늘 술사줘

| Parts         | Name   |
| ------------- | ------ |
| Backend(조장) | 전시흠 |
| Backend       | 홍석준 |
| Frontend      | 이다예 |
| Frontend      | 김동영 |
| Design        | 이예나 |
| Design        | 최소은 |

- [프론트엔드](https://github.com/dnd-mentee-4th/dnd-mentee-4th-5-frontend)
- [백엔드](https://github.com/dnd-mentee-4th/dnd-mentee-4th-5-backend)
