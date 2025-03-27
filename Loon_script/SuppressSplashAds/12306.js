const obj = JSON.parse($request.body);

const bodyDict = {
	"0007":
		'{"code":"00","materialsList":[{"billMaterialsId":"255","filePath":"h","creativeType":1}],"advertParam":{"skipTime":1}}',
	G0054: '{"code":"00","materialsList":[]}',
	default: '{"code":"00","message":""}',
};

$done({ response: { body: bodyDict[obj.placementNo] || bodyDict.default } });
