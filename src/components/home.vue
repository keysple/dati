<template>
  <div class="content">
    <left></left>
    <div class="search">
      <iframe id="iframe" :src=preUrl+dati.question ></iframe>
    </div>
  </div>
</template>

<script>
  import Left from "./left";
  export default {
    components: {Left},
    name: "home",
    data() {
      return {
        preUrl:"https://www.baidu.com/s?wd=",
      }
    },
    computed: {
      dati: function () {
        return this.$store.state.dati
      },
    },
    mounted() {
      this.renderFrame();
    },
    methods: {
      renderFrame() {
        let iframe = document.getElementById('iframe');
        iframe.width = (document.body.clientWidth)*0.7;
        iframe.height = document.body.clientHeight;
      }
    }
  }
</script>

<style scoped>
  .content {
    margin-top: 10px;
  }
  .search {
    float: right;
    width: 70%;
    min-height: 600px;
  }
</style>
