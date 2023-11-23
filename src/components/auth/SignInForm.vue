<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md" v-on:submit.prevent="handleSignInEmail">
      <q-input v-model="form.email" placeholder="이메일" outlined dense />
      <q-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호"
        outlined
        dense
      />
      <div>
        <q-btn
          type="submit"
          class="full-width"
          label="로그인하기"
          unelevated
          color="primary"
        />
        <div class="flex justify-between">
          <q-btn
            label="비밀번호 찾기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          />
          <q-btn
            label="이메일 가입하기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'SignUpForm')"
          />
        </div>
      </div>
      <q-separator />
      <q-btn
        class="full-width"
        label="구글 계정으로 로그인하기"
        unelevated
        color="primary"
        outline
        @click="handleSingleGoogle"
      />
    </q-form>
  </div>
</template>

<script setup>
import { signInWithEmail, signInWithGoogle } from 'src/services/auth';
import { ref } from 'vue';
import { useQuasar } from 'quasar';

const $q = useQuasar();
const emit = defineEmits(['changeView', 'closeDialog']);

const handleSignInEmail = async () => {
  await signInWithEmail(form.value);
  $q.notify('이메일로 로그인 되었습니다.');

  emit('closeDialog');
};

const handleSingleGoogle = async () => {
  await signInWithGoogle();
  $q.notify('구글 아이디로 로그인 되었습니다.');
  emit('closeDialog');
};

const form = ref({
  email: '',
  password: '',
});
</script>

<style lang="scss" scoped></style>
