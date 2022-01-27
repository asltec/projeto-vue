<template>
  <div id="nav">
    <div class="div-text1">
      <p id="text1">Notebooks</p>
      <p id="text2">As melhores ofertas</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#nav {
  background-image: linear-gradient(to right, #a158e6, #b787e4);
  padding: 15px 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 130px;
}

#nav #text1 {
  color: aliceblue;
  font-size: 30px;
  font-weight: bold;
}

.div-text1 {
  margin-right: 100px;
}

#nav #text2 {
  color: aliceblue;
  font-size: 13px;
  margin-left: 37px;
}
</style>