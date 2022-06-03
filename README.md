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




