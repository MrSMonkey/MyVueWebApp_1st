<template>
    <section>
      <person-form  @has-log="onLog"></person-form>
    </section>
</template>
<script>
  import personForm from '@/components/personForm.vue'
  export default {
    name: 'formTest',
    components: {
      personForm
    },
    data () {
      return {
        aa: 1
      }
    },
    methods: {
      onLog (data) {
        console.log(data)
      },
      test () {
        this.testMixins()
      }
    }
  }
</script>

