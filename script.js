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

function about(){
    let div= document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'Home';

    div.innerHTML='1>About>1';
    div.appendChild(link);

    app_div.appendChild(div);
};

function route(path, template){
    if(typeof template==='function'){
        return routes[path]=template;
    }else if(typeof template==='string'){
        return routes[path]=templates[template];    
    }else{
        return;
    };
};