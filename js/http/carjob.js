for (var i=0;i<10;i++)
{
    vote();
    console.log("the "+ i +" times vote.")
}
function vote(){
    var num = GetRandomNum(1,100);
    sleep(num);
    clearCookie("U_VOTE");
    $.ajax({
        type: "POST",
        url: "http://www.carjob.com.cn/best/mem/vote",
        data: "memId=164735&memType=2",
        success: function(msg){
            console.log( "Data Saved: " + msg.success );
        }
    });
}
//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}
function sleep(n) {
    var start = new Date().getTime();
    while(true)  if(new Date().getTime()-start > n) break;
}
function GetRandomNum(Min,Max)
{
    var Range = Max - Min;
    var Rand = Math.random();
    return(Min + Math.round(Rand * Range));
}
