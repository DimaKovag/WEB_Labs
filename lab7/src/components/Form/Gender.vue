<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="gender">
    <input
        type="radio"
        :id="id"
        name="gender"
        :value="value"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', $event.target.value)"
    />
    <div class="gender_bg">
      <label :for="id"><slot></slot></label>
    </div>
  </div>
</template>

<style scoped>
.gender {
  position: relative;
  border-radius: 5px;
  overflow: hidden;
}

.gender_bg {
  padding: 8px 16px;
  background-color: #eee;
  transition: all 2s;
}

.gender label {
  margin: 0;
  padding: 0;
}

input[type="radio"] {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  z-index: 0;
  opacity: 0;
}

input[type="radio"]:hover {
  cursor: pointer;
}

input[type="radio"]:checked + div {
  background-color: var(--primary);
}

input[type="radio"]:checked + div > label {
  color: #fff;
}
</style>
