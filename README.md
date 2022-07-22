# neon-timer
this is my custom project trying to create 3d effect with some functionality like timer and stuff


## usage
WARNING! i do not expect people to use this site for their daily reminder because sadly this timer uses url as the user interface intead of button and inputs, and also by no means this is an accurate timer, dont use this for time sensitive activities or work

with that being said here are the list, usage, and example of the api or input:

| name  | function | default value |
| ----- | -------- | ------------- |
| delay | set how long until the timer end | 300 sec |
| alarm | set alarm sounds (supports youtube links and local mp3) | ./detectorbeep.mp3 |
| duration | set how long with the sound last | delay-1 |
| t | if user uses youtube link and the link has t flag on it, the youtube link will also start at the same starting point | 0 |


## example usages
### delay
aslong as you use the first three letter of each part and add space between the number and letter it will work

```
ex:
https://onixldlc.github.io/neon-timer/?delay=30 min
https://onixldlc.github.io/neon-timer/?delay=50 sec
https://onixldlc.github.io/neon-timer/?delay=20 hou
```

to use all three at the same time you need to add ", " to seperate each part
NOTE: order does not matter `2 hour, 20 minute` = `20 minute, 2 hour` 

```
ex:
https://onixldlc.github.io/neon-timer/?delay=30 min, 50 sec
https://onixldlc.github.io/neon-timer/?delay=20 hour, 30 minute, 50 sec
https://onixldlc.github.io/neon-timer/?delay=50 sec, 30 minutes
```

### alarm
aslong as the file exist in the github, or the youtube link is not blocked, this thing can play it
```
ex:
https://onixldlc.github.io/neon-timer/?alarm=./alarmbeep.mp3
https://onixldlc.github.io/neon-timer/?alarm=./detectorbeep.mp3
https://onixldlc.github.io/neon-timer/?alarm=https://www.youtube.com/watch?v=kcT-i9xzC-8
https://onixldlc.github.io/neon-timer/?alarm=https://www.youtube.com/watch?v=du-TY1GUFGk
https://onixldlc.github.io/neon-timer/?alarm=https://www.youtube.com/watch?v=BBJa32lCaaY
```

#### t
this is here so that you can just skip part of the youtube so you dont need to play from the start
```
https://onixldlc.github.io/neon-timer/?alarm=https://www.youtube.com/watch?v=g9vtEYu2NY8&t=2
https://onixldlc.github.io/neon-timer/?alarm=https://www.youtube.com/watch?v=TbLNUwpbPvA&t=112
```

### duration
duration is so that if you only want to hear it let say once or only 5 second after the timer rings, then you can set it as such
```
https://onixldlc.github.io/neon-timer/?alarm=https://www.youtube.com/watch?v=TbLNUwpbPvA&t=112&duration=3
```

