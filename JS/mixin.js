const myButton = {
    methods : {
        pressed(val) {
            alert(val);
        }
    },
    data() {
        return {
            item : ''
        }
    }
}

const comp1 = {
    template: `<div>
    <h1>이메일을 입력하세요</h1>
    <form>
      <div class="form-group">
        <input v-model="item"
        type="item"
        class="form-control"
        placeholder="이메일 주소"/>
      </div>
      <div class="form-group">
        <button class="btn btn-primary btn-lg" @click.prevent="pressed(item)">버튼1 누르기</button>
      </div>
    </form>
    </div>`,
    mixins: [myButton]
  }

const comp2 = {
    template: `<div>
    <h1>전화번호를 입력하세요</h1>
      <form>
        <div class="form-group">
            <input v-model="item"
            class="form-control"
            placeholder="전화번호"/>
        </div>
        <div class="form-group">
          <button class="btn btn-warning btn-lg" @click.prevent="pressed(item)">버튼2 누르기</button>
        </div>
      </form>
    </div>`,
    mixins: [myButton]
  }


new Vue({
    el : '#app',
    data() {
        return{
            title : '컴포넌트 두 개를 사용한 믹스인 예제'
        }
    },
    components : {
        myComp1 : comp1,
        myComp2 : comp2
    }
});
