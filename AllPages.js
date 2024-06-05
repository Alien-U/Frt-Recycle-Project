let Ist=document.getElementById("firstinput");
let NotSameMsg=document.getElementById("NotSameMsg");
let NotSameMsgI=document.getElementById("NotSameMsgI");
let IInd=document.getElementById("lastinput");
let form=document.getElementById("formId"); 
let popup = document.getElementById("popup");
function openPopup()
    { 
        if(Ist.value!==IInd.value)
            {
                NotSameMsgI.classList.add("ShowNotSameMsgI");
                NotSameMsg.classList.add("ShowNotSameMsg");
            } 
            else
            {
                popup.classList.add("openPopup");
            }
    }
    
    function submitForm(event){
       //Preventing page refresh
       event.preventDefault();
    }
    
    //Calling a function during form submission.
    form.addEventListener('submit', submitForm); 
    
let read=document.getElementById("inscont");
function seen()
{
    read.classList.add("closeinscont");
} 

