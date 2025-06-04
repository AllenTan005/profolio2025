<template>
<div class="flex flex-col w-[100%]  snap-y snap-mandatory overflow-y-scroll h-[100vh] ">
  <div id="home" class="@container  section flex justify-center w-[100%] snap-always snap-center">
        <Intro  />
    </div>
    <div id="about" class="@container section flex justify-center w-[100%] snap-always snap-center">
        <About />
    </div>
       <div id="work" class="@container section flex justify-center w-[100%] snap-always snap-center">
        <Work />
    </div>
       <div id="contact" class="@container section flex justify-center w-[100%] snap-always snap-center">
        <Contact />
    </div>
    </div>
</template>

<script setup>
import { ref, onMounted,watch, onUnmounted  } from 'vue';
import About from '../components/About.vue';
import Intro from '../components/Intro.vue';
import Work from '../components/Work.vue'
import Contact from '../components/Contact.vue'
import { usePageStore } from '../store/page.js'; 

const pageStore = usePageStore();
const activeSection = ref(null);



const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth', // For smooth scrolling
      block: 'start'       // Scrolls to the top of the element
      // block: 'center'    // Scrolls to the center of the element
      // block: 'end'       // Scrolls to the bottom of the element
      // block: 'nearest'   // Scrolls the minimum amount to make the element visible
    });
  }
 
};  


let observer = null;
onMounted(() =>{


   const options = {
    root: null, // The viewport
    rootMargin: '-50% 0px -50% 0px', // When the middle of the element crosses the middle of the viewport
    // Or, if you have a fixed header (e.g., 60px tall): rootMargin: '-60px 0px 0px 0px'
    threshold: 0, // Trigger when any part of the target is visible
  };

 observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Check if the element is intersecting the root with its top half
      // or if you used rootMargin for the middle of the screen
      if (entry.isIntersecting) {
        // pageStore.pageId = entry.target.id;
        if(entry.target.id === 'home'){
          pageStore.pageCount = '01'
        }else if(entry.target.id === 'about'){
          pageStore.pageCount = '02'   
         }
        else if(entry.target.id === 'work'){
          pageStore.pageCount = '03'   
         }
          else if(entry.target.id === 'contact'){
          pageStore.pageCount = '04'   
         }
        activeSection.value = entry.target.id;
        console.log(`Active section: ${pageStore.pageId}`);
      }
    });
  }, options);


   document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });

})  

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

watch([pageStore],() =>{
  // if()
  // console.log(`Scrolling to count: ${pageStore.pageCount}`);
  if(!pageStore.byClick){
    if(pageStore.pageCount === '01'){
    pageStore.pageId = 'home';
    }else if(pageStore.pageCount === '02'){
      pageStore.pageId = 'about';
    }else if(pageStore.pageCount === '03'){
      pageStore.pageId = 'work';
    }else if(pageStore.pageCount === '04'){
      pageStore.pageId = 'contact';
    }
   
     
   }else{
     scrollToSection(pageStore.pageId)
     pageStore.byClick = false // reset the byclick after scrolling
   }
    console.log(`Scrolling to count: ${pageStore.pageCount} & pageId: ${pageStore.pageId}`);
})

</script>


<style scoped>



</style>