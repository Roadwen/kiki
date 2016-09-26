var Timer = (function () {
    function Timer() {
        //定义星期数组并初始化
        this.weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    }
    //获取当前时间
    Timer.prototype.getCurrentTime = function () {
        var currentTime = new Date();
        var year = currentTime.getFullYear();
        var month = currentTime.getMonth() + 1;
        var date = currentTime.getDate();
        var day = currentTime.getDay();
        var h = currentTime.getHours();
        var checkedH = this.checktime(h);
        var m = currentTime.getMinutes();
        var checkedM = this.checktime(m);
        var s = currentTime.getSeconds();
        var checkedS = this.checktime(s);
        return year + " \u5E74 " + month + " \u6708 " + date + " \u65E5 " + this.weekday[day] + " " + checkedH + ":" + checkedM + ":" + checkedS;
    };
    //检查时分秒显示是否为两位数，不是的用零补
    Timer.prototype.checktime = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    };
    return Timer;
}());
window.addEventListener('load', function () {
    var timer = new Timer();
    setInterval(function () {
        document.querySelector('#timer').innerHTML = timer.getCurrentTime();
    }, 500);
}, false);
//# sourceMappingURL=Timer.js.map