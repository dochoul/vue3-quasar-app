<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">
      비밀번호 찾기
    </div>
    <q-form class="q-gutter-y-md">
      <q-input placeholder="가입한 이메일" outlined dense />
      <q-btn class="full-width" label="확인" unelevated color="primary" />
      <q-separator />
      <q-btn
        class="full-width"
        label="로그인하기"
        unelevated
        flat
        @click="$emit('changeView', 'SignUpForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
defineEmits(['changeView']);
</script>

<style lang="scss" scoped></style>
