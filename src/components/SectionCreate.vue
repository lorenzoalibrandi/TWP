<template>
  <form :class="classList" @submit.prevent="createSectionI">
    <input v-model="title" type="text" class="shadow shadow-lg p-4 cursor-pointer font-bold text-lg text-center text-white rounded-md bg-soft-white backdrop-filter backdrop-blur-md border-simple border border-white border-opacity-10 placeholder-white text-shadow focus:outline-none"
      placeholder="New Post-It" @focusin="startEditing" @focusout="finishEditing" />
    <button v-if="isActive || titleExists" type="submit" class="mt-4 p-4 bg-gray-600 font-bold text-xl text-white rounded-md w-auto">+ Add</button>
  </form>
</template>

<script>
  import {
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {
        title: '',
        isActive: false,
      }
    },
    computed: {
      classList() {
        let classList = ['addSection'];
        if (this.isActive) {
          classList.push('active');
        }
        return classList;
      },
      titleExists() {
        return this.title.length > 0;
      },
    },
    methods: {
      ...mapActions(["createSection"]),
      createSectionI() {
        this.createSection({
          title: this.title
        });
        this.title = '';
      },
      startEditing() {
        this.isActive = true;
      },
      finishEditing() {
        this.isActive = false;
      },
    },
  }
</script>
