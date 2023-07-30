var person = {
    name: "홍길동",
    birthday: "030219",
    age: 30,
    pId: "1234567",
    fullId: function() {
        const birthday = "20232023";
        const pId = "9876543";
        console.log("이것은 local Scope의 birthday + pid 입니다",birthday + pId);
        console.log("이것은 .this 로 찾은 객체의 프로퍼티 입니다.",this.birthday + this.pId);
    },
};

const button = document.getElementById('testButton');
button.addEventListener('click',()=>{
    person.fullId();
});