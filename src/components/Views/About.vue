<template id="About">
  <main class="background h-[100vh]">
    <div class="container mx-auto  justify-between gap-36 md:flex md:items-center">
      <div class="">
        <img src="../../assets/BG.png" alt="about-me_design" class="" />
        <img
          src="../../assets/about-me.jpg"
          alt="About-me"
          class="relative bottom-32 left-14 image w-1/2 md:w-full"
        />
      </div>

      <div class="md:w-1/2 text-center">
        <h1 class="text-[#F44336] text-4xl font-semibold">About Me</h1>
        <p class="text-[#000C24] text-2xl leading-10 mt-6">
         <span class="text-[#f44336]">An inquisitive </span>Computer  Engineering student, skilled in
          leadership, seeking to leverage solid development skills with focus on
          collaboration, communication and passion.
        </p>
        <a
          href="src\assets\Adebola Damilare Ajagunna Resume.pdf"
          Download="Resume"
        >
          <button
            type="button"
            class="text-[#fff] bg-[#000C24] py-4 px-6 rounded-sm mt-12"
          >
            Download CV <i class="zmdi zmdi-download"></i>
          </button>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style scoped>
.background {
  background-image: url("../../assets/Group 89.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.image {
  transform: skewY(-6deg);
  transform-origin: top left;
}
</style>
