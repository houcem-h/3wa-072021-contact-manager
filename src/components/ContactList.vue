<template>
  <div>
    <h1><fa-icon icon="address-book"></fa-icon> Contact List</h1>
    <ul class="list-group">
      <li
        v-for="contact in contactsList"
        v-bind:key="contact.id"
        class="list-group-item"
      >
        <fa-icon icon="user"></fa-icon> {{ contact.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ContactList",
  props: {
    contactsList: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
