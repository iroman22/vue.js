<template  class="content">
    <BaseLayout>
        <template #header>
            <HeaderComponent/>
        </template>

        <template #default>
            <p>A paragraph for the main content.</p>
            <p>And another one.</p>
        </template>

        <template #footer>
            <HeaderComponent/>
        </template>
    </BaseLayout>
</template>


<script>

import BaseLayout from './BaseLayout.vue'
import HeaderComponent from './Header.vue'
import FooterComponent from './Footer.vue'

export default {
    name: 'BaseView',
    components: {
        HeaderComponent,
        FooterComponent
    }
}

</script>
