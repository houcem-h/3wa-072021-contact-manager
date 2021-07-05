<template>
  <form @submit.prevent="submitForm">
      <div class="mb-3">
          <label for="contactName" class="form-label">Name</label>
          <input type="text" class="form-control" id="contactName" v-model="newContact.name">
      </div>
      <div class="row mb-3">
          <div class="col">
            <label for="contactEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="contactEmail" v-model="newContact.email">
          </div>
          <div class="col">
            <label for="contactPhone" class="form-label">Phone</label>
            <input type="text" class="form-control" id="contactPhone" v-model="newContact.phone">
          </div>
      </div>
      <div class="row mb-3">
          <div class="col">
            <label for="contactStreet" class="form-label">Street</label>
            <input type="text" class="form-control" id="contactStreet" v-model="newContact.address.street">
          </div>
          <div class="col">
            <label for="contactCity" class="form-label">City</label>
            <input type="text" class="form-control" id="contactCity" v-model="newContact.address.city">
          </div>
      </div>
      <button class="btn btn-primary">Add</button>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
export default {
    data() {
        return {
            newContact: {
                name: '',
                email: '',
                phone: '',
                address: {
                    street: '',
                    city: ''
                }
            }
        }
    },
    methods: {
        submitForm() {
            if (confirm('Add this contact ?')) {
                this.newContact.id = uuidv4()
                this.$emit('add-contact', this.newContact)
            }
        }
    },
}
</script>

<style>

</style>