// crypto



// crypto
// axios.get('https://api4.binance.com/api/v3/ticker/24hr')
// .then(res=>{
//     console.log(res.data[3].symbol);
// }).catch(err=>{
//     console.log('error',err);
// })

// //newyork times
// axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=0G34ind1HCq0vtsDHG8mw6gzoJ9KbApw')
// .then(res=>{
//     console.log(res.data.results[0].abstract);
// }).catch(err=>{
//     console.log('error',err);
// })

axios.get('https://restcountries.com/v3.1/lang/english')
.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log('error',err);
})

axios.get( 'https://api.tvmaze.com/search/shows?q=bad boys')
.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log('error',err);
})

const button1=document.querySelector('#btn1');
function clickbtn(){
button1.addEventListener('click',()=>{
    const newtag=document.createElement("h1");
    const newcontent=document.createTextNode('Crypto');
   document.body.appendChild(newcontent);
   axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(res=>{
   const result=res.data.bpi.USD.rate;
   const newtag1=document.createElement("p");
   const newcontent1=document.createTextNode("USD RATE");
   const newcontent2=document.createTextNode(result);
   const newcontent3=document.createTextNode('   ');
   const newcontent4=document.createTextNode('   ');
   document.body.appendChild(newcontent3);
  document.body.appendChild(newcontent1);
  document.body.appendChild(newcontent4);
  document.body.appendChild(newcontent2);
   return result;
    console.log(res.data.bpi.USD.rate);
}).catch(err=>{
    console.log('error',err);
})
  
})
}

clickbtn();

const button2=document.querySelector('#btn2');
function clickbtn1(){
button2.addEventListener('click',()=>{
    const newtag=document.createElement("h1");
    const newcontent=document.createTextNode('news');
   document.body.appendChild(newcontent);
   axios.get('https://api.nytimes.com/svc/topstories/v2/science.json?api-key=0G34ind1HCq0vtsDHG8mw6gzoJ9KbApw')
.then(res=>{
   const result=res.data.results[0].abstract;
   const newtag1=document.createElement("p");
   const newcontent1=document.createTextNode("content:");
   const newcontent2=document.createTextNode(result);
   const newcontent3=document.createTextNode('   ');
   const newcontent4=document.createTextNode('   ');
   document.body.appendChild(newcontent3);
  document.body.appendChild(newcontent1);
  document.body.appendChild(newcontent4);
  document.body.appendChild(newcontent2);
  console.log(res.data.abstract);
   return result;
    
}).catch(err=>{
    console.log('error',err);
})
  
})
}
clickbtn1();

const button3=document.querySelector('#btn3');
function clickbtn3(){
button3.addEventListener('click',()=>{
    const newtag=document.createElement("h1");
    const newcontent=document.createTextNode('capital');
   document.body.appendChild(newcontent);
   axios.get('https://restcountries.com/v3.1/name/deutschland')
.then(res=>{
   const result=res.data[0].capital;
   const newtag1=document.createElement("p");
   const newcontent1=document.createTextNode("city name:");
   const newcontent2=document.createTextNode(result);
   const newcontent3=document.createTextNode('   ');
   const newcontent4=document.createTextNode('   ');
   document.body.appendChild(newcontent3);
  document.body.appendChild(newcontent1);
  document.body.appendChild(newcontent4);
  document.body.appendChild(newcontent2);
  console.log(res.data.abstract);
   return result;
    
}).catch(err=>{
    console.log('error',err);
})
  
})
}

clickbtn3();


const button4=document.querySelector('#btn4');
function clickbtn4(){
button4.addEventListener('click',()=>{
    const newtag=document.createElement("h1");
    const newcontent=document.createTextNode('TV Shows');
   document.body.appendChild(newcontent);
   axios.get(' https://api.tvmaze.com/search/shows?q=bad boys')
.then(res=>{
   const result=res.data[0].show.name;
   const newtag1=document.createElement("p");
   const newcontent1=document.createTextNode("show name:");
   const newcontent2=document.createTextNode(result);
   const newcontent3=document.createTextNode('   ');
   const newcontent4=document.createTextNode('   ');
   document.body.appendChild(newcontent3);
  document.body.appendChild(newcontent1);
  document.body.appendChild(newcontent4);
  document.body.appendChild(newcontent2);
  console.log(res.data.abstract);
   return result;
    
}).catch(err=>{
    console.log('error',err);
})
  
})
}

clickbtn4();
