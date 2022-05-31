function xem_chi_tiet_sach(id){
    sessionStorage.setItem("id_book",id);
    window.location ="../user_write-rv.html"
  }

function xem_chi_tiet_tacgia(id){
    sessionStorage.setItem("id_author",id);
    window.location ="../user_author.html"
}

function xem_chi_tiet_theloai(id){
    sessionStorage.setItem("id_tag",id);
    window.location ="../user_book-category.html"
}