const birthday = "20232023";
const pId = "9876543";

var person = {
    name: "홍길동",      // 이름 프로퍼티를 정의함.
    birthday: "030219",  // 생년월일 프로퍼티를 정의함.
    age: 30,
    pId: "1234567",      // 개인 id 프로퍼티를 정의함.
    fullId: function() { // 생년월일과 개인 id를 합쳐서 주민등록번호를 반환함.
        console.log("이것은 local Scope의 birthday + pid 입니다",birthday + pId);
        console.log("이것은 .this 로 찾은 객체의 프로퍼티 입니다.",this.birthday + this.pId);
    },
};
person.fullId();