/*clear error functions */
function clearError()
{
    error=document.getElementsByClassName('formerror');
    for(let item of error)
    {
        item.innerHTML="";
    }
}
/*set error functions */
function seterror(id ,error)
{
      element=document.getElementById(id);
      element.getElementsByClassName('formerror')[0].innerHTML=error;

}
/* validate functions */
function formvalidations()
{
    let x=true;
    clearError();
   
   
    
    /* email validations */
    let email=document.forms['myform']["femail"].value;
    if(email.length>50)
    {
        seterror("email", "*Email Length is too long");
        x=false;
    }
    
    /*password validations */
    let password=document.forms['myform']["fpass"].value;
    if(password.length<6)
    {
        seterror("pass" , "*password should be atleast 6 character long!");
        x=false;
    }
    return x;
}