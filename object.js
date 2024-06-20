const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    ouput : process.stdout,
});

let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};

const unit = {
    attack : function(weapon){
        return `${age}으로 공격한다.`;
    }
}

dic.apple = '사과'; //객체 프로퍼티 추가
dic.ten = 10;
delete dic.girl;

console.log(dic.apple);
console.log(dic.ten);
console.log();

console.log(dic.boy);
console.log(dic['girl']);
dic.boy = "남자아이"; //dic.boy 수정
console.log(dic.friend);
console.log(dic.boy);
console.log();

console.log(unit.attack("주먹"));
console.log(unit("총"));

rl.question("찾을 단어를 입력하세요 : ", function(key){
    let word = key;
    console.log(dic[word]);

    rl.close();
});