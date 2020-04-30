
  function normalPic() {
    document.getElementById("profilePic") .src = "Images/lloyd_crawford2.jpg";
  }



  let download = document.getElementById("cvDownload");
download.addEventListener('click', request);
function request() {
  window.location = 'assets/CV - Lloyd Crawford.docx';
}