<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
export default {
  name: 'App',
  setup(){
    return {
        layout: 'div'
      }
  }
}
</script>

<style>
</style>
