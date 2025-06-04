<template>
    <div class="w-[5%] flex flex-col items-center justify-center border-l border-slate-600  bg-top fixed top-0 right-0">
        <p class="text-orentation font-koulen">
            {{ pageStore.pageCount }}/04
        </p>
    </div>
</template>


<script setup>
import { ref,watch } from 'vue';
import { usePageStore } from '../store/page.js'; // Import the store

const numberofPages = ref('01');
const pageStore = usePageStore();

// watch([pageStore],() =>{
//     if(pageStore.pageId === 'home'){
//         numberofPages.value = '01';
//     }else if(pageStore.pageId === 'about'){
//          numberofPages.value = '02'   
//          }
//      else if(pageStore.pageId === 'work'){
//     numberofPages.value = '03'   
//          }
   
// })

</script>

<style scoped>
 .text-orentation{
    writing-mode: vertical-rl;
 }
.bg-top{
  /* background: url('../assets/Grid.png') #BFDBFE;*/
  background-repeat: no-repeat;
  background-size: cover;
 
}

</style>