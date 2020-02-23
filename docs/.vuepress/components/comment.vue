<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>
<script>
export default {
  name: 'comment',
  data() {
    return {};
  },
  mounted() {
    let body = document.querySelector('.gitalk-container');
    let script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    body.appendChild(script);
    script.onload = () => {
      const commentConfig = {
        clientID: 'f7a6fcff0aec55b10b7d',
        clientSecret: '12606f7fccb3a7801b46869870640d60184e9174',
        repo: 'Hackintosh-Guidebook',
        owner: 'Colin-XKL',
        admin: ['Colin-XKL'],
        id: location.pathname,
        distractionFreeMode: false,
      };
      const gitalk = new Gitalk(commentConfig);
      gitalk.render('gitalk-container');
    };
  },
};
</script>
<style>
@import '../css/gitalk.css';
</style>