class Device {
	constructor(name, power, action) {
	this.deviceName = name;
	this.devicePower = power;
	this.deviceActionList = ['On', 'Off'];
	this.deviceStatus = '';
	this.action = action || '';
	}
	deviceAction(action) {
		console.log(this.deviceActionList);
		if (this.deviceActionList.includes(action) == true)
			{this.deviceStatus = action;
			console.log(`Device ${this.deviceName} set to ${this.deviceStatus}`)}
		else {console.log(`For ${this.deviceName} <${this.action}> unknow command!`)}
		};
	deviceInfo(deviceName, devicePower, deviceStatus) {
		console.log(`${this.deviceName} info: status=${this.deviceStatus}, power=${this.devicePower}`)
		};
	powerСonsumption = function(devicePower, deviceStatus) {
		if (this.deviceStatus == 'Off') {return 0}
		else {return this.devicePower};
		}
}

class Lamp extends Device {
	constructor(deviceActionList, light, deviceName, devicePower, deviceStatus, action) {
		super(deviceName);
		super(devicePower);
		super(deviceStatus);
		super(action);
		this.deviceActionList = deviceActionList;
		this.light = light
	}
	luminosity(light){
		if (light > 100 || light < 0)
			{return 'Light must be in range 0-100'}
		else {return `Luminosity <${deviceName} set to ${light}`}
	}
}

const lamp = new Lamp(['On', 'Off', 'Half', 'Night'], 60, 'Lamp1', 100, '', 'On');