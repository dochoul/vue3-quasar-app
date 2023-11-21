import { defineStore } from 'pinia';

import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const isAuth = computed(() => !!user.value);
  const setUser = userData => {
    console.log('userData', userData);
    user.value = userData;
    if (userData) {
      user.value = {
        uid: userData.uid,
        photoURL: userData.photoURL,
        displayName: userData.displayName,
        email: userData.email,
      };
    } else {
      user.value = null;
    }
  };

  return { user, isAuth, setUser };
});
