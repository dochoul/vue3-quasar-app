<template>
  <q-layout view="lHh Lpr lff" class="bg-grat-2">
    <q-header bordered class="bg-white text-gray-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/logo.svg" />
            </q-avatar>
            짐코딩 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="Home" text-color="black" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          text-color="black"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          text-color="black"
          href="https://edu.gymcoding.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="유뷰트"
          text-color="black"
          href="https://youtube.com.com/gymcoding"
          target="_blank"
        />

        <q-separator class="q-my-md q-mr-md" dark vertical />
        <q-btn
          v-if="!authStore.isAuth"
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        ></q-btn>
        <q-btn v-if="authStore.isAuth" round flat>
          <q-avatar>
            <img
              :src="
                authStore.user.photoURL ||
                generateDefaultPhotoURL(authStore.user.uid)
              "
            />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/mypage/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item clickable v-close-popup @click="handleLogout">
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyle">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authDialog" />
  </q-layout>
</template>

<script setup>
import { logout, generateDefaultPhotoURL } from 'src/services/auth';
import { useAuthStore } from 'src/stores/auth';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import AuthDialog from '/src/components/auth/AuthDialog.vue';

const authStore = useAuthStore();

const authDialog = ref(false);
const openAuthDialog = () => {
  authDialog.value = true;
};

const route = useRoute();

const pageContainerStyle = computed(() => ({
  maxWidth: route.meta?.width || '1080px',
  margin: '0 auto',
}));

const handleLogout = async () => {
  await logout();
};
</script>
