function init(urlVariables){
	document.getElementById("jumpto").scrollIntoView()
	var finalVariables = {"delay":300, "alarmLen":-1, "alarmSrc":"./detectorbeep.mp3", "startFrom": 0}
	if(!urlVariables){return finalVariables}

	if(urlVariables.delay){
		finalVariables.delay = convertToSecond(urlVariables.delay);
	}
	if(urlVariables.alarm){
		finalVariables.alarmSrc = urlVariables.alarm;
	}
	if(urlVariables.duration){
		finalVariables.alarmLen = parseInt(urlVariables.duration);
	}
	if(urlVariables.t){
		finalVariables.startFrom = parseInt(urlVariables.t);
	}
	return finalVariables
}







var urlVariables = parseURLParams(String(window.location));
var datas = init(urlVariables);

var delay = datas.delay
var alarmLen = datas.alarmLen
var alarmSrc = datas.alarmSrc
var startFrom = datas.startFrom

if(alarmLen == -1){alarmLen = delay-1}

var currentTime = delay;
var stopAlarm;










function checkAlarm(element){
	if(alarmSrc.includes("youtu.be") || alarmSrc.includes("youtube.com") ){
		if(player){done=false; return player.playVideo()}
		player = createYtEmbed(alarmSrc)
		stopAlarm = ()=>{
			done=true
			player.stopVideo();
		}
	}else{
		component=`
			<audio src="${alarmSrc}" autoplay>
		`
		stopAlarm = ()=>{
			content = document.getElementById("content")
			content.removeChild(content.lastElementChild)
		}
		element.innerHTML = component;
	}
}






var intervals = setInterval(()=>{
	currentTime--
	var timer = document.getElementById("timer");
	var reflection = document.getElementById("timer-reflection");
	timer.innerHTML = convertSecToTime(currentTime);
	reflection.innerHTML = convertSecToTime(currentTime);
	if(currentTime==0){
		currentTime = delay;
		content = document.getElementById("content")
		checkAlarm(content);
		setTimeout(()=>{stopAlarm()}, alarmLen*1000)
	}
}, 1000)
