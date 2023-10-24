
  function normalPic() {
    document.getElementById("profilePic") .src = "Images/2023_pic.jpg";
  }



  let download = document.getElementById("cvDownload");
download.addEventListener('click', request);
function request() {
  window.location = 'assets/Lloyd F Crawford CV 2 Page.docx';
}