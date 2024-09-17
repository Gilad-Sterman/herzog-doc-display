import { userService } from "../services/user.service";
import { store } from "./store";
import { SET_USER } from "./user.reducer";

export function login(username) {
    const user = userService.login(username)
    store.dispatch({
        type: SET_USER,
        user
    })
    return user
}

export function logout() {
    userService.logout()
    store.dispatch({
        type: SET_USER,
        user: null
    })
}