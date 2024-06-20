const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    input:process.stdout,
});

rl.question('C 드라이브를 포맷하시겠습니까? ', function(ch){
    switch(ch)
    {
        case 'y':
            console.log("예, 드라이브를 포맷하겠습니다.");
            break;
        case 'n':
            console.log("아니오, 드라이브를 포맷하지 않겠습니다.");
            break;
        default:
            console.log("유효하지 않은 문자입니다.");
            break;
    }
    rl.close();
});