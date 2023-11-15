<template>
  <q-page padding>
    <div class="text-h4">커뮤니티 목록</div>
    <section class="q-gutter-y-smq-mt-lg">
      <q-card v-for="id in 100" :key="id" @click="$event => goPostDetails(id)">
        <g-card-section>{{ id }}번 게시글</g-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goPostDetails = id => {
  router.push(`/posts/${id}`);
};
</script>

<style lang="scss" scoped></style>
