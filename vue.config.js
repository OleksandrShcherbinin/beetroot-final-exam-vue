module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/beetroot-final-exam-vue/'
    : '/',
  transpileDependencies: ['splidejs/vue-splide']
}