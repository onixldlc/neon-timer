var tempTarget=0;
var onYouTubeIframeAPIReady;
var onPlayerStateChange;
var onPlayerReady;
var player;
var done=false;

function createYtEmbed(ytUrl){
	var videoId = getYtIdFromUrl(ytUrl)
	onPlayerStateChange = (event)=>{
		if (event.data == YT.PlayerState.ENDED && !done) {
			event.target.seekTo(startFrom, true)
		}
	}
	onPlayerReady = (event)=>{
		event.target.setVolume(30);
	}

	onYouTubeIframeAPIReady = ()=>{
		player = new YT.Player('content', {
			height: '500',
			width: '500',
			videoId: videoId,
			playerVars:{
				autoplay: 1,
				start: startFrom,
			},
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange,
			}
		});
	}
	var tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}
