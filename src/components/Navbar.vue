<script setup lang="ts">
import { ref } from 'vue'
import { onMounted, onUnmounted } from 'vue'

//Toggle Light/Dark Mode
const isDarkMode = ref(localStorage.getItem('theme') === 'dark' );
const toggleDarkMode = ()=>{
    const html = document.documentElement;
    if(isDarkMode.value){
        html.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else{
        html.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    isDarkMode.value = !isDarkMode.value;
};



// Navbar
const open = ref(false)
const dropdownButtonRef = ref<HTMLButtonElement | null>(null)

const toggleNavbar = () => {
  open.value = !open.value
}


// Custom composition function to handle click outside
const handleClickOutside = (event: MouseEvent) => {
  if (dropdownButtonRef.value && !dropdownButtonRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

////////

const isChecked = ref(false)

const handleCheckboxChange = () => {
  isChecked.value = !isChecked.value
}

</script>


<template>
    <header class="transition duration-300 ease-in-out fixed z-10 top-0 left-0  flex  w-full items-center bg-slate-100 dark:bg-slate-900  text-indigo-900 dark:text-indigo-200 ">
    <div class=" container xl:max-w-full">
      <div class=" my-4 lg:my-2 flex items-center justify-between  ">
        
          <h1 class="ml-4 lg:ml-8 2xl:ml-10 text-xl font-bold tracking-wider text-shadow-xs text-shadow-indigo-700 font-[Outfit]  lg:text-2xl  ">imGegeg;</h1>
        
        <div class=" flex w-full lg:w-max items-center  justify-end  mx-20 sm:mx-10 md:mx-16  lg:mx-0   lg:right-10 xl:right-10  lg:absolute">
          
          <label  class="flex items-center scale-80 md:scale-100 lg:z-20   md:mr-4 lg:mr-0 cursor-pointer select-none text-dark dark:text-white">
            <div class="relative">
             <input type="button" class="toggleEight sr-only" @click="toggleDarkMode"/>
                     <div
                       class="h-5 transition rounded-full  shadow-inner  bg-indigo-200 dark:bg-slate-950 w-14 "
                     ></div>
                       <div
                         :class="{ 'translate-x-full !bg-primary !text-indigo-300' :isDarkMode}"
                         class="absolute left-0 flex items-center justify-center transition bg-white rounded-full shadow-switch-1 -top-1 h-7 w-7 dark:bg-indigo-600 text-indigo-400"
                       >
                         <span class="w-4 h-4 border border-current rounded-full bg-inherit active"></span>
                       </div>
            </div>
          </label>
        </div>

  
           
            

            <button
              @click="toggleNavbar"
              ref="dropdownButtonRef"
              id="navbarToggler"
              class="absolute right-3  md:right-5 top-1/2 block -translate-y-1/2 rounded-lg px-2 py-[4px]  focus:ring-blue-800 focus:ring-1 select-none  lg:hidden"
            >
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-indigo-800  dark:bg-indigo-200"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-indigo-800 dark:bg-indigo-200"
              ></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-indigo-800 dark:bg-indigo-200"
              ></span>
            </button>
             
            <nav
              :class="{ hidden: !open  }"
              id="navbarCollapse"
              class=" absolute  right-4 top-14 md:right-18 md:top-32 md:scale-140 lg:scale-100  z-10  w-full max-w-[250px] rounded-lg bg-slate-100  px-6 py-5 shadow-md shadow-indigo-200 dark:bg-slate-950 lg:dark:bg-transparent  dark:shadow-inner dark:shadow-indigo-800 dark:inset-ring-1 lg:dark:inset-ring-0 lg:dark:shadow-none dark:inset-ring-indigo-700 lg:static lg:top-0  lg:flex lg:flex-row    lg:max-w-full lg:shadow-none lg:bg-transparent"
            >
              <ul class="  ">
                
                  <li class="flex flex-col lg:flex-row text-left lg:text-center py-2 space-y-5  lg:py-0 lg:space-y-0 lg:absolute lg:right-40 lg:top-2  xl:space-x-24 lg:space-x-16  md:text-base  tracking-wide font-medium text-indigo-900 dark:text-amber-50 dark:hover:text-white  ">
                    <router-link to="/"> Home </router-link>
                    <router-link to="/about"> About Me </router-link>
                    <router-link to="/project"> Project </router-link>
                    <router-link to="/contact"> Contact </router-link>
                  </li>
                
              </ul>
            </nav>
          

        
      </div>
    </div>
  </header>
</template>