<template>
  <Home />
    <About ref="about" id="container" />
    <Skills ref="skills" id="container" />
    <Works ref="works" id="container" />
  <Contact />
  <Footer />
  <!-- <RouterView /> -->
</template>

<script>
import Home from "../src/components/Views/Home.vue"
import About from "../src/components/Views/About.vue"
import Skills from "../src/components/Views/Skills.vue"
import Works from "../src/components/Views/Works.vue"
import Contact from "../src/components/Views/Contact.vue"
import Footer from "../src/components/Views/Footer.vue"


export default {
  name: "App",
    components: {
        Home,
        About,
        Skills,
        Works,
        Contact,
        Footer
    },
}
</script>
