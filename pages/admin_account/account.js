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
function validate_pass()
{
    if( document.getElementById("oldPass").value == "" ) {
        alert( "Please provide old password!");
        document.getElementById("oldPass").focus() ;
        return false;
    }
    if( document.getElementById("newPass").value == "" ) {
        alert( "Please provide new password!");
        document.getElementById("newPass").focus() ;
        return false;
    }
    if( document.getElementById("confirmPass").value == "" ) {
        alert( "Please confirm password!");
        document.getElementById("confirmPass").focus() ;
        return false;
    } 
    if (document.getElementById("newPass").value != document.getElementById("confirmPass").value){
        alert( "Confirm password isn't correct!");
        document.getElementById("confirmPass").focus() ;
        return false;
    }
    return (true);
}