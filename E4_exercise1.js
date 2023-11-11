const itsPrototype = {prop1: "val1",
                      prop2: "val2",}
const anyObject = Object.create(itsPrototype)
anyObject.porp3 = 11
anyObject.prop4 = "String"
function keysFunc(anyObj) {
	for (let key in anyObj) {
		if (anyObject.hasOwnProperty(key)) {console.log("Own", key)}
    		else {console.log("Proto", key)}
	}
}
// Own porp3
// Own prop4
// Proto prop1
// Proto prop2
