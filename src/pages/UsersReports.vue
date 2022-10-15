<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card 
            class="strpied-tabled-with-hover"
            body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <h4 class="card-title">Relatório de usuários</h4>
              <p class="card-category">Usuários disponíveis na plataforma</p>
            </template>
            <template>
              <actions-bar 
                :data_action="action_message"
                @add_new_data="hiddenFormUser"
              />
              <form-user-data 
                v-if="callFormUser"
                @closeFormUser="closeModal"
                @handleSubmitUser="submitNewUser"
              />
            </template>
            <!--<table-view 
              :columns="this.table.columns"
              :data="this.users"
            />-->
            <div class="table-content">
              <div id="users-table-header">
                <div>Nome</div>
                <div>E-mail</div>
                <div>Acoes</div>
              </div>
              <div id="users-table-rows">
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
              </div>
            </div>
            <information-popup 
              v-if="toastMessageHidden"
              :message_data="message"
            />
            <form-update 
              v-if="callFormUpdate"
              :userData="userToUpdate"
              @updateUser="updateUser"
              @closeUpdateModal="closeUpdateModal"
            />
          </card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LTable from 'src/components/Table.vue'
import Card from 'src/components/Cards/Card.vue'
import Service from '../services/axios-requests'
import ActionsBar from '../components/ActionsBar.vue'
import ChooseModal from '../components/ChooseModal.vue'
import FormUpdate from '../components/FormUpdate.vue'
import FormUserData from '../components/FormUserData.vue'
import TableView from '../components/TableView.vue'
import InformationPopup from '../components/Popups/InformationPopup.vue'

export default {
  components: {
    LTable,
    Card,
    ActionsBar,
    ChooseModal,
    FormUpdate,
    FormUserData,
    TableView,
    InformationPopup,
  },
  data () {
    return {
      table: {
        columns: ['Nome', 'Email', 'Acoes'],
      },
      users: [],
      userToUpdate: { 
        name: '', 
        email: '' 
      },
      message: '',
      action_message: 'Adicionar novo usuário',
      toastMessageHidden: false,
      hiddenChooseModal: false,
      callFormUpdate: false,
      callFormUser: false,
      id: 0,
      update_id: null
    }
  },
  methods: {
    messageToast(msg) {
      this.toastMessageHidden = true
      this.message = msg
      setTimeout(() => {
        this.toastMessageHidden = false
      }, 2000)
    },

    //list all
    listUsers() {
      Service.listar().then(res => {
        const dataParse = JSON.parse(JSON.stringify(res.data))
        this.users = dataParse
      })
    },

    hiddenFormUser() {
      this.callFormUser = !this.callFormUser
    },

    showChooseModal(id) {
      this.hiddenChooseModal = !this.hiddenChooseModal
      this.id = id
    },

    closeModal() {
      this.callFormUser = false
    },

    //create user
    async submitNewUser(user) {
      if (!user.name && !user.email && !user.password) {
        this.messageToast('Preencha todos os campos corretamente!')
      }
      else if (!user.name) {
        this.messageToast('O Campo de nome está vazio!')
      }
      else if (!user.email) {
        this.messageToast('O Campo de e-mail está vazio!')
      }
      else if (!user.password) {
        this.messageToast('O Campo de senha está vazio!')
      }
      else {
        await Service.create(user).then(res => {
          if (res.status === 201) {
            this.listUsers()
            //criar toast de sucesso para usuario cadastrado!!!
          }
        })
        
        this.callFormUser = false
      }
    },

    //update user
    updateUser(user) {
      console.log(user)
      const id = this.update_id

      const parseUser = JSON.parse(JSON.stringify(user))

      Service.update(parseUser, id).then(res => {
        if (res.status === 200) {
          this.listUsers()
        }
      })

      this.callFormUpdate = false
    },

    //delete user
    deleteUser(id) {
      Service.remove(id).then(res => {
        if (res.status === 200) {
          this.listUsers()
        }
      })
    },

    editUser(id, user) {
      this.callFormUpdate = !this.callFormUpdate
      console.log(id, user.name)
      console.log(id, user.name)
      this.userToUpdate.name = user.name
      this.userToUpdate.email = user.email

      console.log(this.userToUpdate.name)

      this.update_id = id
    },

    hiddenModal() {
      this.hiddenChooseModal = false
    },

    closeUpdateModal() {
      this.callFormUpdate = false
    },
  },

  mounted() {
    this.listUsers()
  }
}
</script>
<style>
#items-alignment {
  display: flex;
}
.actions-op {
  background-color: #80808049;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 3px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.384);
  transition: .4s ease;
  cursor: pointer;
}

.actions-op:first-child:hover {
  background-color: red;
  color: #fff;
}

.actions-op:last-child:hover {
  background-color: #009acc;
  color: #fff;
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
