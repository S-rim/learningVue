# computed와 methods

만약 vue.js에서 특정 값이 들어오고 그 값을 이용해서 다른 값을 내야한다면 두 가지 방법을 사용할 수 있다.

**computed**와 **methods**.

# 둘의 차이점은?

1. template에서 호출 시 ()를 적지 않아도 된다.
2. return 값이 반드시 존재하여야한다.
3. 파라미터를 받을 수 없다.

이렇게 보면 computed가 methods의 엄청난 하위버전같다. 하지만 성능적으로 유리한 것은 **computed**이다.

**computed**는 template 내부에 선언된 computed중에서 해당 함수와 연결된 값이 바뀔 때만 해당 함수만을 실행한다.

**methods**는 그딴 거 없이 template내부에 선언된 methods중에서 아무 변수나 바뀌면 함수를 모두 실행한다.

그리고 **template구문에 methods가 많을 수록 아주큰 성능 하락**을 불러온다!!

# 그럼 어떨 때 무엇을 사용?

간단하게 정의하면 **template내부에서 써야한다면 computed, 아니면 methods.** 하지만 어쩔 수 없이 methods를 사용해야 할 수도 있다.

1. 파라미터를 받아서 호출해야할 때
2. 함수 안에서 다른 값을 바꿔줘야할 때(computed안에서 다른 값을 바꾸는 것은 정책위반이다.)

이럴 때만 template안에서 methods를 쓰는 것으로 한다.