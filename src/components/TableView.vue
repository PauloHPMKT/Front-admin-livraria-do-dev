<template>
  <div class="table-content">
    <div id="users-table-header">
      <div v-for="column in columns" :key="column">{{ column }}</div>
    </div>
    <div id="users-table-rows">
      <div class="users-table-row" v-for="(item, index) in data" :key="index">
        <div>{{ item.name }}</div>
        <div>{{ item.email }}</div>
        <div>
          <div class="actions-op" @click="showChooseModal(user._id)"> 
            <font-awesome-icon icon="fa-solid fa-trash" />
          </div>
          <div class="actions-op" @click="editUser(user._id, user)">
            <font-awesome-icon icon="fa-solid fa-file-pen" />
          </div> 
        </div>
        <!--<div 
          v-for="column in columns" :key="column"
          v-if="hasValue(item, column)"
        >
        {{ itemValue(item, column) }}
        </div>-->
      </div>
    </div>
    <!--<div id="users-table-rows">
      <div class="users-table-row" v-for="user in users" :key="user._id">
        <div>{{ user.name }}</div>
        <div>{{ user.email }}</div> 
        <div id="items-alignment">
          <div class="actions-op" @click="showChooseModal(user._id)"> 
            <font-awesome-icon icon="fa-solid fa-trash" />
          </div>
          <div class="actions-op" @click="editUser(user._id, user)">
            <font-awesome-icon icon="fa-solid fa-file-pen" />
          </div> 
        </div>
          <choose-modal 
            :data="user.name"
            v-if="hiddenChooseModal && id === user._id"
            @removeUser="deleteUser(user._id)"
            @closeModal="hiddenModal"
          />  
      </div>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'TableView',
  props: {
    columns: Array,
    data: Array,
  },
  methods: {
    hasValue (item, column) {
      return item[column.toLowerCase()] !== 'undefined'
    },
    itemValue (item, column) {
      return item[column.toLowerCase()]
    }
  }
}
</script>

<style lang="scss" scoped>
.table-content {
  padding-left: 30px;
}

#users-table-header, 
#users-table-rows,
.users-table-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

#users-table-header {
  font-weight: normal;
  padding: 12px;
  color: rgb(146, 146, 146);
  border-bottom: 2px solid rgb(146, 146, 146);
}

#users-table-header div,
.users-table-row div {
  width: 19%;
}
.users-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}
</style>