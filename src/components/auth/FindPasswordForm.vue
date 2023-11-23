<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">
      비밀번호 찾기
    </div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input v-model="email" placeholder="가입한 이메일" outlined dense />
      <q-btn
        type="submit"
        class="full-width"
        label="비밀번호 재설정"
        unelevated
        color="primary"
      />
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
import { sendPasswordReset } from 'src/services/auth';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const email = ref('');
const $q = useQuasar();

const handleSubmit = async () => {
  await sendPasswordReset(email.value);
  $q.notify('이메일로 비밀번호 재설정 링크를 보냈어요.');
  emit('closeDialog');
};

const emit = defineEmits(['changeView', 'closeDialog']);
</script>

<style lang="scss" scoped></style>
