const svg= document.querySelector('svg');
const ns="http://www.w3.org/2000/svg";
const create= document.getElementById('create');
const remove= document.getElementById('remove');
const horizon=document.getElementsByClassName("horizontal")
const vertical=document.getElementsByClassName("vertical")

function createLines(){
  for(let i=0; i<horver.length;i++) {
    createLine(...horver[i].split(','))
  }
}
function createLine(hrect,vrect){
  // console.log(hrect)
    // for(const prop1 of horizon){
      
    // }
    const hrect1=document.getElementById(hrect)
    const vrect1=document.getElementById(vrect)
  const width1=+hrect1.getAttributeNS(null,'width');
  const height1=+hrect1.getAttributeNS(null,'height');
  const x1=+hrect1.getAttributeNS(null,'x');
  const y1=+hrect1.getAttributeNS(null,'y');
  const width2=+vrect1.getAttributeNS(null,'width');
  const height2=+vrect1.getAttributeNS(null,'height');
  const x2=+vrect1.getAttributeNS(null,'x');
  const y2=+vrect1.getAttributeNS(null,'y');
  const ourline= document.createElementNS(ns,'line');
  const ourline1= document.createElementNS(ns,'line');
  ourline.setAttributeNS(null,'x1',(width1/2)+x1);
  ourline.setAttributeNS(null,'y1',(height1)/2+y1);
  ourline.setAttributeNS(null,'x2',(width1/2)+x1);
  ourline.setAttributeNS(null,'y2',(height2)/2+y2);
  ourline.setAttributeNS(null,'stroke',"black");
  ourline.setAttributeNS(null,'stroke-width',"1");
  ourline.setAttributeNS(null,'class',"createline");
  ourline1.setAttributeNS(null,'x1',(width1/2)+x1);
  ourline1.setAttributeNS(null,'y1',(height2)/2+y2);
  ourline1.setAttributeNS(null,'x2',(width2/2)+x2);
  ourline1.setAttributeNS(null,'y2',(height2)/2+y2);
  ourline1.setAttributeNS(null,'stroke',"black");
  ourline1.setAttributeNS(null,'stroke-width',"1");
  ourline1.setAttributeNS(null,'class',"createline");
  svg.appendChild(ourline);
  svg.appendChild(ourline1);

}

create.addEventListener('click',createLines);
remove.addEventListener('click',removeLine);


let horivertical=[]
for(let i in horizon){
  console.log(i.id)
}

function removeLine(){
    const lines = document.querySelectorAll('.createline');

lines.forEach(line => {
  line.remove();
});
}



let hor=[];
for (let i = 0; i < horizon.length; i++) {
  const element = horizon[i];
  // const element1=element.getElementsByTagName('rect')
  hor.push(element)
  
}

let ver=[];
for (let i = 0; i < vertical.length; i++) {
  const element = vertical[i];
  // const element1=element.getElementsByTagName('rect')
  ver.push(element)
  
}


let horver=[];
for (let i = 0; i < hor.length; i++) {
  horver.push([hor[i].id,ver[i].id].join(','))
  
}


function makeDraggable(evt) {
  var selectedElement = false;
  var svg = evt.target;
  svg.addEventListener('mousedown', startDrag);
  svg.addEventListener('mousemove', drag);
  svg.addEventListener('mouseup', endDrag);
  svg.addEventListener('mouseleave', endDrag);
  function startDrag(evt) {
    if (evt.target.classList.contains('draggable')) {
      selectedElement = evt.target;
    }
  }
  function drag(evt) {
  if (selectedElement) {
    evt.preventDefault();
    var coord = getMousePosition(evt);
    selectedElement.setAttributeNS(null, "x", coord.x);
    selectedElement.setAttributeNS(null, "y", coord.y);
  }
}
  function endDrag(evt) {
    selectedElement = null;
  }
  function getMousePosition(evt) {
    var CTM = svg.getScreenCTM();
    return {
      x: (evt.clientX - CTM.e) / CTM.a,
      y: (evt.clientY - CTM.f) / CTM.d
    };
  }
}
