<script >
import emailjs, { send } from '@emailjs/browser';

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      message: '',
      status: false,
      hideTimeout: null,
      errors: {
        name: null,
        email: null,
        message: null,
      },
      emailRegex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    }
  },

  methods: {
      
    sendEmail() {
       
        emailjs.sendForm('service_cfvbv2i', 'template_8vnz9k8', this.$refs.form,
         {
          publicKey: 'BVd2w47vL5v3BAKus',
          name: this.name,
          email: this.email,
          message: this.message
        })

     .then(
          () => {
            
              setTimeout(()=> {
              this.status = true;
              if(this.hideTimeout) clearTimeout(this.hideTimeout);

              this.hideTimeout = setTimeout(()=> {
                this.status = false;
              }, 3000);
            },   0);
            console.log('SUCCESS!');

          },

          (error) => {
            console.log('FAILED...', error.text);

          },
        );

      // Reset form field
      this.name = '',
      this.email = '',
      this.message = ''

    },
    // Input validation function
     myfunc() {
        this.errors = {name: null, email: null, message: null};
        if(!this.name){
            this.errors.name = "Name cannot be empty";
            
        }

        if(!this.email){
           this.errors.email = "Email cannot be empty";
            
        } else if(!this.emailRegex.test(this.email)){
               this.errors.email = "Invalid email format";
            
          }
        

        if(!this.message){
            this.errors.message = "Please write something";
            
        }

        if(!this.errors.name && !this.errors.email && !this.errors.message){
            this.sendEmail() ;
           

        }

      
      },
        
  }
};

</script>


