<script setup>

  import LeftNav from './components/LeftNav.vue'
  import Indicator from './components/Indicator.vue';
  import FirstSection from './components/FirstSection.vue';


</script>

<template>
  <div class="@container/main">
    <div class="flex ustify-between ">
      <FirstSection  />
        <LeftNav  />
      <Indicator  />
  </div>

  </div>

</template>

<style scoped>

.bg-top{
 /* background: url('./assets/Grid.png') #BFDBFE;*/
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

</style>
