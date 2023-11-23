<template>
  <BaseCard>
    <q-form @submit.prevent="handleSubmit">
      <q-card-section>
        <div class="text-h6">비밀번호 변경</div>
        <q-form>
          <q-input
            v-model="form.newPassword"
            type="password"
            dense
            outlined
            label="비밀번호 변경"
          />
          <q-input
            v-model="form.newPasswordConfirm"
            type="password"
            dense
            outlined
            label="비밀번호 변경 확인"
          />
        </q-form>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <q-space />
        <q-btn type="submit" label="저장하기" flat color="primary" />
      </q-card-section>
    </q-form>
  </BaseCard>
</template>

<script setup>
import BaseCard from 'src/components/base/BaseCard.vue';
import { updatetUserPassword } from 'src/services/auth';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
const $q = useQuasar();
const form = ref({
  newPassword: '',
  newPasswordConfirm: '',
});

const handleSubmit = async () => {
  await updatetUserPassword(form.value.newPassword);
  $q.notify('비밀번호가 변경되었습니다.');
  form.value.newPassword = '';
  form.value.newPasswordConfirm = '';
};
</script>

<style lang="scss" scoped></style>
