<template id="About">
  <main class="background h-[100vh]">
    <div
      class="container mx-auto justify-between gap-36 md:flex md:items-center"
    >
      <div ref="aboutImage" id="container">
        <img src="../../assets/BG.png" alt="about-me_design" class="" />
        <img
          src="../../assets/about-me.jpg"
          alt="About-me"
          class="relative bottom-32 left-14 image w-1/2 md:w-full"
        />
      </div>

      <div class="md:w-1/2 text-center">
        <h1
          class="text-[#F44336] text-4xl font-semibold"
          ref="aboutTitle"
          id="container"
        >
          About Me
        </h1>
        <p
          class="text-[#000C24] text-2xl leading-10 mt-6"
          ref="aboutSummary"
          id="container"
        >
          <span class="text-[#f44336]">An inquisitive </span>Computer
          Engineering student, skilled in leadership, seeking to leverage solid
          development skills with focus on collaboration, communication and
          passion.
        </p>
        <a
          href="src\assets\Adebola Damilare Ajagunna Resume.pdf"
          Download="Resume"
        >
          <button
            type="button"
            class="text-[#fff] bg-[#000C24] py-4 px-6 rounded-sm mt-12 btn"
          >
            Download CV
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <i class="zmdi zmdi-download"></i>
          </button>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: "power1.in", duration: 2 });

    const tl = gsap.timeline();
    tl.from(this.$refs.aboutImage, { xPercent: -100 })
      .from(this.$refs.aboutTitle, { yPercent: 100, opacity: 0 })
      .from(this.$refs.aboutSummary, { yPercent: 100, opacity: 0 });

    ScrollTrigger.create({
      animation: tl,
      trigger: "#container",
      start: "top top",
      end: "+=4000",
      scrub: true,
      pin: true,
      anticipatePin: 1,
    });
  },
};
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

.nav-background {
  background-image: url("../../assets/Group 50.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 5rem;
  width: 5rem;
}

.btn {
  border-radius: 12px;
  border: 3px outset #888;
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: #eee;
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;

  box-shadow: 0 0 10px rgb(0, 0, 0, 1);
  font-weight: bolder;
  text-decoration: none;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}
.btn:active {
  border: 3px outset #ddd;
  color: #fff;
  background: linear-gradient(160deg, #666, #444);
  text-shadow: 0px 0px 4px #ccc;
  box-shadow: 0 0 10px #fff, 0 0 40px #fff, 0 0 80px #fff;
  transition-delay: 1s;
}

.btn span {
  position: absolute;
  display: block;
}

.btn span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #eee);
}
.btn:active span:nth-child(1) {
  left: 100%;
  transition: 1s;
}
.btn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #eee);
}
.btn:active span:nth-child(2) {
  top: 100%;
  transition: 1s;
  transition-delay: 0.25s;
}
.btn span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #eee);
}
.btn:active span:nth-child(3) {
  right: 100%;
  transition: 1s;
  transition-delay: 0.5s;
}

.btn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #eee);
}
.btn:active span:nth-child(4) {
  bottom: 100%;
  transition: 1s;
  transition-delay: 0.75s;
}
</style>
