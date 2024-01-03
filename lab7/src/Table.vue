<script setup>
const { modelValue, selected } = defineProps(["modelValue", "selected"]);
const emit = defineEmits(["update:selected"]);

const toggleSelection = (id) => {
  emit("update:selected", id);
};
</script>

<template>
  <table id="data-table">
    <thead>
    <tr>
      <th>Select</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Password</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Middle name(Побатькові)</th>
      <th>Gender</th>
      <th>Birthdate</th>
      <th>File</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="user of modelValue">
      <th>
        <input
            type="checkbox"
            :checked="selected.includes(user.id)"
            @change="toggleSelection(user.id)"
        />
      </th>
      <th>{{ user.email }}</th>
      <th>{{ user.phone }}</th>
      <th>{{ user.password }}</th>
      <th>{{ user.firstName }}</th>
      <th>{{ user.lastName }}</th>
      <th>{{ user.patronymic }}</th>
      <th>{{ user.gender }}</th>
      <th>{{ user.birthdate }}</th>
      <th>{{ user.file }}</th>
    </tr>
    </tbody>
  </table>
</template>