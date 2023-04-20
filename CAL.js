let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach(button => {
  button.addEventListener("click", (cal)=>{
    try{
        if (cal.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector("input").value = string;
          }
          else if(cal.target.innerHTML == 'AC'){
              string = '';
              document.querySelector('input').value = string;
          }
          else{
              string = string + cal.target.innerHTML;
              document.querySelector('input').value = string;
          }
    }
    catch(error){
        alert(`Invalid Input Error`);
    }
    
  });
});


