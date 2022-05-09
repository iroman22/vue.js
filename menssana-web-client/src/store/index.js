import { createStore } from 'vuex';
// import { getPsychos, signIn, getUser } from "../services";
import storePlugins from "@/plugins/storePlugins";

const store = createStore({
    plugins: [storePlugins],
    state: {
        psychos: [],
        signIn: {
            isLoading: false,
            isError: false,
            errorMessage: '',
            data: [],
        },
        userDetails: {
            isSignIn: false,
            isLoading: false,
            isError: false,
            errorMessage: '',
            userData: [],
        },
    },
    mutations: {

        // Users
        setPsychos( state, payload ){
            state.psychos = payload
        },

        // Auth
        beginSignIn( state ){
            state.signIn.isLoading = true
        },
        successSignIn( state, payload ){
            state.userDetails.isSignIn = true
            state.signIn.isLoading = false
            state.signIn.isError = false
            state.signIn.data = payload
            localStorage.setItem("token", JSON.stringify(payload));
        },
        failSignIn( state, payload ){
            state.userDetails.isSignIn = false
            state.signIn.isLoading = false
            state.signIn.isError = true
            state.signIn.errorMessage = payload
        },

        beginRequestUser( state ){
            state.userDetails.isLoading = true
        },
        
        successRequestUser( state, payload ){
            state.userDetails.isSignIn = true
            state.userDetails.isLoading = false
            state.userDetails.isError = false
            state.userDetails.userData = payload
        },
        
        failRequestUser( state, payload ){
            state.userDetails.isSignIn = false
            state.userDetails.isLoading = false
            state.userDetails.isError = true
            state.userDetails.errorMessage = payload
        },

        beginRegister( state ){
            state.register.isLoading = true
        },
        
        successRegister( state, payload ){
            state.userDetails.isSignIn = true
            state.register.isLoading = false
            state.register.isError = false
            state.register.data = payload
        },
        
        failRegister( state, payload ){
            state.userDetails.isSignIn = false
            state.register.isLoading = false
            state.register.isError = true
            state.register.errorMessage = payload
        },

        successLogOut( state ){
            state.userDetails.isSignIn = false
            state.userDetails.userData = []
            localStorage.removeItem('token')
        },
        
        failLogOut( state, payload ){
            state.userDetails.isSignIn = true
            state.userDetails.isError = true
            state.userDetails.errorMessage = payload
        },
        
        beginChangePassword( state ){
            state.changePassword.isLoading = true
        },
        
        successChangePassword( state ){
            state.changePassword.isLoading = false
            state.changePassword.isError = false
            state.changePassword.isSuccess = true
        },
        
        failChangePassword( state, payload ){
            state.changePassword.isLoading = false
            state.changePassword.isError = true
            state.changePassword.isSuccess = false
            state.changePassword.errorMessage = payload
        }

    },
    actions: {

        // Auth

        async signInAction({ commit }, data){
            if (data.email === '' || data.password === '') return commit("failSignIn", "Email and password are required")
            commit("beginSignIn")
            try {
                const response = await this.$api.service.signIn(data)
                if (response)commit("successSignIn", response)
                else commit("failSignIn", 'Could not complete login!!')
   
            } catch (error) {
                commit("failSignIn", error)
            }
        },

        async getUserAction({ commit }){
            commit("beginRequestUser")
            try {
                const response = await this.$api.service.getMe()
                if (response) commit("successRequestUser", response)
                else commit("failRequestUser", 'Could not complete request!!')
            } catch (error) {
                commit("failRequestUser", error)
            }
        },

        async logOutAction({ commit }){
            try {
                const response = await this.$api.service.logOut();
                commit("successLogOut", response);
            } catch (error) {
                commit("failLogOut", error);
            }
        },

        // Users

        async fetchPsc({ commit }){
            try{
                const res = await this.$api.service.getPsychos()
                commit( 'setPsychos', res )
            } catch( error ){
                return error
            }
        }
    }
})

export default store