function timeConvert (iMins){
    var hours = Math.floor(iMins/60);
    var mins = (iMins%60);

    if (hours < 1 ){
        if (mins == 1){
        return mins + ' minute.';
        } else {
        return mins + ' minutes';
        }
    }

    if (hours == 1) {
        if (mins == 1){
            return hours + ' hour and ' + mins + ' minute.';
            } else {
            return hours + ' hour and ' + mins + ' minutes';
            }
    }

    if (hours > 1){
        if (mins == 1){
            return hours + ' hours and ' + mins + ' minute.';
            } else {
            return hours + ' hours and ' + mins + ' minutes';
            }
    }

}
console.log(timeConvert(121))