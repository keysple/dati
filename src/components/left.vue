<template>
  <div class="answer">
    <div>
      <p class="attention">第{{this.dati.id}}题：{{this.dati.question}}</p>
      <mu-list>
        <mu-list-item :title="item" v-for="item,index in dati.answers" :key="index"
                      :class="{'comAnswer': dati.answers[index] == dati.answer }">
          <mu-badge :content="dati.baiduProb[index]" primary slot="right"/>
        </mu-list-item>
      </mu-list>
    </div>
    <div>
      <div class="title">
        <span style="white-space:pre">  </span><span class="line"></span>
        <span style="white-space:pre">   </span><span class="txt">AI结果</span>
        <span style="white-space:pre">   </span><span class="line"></span>
      </div>
      <div class="command">
        <label class="inline"><span>百度建议答案：</span></label>
        <span class="inlineSpan">{{dati.baiduTips}}</span>
      </div>
      <div class="command">
        <label class="inline"><span>搜狗建议答案：</span></label>
        <span class="inlineSpan">{{dati.sougou}}</span>
      </div>
    </div>
    <div class="ad">
      <h3>扫红包啦！赢取更多福利</h3>
      <img src="../assets/redpackage.jpeg"/>
    </div>
  </div>
</template>
<script>
  export default {
    name: "left",
    computed:{
      dati:function () {
        return  this.$store.state.dati
      }
    },
  }

</script>

<style scoped>
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

  .command {
    font-size: 16px;
    padding: 10px;
    color: rgba(0, 0, 0, .87);
  }

  .inline {
    padding-right: 40px;
    padding-left: 20px;
    float: left;
  }

  .inlineSpan {
    padding: 3px 5px;
    background-color: #4caf50;
    border-radius: 5px;
  }

  .ad img{
    height:160px;

  }
</style>
