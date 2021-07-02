<template>
  <div class="home">
    <ContactList :contactsList="contactsList"></ContactList>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from "@/components/ContactList.vue";
export default {
  name: "Home",
  components: { ContactList },
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
    };
  },
};
</script>
