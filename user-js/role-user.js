function xem_chi_tiet_sach(id){
    sessionStorage.setItem("id_book",id);
    window.location.replace("user_write-rv.html");
  }

function xem_chi_tiet_tacgia(id){
    sessionStorage.setItem("id_author",id);
    window.location.replace("user_author.html");
}

function xem_chi_tiet_theloai(id){
    sessionStorage.setItem("id_tag",id);
    window.location.replace("user_book-category.html");
}

function xem_chi_tiet_nxb(id){
    sessionStorage.setItem("id_nxb",id);
    window.location.replace("user_book-publisher.html");
}

function xem_chi_tiet_friend(id){
    if (id == sessionStorage.getItem("id")){
        window.location.replace("user_info.html");
    } else {
        sessionStorage.setItem("id_friend",id);
        window.location.replace("user_info-friend.html");
    }  
}