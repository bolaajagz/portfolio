<template>
  <main class="container mx-auto" v-if="sliderComponent === 0">
    <div class="md:flex gap-60 items-center">
      <div>
        <img src="../../assets/BG-vector.png" alt="skills-vector" class="" />
        <img
          src="../../assets/BG-skills.png"
          alt="skills"
          class="relative bottom-40 left-12 w-1/2 md:w-full"
        />
        
          <i @click="Next"
            class="zmdi zmdi-arrow-right text-4xl relative bottom-96 left-[89.2%] text-white bg-[#928A97] w-[6.25rem] h-[4rem] flex justify-center items-center rounded-l-full"
          ></i>
        
      </div>

      <div class="max-w-[617px] text-center md:text-left">
        <h1 class="text-[#F44336] text-3xl font-semibold">Works</h1>
        <h2 class="text-[#F44336] text-2xl font-medium my-1">Lorem Ipsum</h2>
        <p class="text-[#000C24] text-2xl leading-10 my-3">
          An inquisitive Computer Science Engineering student, skilled in
          leadership, seeking to leverage solid development skills with focus on
          collaboration, communication and passion.
        </p>
        <ul class="grid grid-cols-3 md:flex gap-6">
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            HTML5
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            CSS3
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            Javascript
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            ReactJs
          </li>
        </ul>
      </div>
    </div>
  </main>

  <main class="container mx-auto"  v-else-if="sliderComponent === 1" >
    <div class="md:flex gap-60 items-center">
      <div>
        <img src="../../assets/BG-vector.png" alt="skills-vector" class="" />
        <img
          src="../../assets/BG-skills.png"
          alt="skills"
          class="relative bottom-40 left-12 w-1/2 md:w-full"
        />
        
          <i @click="Next"
            class="zmdi zmdi-arrow-right text-4xl relative bottom-96 left-[89.2%] text-white bg-[#928A97] w-[6.25rem] h-[4rem] flex justify-center items-center rounded-l-full"
          ></i>
        
      </div>
        

      <div class="max-w-[617px] text-center md:text-left">
        <h1 class="text-[#F44336] text-3xl font-semibold">Works</h1>
        <h2 class="text-[#F44336] text-2xl font-medium my-1">Loremm Ipsum</h2>
        <p class="text-[#000C24] text-2xl leading-10 my-3">
          An inquisitive Computer Science Engineering student, skilled in
          leadership, seeking to leverage solid development skills with focus on
          collaboration, communication and passion.
        </p>
        <ul class="grid grid-cols-3 md:flex gap-6">
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            HTML5
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            CSS3
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            Javascript
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            ReactJs
          </li>
        </ul>
      </div>
    </div>
  </main>

  <main class="container mx-auto"  v-else >
    <div class="md:flex gap-60 items-center">
      <div>
        <img src="../../assets/BG-vector.png" alt="skills-vector" class="" />
        <img
          src="../../assets/BG-skills.png"
          alt="skills"
          class="relative bottom-40 left-12 w-1/2 md:w-full"
        />
          <i @click="Next"
            class="zmdi zmdi-arrow-right text-4xl relative bottom-96 left-[89.2%] text-white bg-[#928A97] w-[6.25rem] h-[4rem] flex justify-center items-center rounded-l-full"
          ></i>
      </div>
        

      <div class="max-w-[617px] text-center md:text-left">
        <h1 class="text-[#F44336] text-3xl font-semibold">Workkss</h1>
        <h2 class="text-[#F44336] text-2xl font-medium my-1">Loremm Ipsumm</h2>
        <p class="text-[#000C24] text-2xl leading-10 my-3">
          An inquisitive Computer Science Engineering student, skilled in
          leadership, seeking to leverage solid development skills with focus on
          collaboration, communication and passion.
        </p>
        <ul class="grid grid-cols-3 md:flex gap-6">
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            HTML5
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            CSS3
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            Javascript
          </li>
          <li class="bg-[#928A97] text-white py-4 px-8 rounded-lg text-sm">
            ReactJs
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Works",
  data(){
    return {
      sliderComponent: 0,
    }
  },
  methods: {
    Next(){
      this.sliderComponent = (this.sliderComponent + 1) % 3
    }
  } 
};
</script>

<style></style>
