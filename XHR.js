var XHR = new XMLHttpRequest();

XHR.open('GET', 'https://restcountries.com/v3/all');
XHR.responseType="json"

XHR.onload = function(){
    const data=XHR.response;
    // console.log(data)
    for(let i in data){
        console.log(data[i].name.common)
        console.log(data[i].region)
        console.log(data[i].subregion)
          console.log(data[i].population)
    }
}
XHR.send();
