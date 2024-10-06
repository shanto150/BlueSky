class AppStorage{

 storeToken(token){
 	localStorage.setItem('token',token);
 }

 storeUser(user){
 	localStorage.setItem('user',user);
 }

 storeUseremail(useremail){
    localStorage.setItem('useremail',useremail);
}

 store(token,user,useremail){
 	this.storeToken(token)
 	this.storeUser(user)
 	this.storeUseremail(useremail)
  }

  clear(){
  	localStorage.removeItem('token')
  	localStorage.removeItem('user')
  	localStorage.removeItem('useremail')
  }

  getToken(){
  	localStorage.getItem(token);
  }

   getUser(){
  	localStorage.getItem(user);
  }

  getUseremail(){
  	localStorage.getItem(useremail);
  }



}

export default AppStorage = new AppStorage();
