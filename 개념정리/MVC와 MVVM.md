# MVC와 MVVM 패턴

## MVC

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2F7IE8f%2FbtqBRvw9sFF%2FAGLRdsOLuvNZ9okmGOlkx1%2Fimg.png">

Model +  View + Controller 를 합친 용어로, 유명하고 많이 쓰이는 디자인 패턴이다.

- Model 

어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분.

- View

사용자에서 보여지는 UI부분.

- Controller

사용자의 입력을 받고 처리하는 부분.

## 어떻게 동작?

1. 사용자의 입력이 컨트롤러에 들어온다.
2. 컨트롤러가 사용자의 입력을 확인하고 모델에 업데이트한다.
3. 컨트롤러가 모델을 표현해줄 뷰를 선택한다.
4. 뷰는 모델을 이용해 화면을 나타낸다.

### 여기서 잠깐!
컨트롤러는 뷰를 선택한다. 하지만 뷰를 직접 업데이트하는 것이 아니다. 뷰는 컨트롤러을 알지도 못한다.

## 장점과 단점

**장점**

MVC 패턴은 널리사용되는 패턴이라는 점에 걸맞게 가장 단순하다. 그래서 보편적으로 많이 사용되는 것이다.

**단점**

View와 Model 사이의 의존성이 높다. 의존성이 높아지면 어플리케이션이 커질수록 유지보수가 어려워진다.

## MVVM

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2FCiXz0%2FbtqBQ1iMiVT%2FstaXr7UO95opKgXEU01EY0%2Fimg.png">

Model +  View + Vie wModel 를 합친 용어로, View와 Model은 MVC와 동일하다.

- Model 

어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분.

- View

사용자에서 보여지는 UI부분.

- View Model

View를 표현하기 위해 만든 Model.  View를 위한 데이터 처리 또한 여기서 이루어진다.

## 어떻게 동작?
1. 사용자의 입력이 View를 통해 들어온다.
2. Command패턴으로 View Model에 입력을 전달한다.
3. View Model이 Model에게 데이터를 요청한다.
4. Model은 View Model에게 데이터를 응답한다.
5. View Model은 받은 데이터를 가공하여 저장한다.
6. Viewsms View Model과 데이터 바인딩하여 화면을 나타낸다.


### 여기서 잠깐!
MVVM은 Command패턴과 데이터 바인딩으로 View와 View Model 둘의 의존성을 없앤것이다.


## 장점과 단점

**장점**

위에서 말했듯이 의존성이 없다. 각각 모듈화하여 개발할 수 있다.


**단점**

View Model의 설계가 쉽지 않다.

