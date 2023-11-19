<template>
  <div>
    <div class="text-subtitle1 text-weight-bold q-mb-lg">댓글 6</div>

    <div v-if="isActive">
      <q-input type="textarea" class="bg-white" outlined></q-input>
      <div class="flex justify-end q-gutter-x-sm q-mt-sm">
        <q-btn label="취소" color="dark" unelevated @click="toggleActive" />
        <q-btn label="등록" color="primary" unelevated />
      </div>
    </div>

    <q-card v-if="!isActive" @click="toggleActive" class="cursor-pointer">
      <q-card-section class="flex items-center">
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png" alt="" />
        </q-avatar>
        <div class="text-grey-6 q-ml-md">댓글을 작성해보세요.</div>
      </q-card-section>
    </q-card>

    <q-list class="q-mt-lg bg-white" bordered separator>
      <q-item>
        <q-item-section side top>
          <q-avatar size="md">
            <img src="https://cdn.quasar.dev/img/avatar.png" alt="" />
          </q-avatar>
        </q-item-section>
        <q-item-section side top>
          <div class="flex text-caption">
            <span>짐코딩</span>
            <span class="q-mx-xs">&middot;</span>
            <span class="text-grey-6">3일 전</span>
          </div>
          <div class="q-mt-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam
            in facere, eaque exercitationem perspiciatis, eius repudiandae hic,
            optio libero sed harum illum quo nihil nemo dolores commodi laborum
            ab.
          </div>
        </q-item-section>
        <q-item-section side top>
          <q-btn flat color="grey" icon="sym_o_delete" round dense />
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let isActive = ref(false);
const toggleActive = () => toggleActive !== toggleActive;
</script>

<style lang="scss" scoped></style>
