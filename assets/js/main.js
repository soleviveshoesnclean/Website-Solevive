
function slide(direction){
 const el=document.getElementById('reviewSlider');
 if(el){el.scrollBy({left:direction*350,behavior:'smooth'});}
}
