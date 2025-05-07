let body = document.querySelector('body');
let mode = document.querySelector('#mode');
let premode = 'light';

mode.addEventListener('click', () =>{
    if (premode === 'light') {
        premode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    } else {
        premode = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(premode);
})