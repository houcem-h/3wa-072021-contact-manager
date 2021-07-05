<template>
  <form>
      <div class="mb-3">
          <label for="contactName" class="form-label">Name</label>
          <input type="text" class="form-control" id="contactName">
      </div>
      <div class="row mb-3">
          <div class="col">
            <label for="contactEmail" class="form-label">Email</label>
            <input type="email" class="form-control" id="contactEmail">
          </div>
          <div class="col">
            <label for="contactPhone" class="form-label">Phone</label>
            <input type="text" class="form-control" id="contactPhone">
          </div>
      </div>
      <div class="row mb-3">
          <div class="col">
            <label for="contactStreet" class="form-label">Street</label>
            <input type="text" class="form-control" id="contactStreet">
          </div>
          <div class="col">
            <label for="contactCity" class="form-label">City</label>
            <input type="text" class="form-control" id="contactCity">
          </div>
      </div>
      <button class="btn btn-primary">Add</button>
  </form>
</template>

<script>
export default {

}
</script>

<style>

</style>