const anyObject = {prop5: "0", prop6: "New"}
function chkFunc(str, anyFunc) {
	if (str in anyFunc) {return "True"}
	else {return "False"}
            }
chkFunc("prop1", anyObject)
// False
chkFunc("prop5", anyObject)
// True
