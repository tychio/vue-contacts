<template>
  <nav class="navbar navbar-toggleable-md fixed-top">
    <a class="navbar-brand" href="https://github.com/tychio/contacts-test" target="_blank">Contacts</a>
  </nav>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped lang="scss">
  @import '../styles/variable';

  .navbar {
    background-color: $color_bar;

    a,
    a:visited,
    a:active,
    a:link {
      color: $color-while;
    }
  }
</style>