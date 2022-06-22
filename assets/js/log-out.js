var btn_log_out = document.getElementById("btn-log-out");
    btn_log_out.onclick = function() {
    sessionStorage.clear();
    window.location.replace("../../index.html")
}