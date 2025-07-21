<template>
    <div class="w-[5%] flex flex-col items-center justify-center border-l 
    border-slate-600 h-screen fixed top-0 right-0
     @max-[50rem]/main:flex-row @max-[50rem]/main:hidden
    @max-[50rem]/main:bottom-0  @max-[50rem]/main:left-0  @max-[50rem]/main:justify-end  @max-[50rem]/main:border-l-0 
    @max-[50rem]/main:w-[100%] @max-[50rem]/main:h-auto
    ">
        <p class="text-orentation @max-[50rem]/main:text-horizontal font-koulen">
            {{ pageStore.pageCount }}/05
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
  .text-horizontal{
    writing-mode:horizontal-tb;
 }


</style>