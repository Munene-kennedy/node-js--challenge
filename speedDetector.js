
//  Speed Detector
const prompt = require("prompt-sync")();
function speedDetector(){
  let speed = prompt('Input speed of car'); 
  if (speed <=70){
    console.log("ok");
  } else if(speed>70){
    let points = (points -70)/5;
    if(points <=12){
      console.log('points :${points}');
            }else if (points > 12){
              console.log("License suspended");               
              
            }  
    
    } 
}
speedDetector()