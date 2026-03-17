<template>
<div
  ref="scrollContainer"
  class="flex flex-col w-[100%] overflow-y-scroll h-[100vh]"
>
  <div id="home" class="@container  section flex justify-center w-[100%] snap-always snap-center">
        <Intro  />
    </div>
    <div id="about" class="@container section flex justify-center w-[100%] snap-always snap-center">
        <About />
    </div>
       <div id="work" class="@container section flex justify-center w-[100%] snap-always snap-center">
        <Work />
    </div>
         <div id="side" class="@container section flex justify-center w-[100%] snap-always snap-center">
        <Sideproject />
    </div>
       <div id="contact" class="@container section flex justify-center w-[100%] snap-always snap-center">
        <Contact />
    </div>
   
    </div>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import About from '../components/About.vue';
import Intro from '../components/Intro.vue';
import Work from '../components/Work.vue'
import Contact from '../components/Contact.vue'
import Sideproject from '../components/Sideproject.vue';
import { usePageStore } from '../store/page.js'; 

const pageStore = usePageStore();
const activeSection = ref(null);
const scrollContainer = ref(null);
const pageCountById = {
  home: '01',
  about: '02',
  work: '03',
  side: '04',
  contact: '05',
};



const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element && scrollContainer.value) {
    scrollContainer.value.scrollTo({
      top: element.offsetTop,
      behavior: 'auto',
    });
  }
};  


let observer = null;
onMounted(() =>{
   pageStore.pageId = 'home';
   pageStore.pageCount = pageCountById.home;


   const options = {
    root: scrollContainer.value,
    rootMargin: '-45% 0px -45% 0px',
    threshold: 0,
  };

 observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
        pageStore.pageId = entry.target.id;
        pageStore.pageCount = pageCountById[entry.target.id] ?? pageStore.pageCount;
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

watch(() => pageStore.pageId, (pageId) => {
  if (!pageStore.byClick || !pageId || pageId === activeSection.value) {
    return;
  }

  scrollToSection(pageId);
  pageStore.pageCount = pageCountById[pageId] ?? pageStore.pageCount;
  pageStore.byClick = false;
});

</script>


<style scoped>
.section {
  min-height: 100vh;
  content-visibility: auto;
  contain-intrinsic-size: 100vh;
}


</style>
