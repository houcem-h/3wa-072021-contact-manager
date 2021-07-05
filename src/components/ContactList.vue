<template>
  <div>
    <h1><fa-icon icon="address-book"></fa-icon> Contact List</h1>
    <div class="row" @mouseleave="currentContact = null">
      <div class="col-6">
        <ul class="list-group">
      <li
        v-for="contact in contactsList"
        v-bind:key="contact.id"
        class="list-group-item"
        @mouseover="currentContact = contact"
      >
        <fa-icon icon="address-card"></fa-icon> {{ contact.name }}
      </li>
    </ul>
      </div>
      <div class="col-6">
        <Details v-if="currentContact !== null" :contact="currentContact"></Details>
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
  data() {
    return {
      currentContact: null
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
