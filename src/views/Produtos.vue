<template>
  <div class="main-container">
    <ProdutosList />
  </div>
</template>

<script>
import ProdutosList from "../components/ProdutosList.vue";
export default {
  name: "Produtos",
  components: {
    ProdutosList,
  },
};
</script>
