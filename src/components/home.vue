<template>
  <div class="content">
    <left></left>
    <div class="search">
      <iframe id="iframe" src="https://www.baidu.com/s?wd="></iframe>
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
        dati: this.$store.state.dati
      }
    },
    mounted() {
      this.renderFrame();
    },
    methods: {
      renderFrame() {
        let iframe = document.getElementById('iframe');
        let key = this.dati.question,
          searchKey = 'https://www.baidu.com/s?wd=' + key;
        iframe.src = searchKey;
        iframe.width = document.body.clientWidth * 0.7;
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
  .answer {
    float: left;
    width: 30%;
    min-height: 600px;
  }

  .answer .attention {
    color: red;
  }

  .title {
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .title .line {
    display: inline-block;
    width: 40%;
    border-top: 1px solid #ccc;
  }

  .title .txt {
    color: #333;
    font-weight: 700;
    vertical-align: middle;
  }

  .comAnswer {
    background-color: #4caf50;
  }
</style>
