
var Site_Name=document.getElementById('SiteName')
var Site_URL=document.getElementById('SiteURL')
var AddBtn=document.getElementById('addbtn')
var sitelist ;

if( localStorage.getItem('site')===null){
    sitelist=[] 
}else{
    sitelist=JSON.parse(localStorage.getItem('site'))
    display()
}

AddBtn.onclick=function(){
    if(sNamevalidation()==true){
        if(URLvalidation()==true){
        add()
        display()
        }
    else{
        alert(`Site Name or Url is not valid, Please follow the rules below :
         . Site name must contain at least 3 characters
         . Site URL must be a valid one`);

    }}
      else{
        alert(`Site Name or Url is not valid, Please follow the rules below :
        . Site name must contain at least 3 characters
        . Site URL must be a valid one`);
    }

}

function sNamevalidation(){
    var nameRegex = /^[a-z]{3,}$/;
    var SName =Site_Name.value;
    if (nameRegex.test(SName)){
return true
    }
    else{
return false
    
}

}
function URLvalidation(){
    var pattern = new RegExp('(https?:\\/\\/)?'+ 
'((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
'((\\d{1,3}\\.){3}\\d{1,3}))'+ 
'(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ 
'(\\?[;&a-z\\d%_.~+=-]*)?'+ 
'(\\#[-a-z\\d_]*)?$','i'); 
var sURL =Site_URL.value;
if(pattern.test(sURL)){
return true
}else{
return false 
}

}

function add(){
    var site={
        sName:Site_Name.value,
        sURL:Site_URL.value,
    }
    sitelist.push(site)
    localStorage.setItem('site',JSON.stringify(sitelist))
    display()
    clear()
    console.log(site)
console.log(sitelist)

}
function display(){
    trs=''
    for(var i=0;i<sitelist.length;i++){
        trs+=`      <tr>
        <td>${i+1}</td>
        <td>${sitelist[i].sName}</td>
        <td> <a class=" btn btn-danger " href="${sitelist[i].sURL}"  target="_blank"><i class="fa-solid fa-eye pe-2"></i> visit </a></td>
        <td> <button class=" btn btn-success " onclick="delet(${i})"><i class="fa-solid fa-trash-can"></i> delete </button></td>


    </tr>`
    }
    document.getElementById('tableBody').innerHTML=trs
}
function clear(){
    Site_Name.value=''
    Site_URL.value=''
}

function delet(index){
sitelist.splice(index,1)
localStorage.setItem('site',JSON.stringify(sitelist))
display()
}

