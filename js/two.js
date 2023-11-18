
// class Two {

//     TotalFare=0;

//      setTotalFare = (x)=>{
//         this.TotalFare=x;
//     }
// }


var travelar=[{busname:"red bus",from:"hyd",to:"vizaj",arrivaltime:"5:30",depargittime:"9:30",date:"22/10/22", fare:1500,noofsets:40},
{busname:"red bus",from:"vzaj",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"red bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"red bus",from:"hyd",to:"kurnool",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"red bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"red bus",from:"hyd",to:"vizaj",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"red bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"red bus",from:"hyd",to:"vizaj",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"red bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"red bus",from:"vizaj",to:"hyd",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"red bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"red bus",from:"hyb",to:"kurnool",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"red bus",from:"chennai",to:"hyd",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"red bus",from:"chennai",to:"hyd",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"red bus",from:"chennai",to:"hyd",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"red bus",from:"chennai",to:"hyd",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"red bus",from:"chennai",to:"hyd",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"red bus",from:"chennai",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"red bus",from:"chennai",to:"kurnool",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"red bus",from:"chennai",to:"kurnool",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"red bus",from:"chennai",to:"kurnool",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"red bus",from:"chennai",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"red bus",from:"chennai",to:"kurnool",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"green bus",from:"chennai",to:"kurnool",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"green bus",from:"vizaj",to:"chennai",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"green bus",from:"vizaj",to:"chennai",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"green bus",from:"vizaj",to:"chennai",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"green bus",from:"vizaj",to:"chennai",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"green bus",from:"vizaj",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"green bus",from:"vizaj",to:"chennai",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"green bus",from:"kurnool",to:"hyd",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"green bus",from:"kurnool",to:"hyd",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"green bus",from:"kurnool",to:"hyd",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"green bus",from:"kurnool",to:"hyd",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"green bus",from:"kurnool",to:"hyd",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"green bus",from:"kurnool",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"green bus",from:"kurnool",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"green bus",from:"kurnool",to:"bang",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"green bus",from:"kurnool",to:"bang",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"green bus",from:"kurnool",to:"bang",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"green bus",from:"kurnool",to:"bang",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"green bus",from:"kurnool",to:"vizaj",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"green bus",from:"kurnool",to:"vizaj",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"green bus",from:"kurnool",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"green bus",from:"kurnool",to:"vizaj",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"green bus",from:"kurnool",to:"vizaj",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"green bus",from:"kurnool",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"green bus",from:"vizaj",to:"bang",arrivaltime:"3:30",depargittime:"9:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"green bus",from:"hyd",to:"bang",arrivaltime:"10:30",depargittime:"4:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"orange bus",from:"hyd",to:"vizaj",arrivaltime:"5:30",depargittime:"9:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"orange bus",from:"vzaj",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"orange bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"orange bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"orange bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"orange bus",from:"hyd",to:"vizaj",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"orange bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"orange bus",from:"hyd",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"orange bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"orange bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"orange bus",from:"vizaj",to:"bang",arrivaltime:"3:30",depargittime:"9:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"orange bus",from:"hyd",to:"bang",arrivaltime:"10:30",depargittime:"4:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"orange bus",from:"hyd",to:"vizaj",arrivaltime:"5:30",depargittime:"9:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"orange bus",from:"vzaj",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"orange bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"orange bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"orange bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"orange bus",from:"hyd",to:"vizaj",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"orange bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"orange bus",from:"vizaj",to:"hyd",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"orange bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"orange bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"orange bus",from:"vizaj",to:"bang",arrivaltime:"3:30",depargittime:"9:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"orange bus",from:"hyd",to:"bang",arrivaltime:"10:30",depargittime:"4:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"orange bus",from:"hyd",to:"vizaj",arrivaltime:"5:30",depargittime:"9:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"blue bus",from:"vizaj",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"blue bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"blue bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"blue bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"blue bus",from:"hyd",to:"chennai",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"blue bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"blue bus",from:"vzaj",to:"hyd",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"blue bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"blue bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"blue bus",from:"vizaj",to:"bang",arrivaltime:"3:30",depargittime:"9:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"blue bus",from:"hyd",to:"bang",arrivaltime:"10:30",depargittime:"4:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"blue bus",from:"hyd",to:"vizaj",arrivaltime:"5:30",depargittime:"9:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"blue bus",from:"vizaj",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"blue bus",from:"bang",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"blue bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"blue bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"blue bus",from:"hyd",to:"chennai",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"blue bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"blue bus",from:"vzaj",to:"hyd",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"blue bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"blue bus",from:"bang",to:"chennai",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"blue bus",from:"vizaj",to:"bang",arrivaltime:"3:30",depargittime:"9:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"blue bus",from:"hyd",to:"bang",arrivaltime:"10:30",depargittime:"4:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"blue bus",from:"hyd",to:"vizaj",arrivaltime:"5:30",depargittime:"9:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"blue bus",from:"vizaj",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"blue bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"blue bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"blue bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"blue bus",from:"hyd",to:"kurnool",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"blue bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"blue bus",from:"vizaj",to:"hyd",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"blue bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"blue bus",from:"bang",to:"hyd",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"blue bus",from:"hyb",to:"kurnool",arrivaltime:"3:30",depargittime:"9:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"blue bus",from:"bang",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"blue bus",from:"bang",to:"kurnool",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"pink bus",from:"bang",to:"kurnool",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"pink bus",from:"bang",to:"kurnool",arrivaltime:"3:30",depargittime:"9:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"pink bus",from:"hyd",to:"chennai",arrivaltime:"10:30",depargittime:"4:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"pink bus",from:"hyd",to:"vizaj",arrivaltime:"5:30",depargittime:"9:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"pink bus",from:"vizaj",to:"kurnool",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"pink bus",from:"kurnool",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46},
{busname:"pink bus",from:"hyb",to:"chennai",arrivaltime:"7:30",depargittime:"10:30",date:"30/10/22",fare:1700,noofsets:68},
{busname:"pink bus",from:"chennai",to:"bang",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"pink bus",from:"hyd",to:"vizaj",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"pink bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"pink bus",from:"bang",to:"chennai",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"pink bus",from:"bang",to:"chennai",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:46,},
{busname:"pink bus",from:"bang",to:"vizaj",arrivaltime:"8:30",depargittime:"4:30",date:"12/01/22",fare:1800,noofsets:69},
{busname:"pink bus",from:"bang",to:"vizaj",arrivaltime:"1:30",depargittime:"11:30",date:"29/11/22",fare:1400,noofsets:470},
{busname:"pink bus",from:"chennai",to:"vizaj",arrivaltime:"5:30",depargittime:"8:30",date:"22/10/22",fare:1500,noofsets:40},
{busname:"pink bus",from:"bang",to:"vizaj",arrivaltime:"9:30",depargittime:"11:30",date:"20/06/22",fare:1600,noofsets:58},
{busname:"pink bus",from:"bang",to:"vizaj",arrivaltime:"10:30",depargittime:"2:30",date:"10/09/22",fare:1800,noofsets:58},]

var abc = ()=> {
 pasingers=0
  var pasingers1=document.getElementById("from1").value;
  var pasingers2=document.getElementById("to1").value;
  var date1=document.getElementById("doj").value;
  var date=date1.split("-").reverse().join("-")
  console.log(date);
 
//    console.log(pasingers1 +"::"+pasingers2);
//    console.log(travelar);
//    console.log(travelar[0].from + travelar[0].to );
  var pasingers3="";
  for(a=0; a<travelar.length; a++){
   //    console.log(travelar[a].to);
  if(pasingers1==(travelar[a].from) && pasingers2==(travelar[a].to)){

      pasingers=pasingers+1;
// var busObject = {from:travelar[a].from,to:travelar[a].to}

pasingers3=pasingers3+ 
      `<div>
         
       <fieldset class="animated fadeIn">
       <div id="results">
           <!-- <h6>3 buses found</h6> -->
           <div class="row row1 ">
               <div class="col-md-12">
                   <div class="card">
                       <div class="card-body">
                           <div class="row  row1 ">
                               <div class="col-md-3 bus-image">
                                   <img src="images/p2.png" alt="bus" height="200" width="200">
                               </div>
                               <div class="col-md-8 bus-details">
                                   <h5 class="card-title bus-name"> ${travelar[a].busname}(<span class="bus-type fs-13">Majaoni travel Bus</span>)</h5>
                                   
                               

                                   <div class="row row1 card-text m-b-10 bus-description">
                                       <div class="col-sm-6 fs-14">

                                           <span id="t1">Date</span>: <span class="p-r-5 fr">${date}</span>
                                       </div>

                                       
                                       <div class="col-sm-6 fs-14">
                                           <span id="t1">At</span>: <span class="p-r-5 fr">${travelar[a].arrivaltime}</span>- <span class="DT">DT:</span>${travelar[a].depargittime} </span>
                                       </div>

                                       <div class="col-sm-6 fs-14">
                                         <span id="t1">Route</span>: <span class="p-r-5 fr"><span class="from">${travelar[a].from}</span> - <span class="to"></span>${travelar[a].to} </span>
                                       </div>

                                       <div class="col-sm-6 fs-14">
                                           <span id="t1">Availability</span>:  <span class="p-r-5 fr"><span class="seats-left">${travelar[a].noofsets}</span> 
                                       </div>
                                       <div class="col-sm-6 fs-14">
                                           <span id="t1"> Fare</span>:  <span class="p-r-5 fr">${travelar[a].fare} /-</span>
                                       </div>
                                       <div class="p-t-13"> 
                                          <button type="button" class="btn btn-primary" onclick="busWork('${travelar[a].from}','${travelar[a].to}','${travelar[a].fare}','${travelar[a].busname}','${travelar[a].arrivaltime}','${travelar[a].depargittime}','${date}')">
                                       Launch demo modal
                                     </button>
                                        
                                   </div>
                                   </div>
                                   
                                   
                               </div>
                           </div>
                       </div>
                   </div>

       </div>`

      

  }
}
document.getElementById("demo").innerHTML=pasingers3;


} 

var xyz=(e)=>{

console.log("navya");
console.log((e.target.name).toString());
var bus = e.target.name;
console.log(bus.from);

 
}
var xy=(bus)=>{

console.log("navya....");
console.log(bus)
console.log(bus.from)

}
// var TotalFare={price:0};


const useState = (defaultValue) => {
    let value = defaultValue;
    let getValue = () => {return value}
    // const getValue =value;
    let setValue = (newValue )=> {value = newValue; return value;}
    return [getValue, setValue];
  }
//   function useState(defaultValue) {
//     let value = defaultValue
  
//     function getValue() {
//       return value
//     }
  
//     function setValue(newValue) {
//       value = newValue
//     }
  
//     return [getValue, setValue];
//   }
  //var rs=add(30,40)

  var [TotalFare, setTotalFare] = useState(0);
  var [paraflag,setparaflag]=useState(true)
  var [ticketflag,setticketflag]=useState(false)
// let tt = useState(0);
// var a  =tt[0]
  console.log(TotalFare());
var Totalamount=(v)=>{
var u= document.getElementById("Nop").value;
// var tf = new Two();
//  tf.setTotalFare(u*v);
setTotalFare(v*u);
console.log("hiiiiiii",TotalFare());
// var x = document.getElementById("gt");
// x.addEventListener("click", Ge);
// x.addEventListener("click", someOtherFunction);

document.getElementById("tlmt").innerHTML=TotalFare();
}
 var closedetails=()=>{
    setparaflag(false);
    document.getElementById("model").style.display="none";
 }

 var closeticket=()=>{
    setticketflag(false);
    document.getElementById("ticket").style.display="none";
 }
var busWork = (a,b,c,d,e,f,dj) =>{
setparaflag(true)
document.getElementById("model").style.display="block";
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(dj);
// var z=(20<40)?x:y

var para=(paraflag())?`<div> 
    <div class="card navya">
         <div class="card-body">
              <div class="row rowm"> <button class="btn btn-danger" onclick="closedetails()">X</button></div>

              <div class="row row2">
                  <div class="col col1">
                   <h3 class="card-title bus-name"> ${d}(<span class="bus-type fs-13"> travel Bus</span>)</h3>
                  </div>
                   </div>
              <div class="row row2">
                    <div class="col-6 col1">
                    <span id="t1">Route</span>: <span class="p-r-5 fr"><span class="from">${a}</span> - <span class="to"></span>${b} </span>
                    </div>
                    <div class="col-6 col1">
                    <span id="t1"> Fare</span>:  <span class="p-r-5 fr">${c} /-</span>
                    </div>
               </div>
               <div class="row row2">
                    <div class="col-6 col1">
                    <span id="t1">no of pasingers</span><input type="number"id="Nop"value="0" onchange="Totalamount(${c})"></input>
                    </div>
                    <div class="col-6 col1">
                    <span id="t1">total amount</span>:<h2 id="tlmt">0</h2>
                    </div>
               </div>
               <div class="row row2">
               <div class="col-6 col1">
               <span id="t1">Name</span><input type="text"id="person"width="50px" ></input>
               </div>
               <div class="col-6 col1">
               <span id="t1"> AT</span>:  <span class="p-r-5 fr">${e} </span><span id="t1">Dt</span>: <span class="p-r-5 fr">${f} </span>
               </div>
          </div>
          <div class="row row2">
               <div class="col-6 col1">

               <span id="t1"> Ac no</span><input type="number"id="cardNo"></input>
              
               </div>
               <div class="col-6 col1">
               <span id="t1">Date</span>: <span class="p-r-5 fr"><span class="from">${dj}</span> 
               </div>
          </div>

          <div class="row rowb"> 
          <button type="button" id="gt" class="btn btn-success" onclick="Genretticket('${a}','${b}','${d}','${dj}')">get ticket</button></div>
          </div>
    </div>

</div>`:"";




// var para=(paraflag())?`<div>

// <div class="card navya">
//                        <div class="card-body">
//                            <div class="row">
                            
//                                <div class="col-md-9 bus-details">
//                                    <h5 class="card-title bus-name"> ${d}(<span class="bus-type fs-13"> travel Bus</span>)</h5>
                                   
//                                    </div>

//                                    <div class="col-md-3 bus-details">
//                                    <button onclick="closedetails()">x</button>
//                                    </div>

//                                 <div class="row card-text m-b-10 bus-description">
//                                 <div class="col-sm-6 fs-14">
//                                          <span id="t1">Route</span>: <span class="p-r-5 fr"><span class="from">${a}</span> - <span class="to"></span>${b} </span>
//                                        </div>
                                       
//                                 <div class="col-sm-6 fs-14">
//                                        <span id="t1"> Fare</span>:  <span class="p-r-5 fr">${c} /-</span>
//                                    </div>

//                                     <span id="t1">no of pasingers</span><input type="number"id="Nop"value="0" onchange="Totalamount(${c})"></input>

//                                     <span id="t1">total amount</span>:<h2 id="tlmt">0</h2>
//                                </div>

//                                <div class="row card-text m-b-10 bus-description">
//                                    <div class="col-sm-6 fs-14">
//                                    <span id="t1">Name</span><input type="text"id="person" ></input>
//                                    </div>
                                  
//                                    <div class="col-sm-6 fs-14">
//                                    <span id="t1">Acount number</span><input type="number"id="cardNo"></input>
//                                </div>
//                                  </div>

//                                <div class="row card-text m-b-10 bus-description">
//                                 <div class="col-sm-6 fs-14">
//                                          <span id="t1">Date</span>: <span class="p-r-5 fr"><span class="from">${dj}</span> 
//                                        </div>
//                                 <div class="col-sm-6 fs-14">
//                                        <span id="t1"> Fare</span>:  <span class="p-r-5 fr">${e} </span><span id="t1">Dt</span>: <span class="p-r-5 fr">${f} </span>
//                                        </div>
//                                    </div>
//                                    <button type="button" id="gt" class="btn btn-success" onclick="Genretticket('${a}','${b}','${d}','${dj}')">get ticket</button>
//                                             </div>


//                                             </div>
                               
                               
                               
                            
                                     
                              
                          
//                        </div>
//                    </div>
// </div>`:"";





//document.getElementById("model").style.backgroundColor="yellow"
document.getElementById("model").innerHTML=para
// write code below for creating modal with the above data
}
var display=""
var Genretticket=(F,T,bN,dj)=>{
console.log("ticket call", TotalFare());
var a=  document.getElementById("person").value;
var b= document.getElementById("cardNo").value;

console.log(dj);
setparaflag(false);

document.getElementById("model").style.display="none"
console.log(paraflag())
// console.log(a);console.log(b);

//    display= `<div class="container ">
//         <div class="card ticketcard">
//             <div class="card-title"> BUS Ticket </div>
//             <div class="card-body">
//                  <div class="row">
//                     <div class="col-md-6">Name:${a}</div>
//                     <div class="col-md-6">busname:${bN}</div>
   
//                  </div>
//                  <div class="row">
//                     <div class="col-md-6">From:${F}</div>
//                     <div class="col-md-6">To:${T}</div>
//                     </div>
//                     <div class="row">
//                   <div class="col-md-6">Amount:${TA}</div>
//                   <div class="col-md-6"><button onclick="pdfTicket()">print ticket</button></div>
//                  </div>
//             </div>
//         </div>
//     </div>` ;

if(TotalFare()>=1){


display=`<div class="table">
<table> 
<tr><th>Name</th><td>${a}</td></tr>
<tr><th>Date</th><td>${dj}</td></tr>
<tr><th>BusName</th><td>${bN}</td></tr>
<tr><th>From</th><td>${F}</td></tr>
<tr><th>To</th><td>${T}</td></tr>
<tr><th>Amount</th> <td>${TotalFare()}</td></tr>

</table>
<div><button class="btn btn-success" onclick="pdfTicket()">print ticket</button></div>
<div><button class="btn btn-danger" onclick="closeticket()">x</button></div>
</div>`

document.getElementById("ticket").innerHTML=display;
}
else{
    //alert("enter tickets min ")
}

}
var pdfTicket=()=>{
var specialElementHandlers = {
"#editor": function (element, rendrer) {
return true;
}};
var doc= new jsPDF("p","pt","a4");
doc.fromHTML(display,20,20,{"width":170,
"elementHandlers": specialElementHandlers});
doc.save("card.pdf");

}