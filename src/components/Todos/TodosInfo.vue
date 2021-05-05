<template>
  <div class="todos-info">
    <div class="legend">
      <span>Dobule click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
  }

  .complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #35495e;
  }

  .incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #41b883;
  }
</style>