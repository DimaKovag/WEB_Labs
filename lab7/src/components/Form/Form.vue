<script setup>
import { reactive } from "vue";

import GenderField from "./GenderField.vue";
import Input from "./Input.vue";

const { modelValue } = defineProps(["modelValue"]);
const emit = defineEmits(["update:modelValue"]);

const errors = reactive({});

const user = reactive({
  email: "",
  phone: "",
  password: "",
  firstName: "",
  lastName: "",
  patronymic: "",
  birthdate: "",
  group: "group1",
  gender: "male",
  file: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();
  for (const key in user) {
    if (!user[key]) {
      errors[key] = "This field is required";
    } else {
      delete errors[key];
    }
  }
  if (Object.keys(errors).length > 0) return;

  emit(
      "update:modelValue",
      JSON.parse(JSON.stringify({ ...user, id: Date.now() }))
  );

  for (const key in user) {
    if (key === "group") {
      user[key] = "group1";
      continue;
    }
    if (key === "gender") {
      user[key] = "male";
      continue;
    }
    user[key] = "";
  }
};
</script>


<template>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-6 form">
<h2 class="text-center">Registration</h2>
  <form @submit="handleSubmit">
    <Input
        type="email"
        id="email"
        name="email"
        placeholder="your_email@example.com"
        v-model="user.email"
        :errors="errors"
    />

    <Input
        id="phone"
        name="phone"
        placeholder="+38(0__) ___-__-__"
        v-model="user.phone"
        v-mask="['+38(0##) ###-##-##']"
        :errors="errors"
    />

    <Input
        type="password"
        id="password"
        name="password"
        placeholder="your.password-123"
        v-model="user.password"
        :errors="errors"
    />

    <Input
        id="firstName"
        name="firstName"
        placeholder="First name"
        v-model="user.firstName"
        :errors="errors"
    />
    <Input
        id="lastName"
        name="lastName"
        placeholder="Last name"
        v-model="user.lastName"
        :errors="errors"
    />
    <Input
        id="patronymic"
        name="Middle name(Побатькові)"
        placeholder="Middle name(Побатькові)"
        v-model="user.patronymic"
        :errors="errors"
    />

    <Input
        type="date"
        id="birthdate"
        name="birthdate"
        v-model="user.birthdate"
        :errors="errors"
    />

    <label for="group">Choose group</label>
    <select name="group" id="group" v-model="user.group" :errors="errors">
      <option value="group1">Group 1</option>
      <option value="group2">Group 2</option>
      <option value="group3">Group 3</option>
    </select>

    <GenderField v-model="user.gender" />

    <label for="file">
      <span>Choose file</span>
      <input
          type="file"
          id="file"
          name="file"
          :value.value="user.file"
          @change="user.file = $event.target.files[0].name"
      />
    </label>
    <p v-if="errors.file" >
      This field is required
    </p>

    <button type="submit" class=" btn btn-primary btn-danger btn-block buttonAuth">Register</button>
    <div class="back"><a href="#">Back to main page</a></div>
  </form>
</div>
</div>
</div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

button[type="submit"] {
  border: none;
  padding: 10px;
  border-radius: 5px;
}

.back{
  text-align: center;
  margin-bottom: 4vw;
  margin-top: 4vw;
}
</style>
