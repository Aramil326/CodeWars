## Description

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

## My solution

```js
function humanReadable (seconds) {
  if (seconds < 0) {
    return '00:00:00'
  }
  
  let SS = 0, MM = 0, HH = 0;
  
  if(seconds === 0) {
    return '00:00:00'
  }
  
  if(seconds < 3600) {
    HH = '00'
  } else {
    HH = Math.floor(seconds/60/60)
    seconds = seconds - HH*60*60
    if(HH < 10){
      HH = '0'+HH
    }
  }
  
  if(seconds < 60) {
    MM = '00'
  } else {
    MM = Math.floor(seconds/60)
    seconds = seconds - MM*60
    if(MM < 10){
      MM = '0'+MM
    }
  }
  
  if(seconds == 0) {
    SS = '00'
  } else {
    SS = seconds
    if(SS < 10){
      SS = '0'+ SS
    }
  }
  
  return `${HH}:${MM}:${SS}`
}
```
