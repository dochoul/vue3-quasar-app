<!-- <template>
  <q-page padding>
    <div class="text-h4">홈</div>
    <section class="q-gutter-y-smq-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <g-card-section>게시글</g-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped></style>

<route lang="yaml">
name: 'home-page'
meta:
  requiresAuth: true
  width: 600px;
</route> -->

<template>
  <q-page padding>
    <div class="text-h4">홈</div>
    <section class="q-gutter-y-smq-mt-lg">
      <q-card v-for="id in 100" :key="id">
        <g-card-section>게시글</g-card-section>
      </q-card>
    </section>
  </q-page>
</template>

<style lang="scss" scoped></style>

<script setup></script>

<route lang="yaml">
name: 'home-page'
meta:
  requiresAuth: true
  width: 600px
</route>
