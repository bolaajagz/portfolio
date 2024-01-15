<template>
  <header class="background h-[100vh]">
    <nav class="text-[#928A97] container mx-auto p-3">
      <ul class="flex items-center font-medium text-lg px-4">
        <span class="nav-background flex items-center justify-center">
          <li class="text-[#F44336] cursor-pointer">Home</li>
        </span>
        <li class="pl-3 cursor-pointer"><a href="#About">About</a></li>
        <li class="pl-3 cursor-pointer">Skills</li>
        <li class="pl-3 cursor-pointer">Works</li>
        <li class="pl-3 cursor-pointer">Contacts</li>
        <img src="" />
      </ul>
    </nav>

    <div class="container mx-auto pl-16 mt-20">
      <div class="text-[#928A97] text-4xl heading mr-2">Hello There!</div>
      <div class="heading">
        <span class="text-[#928A97] text-4xl heading">My Name is</span>
      </div>
    </div>

    <div class="animated-title container mx-auto pl-16 mt-48 text-white text-8xl">
      <div class="text-top">
        <div>
          <span>Adebola Ajagunna</span>
          <span class="text-[#fff] text-5xl py-2 px-2">FrontEnd Developer</span>
        </div>
      </div>
      <div class="text-bottom">
        <div class="flex items-center my-2 py-2">
          <img
          src="../../assets/ant-design_twitter-circle-filled.png"
          alt="twitter"
          class="px-2"
        />
        <img
          src="../../assets/ant-design_github-filled.png"
          alt="github"
          class="px-2"
        />
        <img
          src="../../assets/entypo-social_linkedin-with-circle.png"
          alt="linkedin"
          class="px-2"
        /></div>
      </div>
    </div>

    <!-- <div class="text-[#928A97] container mx-auto pl-16 mt-56">
      <h1 class="uppercase font-bold tracking-wide text-5xl my-2 px-2">
        Adebola Ajagunna
      </h1>
      <P class="text-[#fff] text-2xl font-semibold px-2">Front-end Developer</P>
      <div class="flex items-center my-2">
        <img
          src="../../assets/ant-design_twitter-circle-filled.png"
          alt="twitter"
          class="px-2"
        />
        <img
          src="../../assets/ant-design_github-filled.png"
          alt="github"
          class="px-2"
        />
        <img
          src="../../assets/entypo-social_linkedin-with-circle.png"
          alt="linkedin"
          class="px-2"
        />
      </div>
    </div> -->
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

/* Animation Styles For Introduction*/
.heading {
  display: inline-block;
  white-space: nowrap;
}
.heading:first-of-type {
  animation: showup 7s infinite;
}

.heading:last-of-type {
  width: 0px;
  animation: reveal 7s infinite;
}

.heading:last-of-type span {
  margin-left: -355px;
  animation: slidein 7s infinite;
}

@keyframes showup {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes slidein {
  0% {
    margin-left: -800px;
  }
  20% {
    margin-left: -800px;
  }
  35% {
    margin-left: 0px;
  }
  100% {
    margin-left: 0px;
  }
}

@keyframes reveal {
  0% {
    opacity: 0;
    width: 0px;
  }
  20% {
    opacity: 1;
    width: 0px;
  }
  30% {
    width: 355px;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    width: 355px;
  }
}

/* Name Animation */
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

.animated-title > div {
  overflow: hidden;
}
.animated-title > div div span {
  display: block;
}

.animated-title > div.text-top div {
  animation: showTopText 7s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: #767676;
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 6s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
</style>
