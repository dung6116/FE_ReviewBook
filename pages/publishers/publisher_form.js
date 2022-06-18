function get_id_pub(id){
    sessionStorage.setItem("id_pub",id);
    console.log(sessionStorage.getItem("id_pub"));
}
function validate_add() {
    if( document.getElementById("pubName").value == "" ) {
        alert( "Please provide publisher's name!" );
        document.getElementById("pubName").focus() ;
        return false;
    }
    return( true );
 }
function validate() {
    if( document.getElementById("pubName").value == "" ) {
        alert( "Please provide publisher's name!" );
        document.getElementById("pubName").focus() ;
        return false;
    }
    if( document.getElementById("address").value == "" ) {
        alert( "Please provide publisher's address!");
        document.getElementById("address").focus() ;
        return false;
    }
    if(!/((09|03|07|08|05)+([0-9]{8})\b)/g.test(document.getElementById("telephone").value)) {
        alert( "Please provide valid publisher's telephone!");
        document.getElementById("telephone").focus() ;
        return false;
    }
    if (!isValidHttpUrl(document.getElementById("website").value)) {
        alert( "Please provide valid website!");
        document.getElementById("website").focus() ;
        return false;
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.getElementById("email").value)) {
        alert( "Please provide valid email!");
        document.getElementById("email").focus() ;
        return false;
    }
    return( true );
}
function isValidHttpUrl(string) {
    try {
        new URL(string);
    } catch (e) {
        return false;
    }
    return true;
}