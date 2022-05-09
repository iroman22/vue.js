<template  class="content">
    <BaseLayout>
      <template #header>
          <HeaderComponent/>
      </template>

      <template #default>
        <section class="section">
         <div class="hero">
            <div class="hero-body">
               <div class="content my-10">
                  <PsychosListComponent/>
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
import PsychosListComponent from '@/components/main/PsychosList'

export default {
    name: 'PsychologistsView',
    components:{
        HeaderComponent,
        BaseLayout,
        FooterComponent,
        PsychosListComponent
    },
}
</script>
