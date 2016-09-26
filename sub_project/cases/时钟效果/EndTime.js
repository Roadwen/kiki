var EndTime = (function () {
    function EndTime() {
    }
    EndTime.prototype.getLeftDay = function (endTime) {
        var curtime = new Date();
        endTime = new Date(Date.parse(endTime.replace(/-/g, "/")));
        this.leftDay = (endTime.getTime() - curtime.getTime()) / (24 * 3600 * 1000);
        this.leftDay = Math.ceil(this.leftDay);
        return this.leftDay;
    };
    return EndTime;
}());
var endTime = document.querySelector('#endTime');
var TimeTools = new EndTime();
var showTimeBlock = document.querySelector('#showLeftTime');
document.querySelector('#ok_btn').addEventListener('click', function () {
    if (TimeTools.getLeftDay(endTime.value) <= 0) {
        alert('乖，设置一个今天以后的日期 ^_^');
    }
    else {
        showTimeBlock.innerHTML = "\u8DDD\u79BB\u60A8\u8BBE\u7F6E\u7684\u65F6\u95F4\u8FD8\u6709" + TimeTools.getLeftDay(endTime.value) + "\u5929";
    }
}, false);
//# sourceMappingURL=EndTime.js.map