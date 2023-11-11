function Device(name, power, action = ''){
	this.deviceName = name,
	this.devicePower = power,
	this.deviceActionList = ['On', 'Off'],
	this.deviceStatus = '',
	this.action = action,
	}
Device.prototype.deviceAction = function(action){
	console.log(this.deviceActionList);
	if (this.deviceActionList.includes(action) == true)
		{this.deviceStatus = action;
		console.log(`Device ${this.deviceName} set to ${this.deviceStatus}`)}
	else {console.log(`For ${this.deviceName} <${this.action}> unknow command!`)}
	}
Device.prototype.deviceInfo = function(deviceName, devicePower, deviceStatus){
	console.log(`${this.deviceName} info: status=${this.deviceStatus}, power=${this.devicePower}`)
	}
Device.prototype.powerСonsumption = function(devicePower, deviceStatus){
	if (this.deviceStatus == 'Off')
		{return 0}
	else {return this.devicePower}
	}

const lamp2 = new Device('Lamp', 150)
lamp2.deviceActionList.push('Sleep', 'Half', 'Night', 'Music')
lamp2.luminosity = function(light = 0){
	if (light > 100 || light < 0)
		{return 'Light must be in range 0-100'}
	else {return `Luminosity <${this.deviceName} set to ${light}`}
	}
const comp = new Device('Work comp', 1000)
comp.deviceActionList.push('Wake up!', 'Reboot', 'Sleep')
lamp2.deviceAction('Music')
lamp2.luminosity(81)
summPower = lamp1.powerСonsumption() + comp.powerСonsumption()
// 1150
comp.deviceAction('Off')
summPower = lamp1.powerСonsumption() + comp.powerСonsumption()
// 150
