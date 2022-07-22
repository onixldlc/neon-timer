function parseURLParams(url) {
	var queryStart = url.indexOf("?") + 1,
		queryEnd	 = url.indexOf("#") + 1 || url.length + 1,
		query = url.slice(queryStart, queryEnd - 1),
		pairs = query.replace(/\+/g, " ").split("&"),
		parms = {}, i, n, v, nv;

	if (query === url || query === "") return;

	for (i = 0; i < pairs.length; i++) {
		// nv = pairs[i].split("=", 2);
		index = pairs[i].indexOf("=")
		nv = [pairs[i].substring(0, index), pairs[i].substring(index+1)]
		n = decodeURIComponent(nv[0]);
		v = decodeURIComponent(nv[1]);

		if (!parms.hasOwnProperty(n)){
			parms[n]=v;
		}
	}
	return parms;
}


function getYtIdFromUrl(ytUrl){
	var pattern = /(?:https:\/\/)(?:www\.youtube\.com\/|youtu\.be)(?:watch\?v=|embed\/|\/)(.*)/
	return ytUrl.match(pattern)[1]
}


function convertToSecond(len){
	var lookupTable = {
		"hou":3600,
		"min":60,
		"sec":1
	}
	var finalLen = 0
	len.split(", ").forEach((value)=>{
		value = value.match(/(\d+?) (\w{3})/)
		finalLen += parseInt(value[1]) * lookupTable[value[2]]
	})
	return finalLen;
}


function padding(num, len=0){
	var numArr = String(num).split("")
	if(numArr.length < len){
		numArr = [...Array(len - numArr.length).fill(0), ...numArr]
	}
	return numArr.join("")
}

function convertSecToTime(sec){
	var arr=[1, 60, 3600]
	var index=2;
	function recurse(len){
		if(index == 0){
			return padding(len,2);
		}
		return padding(Math.floor(len/arr[index]), 2)+":"+recurse(len%arr[index], index--);
	}
	return recurse(sec);
}

