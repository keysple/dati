<template>
  <div>
    <mu-row gutter>
      <mu-col width="100" tablet="30" desktop="30">
        <left></left>
      </mu-col>
      <mu-col width="100" tablet="70" desktop="70">
        <div class="search">
          <iframe id="iframe" :src=preUrl+dati.question style="padding:0px;width:100%;height: 700px;"></iframe>
        </div>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
  import Left from "./left";

  export default {
    components: {Left},
    name: "home",
    data() {
      return {
        preUrl: "https://www.baidu.com/s?wd=",
      }
    },
    computed: {
      dati: function () {
        return this.$store.state.dati
      },
    },
  }
</script>

<style scoped>
</style>
