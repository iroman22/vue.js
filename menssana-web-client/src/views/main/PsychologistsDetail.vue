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
                  <PsychosDetailComponent/>
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
import PsychosDetailComponent from '@/components/main/PsychosDetail'

export default {
    name: 'PsychologistsDetailView',
    components:{
        HeaderComponent,
        BaseLayout,
        FooterComponent,
        PsychosDetailComponent
    },
}
</script>
