<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">회원가입</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSubmit">
      <q-input v-model="form.nickname" placeholder="닉네임" outlined dense />
      <q-input v-model="form.email" placeholder="이메일" outlined dense />
      <q-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호(문자, 숫자조합 8자 이상)"
        outlined
        dense
      />
      <q-btn
        type="submit"
        class="full-width"
        label="가입하기"
        unelevated
        color="primary"
      />
      <q-separator />
      <q-btn
        class="full-width"
        label="로그인하기"
        unelevated
        flat
        @click="$emit('changeView', 'SignInForm')"
      />
    </q-form>
  </div>
</template>

<script setup>
import { signUpWithEmail } from 'src/services/auth';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const emit = defineEmits(['changeView', 'closeDialog']);

async function handleSubmit() {
  await signUpWithEmail(form.value);
  $q.notify('가입을 환영합니다.');
  emit('closeDialog');
}

const form = ref({
  nickname: '',
  email: '',
  password: '',
});
</script>

<style lang="scss" scoped></style>
