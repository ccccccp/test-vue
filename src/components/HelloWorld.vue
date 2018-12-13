<template>
  <div class="hello">
    <h1>count: {{ count }}</h1>
    <button @click="handleClick">+1</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    count: {
      type:Number,
      default:0
    }
  },
  methods:{
    handleClick(){
      // eslint-disable-next-line no-console
      console.log('this:',this);
      this.$emit("Add")
    }
  },
  template:`<h2>h2h2h2h2h2</h2>`
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
