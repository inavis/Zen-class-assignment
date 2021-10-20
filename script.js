//XML HTTP 
var xhr = new XMLHttpRequest();

xhr.open("GET","https://jsonplaceholder.typicode.com/users");
xhr.send();

xhr.onload=function(){
    if(xhr.status >=200 && xhr.status<300){
        var data = JSON.parse(this.response);
        //console.log(data)
        for(var i=0;i<data.length;i++){
            console.log(`
            ID: ${data[i].id}
            Name: ${data[i].name}
            Email id: ${data[i].email}
            City: ${data[i].address.city}
            Phone number : ${data[i].phone}
            
            `);
        }
    }else{
        console.log("Data not available");
    }
}
//
