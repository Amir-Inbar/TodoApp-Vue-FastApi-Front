<template>
  <article class="custom-todod flex flex-col gap-1 items-center">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<style scoped>
.custom-todod {
  justify-content: space-between;
  background: white;
  padding: 2em;
  border: 1px solid black;
  border-radius: 5px;
}

.custom-todod header {
  font-size: 2rem;
}

.custom-todod main {
  text-align: center;
}

.custom-todod footer {
  font-size: 1rem;
  color: gray;
}
</style>
