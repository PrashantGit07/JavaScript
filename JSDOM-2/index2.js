let and = document.querySelector('h1');


function event()
{
    console.log('clicked')
}

and.addEventListener('click' , event);
and.removeEventListener('click' , event);