/**
 * Created by dono on 2017/12/11.
 */
for (var i=0;i<10000;i++)
{
    vote();
    //num = GetRandomNum(1,10);
    //setInterval(vote(),num * 1000);
}
function vote(){
    sleep(num);
    clearCookie("U_VOTE");
    $.ajax({
        type: "POST",
        url: "http://www.pintu360.com/controller/vote_controller.php",
        data: "fnName=toVote&voteCandidateId=260",
        success: function(msg){
            //alert( "Data Saved: " + msg );
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
