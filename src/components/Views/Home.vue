<template>
  <header class="background h-[100vh] ">
    <nav class="text-[#928A97] container mx-auto p-3">
      <ul class="flex items-center font-medium text-lg px-4">
        <span class="nav-background flex items-center justify-center">
          <li class="text-[#F44336] cursor-pointer">Home</li>
        </span>
        <li class="pl-3 cursor-pointer"> <a href="#About" >About</a></li>
        <li class="pl-3 cursor-pointer">Skills</li>
        <li class="pl-3 cursor-pointer">Works</li>
        <li class="pl-3 cursor-pointer">Contacts</li>
        <img src="" />
      </ul>
    </nav>

    <div class="text-[#928A97] container mx-auto pl-16 mt-56 ">
      <h1 class="uppercase font-bold tracking-wide text-5xl my-2 px-2">
        Adebola Ajagunna
      </h1>
      <P class="text-[#fff] text-2xl font-semibold px-2">Front-end Developer</P>
      <div class="flex items-center my-2">
        <img src="../../assets/ant-design_twitter-circle-filled.png" alt="twitter" class="px-2">
        <img src="../../assets/ant-design_github-filled.png" alt="github" class="px-2">
        <img src="../../assets/entypo-social_linkedin-with-circle.png" alt="linkedin" class="px-2">
      </div>
    </div>
  </header>
</template>

<style scoped>
.background {
  background-image: url("../../assets/Group 88.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.nav-background {
  background-image: url("../../assets/Group 50.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 5rem;
  width: 5rem;
}
</style>
