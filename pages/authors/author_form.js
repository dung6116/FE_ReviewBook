function get_id_aut(id){
    sessionStorage.setItem("id_aut",id);
}
function validate() {
    if( document.getElementById("stageName").value == "" ) {
        alert( "Please provide author's stage name!" );
        document.getElementById("stageName").focus() ;
        return false;
    }
    if( document.getElementById("realName").value == "" ) {
        alert( "Please provide author's real name!");
        document.getElementById("realName").focus() ;
        return false;
    }
    if( document.getElementById("birthday").value == "" ) {
        alert( "Please provide author's birthday!");
        document.getElementById("birthday").focus() ;
        return false;
    }
    return( true );
 }
 function validate_add() {
    if( document.getElementById("stageName").value == "" ) {
        alert( "Please provide author's stage name!" );
        document.getElementById("stageName").focus() ;
        return false;
    }
    return( true );
 }