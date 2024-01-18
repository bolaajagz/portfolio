<template>
  <header class="background h-[100vh]">
    <nav class="text-[#928A97] container mx-auto p-3">
      <ul ref="navItems" class="flex items-center font-medium px-4 text-lg">
        <!-- <span class="nav-background flex items-center justify-center">
          <RouterLink to="/" class="text-[#F44336] cursor-pointer">Home</RouterLink>
        </span>
        <RouterLink to="/About" class="pl-3 cursor-pointer">About</RouterLink>
        <RouterLink to="/Skills" class="pl-3 cursor-pointer">Skills</RouterLink>
        <RouterLink to="/Works" class="pl-3 cursor-pointer">Works</RouterLink>
        <RouterLink to="/Contact" class="pl-3 cursor-pointer">Contacts</RouterLink> -->

        <span class="nav-background flex items-center justify-center">
          <li ref="navItemHome" class="text-[#F44336] cursor-pointer md:text-3xl">Home</li>
        </span>
        <li ref="navItemAbout"  class="pl-3 cursor-pointer md:text-3xl">About</li>
        <li ref="navItemSkills" class="pl-3 cursor-pointer md:text-3xl">Skills</li>
        <li ref="navItemWorks" class="pl-3 cursor-pointer md:text-3xl">Works</li>
        <li ref="navItemContacts" class="pl-3 cursor-pointer md:text-3xl">Contacts</li>
        <img src="" />
      </ul>
    </nav>

    <div ref="heading" class="container mx-auto pl-16  md:mt-48 mt-12">
      <div class="text-[#928A97] text-4xl mr-2">Hey There!</div>
      <div class="hading mt-10">
        <span class="text-[#928A97] text-4xl">I'm</span>
      </div>
    </div>

    <div
      class="animated-title container mx-auto pl-16 md:mt-38 mt-12  text-white md:text-8xl text-7xl"
    >  
      <div class="text-top">
        <div>
          <span>Adebola Ajagunna</span>
          <span class="text-[#fff] text-5xl py-4 px-2">A Frontend Developer</span>
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
          />
        </div>
      </div>
      
    </div>
  </header>
</template>

<script>
import {gsap} from "gsap";
export default {
  mounted() {
    var tl = gsap.timeline({ repeatDelay: 1});
    tl.from(this.$refs.navItems, { duration: 2, opacity: 0 });

    tl.from(this.$refs.heading, { duration: 2, y: -300, ease: 'power1.inOut', opacity: 0 });

    tl.from(this.$refs.navItemHome, { duration: 1, y: -70, ease: 'bounce.out' });
    tl.from(this.$refs.navItemAbout, { duration: 1, y: -70, ease: 'bounce.out'});
    tl.from(this.$refs.navItemSkills, { duration: 1, y: -70, ease: 'bounce.out' });
    tl.from(this.$refs.navItemWorks, { duration: 1, y: -70, ease: 'bounce.out'  });
    tl.from(this.$refs.navItemContacts, { duration: 1, y: -70, ease: 'bounce.out'  });

  },
};
</script>
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
  height: 6rem;
  width: 6rem;
}

/* Animation Styles For Introduction*/

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
  0% {
    transform: translate3d(0, 100%, 0);
  }
  40%,
  60% {
    transform: translate3d(0, 50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes showBottomText {
  0% {
    transform: translate3d(0, -100%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
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
