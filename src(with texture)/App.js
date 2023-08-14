import './App.css';
import Wall1 from './walls/wall1/Wall1';
import Wall2 from './walls/wall2/Wall2';
import Wall3 from './walls/wall3/Wall3';
import Wall4 from './walls/wall4/Wall4';
import Wall5 from './walls/wall5/Wall5';
// import cursor from './amus-cursor.png'
//hidden feature
const set=()=>{
  let o = document.documentElement.scrollTop
  if(o <= 0 ){
  document.documentElement.scrollTop = '0'

  }
  
}

function move(e){
  document.documentElement.scrollTop = '0'

  let x = e.clientX
  let y = e.clientY
  console.log('x = ' + x + ' , y = ' + y);
  let w1 = document.getElementById('w1')
  var computedStyle = window.getComputedStyle(w1);
  var lp = parseInt(computedStyle.getPropertyValue("left"), 10)
  var tp = parseInt(computedStyle.getPropertyValue("top"), 10)

  x = x/10
  y = y/10
    w1.style.top = 100 - y + 'px'
  if( x >70){
  }else{
  w1.style.left = 100 - x + 'px'
  }

  let w2 = document.getElementById('w2')
  w2.style.clipPath = `polygon(0 0, 100% ${101 - y}px, 100% ${625 - y}px, 0% 100%)`
  if(100-x < 30){}else{
  w2.style.width = `${100  -x}px`}

  let w4 = document.getElementById('w4')
  w4.style.clipPath = `polygon(0 0, 100% ${99 - y}px, 100% ${625 - y}px, 0% 100%)`

  if(37+x >106.5){}else{
  w4.style.width = `${37 + x}px`}



  let w3 =document.getElementById('w3')
  let w5 =document.getElementById('w5')
  if(1330-x<1260){}else{
    w3.style.clipPath = `polygon(100% 0, ${1330 -x}px 100%, ${100 -x}px 100%, 0 0)`
    w5.style.clipPath = `polygon(100% 100%,  ${1330 -x}px 0%, ${67 -x}px 0%, 0 100%)`
  }



  // var v4Style = window.getComputedStyle(w4);
  // var v4 = parseInt(v4Style.getPropertyValue("top"), 10)
  //hidden feature


 let ew = 36 + y
  w3.style.height = `${100 -y + 1}px`
  w4.style.top =  -1285 +y +'px'
  w5.style.top =  -626 +y -ew +'px'
  
  w5.style.height = `${ew}px`

  // let cursor = document.getElementById("cursor")
  // cursor.style.top = -1319 + e.clientY + 'px'
  // cursor.style.left = -6 + e.clientX + 'px'
  //hidden feature



}
window.addEventListener('mousemove', move)
window.addEventListener('load', set)

function App() {
  return (
    <div>
      <Wall1/>
      <Wall2/>
      <Wall3/>
      <Wall4/>
      <Wall5/>
      {/* <img src={cursor} alt="" id='cursor' /> //hidden feature  */}
    </div>
  );
}

export default App;
