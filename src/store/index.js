import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router';

import pyService from "@/API/pyService.js"

Vue.use(Vuex)

export default new Vuex.Store({
      state: {
        users: [],
        loggedUser: [],
        userExists: false,
        epis: [],
        categorys: []
      },
      mutations: {
        STORE_ITEMS(state) {
          if (!localStorage.getItem("users")) {
            localStorage.setItem("users", JSON.stringify(state.users));
          }
        },
        LOGIN(state, data) {
          state.loggedUser = data.user
          localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser));
          if (state.loggedUser.type === 1) {
            alert(data.message)
            router.push("/adminHome")
          } else if (state.loggedUser.type === 2) {
            alert(data.message)
            router.push("/")
          }
        },
        LOGOUT(state) {
          pyService.logout()
          state.loggedUser = []
          localStorage.removeItem("loggedUser", JSON.stringify(state.loggedUser));
          router.push({
            name: 'home'
          })
        },
        SET_EPIS(state, data) {
          state.epis = data
        },
        SET_CATEGORY(state, data) {
          state.categorys = data
        },

        ADD_USER(state, data) {
          alert(data.message)
          router.push({
            name: 'login'
          })
        },
        ADD_EPI() {
          alert("Adicionou nova EPI")
        },

      },
      actions: {
        async fetchEpis({
          commit
        }) {
          commit("SET_EPIS", await pyService.getEPIS())
        },
        async postUser({
          commit
        }, payload) {
          commit("ADD_USER", await pyService.registerUser(payload.name, payload.email, payload.adress, payload.zipcode, payload.number, payload.password, payload.password2))
        },
        async addEpi({
          commit
        }, payload) {
          commit("ADD_EPI", await pyService.addEPI(payload.name, payload.category_id, payload.img, payload.price))
          },
          async fetchCategorys({
            commit
          }, payload) {
            commit("SET_CATEGORY", await pyService.getCategory())
            },
            async login({
              commit
            }, payload) {
              commit("LOGIN", await pyService.login(payload.email, payload.password))
            },
        },
        getters: {
          getEPIS: state => state.epis,
          lastId(state) {
            if (state.users.length) {
              return state.users[state.users.length - 1].id;
            } else {
              return 0;
            }
          },
          getUserOn(state) {
            if (state.loggedUser.length) {
              state.logged = true
              return state.logged;
            } else {
              state.logged = false
              return state.logged;
            }
          },
          getName(state) {
            if (state.loggedUser.length == 0) {
              return state.notLogged
            } else {
              return state.loggedUser.name
            }
          },
          getEmail(state) {
            return state.loggedUser.email
          }
        }
      })