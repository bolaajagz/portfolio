<template>
  <main class="background h-[60vh] md:flex items-center">
    <div
      class="container mx-auto bg-white max-w-[1258px] max-h-[486px] rounded-sm flex justify-around items-center"
    >
      <div class="md:text-4xl mx-20 hidden md:block">
        <p>Drop me a line I would like to hear from you</p>
      </div>

      <form class="w-8/12 mx-20" id="contact_form">
        <h1 class="text-[#F44336] font-semibold text-3xl mx-6 my-4">
          Get in Touch
        </h1>
        <!-- NAME -->
        <div class="box">
          <div class="input__wrapper">
            <input
              v-model="UserName"
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Your Name"
              class="input__field"
            />
            <label for="Name" class="input__label"> Name </label>
          </div>
        </div>

        <!-- EMAIL -->
        <div class="box">
          <div class="input__wrapper">
            <input
              v-model="email"
              type="email"
              name="from_email"
              id="from_email"
              placeholder="Your email"
              class="input__field"
            />
            <label for="email" class="input__label"> Email </label>
          </div>
        </div>

        <!-- MESSAGE -->
        <div class="box">
          <div class="input__wrapper">
            <textarea
              v-model="message"
              type="text"
              name="message"
              placeholder="Your Message"
              class="input__field"
            >
            </textarea>
            <label for="Message" class="input__label"> Message </label>
          </div>
        </div>

        <!-- SUBMIT BUTTON -->
        <div class="mx-6 my-4">
          <!-- <div v-if="message === ''">
            <button
              type="submit"
              @click.prevent="sendEmail"
              class="px-8 py-4 bg-[#000C24] text-white rounded-lg hover:bg-[#000c244b]"
            >
              SUBMIT
              <i class="zmdi zmdi-block"></i>
            </button>
          </div>

          <div v-else>
            <button
              type="submit"
              @click.prevent="sendEmail"
              class="px-8 py-4 bg-[#000C24] text-white rounded-lg hover:bg-[#000c244b]"
            >
              SUBMIT
            </button>
            
          </div> -->
          <button
            type="submit"
            @click.prevent="sendEmail"
            class="px-8 py-4 bg-[#000C24] text-white rounded-lg hover:bg-[#000c244b]"
          >
            {{ buttonText }}
          </button>
        </div>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      UserName: "",
      email: "",
      message: "",
      buttonText: "SUBMIT",
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .sendForm("default_service", "template_nm0orvl", "#contact_form")
        .then(
          function () {
            Toastify({
              text: "Email Sent",
              duration: 3000,
              close: true,
              gravity: "top", 
              position: "right",
              stopOnFocus: true, 
              style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
              },
            }).showToast();
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      (this.UserName = ""), (this.email = ""), (this.message = "");
      this.buttonText = "SUBMIT...";
    },
  },
};
</script>

<style scoped>
.background {
  background-image: url("../../assets/image 1 (Traced).png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.box {
  padding: 24px;
  /* max-width: fit-content; */
  /* width: 100%; */
  padding-top: 12px;
  border-radius: 16px;
}

.box h2 {
  margin: 0px;
  font-weight: 400;
  font-size: 1.5rem;
}

.input__wrapper {
  position: relative;
  padding: 15px 0 0;
}

.input__field {
  outline: 1px solid #efefef;
  font-size: 1rem;
  border-radius: 4px;
  color: #928a97;
  padding: 8px;
  border: 1px solid black;
  padding-right: 32px;
  background: transparent;
  transition: all 0.2s;
  width: 100%;
}

.input__field::placeholder {
  color: transparent;
}

.input__field:placeholder-shown ~ .input__label {
  font-size: 1rem;
  cursor: text;
  top: 24px;
}

label,
.input__field:focus ~ .input__label {
  position: absolute;
  top: -10px;
  padding: 0 4px;
  display: block;
  font-size: 14px;
  left: 8px;
  transition: 0.3s;
}

.input__field:focus {
  outline: 1.5px solid #f44336;
}

.input__icon {
  position: absolute;
  right: -10px;
  bottom: -10px;
  width: 28px;
  height: 28px;
  transform: translate(-50%, -50%);
  transform-origin: center;
  cursor: pointer;
}
</style>
