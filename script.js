function updateClock() {
    let now = new Date();
    let dayName = now.getDay(),
        date = now.getDate(),
        month = now.getMonth(),
        year = now.getFullYear(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds(),
        period = "AM";

        if(hour == 0) {
            hour = 0;
        }
        if(hour > 12) {
            period = "PM";
        }

        Number.prototype.pad = function(digits) {
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        let months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        let days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Ahad"];
        let ids = ["dayName", "dayNum", "month", "year", "hour", "minutes", "seconds", "period"]
        let values = [days[dayName], date.pad(2), months[month], year, hour.pad(2), minute.pad(2), second.pad(2), period]
        for(let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1)
}