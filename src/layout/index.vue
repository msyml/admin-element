<template>
  <div>
    <!-- 左侧使用SideBar,右侧从上到下分别为NavBar、TagsView、AppMain -->
    <el-container>
      <el-aside>
        <side-bar width="200px">Aside</side-bar>
      </el-aside>
      <el-container>
        <el-header>
            <nav-bar></nav-bar>
            <tags-view></tags-view>
        </el-header>
        <el-main><app-main></app-main></el-main>
        <el-footer>
            <footer></footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import SideBar from './components/SideBar/index.vue';
  import TagsView from './components/TagsViews/index.vue';
  import AppMain from './components/AppMain.vue';
  import NavBar from './components/NavBar.vue';
  import Footer from './components/Footer.vue';
  onMounted(() => {});
</script>

<style scoped lang="less"></style>
