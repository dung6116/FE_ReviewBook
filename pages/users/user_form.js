function get_id_user(id){
    sessionStorage.setItem("id_user",id);
}



function validate() {
    if( document.getElementById("userName").value == "" ) {
        alert( "Please provide username!" );
        document.getElementById("userName").focus() ;
        return false;
    }
    if (!validate_pass()) return false
    return( true );
}
function validate_pass()
{
    if( document.getElementById("password").value == "" ) {
        alert( "Please provide password!");
        document.getElementById("password").focus() ;
        return false;
    }
    if( document.getElementById("confirmPass").value == "" ) {
        alert( "Please confirm password!");
        document.getElementById("confirmPass").focus() ;
        return false;
    } 
    if (document.getElementById("password").value != document.getElementById("confirmPass").value){
        alert( "Confirm password isn't correct!");
        document.getElementById("confirmPass").focus() ;
        return false;
    }
    return (true);
}
function validate_edit() {
    if( document.getElementById("name").value == "" ) {
        alert( "Please provide full name!" );
        document.getElementById("name").focus() ;
        return false;
    }
    if( document.getElementById("birthday").value == "" ) {
        alert( "Please provide birthday!" );
        document.getElementById("birthday").focus() ;
        return false;
    }
    if( document.getElementById("address").value == "" ) {
        alert( "Please provide address!" );
        document.getElementById("address").focus() ;
        return false;
    }
    return( true );
}