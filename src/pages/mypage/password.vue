<template>
  <BaseCard>
    <q-card-section>
      <div class="text-h6">비밀번호 변경</div>
      <q-form>
        <q-input type="password" dense outlined label="비밀번호 변경" />
        <q-input type="password" dense outlined label="비밀번호 변경 확인" />
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
