<script setup>
import VueTypewriterEffect from "vue-typewriter-effect";
import MyPict from "../assets/pp.png";




</script>
<template>

<div class="relative mt-20 xl:mt-32 text-slate-800   mx-4 dark:text-slate-200 flex flex-col xl:grid xl:grid-cols-2  xl:grid-rows-[300px_minmax(350px,1fr)_100px] xl:max-h-screen">
    
    <div class="text-left text-xl lg:text-2xl xl:text-4xl  my-5 md:mt-20 lg:my-0   lg:mt-30   md:ml-4 h-12 lg:h-0 xl:h-7 flex flex-row font-medium xl:w-fit">
       <VueTypewriterEffect :cursor="('|')" :strings ="['Hello, my name is Gerald.', 'Welcome to my personal page', 'lets begin shall we?']" />
      
    </div>

    <div class="mx-auto my-5   lg:mb-10 lg:my-20 xl:mt-5 w-[250px] md:w-[300px]   xl:w-[340px] xl:relative  rounded-full ">
      <img :src="MyPict" alt="My Pict" class="rounded-full mx-auto shadow-lg shadow-indigo-400/50 dark:shadow-blue-950   "/>
    </div>
    

    
      <div class="mb-4 md:mb-10  xl:mb-0 xl:col-start-2 xl:mt-22  xl:w-fit xl:mx-8">
        <h1 class="dark:bg-indigo-950/20 inset-shadow-sm ring-1 dark:ring-indigo-800 dark:inset-shadow-indigo-900 ring-indigo-400 inset-shadow-indigo-300  bg-indigo-100/70 text-md md:text-xl font-light  rounded-lg  text-wrap text-justify p-6">I'm a Web Developer fueled by a passion for crafting seamless experiences across both frontend and backend. Lately, I’ve been diving headfirst into Game Development exploring how interactivity and storytelling collide in code.</h1>    
      </div>
      <section class="flex flex-row items-start  justify-evenly    xl:col-start-2 ">
         <!-- GitHub -->
                    <a target="_blank" href="https://github.com/geraldsalatnaya" class=" grid grid-cols-1 items-center space-x-4  duration-300 ease-in-out bg-indigo-100/40 dark:bg-blue-900/30 hover:text-slate-100 hover:scale-105   hover:bg-indigo-500/20 p-2 m-2 rounded-2xl "> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 256 250">

                        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"
                         fill="url(#portfolioGradient)"
                         stroke="#1d2951"
                         stroke-width="3"
                        /></svg>
                        <h1 class="col-start-3 sm:col-start-2 md:col-start-3 ">Github</h1>
                        <div class=" col-start-6 mx-auto rotate-90  ">
                        
                        </div>
                    </a>
                  
                    <!-- LinkedIn -->
                    <a target="_blank" href="https://www.linkedin.com/in/gerald-salatnaya-317190370/" class=" grid grid-cols-1 items-center space-x-4   duration-300 ease-in-out bg-indigo-100/40 dark:bg-blue-900/30 hover:text-slate-100 hover:scale-105   hover:bg-indigo-500/20 p-2 m-2 rounded-2xl "> 
                    <svg width="47" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <linearGradient id="portfolioGradient" x1="50%" y1="0%" x2="20%" y2="100%">
                            <stop offset="0%" stop-color="#00FFFF" />   <!-- Purple -->
                            <stop offset="100%" stop-color="#7F00FF" /> <!-- Teal -->
                          </linearGradient>
                        </defs>
                      
                        <path 
                          d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
                          fill="url(#portfolioGradient)"
                          stroke="#1d2951"
                          stroke-width="0.5"
                        />
                    </svg>
                    <h1 class=" col-start-3 sm:col-start-2 md:col-start-3 ">LinkedIn</h1>
                    <div class=" col-start-6 mx-auto rotate-90  ">
                  
                    </div>
                    </a>

      </section>
    

</div>

</template>