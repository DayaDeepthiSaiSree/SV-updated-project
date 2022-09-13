function validate(){

               var user = document.getElementById("username").value;

               var pwd = document.getElementById("pwd").value;

               var email = document.getElementById("email").value;

               var phone = document.getElementById("phone").value;

               var reg = /^[A-Za-z]{6,}$/;

               var reg1 = /^[a-zA-Z0-9]{6,}$/;

               var reg2 = /^[a-zA-Z0-9._!#$%&'+/=?^{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)$/;

               var reg3 = /^[789]{1}[0-9]{9}$/;

               if(user.match(reg)){

                   document.getElementById('usererror').innerHTML=" ";

               }

               else{

                   document.getElementById('usererror').innerHTML="Invalid UserName";

                   return false;

               }

               if(pwd.match(reg1)){

                   document.getElementById('pwderror').innerHTML=" ";

               }

               else{

               document.getElementById('pwderror').innerHTML="Invalid Password";

                   return false;

               }

               if(email.match(reg2)){

                   document.getElementById('emailerror').innerHTML=" ";

               }

               else{

                document.getElementById('emailerror').innerHTML="Invalid email";

                   return false;

               }

               if(phone.match(reg3)){

                   document.getElementById('phoneerror').innerHTML=" ";

               }

               else{

                   document.getElementById('phoneerror').innerHTML="Invalid Mobile Number";

                   return false;

               }

           }
