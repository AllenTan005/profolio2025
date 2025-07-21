<template>
    
<dialog ref="dialogRef" v-show="dialogState"  class="backdrop:bg-black/20 backdrop:backdrop-blur
     mx-[18%] my-[7%]
      @max-[50rem]/main:mx-[5%] @max-[50rem]/main:my-[10%]
     modal-dialog
      bg-[#FFFBEB] 
      rounded-lg
      shadow-2xl
      w-[70%]  @max-[50rem]/main:w-[90%]
      flex flex-col
      transition-all duration-300 ease-in-out">
        <div class="modal-header flex  items-center justify-center 
         @max-[50rem]/main:flex-col
        ">
            
            <div class="w-[30%]   @max-[50rem]/main:flex @max-[50rem]/main:w-auto   p-6 md:p-8">
                <div v-for="(project, index) in listOfProject" :key="index" class="mb-4">
                    <h2
                    :class="indexOfProject === index ? 'bg-[#BFDBFE] text-[#FFFBEB]' : ''"
                    class=" p-2 rounded-2xl cursor-pointer font-koulen font-semibold @max-[50rem]/main:text-[13px]
                    text-[#333332] hover:bg-[#BFDBFE] hover:text-[#FFFBEB]"
                    @click="clickProject(project, index)"
                    >{{ project.title }}</h2>
                 </div>
                   <div class=" justify-end  mr-4 @min-[50rem]/main:hidden  flex">
                    <div>
                         <button class="cursor-pointer" autofocus @click="closeDialog()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-500">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                   
                </div>
            </div>
            <div class="w-[70%] border-l-2 border-dashed  @max-[50rem]/main:border-l-0 
            @max-[50rem]/main:border-t-2
            flex flex-col justify-between p-5">
                <div class="flex justify-end mr-4  @max-[50rem]/main:hidden">
                    <div>
                         <button class="cursor-pointer" autofocus @click="closeDialog()">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-500">
                             <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                   
                </div>
                 <div class="">
                    <p class="text-[#333332] font-koulen text-[20px] @max-[50rem]/main:text-[14px]  font-bold">
                        {{ selectedProject.title }}
                    </p>
                        <p class="@max-[50rem]/main:text-[13px] ">
                            {{ selectedProject.desc }}
                        </p>
                    </div>
                      <!-- carousel -->
                    <div v-if="selectedProject.image.length > 0" class="flex items-center mt-4">
                      <button @click="prevImage" class="bg-[#FCA5A5] text-[#FFFBEB] font-koulen text-[20px] font-semibold rounded-2xl p-2 mr-2 max-h-[50px]">
                            Prev
                      </button>
                      <img :src="selectedImage" alt="img"
                      :class="selectedProject.title === '瓶蓋工廠-App' ? 'h-[190px] ' :'w-[80%] max-h-[200px]'" />
                      <button @click="nextImage" class="bg-[#BFDBFE] text-[#FFFBEB] font-koulen text-[20px] font-semibold rounded-2xl p-2 ml-3 max-h-[50px]">
                            Next
                      </button>
                      
                    </div>
            </div>
           
          
           
        </div>
</dialog>


<div class="bg-work relative min-h-screen  w-full py-10 pl-[10%] pr-[4%] flex flex-col justify-center
 @max-[50rem]/main:flex  @max-[50rem]/main:flex-col   @max-[50rem]/main:justify-around
">
  <div class="flex  justify-between ml-3">
        <div class="w-[40%] @max-[50rem]/main:w-[70%] rotate-[10deg] container-a relative">
            <img src="../assets/section3-photo-1.svg" class="w-[80%] @max-[50rem]/main:w-[80%]   image " alt="backstage" />
            <div class="middle flex justify-center  rotate-[10deg] top-[50%] left-[40%]
            
            ">
             <div class="text" @click="clickDialog(0)">More info</div>
            </div>
        </div>
          <div class="w-[40%]  @max-[50rem]/main:w-[70%]  rotate-[-10deg]  container-b relative">
            <img src="../assets/section3-photo-2.svg "  class="w-[80%] image" alt="backstage2" />
             <div class="middle flex justify-center  rotate-[-10deg]  top-[50%] left-[40%]">
             <div class="text" @click="clickDialog(1)">More info</div>
            </div>
        </div>
    </div>
<div class="flex justify-around ">
    <div class="  @max-[50rem]/main:flex @max-[50rem]/main:justify-center  ">
         <img src="../assets/section-3-smile.svg" class="w-[90%] @max-[50rem]/main:w-[60%] animate-float " alt="smile" />
    </div>
       <div class="bg-[#BFDBFE] box-shadow rotate-[2deg] flex items-center justify-center ml-8">
            <p class="font-Kantumruy font-bold 
            text-[#FFFBEB] text-[40px] px-4 stroke-text
            @max-[50rem]/main:text-[30px] @max-[50rem]/main:px-2
            ">Work</p>
        </div>
        <div class=" @max-[50rem]/main:flex @max-[50rem]/main:justify-center">
             <img src="../assets/section-3-normal.svg"  class="w-[90%]  @max-[50rem]/main:w-[60%]  animate-float2" alt="normal" />
        </div>
    </div>
    <div class="flex  justify-between ml-3 ">
        <div class="w-[40%]  @max-[50rem]/main:w-[70%] rotate-[-10deg]  container-c relative">
            <img src="../assets/section3-photo-3.svg" class="w-[80%]  image" alt="backstage"  />
                <div class="middle flex justify-center  rotate-[-10deg] top-[50%] left-[40%]">
             <div class="text"  @click="clickDialog(2)">More info</div>
            </div>
        </div>
          <div class="w-[40%]  @max-[50rem]/main:w-[70%]    rotate-[10deg]  container-d relative">
            <img src="../assets/section3-photo-4-2.svg"  class="w-[80%]  image" alt="backstage2" />
               <div class="middle flex justify-center  rotate-[10deg]  top-[50%] left-[40%]">
             <div class="text" @click="clickDialog(3)">More info</div>
            </div>
        </div>
    </div>
</div>

</template>


<script setup>
import { ref, watch, onMounted } from 'vue';
import dataFabric from '../assets/Data-Fabric-photo.png';
import dataFabric2 from '../assets/Data-Fabric-photo-2.png';
import dataFabric3 from '../assets/Data-Fabric-photo-3.png';
import dataFabric4 from '../assets/Data-Fabric-photo-4.jpg';
import dataFabric5 from '../assets/Data-Fabric-photo-5.jpg';
import pboxphoto from  '../assets/Powerbox-photo-2.png';
import pboxphoto2 from  '../assets/Powerbox-photo-2.png';
import pboxphoto3 from  '../assets/Powerbox-photo-3.png';
import appphoto from '../assets/nangang-pop1.jpg'
import appphoto2 from '../assets/nangang-pop2.jpg'
import appphoto3 from '../assets/nangang-pop3.jpg'


const dialogRef = ref(null);
const dialogState = ref(false);
const indexOfProject = ref(null)

const listOfProject = ref([
{
    title:'Backstage',
    desc:"'Backstage' is a web application that functions as the Content Management System (CMS) or administration panel for the '瓶蓋工廠-App' (Bottle Cap Factory App). Its primary purpose is to empower authorized personnel (e.g., exhibition staff, event organizers, retail managers) to manage all the dynamic content and operational data that is displayed and utilized within the public-facing mobile app.",
     image:[
     ]
   
},
{
    title:'PowerBox',
    desc:"Trend Micro PowerBox: A Secure, Enterprise-Grade Cloud File Exchange Platform From the context and search results, PowerBox appears to be a specialized secure cloud storage and file exchange platform developed by Trend Micro, a global leader in cybersecurity. While it offers functionalities akin to consumer-grade cloud services like Google Drive, its primary differentiator and core value proposition lie in its integrated, robust security features tailored for business and enterprise environments.",
    image:[
        pboxphoto,
        pboxphoto2,
        pboxphoto3
    ]
},
{
    title:'瓶蓋工廠-App',
    desc:"The '瓶蓋工廠-App' (Bottle Cap Factory App) is designed as a multi-functional mobile application aimed at enhancing the visitor experience at an exhibition center, while also providing tools for event management and retail operations. It combines interactive guidance with practical information and commerce capabilities, transforming the physical space into a more engaging and digitally-supported environment.",
     image:[
      appphoto,
      appphoto2,
      appphoto3
    ]
},
{
    title:'PowerBi-Copliot',
    desc:"Powerbi-bi-copilot is an application designed to automate and simplify the process of creating data visualizations in Microsoft Power BI using natural language prompts. Its core value lies in bridging the gap between a user's analytical query (expressed in plain language) and the technical steps required to generate a corresponding chart in Power BI.",
    image:[
      dataFabric,
      dataFabric2,
      dataFabric3,
      dataFabric4,
      dataFabric5,

    ]
}

])

const selectedProject = ref({
  title:'',
  desc:"",
  image:[]
})  

const selectedImage = ref('')

const currrentIndex = ref(0)

const nextImage = () => {
    if( currrentIndex.value < selectedProject.value.image.length -1){
      currrentIndex.value++;
    
    }else{
        currrentIndex.value = 0
    }
     console.log('selectedProject', selectedProject.value.image[currrentIndex.value])
     selectedImage.value = selectedProject.value.image[currrentIndex.value];
  
}

const prevImage = () => {
  if(currrentIndex.value > 0){
    currrentIndex.value--;
  }else{
    currrentIndex.value = selectedProject.value.image.length - 1
  }
 selectedImage.value = selectedProject.value.image[currrentIndex.value];
 console.log('selectedProject',selectedProject.value.image[currrentIndex.value])



}

const clickProject = (project,index) =>{
        selectedProject.value = project;
         selectedImage.value =selectedProject.value.image[0]
             indexOfProject.value = index
}

const clickDialog = (index) => {
    indexOfProject.value = index
    dialogState.value = true
      dialogRef.value.showModal();
       selectedProject.value = listOfProject.value[index];
         selectedImage.value = selectedProject.value.image[0]
}

const closeDialog = () => {
     
      dialogRef.value.close();
        dialogState.value = false
}


// watch(() => props.modelValue, (newValue) => {
//   if (newValue) {
//     dialogRef.value.showModal(); // Use showModal() for a true modal dialog
//   } else {
//     dialogRef.value.close();
//   }
// }, { immediate: true });

</script>


<style scoped>
.bg-work{
  background: url('../assets/Grid-blue.png') #FFFBEB;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.box-shadow{
    box-shadow: -10px 10px #333332;
}

.stroke-text {
    -webkit-text-stroke: 1px #333332;
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


        .animate-float {
            animation: float 4s ease-in-out infinite alternate;
        }

              @keyframes float2 {
            0% {
                transform: rotate(0deg); /* Start at original position */
            }
          /*   50% {
                transform: rotate(5deg); Float up by 20px 
            }*/
            100% {
                transform: rotate(365deg); /* Return to original position */
            }
        }


        .animate-float2 {
            animation: float2 4.5s ease-in-out infinite alternate;
        }

        
 .middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
 /* top: 50%;
  left: 40%; */
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}



.text {
cursor: pointer;
  border-radius:10px;
  border: #333332 1px solid;
  background-color: #BFDBFE;
  color: #FFFBEB;
  font-size: 16px;
  padding: 16px 32px;

}

  
@container main (width < 50rem) {
        .text{
          cursor: pointer;
          border-radius:10px;
          border: #333332 1px solid;
          background-color: #BFDBFE;
          color: #FFFBEB;
          font-size: 16px;
          padding: 8px 12px;
        }
        .box-shadow{
          box-shadow: -5px 5px #333332;
        }
    }

.container-a:hover .image {
  opacity: 0.3;
}

.container-a:hover .middle {
  opacity: 1;
}

.container-b:hover .image {
  opacity: 0.3;
}

.container-b:hover .middle {
  opacity: 1;
}

.container-c:hover .image {
  opacity: 0.3;
}

.container-c:hover .middle {
  opacity: 1;
}

.container-d:hover .image {
  opacity: 0.3;
}

.container-d:hover .middle {
  opacity: 1;
}


</style>