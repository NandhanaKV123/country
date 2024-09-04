

class Landing{
    // property
    DATABASE={
        "ashwin":{username:"ashwin", password:"ashwin123"},
        "anju":{username:"anju", password:"anju123"},
        "akhila":{username:"akhila", password:"akhila123"},
        "mk":{username:"mk", password:"mk123"}
    }

    // create a method to store data in local storage

    save(){
          if(this.DATABASE){
            localStorage.setItem("database",JSON.stringify(this.DATABASE))
          }
    }
    getData(){
      this.DATABASE=JSON.parse(localStorage.getItem("database"))
    }
    register(){
      console.log('inside register function');
      console.log(reguser.value);
      console.log(regpswd.value);
      if(reguser.value=="" || regpswd.value==""){
        alert('Please fill the form completely')
      }
      else
        {
         if(reguser.value in this.DATABASE){
          alert('User already exist')
         }
         else{
          this.DATABASE[reguser.value]={username:reguser.value,password:regpswd.value}

         
        console.log(this.DATABASE);
        alert('Registration successfull')
        this.save()
        //js navigation
        window.location="login.html"
         }
        
      }
      
      
      
    }
}


login(){
  console.log('inside login function');
  console.log(loginuser.value);
  console.log(loginpswd.value);
  if(loginuser.value==""||loginpswd.value==""){
      alert("please fill the form completely")
  }
  else{
      this.getData()
      if(loginuser.value in this.DATABASE){
          if(this.DATABASE[loginuser.value].password == loginpswd.value){
              localStorage.setItem ("user",loginuser.value)
              alert("login successfully")
              window.location="home.html"
          }
          else{
              alert("invalid username or password")
          }
      }
      else{
          alert("user doesnot exist")
      }
  }
  
  
  
}














const obj=new Landing()
obj.save()

obj.getData()