<template>
  <div class="m-5">
    <!-- NAVBAR -->
    <nav class="xs:flex xs:flex-row font-sans flex flex-row items-center text-center bg-soft-white rounded-md mb-5 backdrop-filter backdrop-blur-md border-simple border border-white border-opacity-10 sm:flex-row sm:text-left justify-between py-4 px-6 shadow shadow-lg items-center w-full">
      <div class="xs:mb-0 sm:mb-0">
        <a href="../"><img class="" src="../../public/images/Epitech Trello Logo.png" width="50" height="50" alt="Post-It Logo" /></a>
      </div>
      <div class="align-middle mb-1">
        <a href="/login" class="xs:text-md xs:ml-7 text-md no-underline text-white mr-3 ml-3 text-shadow font-bold">Login</a>
        <a href="/register" class="xs:text-md text-md no-underline text-white mr-3 ml-3 text-shadow font-bold">Register</a>
        </div>
    </nav>

    <draggable class="d-flex space-x-4" :list="sections" @end="movingSections">
      <Section v-for="(section, index) in sections" :key="section.id" :title="section.title" :tasks="section.tasks" :sectionIndex="index" @change="movingTasks" />
      <SectionCreate />
    </draggable>
  </div>
</template>

<script>
  import SectionCreate from '../components/SectionCreate.vue'
  import Section from '../components/Section.vue'
  import draggable from 'vuedraggable'
  import {
    mapState
  } from 'vuex'

  export default {
    components: {
      SectionCreate,
      Section,
      draggable,
    },
    computed: {
      ...mapState(['sections']),
    },
    methods: {
      movingSections: function() {
        this.$store.dispatch('saveSections', {
          sections: this.sections
        })
      },
      movingTasks: function() {
        this.$store.dispatch('saveSections', {
          sections: this.sections
        })
      }
    }
  };
</script>
