export let TOKEN_URL = 'https://login.salesforce.com/services/oauth2/token';
export let LEAD_CREATION_API_URL = 'https://stetig9-dev-ed.develop.my.salesforce.com/services/apexrest/api/CreateLead';


export class LeadDetails{
    constructor(firstname,lastname,companyname){
        this.name = firstname;
        this.Lastname = lastname;
        this.Company = companyname;
    }
    
}
export class LeadAPIDetails{
    constructor(authToken,body){
        this.authToken = authToken
        this.body = JSON.stringify(body)
    }
   
    get RequestData(){
        return {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+this.authToken
          },
          body:this.body
        
        }
      }



}

export class TokenAPIDetails {
    grant_type= "password";
    client_id= "3MVG9pRzvMkjMb6lD.vVwrSWnCCPREgBJY9OgLrQG1lPuP04GLOhhT7hOqEJ79p9J3P02enYy90L60ANNBdLS";
    client_secret= "4233F5AE3CDD515EFDAAF484895FA9DD7E3DBF922C5ECF3A872734C5C41A168F";
    username= "shubham.mishraa@crm.com";
    password= "Mishra@7758";
    get URLEncoding(){
      var formBody = [];
      for (var property in this) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(this[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      return formBody.join("&");
    }
    get tokenRequest(){
      return {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: this.URLEncoding
      
      }
    }
  }
   