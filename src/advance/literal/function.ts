type HttpMethods="GET" | "POST" | "PUT" | "DELETE";
 
function makeRequest(method:HttpMethods):void{
    console.log("HttpMethod",method);

}
makeRequest("GET");
makeRequest("POST");
makeRequest("PUT");
makeRequest("DELETE");