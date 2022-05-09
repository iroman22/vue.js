<template>

    <BaseLayout>

      <template #header>
          <HeaderComponent/>
      </template>

      <template #default>
        <section class="section">
         <div class="hero">
            <div class="hero-body">
               <div class="content my-10">
                  <h3>Contact Us</h3>
               </div>
            </div>
         </div>
        </section>
      </template>

      <template #footer>
          <FooterComponent/>
      </template>

    </BaseLayout>

</template>


<script>
import BaseLayout from '@/layouts/BaseLayout'
import HeaderComponent from '@/components/Header'
import FooterComponent from '@/components/Footer'

export default {
    name: 'ContactView',
    components:{
        HeaderComponent,
        BaseLayout,
        FooterComponent
    },
}
</script>
