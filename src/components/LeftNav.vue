<template>
        <div class=" flex flex-col items-center border-r border-slate-600 bg-top w-[10%]  fixed top-0 left-0">
            <img src="../assets/logo-allen.svg" alt="logo" class="mb-5 mt-5 w-[30%] " />
            <div class="flex flex-col items-center justify-around">
                <div 
                :class="pageStore.pageId === 'home' ? 'bg-[#FFFBEB] rounded-[20px] text-[#BFDBFE]' : ''"
                class="flex flex-col items-center justify-center mb-5 py-2 px-4 cursor-pointer
                 hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]"
                 @click="pageStore.clickPage('home')">
                 
                    <p class="text font-koulen">Home</p>
                </div>
                <div
                 :class="pageStore.pageId === 'about' ? 'bg-[#BFDBFE] rounded-[20px] text-[#FFFBEB]' : ''"
                class="flex flex-col items-center justify-center mb-5 py-2 px-4 cursor-pointer
                 hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]"
                    @click="pageStore.clickPage('about')"
                 >
                    <p class="text font-koulen">About</p>
                </div>
                <div
                :class="pageStore.pageId === 'work' ? 'bg-[#BFDBFE] rounded-[20px] text-[#FFFBEB]' : ''"
                @click="pageStore.clickPage('work')" class="flex flex-col items-center justify-center mb-5 py-2 px-4 cursor-pointer
                 hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]">
                    <p class="text font-koulen">Work</p>
                </div>
                 <div  
                   :class="pageStore.pageId === 'contact' ? 'bg-[#FFFBEB] rounded-[20px] text-[#BFDBFE] ' : ''"
                 @click="pageStore.clickPage('contact')" class="flex flex-col items-center justify-center mb-5 
                  py-2 px-4 cursor-pointer hover:bg-[#FECACA] hover:text-[#FFFBEB] hover:rounded-[20px]">
                    <p class="text font-koulen">Contact</p>
                </div>

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