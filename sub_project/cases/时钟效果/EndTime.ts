class EndTime {
	private leftDay: number;

	getLeftDay(endTime: any): number {
		let curtime: Date = new Date();
		endTime = new Date(Date.parse(endTime.replace(/-/g, "/")));
		this.leftDay = (endTime.getTime() - curtime.getTime())/(24 * 3600 * 1000);
		this.leftDay = Math.ceil(this.leftDay);
		return this.leftDay;
	}
}

let endTime: HTMLInputElement = document.querySelector('#endTime') as HTMLInputElement;
let TimeTools: EndTime = new EndTime();
let showTimeBlock = document.querySelector('#showLeftTime');

document.querySelector('#ok_btn').addEventListener('click', function () {
	if (TimeTools.getLeftDay(endTime.value) <= 0) {
		alert('乖，设置一个今天以后的日期 ^_^');
	} else {
		showTimeBlock.innerHTML = `距离您设置的时间还有${TimeTools.getLeftDay(endTime.value)}天`;
	}
}, false);
