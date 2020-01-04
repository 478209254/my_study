window.onload = function () {
  // var imgs=document.getElementsByClassName('radio');
  // for(var i = 0 ; i < imgs.length ; i++){
  //   imgs[i].onclick=function(){
  //     console.log(11);
  //     // if(imgs[i].children[0].children[0].style.display='block'){
  //     //   img[i+1].children[0].children[0].style.display='none'
  //     //   img[i-1].children[0].children[0].style.display='none'
  //     // }else{
  //       this.children[0].children[0].style.display = (this.children[0].children[0].style.display === 'block') ? 'none' : 'block'
  //       // this.previousSibling.children[0].children[0].style.display= 'none' 
  //       // console.log(this.previousSibling)
  //       // this.nextSibling.children[0].children[0].style.display= 'none' 

  //   } 
  // }
  // var img1=document.getElementsByClassName('left')[0];
  // img1.onclick=function(){
  //   this.attributes('checked','checked')
  //     document.getElementsByClassName('right')[0].removeAttribute('checked')
  // }
  document.getElementById('left1').onclick = function () {
    this.children[0].children[0].style.display = "block";
    document.getElementById('right1').children[0].children[0].style.display = 'none';
  };
  document.getElementById('right1').onclick = function () {
    this.children[0].children[0].style.display = "block";
    document.getElementById('left1').children[0].children[0].style.display = 'none';
  };
}