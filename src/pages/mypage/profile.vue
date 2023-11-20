<template>
  <BaseCard>
    <q-card-section>
      <div class="text-h6">프로필</div>
      <q-form>
        <q-input dense outlined label="닉네임" />
        <q-input dense outlined label="이메일" readonly />
      </q-form>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <q-space />
      <q-btn label="저장하기" flat color="primary" />
    </q-card-section>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
</script>

<style lang="scss" scoped></style>
