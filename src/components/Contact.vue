<template>
    <div  class="flex flex-col bg-bottom relative min-h-screen w-full py-10  pl-[10%] pr-[4%]">
        <div class="flex justify-between px-5">
           <div class="bg-[#FCD34D] box-shadow2  rotate-[-80deg] 
                  rounded-4xl p-3 flex justify-center mr-8 active:scale-[0.98] ">
            <img src="../assets/rocket.svg" alt="hand" class="w-[60%] rotate-[60deg] " />
          </div>
          <div class="bg-[#FFFBEB] box-shadow rotate-[10deg] flex items-center justify-center ml-8">
            <p class="font-Kantumruy font-bold text-[#BFDBFE] text-[40px] px-4 stroke-text">Contact</p>
          </div>
          <div class="rotate-[10deg] flex items-center justify-center ml-8">
           <img src="../assets/Contact-smile.svg" alt="hand" class="w-[60%]" />
          </div>
        </div>
        <div class="flex justify-center mt-9 p-6">
                <div class="flex flex-col justify-between
                bg-[#FFFBEB] rounded-4xl p-8 border h-[50vh]
                 border-[#333332] box-shadow3 w-[80%]">
                    <div>
                        <p class="text-center text-[#333332] font-koulen text-[30px] font-bold p-4">
                        Let’s build something awesome together. Whether it’s about a project, 
                            collaboration, or just a friendly hello — I’d love to hear from you!
                    </p>
                 </div>
                 <div class="flex justify-between">
                    <button 
                    @click="LinkedButton()"
                    class="py-3 px-6 bg-[#BFDBFE] text-[#FFFBEB] font-koulen text-[30px]
                     font-semibold rounded-2xl border border-[#333332] cursor-pointer active:scale-[0.98]">
                        Linkedin
                    </button>
                       <button class="py-3 px-6 bg-[#FECACA] text-[#FFFBEB] font-koulen text-[30px] font-semibold rounded-2xl border border-[#333332]">
                        Email
                    </button>
                 </div>

                </div>  
        </div>
    </div>
</template>


<script setup>

const LinkedButton = () =>{
    console.log(('Linkedin button clicked!'));
}

</script>


<style scoped>
.bg-bottom{
  background: url('../assets/Grid.png') #BFDBFE;
  background-repeat: no-repeat;
  background-size: cover;

}

.box-shadow{
    box-shadow: -10px 10px #333332;
}

.box-shadow2{
    box-shadow: -5px 5px #333332;
    transition: all .2s cubic-bezier(.77, 0, .175, 1);
}

.box-shadow3{
    box-shadow: 5px 10px #333332;
    transition: all .2s cubic-bezier(.77, 0, .175, 1);
}

.box-shadow2:active{
      box-shadow: -2px 5px #333332; 
}
.stroke-text {
    -webkit-text-stroke: 1px #333332;
}

</style>