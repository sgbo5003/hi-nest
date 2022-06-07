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

## #2 REST API
------------------

### #2.0 Movies Controller

> cli를 이용한 컨트롤러 생성
> 
- `nest g co` 명령어로 생성

> POSTMAN으로 GET, POST, DELETE, PATCH 테스트
> 

```tsx
@Get('/:id')
getOne(@Param('id') movieId: string) {
  return `This will return one movie with the id: ${movieId}`;
}

@Post()
create() {
  return 'This will create a movie';
}

@Delete('/:id')
remove(@Param('id') movieId: string) {
  return `This will delete a movie with the id: ${movieId}`;
}

@Patch('/:id')
patch(@Param('id') movieId: string) {
  return `This will patch a movie with the id: ${movieId}`;
}
```

### #2.1 More Routes

> 코드
> 

```tsx
@Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData
    };
  }
```

- `@Body`
    - body data를 받는다 (json data등)

> `@Param` 과 `@Query`의 차이점
> 
- Param은 Path Variable을 받아올 때 사용
    - ex ) `/users/123`
- Query는 Query Parameter를 받아올 때 사용
    - ex ) `/users?id=123`

### #2.2 Movies Service part One

> 컨트롤러와 서비스의 역할
> 
- 컨트롤러
    - url을 매핑, 리퀘스트를 받고, Query를 넘기거나 Body나 그 외의 것들을 넘기는 역할
- 서비스
    - 로직을 관리하는 역할

### #2.4 DTOs and Validation part One

> DTO를 쓰는 이유
> 
- 프로그래머로서 코드를 더 간결하게 만들 수 있도록 해준다.

> 유효성 관련 파이프 코드 작성 및 라이브러리 설치
> 
- main.ts에 작성
    - `app.useGlobalPipes(new ValidationPipe());`
- 라이브러리 설치
    - `npm i class-validator class-transformer`
        - class의 유효성을 검사하기 위해

> ValidationPipe 옵션
> 
- `{whitelist: true}`
    - true로 설정하면 아무 decorator도 없는 어떠한 property의 object를 거른다.
- `{forbidNonWhitelisted: true}`
    - 잘못된 리퀘스트 자체를 막아버린다. (보안 한 단계 업그레이드)
- `{transform: true}`
    - 유저들이 보낸 것들을 우리가 원하는 실제 타입으로 변환해준다.

### #2.5 DTOs and Validation part Two

> mapped-types
> 
- `npm i @nestjs/mapped-types`
- 타입을 변환시키고 사용할 수 있게 하는 패키지

### 2.6 Modules and Dependency Injection

> 모듈 생성
> 
- `nest g mo` 명령어로 모듈 생성

## #3 UNIT TESTING
------------------

### #3.0 Introduction to Testing in Nest

> 테스팅 종류
> 
1. 유닛 테스팅
    1. 서비스에서 분리된 유닛을 테스트하는 것
    2. function 같은 하나의 유닛만을 테스트
2. e2e(end-to-end) 테스팅
    1. 모든 시스템을 테스트
> 테스트 하는 법
> 
- `npm run test:watch` 명령어로 테스트

### #3.4 Testing update

> beforeEach(fn, timeout)
> 
- 각각의 테스트가 실행되기 전에 매번 함수를 실행

> beforeAll(fn, timeout)
> 
- 모든 테스트가 실행되기 전에 딱 한 번 함수를 실행

> afterEach(fn, timeout)
> 
- 각각의 테스트가 완료된 후 함수를 실행

> afterAll(fn, timeout)
> 
- 모든 테스트가 완료된 후 함수를 실행

## #4 E2E TESTING
------------------

### #4.0 Testing movies

> e2e 테스팅 하는 법
> 
- `npm run test:e2e`


