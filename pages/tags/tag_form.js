function get_id_tag(id){
    sessionStorage.setItem("id_tag",id);
}
function validate() {
    if( document.getElementById("tagName").value == "" ) {
        alert( "Please provide tag's name!" );
        document.getElementById("tagName").focus() ;
        return false;
    }
    if( document.getElementById("tagDescrip").value == "" ) {
        alert( "Please provide tag's décription!");
        document.getElementById("tagDescrip").focus() ;
        return false;
    }
    return( true );
}