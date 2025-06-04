<template>
   
    <div class="flex flex-col bg-top relative min-h-screen w-full py-10 ">
          
        <div class="flex justify-center">
            <p class="text-[#FFFBEB] text-center font-bold text-[64px] font-Kantumruy">Allen Tan</p>
        </div>
        
        <div class="flex  justify-around">
          <div class="flex justify-center">
            <img src="../assets/photo-1.svg" alt="hello" class="animate-float w-[80%]" />
          </div>
          <div class="flex justify-center">
            <img src="../assets/photo-2.svg" alt="dev" class="w-[80%]" />
          </div>
        </div>
         <div class="flex justify-around items-center relative ">
          <div class="flex justify-center">
            <img src="../assets/photo-3.svg" alt="hastag" class="w-[90%]" />
          </div>
          <div class="absolute left-[35%] top-[-100%]">
             <img src="../assets/me-allen.png" alt="me" class="w-[45%]" />
          </div>
          <div class="flex justify-center">
            <img src="../assets/photo-4.svg" alt="ready?" class="w-[90%] animate-float2" />
          </div>
        </div>
        </div>
</template>


<script setup>

</script>


<style scoped>
.bg-top{
  background: url('../assets/Grid.png') #BFDBFE;
  background-repeat: no-repeat;
  background-size: cover;

}

      @keyframes float {
            0% {
                transform: translateY(0px); /* Start at original position */
            }
            50% {
                transform: translateY(-10px); /* Float up by 20px */
            }
            100% {
                transform: translateY(0px); /* Return to original position */
            }
        }

        /* Apply the custom animation using Tailwind's arbitrary value support */
        /* You can extend Tailwind's theme for custom animations, but for a single case, this is fine */
        .animate-float {
            animation: float 4s ease-in-out infinite alternate;
        }

              @keyframes float2 {
            0% {
                transform: rotate(0deg); /* Start at original position */
            }
            50% {
                transform: rotate(5deg); /* Float up by 20px */
            }
            100% {
                transform: rotate(0deg); /* Return to original position */
            }
        }

        /* Apply the custom animation using Tailwind's arbitrary value support */
        /* You can extend Tailwind's theme for custom animations, but for a single case, this is fine */
        .animate-float2 {
            animation: float2 2.5s ease-in-out infinite alternate;
        }
</style>