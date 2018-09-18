var iAm = function () {
	alert ( "it's your boy Sulz" );
}
var car = {
	make: 'VW',
	type: 'Golf',
	color: 'blue',
	isTurnedOn: false,
	numberOfWheels: 4,
	seats: [
		'seat 1', 
		'seat 2',
		'seat 3', 
		'seat 4',
		],
	turnOn: function () {
		this.isTurnedOn = true;
	},
	fly: function () {
		alert('fly');
	},
	switchCar: function (isOn) {
		console.log('turn car ' + isOn)
			;
		if ((isOn) == true) {
			this.isTurnedOn = true;
			 } else {
				this.isTurnedOn = false;
			
				}
	}
};
console.log('sup bro!');