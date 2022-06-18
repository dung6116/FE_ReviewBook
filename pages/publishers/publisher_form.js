function get_id_pub(id){
    sessionStorage.setItem("id_pub",id);
}
function validate_add() {
    if( document.getElementById("pubName").value == "" ) {
        alert( "Please provide publisher's name!" );
        document.getElementById("pubName").focus() ;
        return false;
    }
    return( true );
 }