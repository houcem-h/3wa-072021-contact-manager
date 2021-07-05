<template>
  <div class="home">
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="tab in tabs" :key="tab" @click="currentTab = tab">
        <a class="nav-link" :class="{active: currentTab== tab}">{{tab}}</a>
      </li>
    </ul>
    <component
      :is="currentTabComponent"
      :contactsList="contactsList"
      @add-contact="addContact"
      class="py-3"
      ></component>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from "@/components/ContactList.vue";
import Add from '@/components/Add.vue';
export default {
  name: "Home",
  components: { ContactList, Add },
  data() {
    return {
      contactsList: [
        {
          id: 1,
          name: "Leanne Graham",
          email: "leanne.graham@gmail.com",
          phone: "+21622334455",
          address: {
            street: "Kulas Light",
            city: "Gwenborough",
          },
        },
        {
          id: 2,
          name: "Ervin Howell",
          email: "Shanna@melissa.tv",
          phone: "010-692-6593 x09125",
          address: {
            street: "Victor Plains",
            city: "Wisokyburgh",
          },
        },
        {
          id: 3,
          name: "Clementine Bauch",
          email: "Nathan@yesenia.net",
          phone: "1-463-123-4447",
          address: {
            street: "Douglas Extension",
            city: "McKenziehaven",
          },
        },
      ],
      currentTab: "ContactList",
      tabs: ["ContactList", "Add"]
    };
  },
  computed: {
    currentTabComponent: function() {
      return this.currentTab;
    }
  },
  methods: {
    addContact(newContact) {
      this.contactsList.unshift(newContact)
      this.currentTab= "ContactList"
    }
  },
};
</script>
