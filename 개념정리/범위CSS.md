# 범위를 가지는 CSS

vue.js의 css는 한 속성을 주면 범위를 가진다. 바로 현재 컴포넌트의 엘리먼트에만 적용된다는 것이다. 그 속성은 바로 `scoped`이다

    <style scoped>
        .ex {
            color : red;
        }
    </style>

# CSS 렌더링 성능

범위가 지정된 스타일은 브라우저가 다양한 CSS 셀렉터를 렌더링하는 방식 때문에 태그 선택자는 지양하는 것이 좋다. `class`나 `id`를 사용함으로써 성능 문제를 해결할 수 있다.
    <style scoped>
        .ex {
            color : red;
        }
    </style>

    <style scoped>
        p {
            color : red;
        }
    </style>

# 새롭게 알게 된 사실
1. scoped로 css의 범위를 정할 수 있다.
2. 하위컴포넌트의 루트 노드는 상위 범위 css와 하위 범위 css의 영향을 받는다.
3. 태그 선택자보단 class나 id를 사용하자.