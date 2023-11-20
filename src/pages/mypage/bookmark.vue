<template>
  <PostList :items="posts" />
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';

const posts = Array.from(Array(20), (_, index) => ({
  id: 'A' + index,
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aliquam officia pariatur culpa delectus, in earum ex velit perspiciatis qui fugit laudantium ducimus nisi natus! Quaerat placeat alias ipsa recusandae?',
  readCount: 1,
  commentCount: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리',
  default: () => {},
  title: 'Vue3 Firebase 강의 ' + index,
}));
</script>

<style lang="scss" scoped></style>
