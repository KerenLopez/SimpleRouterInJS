let routes = {};
let templates = {};
let app_div = document.getElementById('app');

function home(){
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'About';

    div.innerHTML = '1>Home1>';
    div.appendChild(link);

    app_div.appendChild(div);
};

