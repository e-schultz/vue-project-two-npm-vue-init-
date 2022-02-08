<script setup>
import { reactive, ref } from "vue";
import TextField from "./TextField.vue";
import SelectList from "./SelectList.vue";
import RadioGroup from "./RadioGroup.vue";
const formData = ref({});
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit($event)">
      <fieldset>
        <legend>Signup Details</legend>
        <fieldset class="flex">
          <label
            >First name

            <input
              class="mt-1 block w-full"
              type="text"
              :name="'firstName'"
              v-model="formData.firstName"
              :placeholder="'First Name'"
            />
          </label>
          <label
            >Last name

            <input
              class="mt-1 block w-full"
              type="text"
              :name="'lastName'"
              v-model="formData.lastName"
              :placeholder="'Last Name'"
            />
          </label>
        </fieldset>

        <label
          >Job Title

          <input
            class="mt-1 block w-full"
            type="text"
            :name="name"
            v-model="formData.jobTitle"
            :placeholder="'Last Name'"
          />
        </label>
        <label>
          Has Vue Expierence?
          <input type="radio" id="one" value="Yes" v-model="formData.hasVue" />
          <label>Yes</label>
          <input type="radio" id="two" value="No" v-model="formData.hasVue" />
          <label>No</label>
        </label>

        <button type="submit">Go!</button>
      </fieldset>
    </form>
    {{ formData }}
  </div>
</template>
