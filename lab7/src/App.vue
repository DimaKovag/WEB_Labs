<script setup>
import { ref } from "vue";
import Form from "./components/Form/Form.vue";
import Table from "./Table.vue";

const users = ref([]);
const selected = ref([]);

const onChange = (value) => {
  users.value.push(value);
};

const onSelect = (value) => {
  if (selected.value.includes(value)) {
    selected.value = selected.value.filter((id) => id !== value);
  } else {
    selected.value.push(value);
  }
};

const onDelete = () => {
  users.value = users.value.filter((user) => !selected.value.includes(user.id));
  selected.value = [];
};

const onDuplicate = () => {
  for (const id of selected.value) {
    const userToDuplicate = users.value.find((user) => user.id === id);

    if (userToDuplicate) {
      const duplicatedUser = {
        ...userToDuplicate,
        id: Date.now() + Math.random() * 10000000,
      };
      users.value.push(duplicatedUser);
    }
  }
};
</script>

<template>
  <main>
    <div class="form">
      <Form :modelValue="users" @update:modelValue="onChange" />
    </div>
    <div class="table col">
      <Table v-model="users" :selected="selected" @update:selected="onSelect" />
      <div class="col">
        <button id="delete-button" type="button" @click="onDelete">
          Delete selected
        </button>
        <button id="duplicate-button" type="button" @click="onDuplicate">
          Duplicate
        </button>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
.form {
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}

.table {
  width: 100%;
  overflow-y: scroll;
}

button {
  padding: 10px;
  border-radius: 5px;
}

#delete-button {
  width: 20%;
  background-color: crimson;
  color: #fff;
  border: none;
}

#duplicate-button {
  width: 20%;
  background-color: crimson;
  color: #fff;
  border: none;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.row {
  flex-wrap: nowrap;
}
</style>
