//// display list of authors, publishers, tags in DB//////////////////
function display_author(aut){
    console.log(aut)
        var aut_list= document.getElementById("author");
        for (var i = 0; i < aut.length; i++){
            var temp = `
            <option value="${aut[i].id}"> ${aut[i].stage_Name} </option> 
            `
            aut_list.innerHTML += temp;
        }
    }
function display_publisher(pub){
    console.log(pub)
    var pub_list= document.getElementById("publisher");
    for (var i = 0; i < pub.length; i++){
    var temp = `
    <option value="${pub[i].id}"> ${pub[i].name} </option> 
    `
    pub_list.innerHTML += temp;
    }
}
function display_tag(tag){
    console.log(tag)
    var tag_list_1= document.getElementById("tag1");
    var tag_list_2= document.getElementById("tag2");
        if (tag.length%2!=0){
            for (var i = 0; i < tag.length/2+1; i++){
            var temp1 = `
            <div class="form-check">
            <input type="checkbox" name="tag" class="form-check-input" id="${tag[i].id}" value="${tag[i].id}">
            <label class="form-check-label" for="${tag[i].id}"> ${tag[i].name} </label>
            </div>
            `
            tag_list_1.innerHTML += temp1;
        }
            for ( i = tag.length/2+1; i < tag.length; i++){
            var temp2 = `
            <div class="form-check">
            <input type="checkbox" name="tag" class="form-check-input" id="${tag[i].id}" value="${tag[i].id}">
            <label class="form-check-label" for="${tag[i].id}"> ${tag[i].name} </label>
            </div>
            `
            tag_list_2.innerHTML += temp2;
        }
        }
        else{
            for (var i = 0; i < tag.length/2; i++){
            var temp1 = `
            <div class="form-check">
            <input type="checkbox" name="tag" class="form-check-input" id="${tag[i].id}" value="${tag[i].id}">
            <label class="form-check-label" for="${tag[i].id}"> ${tag[i].name} </label>
            </div>
            `
            tag_list_1.innerHTML += temp1;
        }
            for ( i = tag.length/2; i < tag.length; i++){
            var temp2 = `
            <div class="form-check">
            <input type="checkbox" name="tag" class="form-check-input" id="${tag[i].id}" value="${tag[i].id}">
            <label class="form-check-label" for="${tag[i].id}"> ${tag[i].name} </label>
            </div>
            `
            tag_list_2.innerHTML += temp2;
        }}
      
  }

///////////////// get id of chosen tags /////////////////////////
function get_tag_book(){
    var tag_chosen = [];
    var markedCheckbox = document.getElementsByName('tag');  
    var i=0;
    for (var checkbox of markedCheckbox) {  
        if (checkbox.checked)  
        {
            tag_chosen[i] = checkbox.value;
            i++;
        }
    }  
    return tag_chosen;
    //console.log(tag_chosen);
}


function get_aut_book(){
    var e = document.getElementById("author");
    var selected = e.options[e.selectedIndex].value;
    return selected;
}
function get_pub_book(){
    var e = document.getElementById("publisher");
    var selected = e.options[e.selectedIndex].value;
    return selected;
}




//get book'id to view detail or edit
function get_id_book(id){
    sessionStorage.setItem("id_book",id);
}

function validate() {
    if( document.getElementById("bookTitle").value == "" ) {
        alert( "Please provide book title!" );
        document.getElementById("bookTitle").focus() ;
        return false;
    }
    if (get_tag_book().length===0){
        alert( "Please choose book's tag!");
        document.getElementById("tag1").focus() ;
        return false;
    }
    if( document.getElementById("publishYear").value == "" ) {
        alert( "Please provide publish year!");
        document.getElementById("publishYear").focus() ;
        return false;
    }
    return( true );
 }
