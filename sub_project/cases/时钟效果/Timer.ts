class Timer {
	//定义星期数组并初始化
	private weekday: Array<string> = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

	//获取当前时间
	getCurrentTime(): string {
		let currentTime: Date = new Date();
		let year: number = currentTime.getFullYear();
		let month: number = currentTime.getMonth() + 1;
		let date: number = currentTime.getDate();
		let day: number = currentTime.getDay();
		let h: number = currentTime.getHours();
		let checkedH: string = this.checktime(h);
		let m: number = currentTime.getMinutes();
		let checkedM: string = this.checktime(m);
		let s: number = currentTime.getSeconds();
		let checkedS: string = this.checktime(s);
		return `${year} 年 ${month} 月 ${date} 日 ${this.weekday[day]} ${checkedH}:${checkedM}:${checkedS}`;
	}

	//检查时分秒显示是否为两位数，不是的用零补
	checktime(i: any): string {
		if (i < 10) {
			i = '0' + i;
		}
		return i;
	}
}

window.addEventListener('load', function () {
	let timer: Timer = new Timer();
	setInterval(function () {
		document.querySelector('#timer').innerHTML = timer.getCurrentTime();
	}, 500);
}, false);
