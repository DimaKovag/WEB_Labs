<script setup>
import Gender from "./Gender.vue";

defineProps({
  modelValue: {
    type: String,
    default: "male",
  },
});
const emit = defineEmits(["update:modelValue"]);

const handleUpdateGender = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<template>
  <fieldset id="gender">
    <Gender
        id="male"
        :modelValue="modelValue"
        @change="handleUpdateGender"
        value="male"
    >Male</Gender
    >
    <Gender
        id="female"
        :modelValue="modelValue"
        @change="handleUpdateGender"
        value="female"
    >Female</Gender
    >
    <Gender
        id="other"
        :modelValue="modelValue"
        @change="handleUpdateGender"
        value="other"
    >Other</Gender
    >
    <Gender
        id="secret"
        :modelValue="modelValue"
        @change="handleUpdateGender"
        value="secret"
    >Prefer not to say</Gender
    >
  </fieldset>
</template>

<style scoped>
fieldset {
  border: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}
</style>
