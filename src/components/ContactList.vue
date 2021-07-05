<template>
  <div>
    <h1><fa-icon icon="address-book"></fa-icon> Contact List</h1>
    <div class="row">
      <div class="col-6">
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
      <div class="col-6">
        <Details></Details>
      </div>
    </div>
  </div>
</template>

<script>
import Details from '@/components/Details.vue';
export default {
  name: "ContactList",
  props: {
    contactsList: Array,
  },
  components: {
    Details
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
