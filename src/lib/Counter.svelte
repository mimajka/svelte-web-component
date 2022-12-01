<svelte:options tag="test-count" />

<script lang="ts">
  export let count: number = 0;
  const increment = () => {
    count += 1
  }
</script>

<style lang="scss">
  button {
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;

    &:hover {
      border-color: #646cff;
    }

    &:focus, &:focus-visible {
      border-color: #646cff;
      outline: 4px auto -webkit-focus-ring-color;
    }
  }

  @media (prefers-color-scheme: light) {
    button {
      background-color: #f9f9f9;
    }
  }
</style>

<button on:click={increment}>
  count is {count}
</button>
