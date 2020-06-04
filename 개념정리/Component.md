# Vue.js의 컴포넌트
화면의 영역을 일정한 단위로 쪼개 재활용 가능한 형태로 관리하는 것

# 컴포넌트 등록 하는 방법

**전역 컴포넌트 등록**

    <div id="app">
    <my-component></my-component>
    </div>

    Vue.component('my-component', {
    // 컴포넌트 내용
    template: '',
    ...
    })

**지역 컴포넌트 등록**

    let cmp = {
    // 컴포넌트 내용
    template: '',
    ...
    }

    new Vue({
    components: {
        'my-cmp' : cmp
    }
    })

# 부모 자식 컴포넌트 관계

부모를 상, 자식을 하로 생각한다. 자식은 부모에게 이벤트를 올리고, 부모는 자식에게 데이터를 내린다.
<img src="https://joshua1988.github.io/images/posts/web/vuejs/parent-child-relationship.png"></img>

## props

상위 컴포넌트에서 하위 컴포넌트로 내리는 데이터 속성. 모든 컴포넌트가 각 컴포넌트 자체의 스코프를 갖고 있어 다른 컴포넌트의 값을 바로 참조할 수 없기 때문이다.

    <div id="app">
    <!-- 하위 컴포넌트에 상위 컴포넌트가 갖고 있는 message를 전달함 -->
    <child-component v-bind:propsdata="message"></child-component>
    </div>

**주의**
porps 변수 명을 카멜 기법으로 정의하면 html 태그에서는 케밥 기밥으로 선언해야 한다.    

    // 하위 컴포넌트
    Vue.component("child-component", {
    // 상위 컴포넌트의 data 속성인 message를 propsdata라는 속성으로 넘겨받음
    props: ["propsdata"],
    template: '<p>{{ propsdata }}</p>'
    });

    // 상위 컴포넌트
    var app = new Vue({
    el: "#app",
    data: {
        message: "Hello Vue! from Parent Component"
    }
    });
    
