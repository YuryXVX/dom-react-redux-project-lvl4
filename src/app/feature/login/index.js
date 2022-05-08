import {LoginForm} from "./ui/LoginForm.js"
import {setUser} from "./model/store.js";
import * as LoginModel from "./model/store.js";
import {userSelector} from "./model/selectors.js";

export const User = {
  LoginForm,
  LoginModel,
  userSelector,
  actions: {
    setUser
  }
}

export default User.LoginModel.loginReducers;