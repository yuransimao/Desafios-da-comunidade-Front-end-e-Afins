const formlemts = document.querySelector('.form-elemts ')
const form= document.querySelector('.form')





formlemts.children[0].addEventListener('change', (e)=>{
     
   checking(e.target.value)
   
})



formlemts.children[1].addEventListener('click', function(){
   checking()
})


function checking(valueinput){
   if(valueinput == ''){

      console.log(valueinput)
      RemoveBorde()
   }
   else if(valueinput.indexOf("@")==-1 || valueinput.indexOf(".") ==-1 ||(valueinput.indexOf("@")-valueinput.indexOf("."))==1){
      Erro()
      
   }else{
      Sucess()
   }
}

function Erro() {
   formlemts.classList.remove('active-form-elemts')
   formlemts.classList.add('danger-form-elemts')
   form.children[1].style.display='block'
   form.children[2].style.display='none'   
}

function Sucess(){
formlemts.classList.remove('danger-form-elemts')
   formlemts.classList.add('active-form-elemts')
   form.children[1].style.display='none'
   form.children[2].style.display='block'
}

function RemoveBorde(){
   formlemts.classList.remove('active-form-elemts')
         formlemts.classList.remove('danger-form-elemts')
         form.children[1].style.display='none'
         form.children[2].style.display='none'  
}

