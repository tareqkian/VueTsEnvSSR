<script setup lang="ts">
import {useTestStore} from "@modules/Users/Stores/testStore.ts";
import {storeToRefs} from "pinia";
import {onMounted, ref, watch} from "vue";

const testStore = useTestStore()
const {res} = storeToRefs(testStore)
const err = ref<string|object>("")
const fetch = () => testStore.Index2().catch(e => err.value = e)

onMounted(() => fetch())

watch(
    () => res.value.loading,
    (val) => !val || (err.value = "")
)

</script>

<template>
  <page-layout>
    <h1><button @click="fetch()">Refresh 2</button></h1>
    <div><pre>{{ res }}</pre></div>
    <div v-if="err">{{ err }}</div>
  </page-layout>
</template>
