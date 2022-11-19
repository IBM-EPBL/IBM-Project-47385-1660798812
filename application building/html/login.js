function validate()
{
    var username=document.getElementById("username").Value;
    var password=document.getElementById("password").Value;
    if(username=="priya"&&password=="priya@123")
    {
        alert("login succesfully");
        return true;
    }
    else
    {
        document.getElementById("username").disabled=true;
        document.getElementById("password").disabled=true; 
        return false;
    }
    
}


{
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}