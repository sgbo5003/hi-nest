<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# NestJS로 API 만들기
## #0 INTRODUCTION
------------------
### #0.3 Project Setup

> 프로젝트 셋팅
> 
1. `npm i -g @nestjs/cli`
2. `nest new`
## #1 ARCHITECTURE OF NESTJS
------------------

### #1.0 Overview

> 프로젝트 실행
> 
- `npm run start:dev`

### #1.1 Controllers

> Controllers
> 
- 컨트롤러는 들어오는 요청을 처리하고 클라이언트에 응답을 반환하는 역할을 한다.

> 데코레이터
> 

```tsx
@Get('/hello') // <- 데코레이터
  sayHello(): string {
    return 'Hello everyone';
  }
```

- 라우트 핸들러 데코레이터
- HTTP GET 요청을 지정된 경로로 라우팅한다.



