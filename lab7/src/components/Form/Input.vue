<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: String,
    default: "",
  },
  errors: {
    type: Object,
    default: {},
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <label :for="id">
    {{ name }}
    <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :type="type"
        :id="id"
        :name="name"
        :placeholder="placeholder"
    />
    <p v-show="errors[name]">{{ errors[name] }}</p>
  </label>
</template>

<style scoped>
label {
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-transform: capitalize;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

p {
  color: coral;
}
</style>
