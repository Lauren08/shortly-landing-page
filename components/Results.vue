<template>
  <div class="bg-blue-600">
    <p>{{ Link.hashid }}</p>
    <p>{{ Link.url }}</p>
    <p>{{ Link.createdAt }}</p>
  </div>
</template>
<script>
export default {
  props: ["Link"]
};
</script>
