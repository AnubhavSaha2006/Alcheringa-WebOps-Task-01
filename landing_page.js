let edit =[];
async function load_table() {
    let response = await fetch('https://dummyjson.com/users');
    console.log("hi");
    let data = await response.json();
    let table = document.getElementById('table');
    data.users.forEach(user => {
       
        let tr = document.createElement('tr');
        tr.id = user.id;
       
        let user_id= user.id;
        edit[user_id]=0;
        let td = document.createElement('td');
        let name = user.firstName + ' ' + user.lastName;
        td.innerHTML = `<input type="text" value="${name}" className="inputs" disabled>`;
        tr.appendChild(td);
        td = document.createElement('td');
        let username = user.username;
        td.innerHTML = `<input type="text" value="${username}" className="inputs" disabled>`;

        tr.appendChild(td);
        td = document.createElement('td');
        let email= user.email;
        td.innerHTML = `<input type="text" value="${email}" className="inputs" disabled>`;
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = `<span id="modify" style="display: flex; align-items: center; justify-content:space-evenly; color:white; " >
    <span onclick="edit_user('${user_id}')" id="edit_btn" style="background-color: blue; display: flex; align-items: center; padding:3px" >
        <img src="doc_svg.svg" alt="">
        <span >Edit</span>
    </span>
    &nbsp;
    <span onclick="delete_user('${user_id}')"  id="delete_btn" style="background-color: #D97706;display: flex; align-items: center; padding:3px " >
        <img src="doc_svg.svg" alt="">
        <span>Delete</span>
    </span> `;
        tr.appendChild(td);
        table.appendChild(tr);
    });
}
load_table();

function edit_user(id) {
    tr=document.getElementById(id);
    
    if(edit[id]==0){
        edit[id]=1;
    for(i=0;i<tr.children.length-1;i++){
        tr.children[i].children[0].disabled=false;
    }
    tr.children[i].children[0].children[0].children[1].innerHTML='Save';
}
    else{
        edit[id]=0;
    for(i=0;i<tr.children.length-1;i++){
        tr.children[i].children[0].disabled=true;
    }
    tr.children[i].children[0].children[0].children[1].innerHTML='Edit';
    }
}
function delete_user(id) {
    tr=document.getElementById(id);
    tr.style.display='none';
    console.log('delete user');
}


//dropdown
function dropdown(id) {
    let id_str=id.toString();
    let str="dropdown-content-"+id_str;
    let str2="dropdown_svg-"+id_str;
    let dropdown = document.getElementById(str);
    let img=document.getElementById(str2);
    if (dropdown.style.maxHeight === '500px') {
       // dropdown.style.display = 'none';
        dropdown.style.maxHeight = '0px';
       // console.log(str2)
        img.style.transform="rotate(0deg)";
    }
    else{
       // dropdown.style.display = 'block';
        dropdown.style.maxHeight = '500px';
        img.style.transform="rotate(180deg)";

    }
}
let c=0;
//hamburger
function hamburger(){
    console.log("hamburger");
    let img = document.getElementById("hamburger-svg");
    let cont1=document.getElementsByClassName("cont-1")[0];
    let cont2=document.getElementsByClassName("cont-2")[0];
    let body=document.getElementsByClassName("body")[0];
    if(c==0){
        c=1;
        img.style.transform="rotate(0deg)";
       // console.log(body.style.width);
        // if(window.innerWidth>900){
            if(body.offsetWidth>900){
            cont1.style.width="15%";
            cont2.style.width="85%";
        }
        else{
            cont1.style.width="50vw";
        }
    }
    else{
        c=0;
        cont1.style.width="0%";
        img.style.transform="rotate(90deg)";
        // if(window.innerWidth>900){
            if(body.offsetWidth>900){
            cont2.style.width="100%";
        }
    }
}
//expand table
let e=0;
function expand_table(){
    if(e==0)
    {
        let btn=document.getElementById("expand");
        btn.innerHTML="Collapse Table";
        let body2=document.getElementsByClassName("body-2")[0];
        body2.style.width="1200px";
        let table=document.getElementById("table");
         table.style.width="1100px";
    e=1;
    }
    else{
        let btn=document.getElementById("expand");
        btn.innerHTML="Expand Table";
        let body2=document.getElementsByClassName("body-2")[0];
        body2.style.width="100%";
        let table=document.getElementById("table");
        table.style.width="100%";
        e=0;
    }
}
let body=document.getElementsByClassName("body")[0];

//if window is resized and e=1
window.onresize=function(){
    if(body.offsetWidth>900 && e===1){
        normal_table();
    }
}
function normal_table(){
        
    let btn=document.getElementById("expand");
    btn.innerHTML="Expand Table";
        let body2=document.getElementsByClassName("body-2")[0];
        body2.style.width="100%";
        let table=document.getElementById("table");
        table.style.width="100%";
        e=0;
    
}
