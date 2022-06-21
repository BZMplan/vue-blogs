<template>
  <div class="add-blog">
    <h2>添加博客</h2>
    <form action="">
      <label for="">博客标题</label>
      <input type="text" v-model="blog.title" required />
      <label for="">博客内容</label>
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        v-model="blog.content"
      ></textarea>
      <div id="checkboxes">
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories" />
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories" />
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories" />
        <label for="">Minecraft</label>
        <input type="checkbox" value="Minecraft" v-model="blog.categories" />
      </div>
      <label for="">作者</label>
      <select name="" id="" v-model="blog.author">
        <option v-bind:key="author" v-for="author in authors">
          {{ author }}
        </option>
      </select>

      <button v-on:click.prevent="post">添加博客</button>
    </form>
    <hr />
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题:{{ blog.title }}</p>
      <p>博客内容</p>
      <p>{{ blog.content }}</p>
      <p>博客分类:</p>
      <ul>
        <li v-bind:key="category" v-for="category in blog.categories">
          {{ category }}
        </li>
      </ul>
      <p>博客作者:{{ blog.author }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "add-blog",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors: ["A", "B", "C"],
    };
  },
  methods: {
    post: function () {
      axios
        .post("http://jsonplaceholder.typicode.com/posts", this.blog)
        .then((res) => {
          console.log("res:", res);
        });
    },
  },
};
</script>

<style scoped>
</style>
