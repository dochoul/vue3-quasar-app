<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-smq-mt-lg">
      <PostList :items="posts" />
    </section>
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const posts = Array.from(Array(20), (_, index) => ({
  id: index,
  content:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio aliquam officia pariatur culpa delectus, in earum ex velit perspiciatis qui fugit laudantium ducimus nisi natus! Quaerat placeat alias ipsa recusandae?',
  readCount: 1,
  commentCount1: 2,
  likeCount: 3,
  bookmarkCount: 4,
  tags: ['html', 'css', 'javascript'],
  uid: 'uid',
  category: '카테고리',
  default: () => {},
  title: 'Vue3 Firebase 강의 ' + index,
}));

// const goPostDetails = id => {
//   router.push(`/posts/${id}`);
// };
</script>

<style lang="scss" scoped></style>
