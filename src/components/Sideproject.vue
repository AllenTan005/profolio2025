<template>
    <div class="bg-work relative   @min-[50rem]/main:min-h-screen @max-[50rem]/main:h-[150vh] w-full py-10 pl-[10%] pr-[4%] 
  @max-[50rem]/main:justify-around
">
        <div class="flex justify-center mt-5">


            <div class="bg-[#BFDBFE] box-shadow rotate-[-3deg] flex items-center justify-center ml-8 w-[30%]">

                <p class="font-Kantumruy font-bold text-[#FFFBEB] text-[40px]
             px-4 stroke-text  @max-[50rem]/main:justify-end @max-[50rem]/main:text-[30px] @max-[50rem]/main:ml-3
              @max-[50rem]/main:rotate-[0deg] w-[100%]
             ">
                    Side Project
                </p>
             </div>

          
        </div>
           <div class="flex flex-row flex-wrap  @max-[50rem]/main:flex-col justify-between items-center mt-10 p-3">
                <div class="rounded-md border-rose-50 bg-[#BFDBFE] shadow w-[40%]  @max-[50rem]/main:w-[70%] box-shadow2 p-4">
                    <div class="rounded-lg">
                        <img :src="tictoe" class="rounded-md " alt="" />
                    </div>
                    <p class="font-koulen text-lg mt-5">tic-toe</p>
                    <div class="border-t border-slate-500">
                        <p class="font-koulen mt-3  @max-[50rem]/main:text-[13px]">
                            React, Node.js, Express.js, MongoDB, Render, Websocket
                        </p>
                    </div>
                      <button class="flex items-center p-2 border-2 border-slate-600 rounded mt-2 bg-red-200 text-white font-koulen cursor-pointer"
                        @click="goToSite('https://tic-toe-allen.netlify.app/tictoe')"
                      >
                            More &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                     </button>
                </div>
                  <div class="rounded-md border-rose-50 bg-[#BFDBFE] shadow w-[40%]  @max-[50rem]/main:w-[70%] @max-[50rem]/main:mt-6  box-shadow2 p-4">
                    <div class="flex justify-center">
                        <img :src="Teda"  class="rounded-md w-[88%]" alt="" />
                    </div>
                      <p class="font-koulen text-lg  mt-5">Teda</p>
                       <div class="border-t border-slate-500">
                       <p class="font-koulen mt-3  @max-[50rem]/main:text-[13px]">
                            React, Node.js, Express.js, MongoDB, Render, Rest API
                        </p>
                        <button class="flex items-center p-2 border-2 border-slate-600 rounded mt-2 bg-red-200 text-white font-koulen cursor-pointer"
                        @click="goToSite('https://login-jwt.netlify.app/login')"
                        >
                            More &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                     </button>
                    </div>
                </div>
             </div>
    </div>

</template>

<script setup>
import dataFabric5 from '../assets/Data-Fabric-photo-5.jpg';
import Teda from '../assets/Teda.png'
import tictoe from '../assets/tictoe.png'

const goToSite = (site) =>{
    window.open(site, '_blank')
}

</script>


<style scoped>
.bg-work {
    background: url('../assets/Grid-blue.png') #FFFBEB;
    background-repeat: no-repeat;
    background-size: cover;
    /*height: 100vh;*/
}

.box-shadow {
    box-shadow: -10px 10px #333332;
}

.box-shadow2 {
    box-shadow: 10px 10px #333332;
}


.stroke-text {
    -webkit-text-stroke: 1px #333332;
}
</style>