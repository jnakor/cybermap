function DateDiff(deadline) {
    today = new Date();
    deadline = new Date(deadline);
    if (deadline >= today) {
        days = parseInt(Math.abs(deadline - today) / 1000 / 60 / 60 / 24);
    } else {
        days = -1;
    }
    return days;
}

function comparedate(date1, date2) {
    var oDate1 = new Date(date1);
    var oDate2 = new Date(date2);
    if (oDate1.getTime() > oDate2.getTime()) {
        console.log('第一个大');
        return true
    } else {
        return false
    }
}