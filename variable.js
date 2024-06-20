function myTest()
{
    if(true)
    {
        var x = 100;
    }
    console.log(x);
}

let y = 300; //let은 변수가 선언된 { } 안에서만 유효하며 벗어나면 접근할 수 없음
function tTest()
{
    if(true)
    {
        let z = 400;
        console.log(y);
        console.log(z);
    }
    console.log(y);
    console.log(z);
}

function againTest()
{
    if(true)
    {
        const m = 100; //const는 값을 한번 저장하면 변경할 수 없음
        m = 200;
    }
}

myTest();
tTest();
againTest();