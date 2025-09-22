<script setup>
import { ref } from 'vue'
import RocketTap from '../assets/gameproject.png'
import WebProject from '../assets/webproject.png'
import WebProject2 from '../assets/webproject2.png'
import WebProjectDash from '../assets/webprojectdash.png'



const projects=ref([
    {
    title:'Employee Management Website',
    description:'A web application for employee management, featuring attendance tracking, leave management, and COVID-19 vaccination records.',
    image: WebProject,
    },
    {
    title:'Web based AR Landing Page',
    description:'Designed and developed a landing page for a web-based augmented reality project aimed at promoting a local coffee shop.',
    image: WebProjectDash,
    },
        {
    title:'Polymorph.cnb Web AR',
    description:'Developed a web-based AR experience to promote a local coffee shop, covering the full pipeline from 3D modeling to publishing.',
    image: WebProject2,
    },
    {
    title:'RocketTap Game',
    description:'Designed and developed a simple desktop game called RocketTap.',
    image: RocketTap,
    },


]);
</script>
<template>
<div class="relative mt-20 mb-10 text-slate-800 text-wrap  mx-4 dark:text-slate-200 flex flex-col">
    <header class="mx-auto text-2xl md:text-4xl  my-5 md:mt-20  lg:mt-30  font-medium ">
        <h1>Projects</h1>
    </header>

    <main>

        <section>
            <div class="mb-4 md:mb-10 lg:mx-auto  lg:w-[500px]   ">
                <p class="  text-sm md:text-base font-light   rounded-lg  text-center tracking-wider">A collection of my work so far, with many more projects on the horizon.</p>    
            </div>
        
        
        <div class=" md:flex md:gap-5 md:flex-wrap lg:grid lg:gap-x-0  lg:grid-cols-[40vw_40vw] 2xl:grid-cols-[30vw_30vw] lg:w-max lg:mx-auto rounded-lg inset-shadow-sm inset-shadow-indigo-200 ring-1 dark:ring-0 ring-blue-200 dark:inset-shadow-indigo-900  p-2">
        

            

                <div v-for="(project, index) in projects" :key="index" class="mx-auto my-8 md:my-4    w-[250px] md:w-[350px] xl:w-[330px]  rounded-3xl dark:shadow-lg/50 shadow-xl  shadow-blue-300 dark:shadow-blue-500/80 bg-linear-60 from-indigo-400 to-cyan-200 dark:from-slate-900 dark:to-indigo-950 inset-shadow-sm inset-shadow-indigo-100 dark:inset-shadow-indigo-500/70  p-2  ">
                    <img :src="project.image" :alt="project.title" class="  "/> 
                    <div class="text-wrap text-justify p-2">
                    <h1 class="text-center font-bold text-lg  md:text-xl"> {{ project.title  }}</h1>
                    <p class="text-justify align-bottom  mt-5 text-xs md:text-sm font-light  tracking-wide">{{ project.description }}</p>
                    </div>
                </div>
        </div>
        </section>
    </main>

</div>
</template>

