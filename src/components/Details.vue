<template>
  <div class="card" style="width: 28rem;">
  <div class="card-body">
    <h5 class="card-title"><fa-icon icon="user"></fa-icon> {{ contact.name }}</h5>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><fa-icon icon="at"></fa-icon> {{ contact.email }}</li>
    <li class="list-group-item"><fa-icon icon="phone"></fa-icon> {{ contact.phone }}</li>
    <li class="list-group-item"><fa-icon icon="map-marked-alt"></fa-icon> {{ contact.address.street }}</li>
    <li class="list-group-item"><fa-icon icon="city"></fa-icon> {{ contact.address.city }}</li>
  </ul>
  <div class="card-footer">
      <div class="btn btn-outline-warning"><fa-icon icon="edit"></fa-icon></div>&nbsp;
      <div class="btn btn-outline-danger"><fa-icon icon="trash"></fa-icon></div>
  </div>
</div>
</template>

<script>
export default {
    props: {
        contact: Object
    },
}
</script>

<style>

</style>