function enterbutton()
{
    const request = new XMLHttpRequest();
    
    request.open("GET", "http://127.0.0.1:3000", true);

    request.onload = function(){

        let data = this.response;

        document.querySelector("#clientresponse");

    }

    request.send();
};

