//fetch

import {TOKEN_URL,LEAD_CREATION_API_URL,LeadDetails,LeadAPIDetails,TokenAPIDetails} from './module1.js';
async function callAPI(Token_url, Token_request,LeadApiURL,LeadData) {
  const tokenResponse = await fetch(Token_url, Token_request);
  const tokenResponse_value = await tokenResponse.json();
  console.log('TokenResult' , tokenResponse_value.access_token);

  let LeadRequestObject =new LeadAPIDetails(tokenResponse_value.access_token,LeadData);
  console.log('LeadData :',LeadRequestObject);
  console.log('LeadApiURL ',LeadApiURL);
  console.log('LeadData.RequestData ',LeadRequestObject.RequestData);

  const lead_response = await fetch(LeadApiURL, LeadRequestObject.RequestData);
  const lead_creation_value = await lead_response.json();
  console.log('lead_creation_value' , lead_creation_value);
} 

 
document.querySelector('#formElem').addEventListener('submit',(event)=>{
  event.preventDefault();
  let LeadData = new LeadDetails(
    document.querySelector('input[name="name"]').value,
    document.querySelector('input[name="lastname"]').value,
    document.querySelector('input[name="companyname"]').value
  )

  const TOKEN_REQUEST = new TokenAPIDetails();
  callAPI(TOKEN_URL, TOKEN_REQUEST.tokenRequest,LEAD_CREATION_API_URL,LeadData)
  console.log(LeadData);
});
 