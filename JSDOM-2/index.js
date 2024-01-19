




// // document.addEventListener('click' , function(){
// //     console.log('i clicked on documnet');
// // });
//   //or

// function evernfun(){
//     console.log('i have clicked on documnet');
// }
// document.addEventListener('click' , evernfun);
 

// //to remove even funtion:--- same event target , function ,type
// document.removeEventListener('click',evernfun);
// //to check if appplied or not   ,  go on inspect-> even listeners


// //apply event listener in capturing phase :- fromt starting
// // document.addEventListener('click' , evernfun , true);
// //it turns on the capturing phase



//to know information or event specific data
// let content  = document.querySelector('#wrapper');
// content.addEventListener('click' , function(event){
//     console.log(event)
// });



//prevernt default action

// let links = document.querySelector('a')

// links.addEventListener('click' , function(event){
//     event.preventDefault();
//     console.log('nahi khulega');
// });
// //now the link of facebook will not open




//avoid too many events

// let mydiv = document.createElement('div');

// // function paraSattus(event){
// //     console.log('clicked here');
// // }
// //rather than applying event , listenr on every paragraph ,  we can apply directly on div and avoid too many events
// mydiv.addEventListener('click' , paraSattus)
// //but we lost individuality of paragraph
// //now phases will help
// //we will use target property
// //now we will be able to access individual paragraph even after applying even listener on div
// function paraSattus(event){
//    console.log('Para  ' + event.target.textContent);
// }

// for(let i=0;i<=100;i++)
// {
//    let newele = document.createElement('p');
//    newele.textContent = ' number '+i;

// //    newele.addEventListener('click' , function(event){
// //     console.log('i have clicked here');
// //    });
//    mydiv.appendChild(newele);
// }
// document.body.appendChild(mydiv)

let element  = document.querySelector('#wrapper')
element.addEventListener('click' , function(event){
    //click separately on para and span
    if(event.target.nodeName ==='SPAN'){
    console.log('clicked on span'+ event.target.textConent);
      //now if we click on span  , only then functioning will happen
    }
    // console.log('clicked on span'+ event.target.textConent);
})