<template>
  <div class="layout">
    <div class="header">
      <div class="logo">
        答题助手
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="home" title="首页"/>
          <mu-tab value="opt1" :title="dati.answers[0]" :class="{'comAnswer': dati.answers[0] == dati.answer}"/>
          <mu-tab value="opt2" :title="dati.answers[1]" :class="{'comAnswer': dati.answers[1] == dati.answer}"/>
          <mu-tab value="opt3" :title="dati.answers[2]" :class="{'comAnswer': dati.answers[2] == dati.answer}"/>
        </mu-tabs>
      </div>
    </div>
    <div class="content">
      <div v-if="activeTab == 'home'">
        <home></home>
      </div>
      <div v-if="activeTab == 'opt1'">
        <opt1 :option="dati.answers[0]"></opt1>
      </div>
      <div v-if="activeTab == 'opt2'">
        <opt2 :option="dati.answers[1]"></opt2>
      </div>
      <div v-if="activeTab == 'opt3'">
        <opt3 :option="dati.answers[2]"></opt3>
      </div>
    </div>

  </div>
</template>
<script>
  import opt1 from "./opt1";
  import opt2 from "./opt2";
  import opt3 from "./opt3";
  import Left from "./left";
  import Home from "./home";

  export default {
    components: {
      Home,
      opt1,
      opt2,
      opt3,
    },
    data() {
      return {
        activeTab: 'home',
        option: '',
      }
    },
    mounted() {
      this.getData();
    },
    computed: {
      dati: function () {
        return this.$store.state.dati
      }
    },
    methods: {
      getData() {
        debugger
        let platform = this.$route.params.name;
        let ws = new WebSocket("ws://dati.laoshutv.com:9080/ws/"+platform);
        // let ws = new WebSocket("ws://localhost:8182");
        const self = this;
        ws.onmessage = function (ev) {
          let data = JSON.parse(ev.data);
          let result = self.getMax(data);
          data.answer = result;
          self.$store.dispatch('refresh', data);
        }

      },
      handleTabChange(val) {
        this.activeTab = val
      },
      getMax(data) {
        let baiduProb = data.baiduProb;
        let answers = data.answers;
        let result = '';
        if (baiduProb[0] > baiduProb[1] && baiduProb[0] > baiduProb[2]) {
          result = answers[0];
        }
        else if (baiduProb[1] > baiduProb[0] && baiduProb[1] > baiduProb[2]) {
          result = answers[1];
        }
        else if (baiduProb[2] > baiduProb[1] && baiduProb[2] > baiduProb[1]) {
          result = answers[2];
        }
        return result;
      }
    }
  }
</script>
<style scoped>
  button.mu-tab-link.comAnswer {
    background-color: #ff4081;
  }

  .header {
    background-color: #673ab7;
  }

  .logo {
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }

  .nav {
    display: inline-block;
    width: calc(100% - 150px);
    margin: 0 auto;
  }

  .tab {
    margin: 0 auto;
    width: 400px;
    background-color: rgba(0, 0, 0, 0);
  }

  .content {
    width: 100%;
    margin: 0 auto;
  }
</style>
