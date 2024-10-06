import Token from './Token'
import AppStorage from './AppStorage'


class User{

 responseAfterLogin(res){
 	const access_token = res.data.access_token
 	const username = res.data.name
 	const useremail = res.data.email
    //  console.log(atob(access_token));
    //  console.log(access_token.split('.')[1]);
     console.log(atob(access_token.split('.')[1]));
 	if (Token.isValid(access_token)) {
 		AppStorage.store(access_token,username,useremail)
 	}
 }

  hasToken(){
  	const storeToken = localStorage.getItem('token');
  	if (storeToken) {
  		return Token.isValid(storeToken)? true : false
  	}
  	false
  }

  loggedIn(){
  	return this.hasToken()
  }

  name(){
  	if (this.loggedIn()) {
  		return localStorage.getItem('user');
  	}else{
        return 'no User';
    }
  }

	id(){
	  	if (this.loggedIn()) {
	  		const payload = Token.payload(localStorage.getItem('token'));
	  		return payload.sub
	  	}
	  	return false
	  }



}

export default User = new User()

