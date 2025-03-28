
import './App.css'
let nr;
let x;
let y;
x =2;
y = 9;
nr = 5
; console.log(nr);
function App() {
  
  return (
    <>
   <div class="g"> <div class="btext">
   <h1>Komputer ma numer - {nr}</h1>
   </div>
   </div><br /><br />
   <div class="text">
   </div>
   <br /><br />
   <div class="gg">{nr}*1 = {nr*1} <br />
   {nr}*2 = {nr*2}<br />
   {nr}*3 = {nr*3}<br />
   {nr}*4 = {nr*4}<br />
   {nr}*5 = {nr*5}<br />
   {nr}*6 = {nr*6}<br />
   {nr}*7 = {nr*7}<br />
   {nr}*8 = {nr*8}<br />
   {nr}*9 = {nr*9}<br />
   {nr}*10 = {nr*10}<br />
   </div>
   <div class="ggg">
   <p>{nr}x<sup>3</sup>+1-{nr}y=   {nr*x*x*x+1-nr*y}</p> 
   <p>2x+3{nr}-4y<sup>2</sup>= {2*x+3*nr-4*y*y}</p>
   <p>3y<sup>2</sup>-{nr}x<sup>2</sup>y-7y= {3*y*y-nr*x*x*y-7*y} </p> 
<p>2xy+{nr}xy= {2*x*y+nr*x*y}</p>
<p>3x<sup>2</sup>+{nr}y+2= {3*x*x+nr*y+2}</p>
   </div>
    </>
  )
}

export default App
