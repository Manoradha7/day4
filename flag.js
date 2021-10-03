var request = new XMLHttpRequest();

request.open('GET', 'https://restcountries.com/v3/all');
request.responseType="json"

request.onload = function(){
    const data=request.response;
     console.log(data)
    for(let i in data){
        console.log(data[i].flags[0])
    }
}
request.send();
