<template>
  <div>
    <h1>Form Generator</h1>

    <form-generator :schema="schema" v-model="formData"> </form-generator>

    <p>
      Hello {{ formData.title }} {{ formData.user.firstName }}
      {{ formData.user.lastName }}, I hear you are {{ formData.age }} years old.
      {{ formData.email }}
    </p>
  </div>
</template>

<script>
import FormGenerator from "@/components/v5/FormGenerator.vue";

export default {
  name: "GeneratorDemo",
  components: { FormGenerator },
  data() {
    return {
      formData: {
        email: "evan@demo.io",
        user: {
          firstName: "",
          lastName: "",
        },
      },
      schema: [
        {
          fieldType: "SelectList",
          name: "title",
          multi: false,
          label: "Title",
          options: ["", "Mr", "Ms", "Mx", "Dr", "Madam", "Lord"],
        },
        {
          fieldType: "TextInput",
          placeholder: "email",
          label: "Email",
          name: "email",
        },
        {
          fieldType: "NumberInput",
          placeholder: "Age",
          name: "age",
          label: "Age",
          minValue: 0,
        },
        {
          fieldType: "UserName",
          placeholder: "test",
          firstName: "testy",
          lastName: "heyo",
          name: "user",
        },
      ],
    };
  },
};
</script>
