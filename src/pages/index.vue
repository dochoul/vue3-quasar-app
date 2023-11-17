<template>
  <q-page padding>
    <div class="row q-col-gutter-x-lg">
      <PostLeftBar class="col-grow" />
      <section class="col-7">
        <PostHeader />
        <PostList :items="posts" />
      </section>
      <PostRightBar class="col-3" />
    </div>
  </q-page>
</template>

<script setup>
import PostList from 'src/components/apps/post/PostList.vue';
import { useRouter } from 'vue-router';
import PostRightBar from './components/PostRightBar.vue';
import PostHeader from './components/PostHeader.vue';
import PostLeftBar from './components/PostLeftBar.vue';

const router = useRouter();

const posts = Array.from(Array(20), (_, index) => ({
  id: index,
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

// const goPostDetails = id => {
//   router.push(`/posts/${id}`);
// };
</script>

<style lang="scss" scoped></style>
