window.scrollTo(0,1);
var TransitionEnd=(navigator.vendor && 'webkittransitionEnd') || (window.opera && 'oTransitionEnd') || 'transitionend';
var AnimationEnd=(navigator.vendor && 'webkitAnimationEnd') || (window.opera && 'oAnimationEnd') || 'animationend';
var $mark=document.querySelector('#mark');
function mrOutUp(){
  $mark.className='mrOutUp';
}
function animationEd(){
  $mark.className='hide';
}
$mark.addEventListener(AnimationEnd,animationEd,false);
$mark.addEventListener('touchstart',mrOutUp,false);
$mark.addEventListener('click',mrOutUp,false);
