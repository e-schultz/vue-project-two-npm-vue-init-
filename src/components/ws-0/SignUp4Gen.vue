<script setup>
import { reactive, ref } from "vue";
import FormGen from "./FormGen.vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
const formData = ref({});
function clearFields() {
  let { firstName, lastName, usingFor, ...rest } = formData.value;
  console.log(firstName);
  formData.value = { firstName, lastName, usingFor };
}
let components = { TextField, SelectList };
const schema = [
  {
    component: "TextField",
    model: "firstName",
    props: { label: "First Name", placeholder: "Please Enter Your First name" },
  },
  {
    component: "TextField",
    model: "lastName",
    props: { label: "Last Name", placeholder: "Please Enter Your Last name" },
  },

  {
    component: "SelectList",
    model: "usingFor",
    props: {
      label: "Using For",
      options: ["Personal", "Work"],
    },
  },
  {
    component: "TextField",
    model: "companyName",
    props: { label: "Company Name" },
    condition: (e) => e.usingFor === "Work",
  },
  {
    component: "TextField",
    model: "email",
    props: { label: "Email", placeholder: "work email" },
    condition: (e) => e.usingFor === "Work",
  },
  {
    component: "SelectList",
    model: "industry",
    props: {
      label: "Industry",
      options: ["Industry 1", "Industry 2", "Industry 3", "Other"],
    },
    condition: (e) => e.usingFor === "Work",
  },
];
let handleUpdate = (field, value) => {
  formData.value[field] = value;
};
</script>
<template>
  <div>
    <form>
      <fieldset>
        <legend>Signup 4 Details</legend>

        <!--<template v-for="(field, index) in schema">
          <component
            :is="components[field.component]"
            v-model="formData[field.model]"
            v-bind="field.props"
          />
        </template>-->
        <FormGen :schema="schema" @update:formValue="handleUpdate" />

        <!-- <TextField
          v-model="formData.firstName"
          label="First Name"
          placeholder="Please Enter Your First Name"
        />
        <TextField
          v-model="formData.lastName"
          label="Last Name"
          placeholder="Please Enter
    Your Last Name"
        />
        <SelectList
          label="Using For"
          :options="['Personal', 'Work']"
          v-model="formData.usingFor"
          @update:modelValue="clearFields"
        />
        <TextField
          v-model="formData.workEmail"
          label="Work Email"
          placeholder="email"
          v-if="formData.usingFor === 'Work'"
        />
        <TextField
          v-model="formData.companyName"
          label="Company Name"
          placeholder="Company Name"
          v-if="formData.usingFor === 'Work'"
        />
        <SelectList
          label="Industry"
          :options="['Industry 1', 'Industry 2', 'Industry 3', 'Other']"
          v-model="formData.industry"
          v-if="formData.usingFor === 'Work'"
        />-->
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
