
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <div class="row no-wrap items-center rounded-borders">
      <q-space />
      <q-btn-group push>
        <q-btn color="indigo-10" rounded icon="fas fa-gamepad" />
        <q-btn color="indigo" rounded icon="visibility" />
        <q-btn color="indigo-10" rounded icon="fas fa-comment-dots" />
      </q-btn-group>
      <q-space />
    </div>
  </q-layout>
</template>


<script>
export default {
  name: "MainApp",
};
</script>
