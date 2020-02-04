
var h_scroll = 1000;
var scrolled_up = true;

function onResize(){
  var w = window.visualViewport.width;
  var h = window.visualViewport.height;

  var h_i = h*0.06;
  h_scroll = h-h_i;

  document.getElementById('i_img').style.height = h_i + "px";
  document.getElementById('i_img').style.width = w + "px";

  document.getElementById('poem_div').style.height = h_scroll + "px";
  document.getElementById('poem_div').style.width = w + "px";
  document.getElementById('poem_img').style.height = "auto";
  document.getElementById('poem_img').style.width = w + "px";

  document.getElementById('map_div').style.height = h + "px";
  document.getElementById('map_div').style.width = w + "px";
  document.getElementById('map_img').style.height = "auto";
  document.getElementById('map_img').style.width = w + "px";
}

function scrollPoem(){
  scrolled_up = !scrolled_up;
  if(scrolled_up){
    document.getElementById('scroll_div').classList.remove("pos_down");
    document.getElementById('scroll_div').classList.add("pos_up");
  }
  else{
    document.getElementById('scroll_div').classList.remove("pos_up");
    document.getElementById('scroll_div').classList.add("pos_down");
  }
}

window.addEventListener('resize', onResize);
