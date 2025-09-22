<script setup>
import MyPict from '../assets/ppfull2.png'
</script>
<template>
<div class=" relative mt-20 mb-10 text-slate-800 text-wrap  mx-4 dark:text-slate-200 flex flex-col">
  <header class="mx-auto text-2xl md:text-4xl  my-5 md:mt-20 md:mb-10  lg:mt-30  font-medium ">
        <h1>About Me</h1>
  </header>

    <main>
      <section>

        <div class="space-y-10 lg:space-y-0 lg:gap-10 flex flex-col lg:grid lg:grid-cols-5   lg:w-[80dvw] lg:mx-auto rounded-lg inset-shadow-sm inset-shadow-indigo-200 ring-1 dark:ring-0 ring-blue-200 dark:inset-shadow-indigo-900  p-5 lg:p-10">
          <img :src="MyPict" alt="My Pict" class="w-[40dvw] sm:w-[30dvw]  lg:col-span-2 bg-amber-200 dark:bg-amber-100 dark:ring-1 dark:ring-indigo-500  rounded-full lg:my-auto   mx-auto shadow-xl/60  shadow-indigo-400/60 dark:shadow-blue-900  ">
        
        <p class="text-left text-sm lg:text-lg  content-center lg:col-span-3 lg:col-start-3 ">
          Hi, my name is Gerald Salatnaya. I'm a web and game developer based in Manado, North Celebes. I build digital experiences that are as beautiful as they are functional. With a background in web and game development and a deep passion for visual art, I bring creativity and precision to every project — from designing intuitive user interfaces to developing full-stack applications that meet real-world business needs. <br><br>
          Art fuels my process. Whether I'm crafting immersive game environments or refining the flow of a website, I focus on clarity, usability, and visual impact. If you're looking for a developer who thinks like a designer and codes like an engineer, let's create something remarkable together.
        </p>
        </div>

      </section>
    </main>

</div>
</template>
