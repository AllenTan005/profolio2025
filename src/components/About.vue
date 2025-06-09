<template>
        <div class="bg-about relative min-h-screen  w-full py-10 pl-[10%] 
        pr-[4%] flex flex-col justify-center
    @max-[50rem]/main:justify-end
        ">

        <div class="flex   justify-between      @max-[50rem]/main:mt-5">
          <div class="bg-[#BFDBFE] box-shadow rotate-[10deg] flex items-center justify-center ml-8">
            <p class="font-Kantumruy font-bold text-[#FFFBEB] text-[40px]  @max-[50rem]/main:text-[16px] px-4 stroke-text">About</p>
          </div>
          <div class="bg-[#FED7AA] box-shadow2  rotate-[-10deg] 
          rounded-4xl @max-[50rem]/main:rounded-xl  py-3 flex justify-center mr-8 active:scale-[0.98] ">
                 <img src="../assets/dj-hand.svg" alt="hand" class="w-[60%] @max-[50rem]/main:w-[30%]" />
          </div>
        </div>
        <div class=" mt-5 p-7" >
            <div class="flex">
                <div class="font-Kantumruy text-[#FFFBEB] font-semibold bg-[#FCA5A5] 
                rounded-t-lg p-4 mr-3 cursor-pointer active:scale-[0.98] @max-[50rem]/main:text-sm"
                @click="page = '1'">
                    2020-2021
                </div>
                <div class="font-Kantumruy text-[#FFFBEB] font-semibold bg-[#FED7AA] 
                rounded-t-lg p-4 mr-3 cursor-pointer active:scale-[0.98] @max-[50rem]/main:text-sm"
                 @click="page = '2'"
                >
                       2021-2023
                </div>
                <div class="font-Kantumruy text-[#FFFBEB] font-semibold bg-[#BFDBFE] 
                rounded-t-lg p-4 mr-3 cursor-pointer active:scale-[0.98] @max-[50rem]/main:text-sm"
                    @click="page = '3'"
                >
                       2023-present
                </div>
            </div>

            <div>
                <div class="p-4 bg-[#BFDBFE]  box-shadow border-t-10  border-[#F98484] flex"
                :class="page === '1' ? 'bg-[#FCA5A5]' : page === '2' ? 'bg-[#FED7AA]' : 'bg-[#BFDBFE]'"
                >
                 <!-- <transition name="slide-fade"> -->
                    <div class="flex" v-if="page === '1'">
                    <div class="w-[40%]  flex flex-col  items-center justify-center">
                        <img src="../assets/raise-up.png" alt="logo" class="w-[60%]"/>
                    </div>
                    <div class="w-[60%] py-5">
                    <h1 class="text-[35px] @max-[50rem]/main:text-[20px] text-[#FFFBEB]  font-koulen font-bold">
                     Raise-UP
                    </h1>
                    <p class="text-[20px] text-[#FFFBEB] font-koulen
                     @max-[50rem]/main:text-[12px] @max-[50rem]/main:leading-6
                    ">
                   As an intern during my senior year of university, I gained practical experience at Raise-Up, 
                   a web design firm focused on delivering WordPress solutions for clients.
                    My role involved hands-on web development with WordPress and UI/UX design using Figma.
                    </p>
                    </div>
                    </div>
                          <div class="flex"  v-else-if="page === '2'">
                    <div class="w-[40%]  flex flex-col  items-center justify-center">
                    
                            <img src="../assets/retailing-data.svg" alt="logo" class="w-[60%]"/>
                        
                    </div>
                    <div class="w-[60%] py-5">
                    <h1 class="text-[35px] @max-[50rem]/main:text-[20px] text-[#FFFBEB]  font-koulen font-bold">
                       Retailing Data
                    </h1>
                    <p class="text-[20px] @max-[50rem]/main:text-[12px] @max-[50rem]/main:leading-6 text-[#FFFBEB]  font-koulen">
                       After graduating from university, I began my first full-time role as a Front-End Developer at Retalling Data Inc., a company specializing in data analysis. 
                       During my tenure,
                        I was responsible for building user interfaces and significantly enhanced my skills in Vue, Tailwind CSS, and advanced CSS.
                    </p>
                    </div>
                    </div>
                  <div class="flex" v-else-if="page === '3'">
                    <div class="w-[40%] flex flex-col  items-center justify-center">
                        <img src="../assets/trend-logo.svg" alt="logo" class="w-[80%]"/>
                    </div>
                    <div class="w-[60%] py-5">
                    <h1 class="text-[35px]  @max-[50rem]/main:text-[20px] text-[#FFFBEB]  font-koulen font-bold">
                        TrendMicro Inc
                    </h1>
                    <p class="text-[20px]  @max-[50rem]/main:text-[12px] text-[#FFFBEB]  font-koulen">
                      Following my previous role, I joined Trend Micro, a leading cybersecurity company specializing in anti-virus solutions.
                       There, I contributed to the PowerBox project, a cloud storage platform similar to Google Drive, which featured integrated anti-virus and malware detection services. 
                      This experience significantly enhanced my expertise in web security and RESTful API integration
                    </p>
                    </div>
                    </div>
                   <!-- </transition> -->
                </div>
            </div>
          </div>
     </div>
    
</template>
 

<script setup>
import { ref, onMounted,watch } from 'vue';

const page = ref('2')
const pageTitle = ref('Retailing Data')

watch(page,(newpage) =>{
    if(newpage === '1'){
        pageTitle.value =  'Raise-UP'
    }else if(newpage === '2'){
        pageTitle.value =  'Retailing Data'
    }else{
        pageTitle.value = 'TrendMicro Inc' 
    }
})
 
</script>


<style scoped>
.bg-about{
  background: url('../assets/Grid-blue.png') #FFFBEB;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}

.box-shadow{
    box-shadow: -10px 10px #333332;
}

.box-shadow2{
    box-shadow: 8px 8px #333332;
    transition: all .2s cubic-bezier(.77, 0, .175, 1);
}
@container main (width < 50rem) {
    
        .box-shadow{
          box-shadow: -5px 5px #333332;
        }
        .box-shadow2{
           box-shadow: 5px 5px #333332;
           transition: all .2s cubic-bezier(.77, 0, .175, 1);
        }
    }

.box-shadow2:active{
      box-shadow: 5px 5px #333332; 
}

.stroke-text {
    -webkit-text-stroke: 1px #333332;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>