<template>
        <div class=" flex flex-col items-center border-r border-slate-600  w-[10%]  fixed top-0 left-0 h-screen
        @max-[50rem]/main:flex-row @max-[50rem]/main:items-center  @max-[50rem]/main:border-r-0 @max-[50rem]/main:w-[100%] @max-[50rem]/main:h-auto
           @max-[50rem]/main:p-3  @max-[50rem]/main:justify-between 
        ">
            <img src="../assets/logo-allen.svg" alt="logo" class="mb-5 mt-5 w-[30%] 
             @max-[50rem]/main:w-[5%]   @max-[50rem]/main:mt-0     @max-[50rem]/main:mr-5" />
            <div class="flex flex-col  items-center justify-around  @max-[50rem]/main:flex-row ">
                <div 
                :class="pageStore.pageId === 'home' ? 'bg-[#FFFBEB] rounded-[20px] text-[#BFDBFE]' : ''"
                class="flex flex-col items-center justify-center mb-5 py-2 px-4 cursor-pointer
                 hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]  @max-[50rem]/main:mb-0"
                 @click="pageStore.clickPage('home')">
                 
                    <p class="text font-koulen">Home</p>
                </div>
                <div
                 :class="pageStore.pageId === 'about' ? 'bg-[#BFDBFE] rounded-[20px] text-[#FFFBEB]' : ''"
                class="flex flex-col items-center justify-center mb-5 py-2 px-4 cursor-pointer
                 hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]  @max-[50rem]/main:mb-0"
                    @click="pageStore.clickPage('about')"
                 >
                    <p class="text font-koulen">About</p>
                </div>
                <div
                :class="pageStore.pageId === 'work' ? 'bg-[#BFDBFE] rounded-[20px] text-[#FFFBEB]' : ''"
                @click="pageStore.clickPage('work')" class="flex flex-col items-center justify-center mb-5 py-2 px-4 cursor-pointer
                 hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]  @max-[50rem]/main:mb-0">
                    <p class="text font-koulen">Work</p>
                </div>
                 <div  
                   :class="pageStore.pageId === 'contact' ? 'bg-[#FFFBEB] rounded-[20px] text-[#BFDBFE] ' : ''"
                 @click="pageStore.clickPage('contact')" class="flex flex-col items-center justify-center mb-5 
                  py-2 px-4 cursor-pointer hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]  @max-[50rem]/main:mb-0">
                    <p class="text font-koulen">Contact</p>
                </div>
            </div>
            <div class="font-koulen hidden  @max-[50rem]/main:block">
                {{ pageStore.pageCount }}/04
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
import { usePageStore } from '../store/page.js'; // Import the store

const activePage = ref('home'); // Track the active page

const pageStore = usePageStore();

const setActivePage = (page) => {
    activePage.value = page; // Update the active page
};


</script>


<style scoped>
.bg-top{
  /* background: url('../assets/Grid.png') #BFDBFE;*/
  background-repeat: no-repeat;
  background-size: cover;
  
}

</style>