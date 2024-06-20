var userName = '이창헌'; //전역변수
var userPW = '1111'; //전역변수

function account(userId, userpw)
{
    console.log(userId);
    console.log(userpw);
    var savedName = '이창헌';
    var savedPw = '1111';

    userpw = userpw || '1111';

    if(userId == savedName)
    {
        if(userpw == savedPw)
        {
            console.log('반갑습니다. ' + userId + '님');
        }
    }
}
account(userName, userPW);