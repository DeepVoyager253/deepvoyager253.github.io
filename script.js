var timer_element = document.getElementById("Countdown");

function get_time_until() {
    var date_now = new Date();
    var date_future = new Date('2023-5-12')
    var delta = Math.abs(date_future - date_now) / 1000;
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    var seconds = delta % 60;

    return [days, hours, minutes, Math.round(seconds)]
}
function update_timer(diff) {
    timer_element.innerHTML = "<b>" + diff.join(':') + "</b>"
    setTimeout(update_timer, 1000)

}
var intervalId = window.setInterval(function(){
  update_timer(get_time_until())
}, 1000);