<template>
<div class=" relative mt-20 mb-10 text-slate-800 text-wrap  mx-4 dark:text-slate-200 flex flex-col">
        <header class="mx-auto text-2xl md:text-4xl  my-5 md:mt-20  lg:mt-30  font-medium ">
        <h1>Contact</h1>
        </header>

  <main>
    <section>
            <div class="mb-4 md:mb-10 lg:mx-auto  lg:w-[500px]   ">
                <p class="  text-sm md:text-base font-light   rounded-lg  text-center tracking-wider">Whether it’s feedback, freelance, or just a hello—my inbox is open.</p>    
            </div>
        
      <!-- White Frame -->
      <div class=" md:flex md:gap-5 md:flex-wrap  lg:flex lg:flex-col lg:w-[700px] lg:mx-auto rounded-lg inset-shadow-sm inset-shadow-indigo-200 ring-1 dark:ring-0 ring-blue-200 dark:inset-shadow-indigo-900  p-2">
                  
              <!-- Contact Link Section -->
              <div class=" mx-auto my-8 md:my-4 text-slate-700 dark:text-inherit   md:grid-cols-3  md:grid  w-[70dvw]   md:w-[100%]  xl:min-w-full rounded-3xl dark:shadow-lg/50 shadow-xl  shadow-blue-300 dark:shadow-blue-500/80 bg-linear-60 from-indigo-400 to-cyan-200 dark:from-slate-900 dark:to-indigo-950 inset-shadow-sm inset-shadow-indigo-100 dark:inset-shadow-indigo-500/70  p-2  ">
                   <div class="flex flex-row items-center mb-5 p-3 justify-between md:col-span-3"><h1 class="text-2xl lg:text-3xl  text-left font-bold text-slate-100 text-shadow-blue-400  dark:text-shadow-blue-800 text-shadow-lg dark:text-shadow-sm dark:text-blue-400  ">Let's Connect</h1><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path fill="url(#SVGgmyo5dri)" d="M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.756 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44s8.15-.837 11.08-2.62C36.058 39.567 38 36.756 38 33v-.751A4.25 4.25 0 0 0 33.75 28z"/><path fill="url(#SVGQ4SU8cmS)" d="M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.756 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44s8.15-.837 11.08-2.62C36.058 39.567 38 36.756 38 33v-.751A4.25 4.25 0 0 0 33.75 28z"/><path fill="url(#SVG4sFIVbHm)" fill-opacity="0.5" d="M10.25 28A4.25 4.25 0 0 0 6 32.249V33c0 3.756 1.942 6.567 4.92 8.38C13.85 43.163 17.786 44 22 44s8.15-.837 11.08-2.62C36.058 39.567 38 36.756 38 33v-.751A4.25 4.25 0 0 0 33.75 28z"/><path fill="url(#SVGWz3VKcnv)" d="M22 4c-5.523 0-10 4.477-10 10s4.477 10 10 10s10-4.477 10-10S27.523 4 22 4"/><path fill="url(#SVGJWMMgdMm)" fill-rule="evenodd" d="M35 46c6.075 0 11-4.925 11-11s-4.925-11-11-11s-11 4.925-11 11s4.925 11 11 11" clip-rule="evenodd"/><path fill="#fff" fill-rule="evenodd" d="M35 27a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6h-6a1 1 0 1 1 0-2h6v-6a1 1 0 0 1 1-1" clip-rule="evenodd"/><defs><linearGradient id="SVGgmyo5dri" x1="13.61" x2="18.779" y1="30.127" y2="46.635" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="SVGQ4SU8cmS" x1="22" x2="29.238" y1="26.095" y2="53.143" gradientUnits="userSpaceOnUse"><stop stop-color="#885edb" stop-opacity="0"/><stop offset="1" stop-color="#e362f8"/></linearGradient><linearGradient id="SVGWz3VKcnv" x1="16.756" x2="26.949" y1="6.659" y2="22.934" gradientUnits="userSpaceOnUse"><stop offset=".125" stop-color="#9c6cfe"/><stop offset="1" stop-color="#7a41dc"/></linearGradient><linearGradient id="SVGJWMMgdMm" x1="24.786" x2="39.968" y1="28.125" y2="43.899" gradientUnits="userSpaceOnUse"><stop stop-color="#52d17c"/><stop offset="1" stop-color="#22918b"/></linearGradient><radialGradient id="SVG4sFIVbHm" cx="0" cy="0" r="1" gradientTransform="rotate(90 .5 35)scale(20.5)" gradientUnits="userSpaceOnUse"><stop offset=".493" stop-color="#30116e"/><stop offset=".912" stop-color="#30116e" stop-opacity="0"/></radialGradient></defs></g></svg></div>
                <!-- GitHub -->
                    <a target="_blank" href="https://github.com/geraldsalatnaya" class=" grid grid-cols-6 items-center space-x-4  duration-300 ease-in-out bg-indigo-100/40 dark:bg-blue-900/30 hover:text-slate-100 hover:scale-105   hover:bg-indigo-500/20 p-2 m-2 rounded-2xl "> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 256 250">

                        <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403Z"
                         fill="url(#portfolioGradient)"
                         stroke="#1d2951"
                         stroke-width="3"
                        /></svg>
                        <h1 class="col-start-3 sm:col-start-2 md:col-start-3 ">Github</h1>
                        <div class=" col-start-6 mx-auto rotate-90  ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none"><path fill="url(#SVGbTQNAawV)" d="M10.287 2.057a.75.75 0 0 0-.817.163L5.22 6.47a.75.75 0 0 0 1.06 1.06l2.97-2.97v7.69a.75.75 0 0 0 1.5 0V4.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.8.8 0 0 0-.243-.163M3.75 9a.75.75 0 0 1 .75.75v4c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-4A.75.75 0 0 1 3.75 9"/><defs><radialGradient id="SVGbTQNAawV" cx="0" cy="0" r="1" gradientTransform="matrix(15.62873 20.07924 -16.84135 13.1085 1.371 -2.142)" gradientUnits="userSpaceOnUse"><stop offset=".283" stop-color="#0fafff"/><stop offset="1" stop-color="#0078d4"/></radialGradient></defs></g></svg>
                        </div>
                    </a>
                  
                    <!-- LinkedIn -->
                    <a target="_blank" href="https://www.linkedin.com/in/gerald-salatnaya-317190370/" class=" grid grid-cols-6 items-center space-x-4   duration-300 ease-in-out bg-indigo-100/40 dark:bg-blue-900/30 hover:text-slate-100 hover:scale-105   hover:bg-indigo-500/20 p-2 m-2 rounded-2xl "> 
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none"><path fill="url(#SVGbTQNAawV)" d="M10.287 2.057a.75.75 0 0 0-.817.163L5.22 6.47a.75.75 0 0 0 1.06 1.06l2.97-2.97v7.69a.75.75 0 0 0 1.5 0V4.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.8.8 0 0 0-.243-.163M3.75 9a.75.75 0 0 1 .75.75v4c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-4A.75.75 0 0 1 3.75 9"/><defs><radialGradient id="SVGbTQNAawV" cx="0" cy="0" r="1" gradientTransform="matrix(15.62873 20.07924 -16.84135 13.1085 1.371 -2.142)" gradientUnits="userSpaceOnUse"><stop offset=".283" stop-color="#0fafff"/><stop offset="1" stop-color="#0078d4"/></radialGradient></defs></g></svg>
                    </div>
                    </a>
                  
                    <!-- Instagram -->
                    <a target="_blank" href="https://www.instagram.com/imgegeg/" class=" grid grid-cols-6 items-center space-x-4   duration-300 ease-in-out bg-indigo-100/40 dark:bg-blue-900/30 hover:text-slate-100 hover:scale-105   hover:bg-indigo-500/20 p-2 m-2 rounded-2xl "> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="40" viewBox="0 -1 265 265">
                        <path 
                        d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575c4.48 4.479 7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723c0 34.178-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718c-4.479 4.479-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746c-34.18 0-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723c0-34.177.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672c7.116 7.116 14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763c7.116-7.116 11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27c-36.302 0-65.73 29.43-65.73 65.73c0 36.302 29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36c-8.483 0-15.36-6.876-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36c8.484 0 15.36 6.877 15.36 15.36Z"
                        fill="url(#portfolioGradient)" 
                        stroke="#1d2951"
                        stroke-width="2.5"
                        />
                    </svg>
                    <h1 class=" col-start-3 sm:col-start-2 md:col-start-3 ">Instagram</h1>
                    <div class=" col-start-6 mx-auto rotate-90  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g fill="none"><path fill="url(#SVGbTQNAawV)" d="M10.287 2.057a.75.75 0 0 0-.817.163L5.22 6.47a.75.75 0 0 0 1.06 1.06l2.97-2.97v7.69a.75.75 0 0 0 1.5 0V4.56l2.97 2.97a.75.75 0 1 0 1.06-1.06l-4.25-4.25a.8.8 0 0 0-.243-.163M3.75 9a.75.75 0 0 1 .75.75v4c0 .966.784 1.75 1.75 1.75h7.5a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 13.75 17h-7.5A3.25 3.25 0 0 1 3 13.75v-4A.75.75 0 0 1 3.75 9"/><defs><radialGradient id="SVGbTQNAawV" cx="0" cy="0" r="1" gradientTransform="matrix(15.62873 20.07924 -16.84135 13.1085 1.371 -2.142)" gradientUnits="userSpaceOnUse"><stop offset=".283" stop-color="#0fafff"/><stop offset="1" stop-color="#0078d4"/></radialGradient></defs></g></svg>
                    </div>
                    </a>                                      
              </div>    
                      
                      <!-- Email Form -->
                      <div class=" mx-auto my-20 md:my-10 text-slate-700 dark:text-inherit   w-[80vw] sm:w-[70dvw]  md:w-[500px]  xl:w-[350px]  rounded-3xl dark:shadow-lg/50 shadow-xl  shadow-blue-300 dark:shadow-blue-500/80 bg-linear-60 from-indigo-400 to-cyan-200 dark:from-slate-900 dark:to-indigo-950 inset-shadow-sm inset-shadow-indigo-100 dark:inset-shadow-indigo-500/70 p-5  ">    
                      <div class="flex flex-row items-center mb-10  justify-between"><h1 class="text-2xl lg:text-3xl  text-left font-bold text-slate-100 text-shadow-blue-400  dark:text-shadow-blue-800 text-shadow-lg dark:text-shadow-sm dark:text-blue-400  ">Drop me a message</h1><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><g fill="none"><path fill="url(#SVG9cjY5ddb)" d="M2 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill="url(#SVG6DGV4bhV)" fill-opacity="0.7" d="M2 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill="url(#SVG9cjY5ddb)" d="M2 8a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill="url(#SVG6DGV4bhV)" fill-opacity="0.7" d="M2 8a1 1 0 0 1 1-1h11a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill="url(#SVG9cjY5ddb)" d="M2 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill="url(#SVG6DGV4bhV)" fill-opacity="0.7" d="M2 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1"/><path fill="url(#SVGayoDnoJZ)" d="m3.587 15.353l11.059-11.06l5.06 5.061l-11.058 11.06l-3.944-1.116z"/><path fill="url(#SVGJmVClexr)" d="M3.941 15a3.1 3.1 0 0 0-.825 1.476L2.02 21.078a.75.75 0 0 0 .904.903l4.601-1.096a3.1 3.1 0 0 0 1.477-.825s-1.824-.41-3.238-1.823C4.35 16.822 3.941 15 3.941 15"/><path fill="url(#SVG21SNabNt)" d="M20.952 3.048a3.58 3.58 0 0 0-5.061 0l-2.306 2.306l5.06 5.06l2.307-2.305a3.58 3.58 0 0 0 0-5.06"/><path fill="url(#SVGU3e2pKqw)" d="m12.78 6.16l2.12-2.12s.41 1.823 1.824 3.237S19.96 9.1 19.96 9.1l-2.12 2.122s-1.824-.41-3.238-1.823c-1.415-1.415-1.823-3.237-1.823-3.237"/><defs><linearGradient id="SVG9cjY5ddb" x1="-.4" x2="5.356" y1="1.571" y2="17.095" gradientUnits="userSpaceOnUse"><stop stop-color="#36dff1"/><stop offset="1" stop-color="#0094f0"/></linearGradient><linearGradient id="SVGayoDnoJZ" x1="13.137" x2="15.444" y1="8.468" y2="14.709" gradientUnits="userSpaceOnUse"><stop stop-color="#ffa43d"/><stop offset="1" stop-color="#fb5937"/></linearGradient><linearGradient id="SVGJmVClexr" x1=".997" x2="6.044" y1="16.951" y2="21.967" gradientUnits="userSpaceOnUse"><stop offset=".255" stop-color="#ffd394"/><stop offset="1" stop-color="#ff921f"/></linearGradient><linearGradient id="SVG21SNabNt" x1="20.24" x2="17.137" y1="3.751" y2="6.668" gradientUnits="userSpaceOnUse"><stop stop-color="#f97dbd"/><stop offset="1" stop-color="#dd3ce2"/></linearGradient><linearGradient id="SVGU3e2pKqw" x1="16.495" x2="11.42" y1="8.955" y2="6.736" gradientUnits="userSpaceOnUse"><stop stop-color="#ff921f"/><stop offset="1" stop-color="#ffe994"/></linearGradient><radialGradient id="SVG6DGV4bhV" cx="0" cy="0" r="1" gradientTransform="rotate(133.903 2.54 9.496)scale(16.4811 7.26581)" gradientUnits="userSpaceOnUse"><stop stop-color="#4a43cb"/><stop offset="1" stop-color="#4a43cb" stop-opacity="0"/></radialGradient></defs></g></svg></div>
                        
                        <form ref="form" @submit.prevent="myfunc" class="flex flex-col space-y-2   ">
                                <label class="font-semibold">Name</label>
                                <input 
                                  class="bg-blue-100/70 dark:bg-blue-500/20 rounded-xl p-2 outline-0"
                                  type="text" 
                                  v-model.trim="name"
                                  name="name"
                                  :class="{invalid: errors.name}"
                                  placeholder="Your Name">
                                  <p v-if="errors.name" class="text-red-500/80 text-xs">* {{ errors.name }} *</p>
                                
                                <label class="font-semibold">Email</label>
                                <input
                                class="bg-blue-100/70 dark:bg-blue-500/20  rounded-xl p-2 outline-0" 
                                  type="email" 
                                  v-model.trim="email"
                                  name="email"
                                  :class="{invalid: errors.email}"
                                  placeholder="Your Email">
                                  <p v-if="errors.email" class="text-red-500/80 text-xs">* {{ errors.email }} *</p>

                                <label class="font-semibold">Message</label>
                                <textarea 
                                  class="resize-none bg-blue-100/70 dark:bg-blue-500/20 rounded-xl p-2 outline-0"
                                  name="message"
                                  v-model="message"
                                  cols="30" rows="5"
                                  placeholder="Message"
                                  :class="{invalid: errors.message}">
                                </textarea>
                                <p v-if="errors.message" class="text-red-500/80 text-xs">* {{ errors.message }} *</p>
                              
                                <input
                                @input="myfunc"
                                 type="submit" value="Send"class="outline-0 focus:scale-105 w-[200px] mx-auto p-2 my-5 ring-1 ring-indigo-500 dark:ring-indigo-600 duration-300 ease-in-out bg-linear-to-t dark:from-transparent from-blue-100/40 dark:hover:from-transparent hover:from-indigo-400 dark:bg-blue-900/80 hover:font-medium hover:scale-105  hover:dark:bg-blue-900 cursor-pointer rounded-xl ">
                                 

                      </form>
                      </div>

 
      </div>
    </section>
  </main>
<div v-if="status"   class="fixed top-1/2 self-center  text-lg font-semibold tracking-wider  bg-emerald-300 dark:bg-emerald-400  rounded-2xl p-5 items-center flex flex-row space-x-2">
<h1 >Email has been sent</h1><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none"><path fill="#367af2" d="M4 15.42v18.33A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V15.5L24.582 25.724a1.25 1.25 0 0 1-1.168-.002z"/><path fill="url(#SVG9uDrcZUx)" d="M4 15.42v18.33A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V15.5L24.582 25.724a1.25 1.25 0 0 1-1.168-.002z"/><path fill="url(#SVGkPPLtdEu)" d="M4 15.42v18.33A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V15.5L24.582 25.724a1.25 1.25 0 0 1-1.168-.002z"/><path fill="url(#SVG1EOghF8v)" fill-opacity="0.75" d="M4 15.42v18.33A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V15.5L24.582 25.724a1.25 1.25 0 0 1-1.168-.002z"/><path fill="url(#SVG72PJueUR)" fill-opacity="0.7" d="M4 15.42v18.33A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V15.5L24.582 25.724a1.25 1.25 0 0 1-1.168-.002z"/><path fill="url(#SVGCdktzmgW)" d="M4.02 13.747A6.25 6.25 0 0 1 10.25 8h27.5A6.25 6.25 0 0 1 44 14.25v1.38L24.582 25.854a1.25 1.25 0 0 1-1.168-.002L4 15.551V14.25q0-.254.02-.503"/><defs><linearGradient id="SVG9uDrcZUx" x1="31" x2="39.662" y1="19.5" y2="40.944" gradientUnits="userSpaceOnUse"><stop offset=".199" stop-color="#0094f0" stop-opacity="0"/><stop offset=".431" stop-color="#0094f0"/></linearGradient><linearGradient id="SVGkPPLtdEu" x1="18.286" x2="7.955" y1="18.008" y2="41.831" gradientUnits="userSpaceOnUse"><stop offset=".191" stop-color="#0094f0" stop-opacity="0"/><stop offset=".431" stop-color="#0094f0"/></linearGradient><linearGradient id="SVG1EOghF8v" x1="34.547" x2="36.228" y1="30.084" y2="42.272" gradientUnits="userSpaceOnUse"><stop stop-color="#2764e7" stop-opacity="0"/><stop offset="1" stop-color="#2764e7"/></linearGradient><linearGradient id="SVG72PJueUR" x1="30.191" x2="33.258" y1="18.439" y2="43.244" gradientUnits="userSpaceOnUse"><stop offset=".533" stop-color="#ff6ce8" stop-opacity="0"/><stop offset="1" stop-color="#ff6ce8"/></linearGradient><linearGradient id="SVGCdktzmgW" x1="15.883" x2="28.057" y1="2.275" y2="34.261" gradientUnits="userSpaceOnUse"><stop stop-color="#6ce0ff"/><stop offset=".462" stop-color="#29c3ff"/><stop offset="1" stop-color="#4894fe"/></linearGradient></defs></g></svg>
</div>
</div>
</template>
