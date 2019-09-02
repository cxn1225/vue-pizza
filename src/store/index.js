import Vue from 'vue'
import Vuex from 'vuex'
import User from "./modules/user"
import pizza from "./modules/pizza"
import isLogin from "./modules/isLogin"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        User,
        isLogin,
        pizza
    }
})
