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



    
    /*auction validation */
    let asd=document.forms['myform']["au"].value;
    if(isNaN(ftname))
        {
            seterror("auction","*auction id must be only number .");
            x=false;
        }
    return x;
}