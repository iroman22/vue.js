<template>
    <LoginLayout>
      <template #header>
          <HeaderComponent/>
      </template>

      <template #default>
        <section class="section">
         <div class="hero">
            <div class="hero-body">
               <div class="content my-10">
                  <div class="grid-lg u-gap-2 u-text-center">
                    <div class="grid-c-9 grid-rs-1 grid-re-12">
                        <img class="img-stretch w-100p" src="../assets/img/1920.png">
                    </div>
                    <div class="grid-c-3 grid-rs-6">
                        <form @submit.prevent="login">
                            <div class="input-control">
                                <input v-model="form.email" type="email" class="input-contains-icon" placeholder="Email" /><span class="icon"><i class="fa fa-wrapper fa-envelope"></i></span>
                            </div>
                            <div class="input-control">
                                <input v-model="form.password" type="password" class="input-contains-icon" placeholder="Password" /><span class="icon"><i class="fa fa-wrapper fa-lock"></i></span>
                            </div>
                            <button type="submit" class="btn-purple-900">Login</button>
                        </form>
                    </div>
                </div>
               </div>
            </div>
         </div>
        </section>
      </template>
    </LoginLayout>

</template>

<script>

import { reactive, computed } from 'vue';
import { useStore } from 'vuex';
import router from '../router';
// import '../assets/js/main'
import HeaderComponent from '@/components/Header'
import LoginLayout from '@/layouts/LoginLayout'


export default {
  name: 'LoginView',
  components: {
      HeaderComponent,
      LoginLayout,
  },
  setup(){
    const form = reactive({
        'email' : '',
        'password' : '',
    });
    const store = useStore()
    const signInState = computed( () => store.state.signIn ).value
    const userState = computed( () => store.state.userDetails ).value

    const login = () => {
        store.dispatch('signInAction', form).then(() => {
            if(!signInState.isError) {
                store.dispatch('getUserAction')
                router.push('/')
            }
        })
        
    }

    return {
        form,
        signInState,
        userState,
        login
    }
  }

}
</script>
