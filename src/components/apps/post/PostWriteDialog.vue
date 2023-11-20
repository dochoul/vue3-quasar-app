<template>
  <q-dialog persistent @hide="hide">
    <q-card :style="{ width: '660px' }">
      <q-toolbar>
        <q-toolbar-title>글쓰기</q-toolbar-title>
        <q-btn v-close-popup flat dense icon=" close" />
      </q-toolbar>
      <q-separator />
      <PostForm
        v-model:title="form.title"
        v-model:category="form.category"
        v-model:content="form.content"
      />
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';
import PostForm from 'src/components/apps/post/PostForm.vue';

const form = ref({
  title: '',
  contents: '',
  tags: [],
  category: '',
});

const hide = () => {
  form.value.title = '';
  form.value.contents = '';
  form.value.tags = [];
  form.value.category = '';
};
</script>

<style lang="scss" scoped></style>
