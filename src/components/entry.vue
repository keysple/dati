<template>
  <div>
    <div class="header">
      <div class="logo">
        答题助手
      </div>
    </div>
    <div class="tips">
      <h3>答题须知</h3>
      <mu-card-text>
        <p>本工具适用于 冲顶大会／百万英雄 等在线直播答题游戏。</p>
        <p>答题助手将在游戏直播过程中，基于大数据搜索答案</p>
        <p>提前使用电脑进入本页面，答案将自动刷新，注意不要错过答题时间。</p>
        <p>答案仅供参考</p>
        <p>题目会出现多人不同选项的情况</p>
      </mu-card-text>
    </div>
    <div class="entry">
      <h3>直播平台答题入口</h3>
      <mu-raised-button label="冲顶大会" class="demo-raised-button" secondary to="/platform/chongdingdahui"
                        target="_blank"/>
      <mu-raised-button label="西瓜百万英雄" class="demo-raised-button" secondary to="/platform/xiguashipin" target="_blank"/>
      <mu-raised-button label="花椒" class="demo-raised-button" secondary to="/platform/huajiao" target="_blank"/>
      <mu-raised-button label="芝士超人" class="demo-raised-button" secondary to="/platform/zhishichaoren" target="_blank"/>
    </div>
    <div class="about">
    </div>
  </div>
</template>
<script>
  export default {
    name: "entry"
  }
</script>

<style scoped>
  .header {
    background-color: #673ab7;
  }

  .logo {
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
    z-index: 1000;
  }

</style>
