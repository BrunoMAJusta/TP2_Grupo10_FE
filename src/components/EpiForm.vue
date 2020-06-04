<template>
  <div id="epiform">
    <div class="container-full title">
      <h1 id="redTitle">Adicionar EPI</h1>
      <hr class="back-line" />
      <div class="container" id="whiteRect">
        <p id="space">space</p>
      </div>
    </div>
    <div class="container col-sm-4">
      <form @submit.prevent="addEpi()">
        <div class="container col-sm-6">
          <div class="form-group">
            <label for="exampleInputName">Nome</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              placeholder="Nome do EPI"
              v-model="name"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleType">Categoria da EPI</label>
            <select class="form-control" v-model="selectCate">
            <option v-for="type in  category" :key="type.category_id" :value="type.category">{{type.category}}</option>
            </select>
          </div>
          <div class="form-group">
            <label for="exampleInputPrice">Preço</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputName"
              placeholder="Nome do EPI"
              v-model="price"
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputImg">Imagem</label>
            <input
              type="link"
              class="form-control"
              id="exampleInputName"
              placeholder="Link da imagem"
              v-model="img"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Adicionar</button>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import { mapGetters } from "vuex";

export default {
  name: "EpiForm",
  data: () => ({
    name: "",
    category: [],
    price: "",
    img: "",
    selectCate: ""
  }),
  created(){
    this.getCategories()
    this.category = this.$store.state.categorys
  },
  methods: {
    async addEpi() {
      try {
        await this.$store.dispatch("addEpi", {
          name: this.name,
          category_id: this.selectCate,
          img: this.img,
          price: this.price
        });
      } catch (err) {
        alert(err);
      }
    },
    async getCategories() {
      try {
        await this.$store.dispatch("fetchCategorys");
        this.category = this.getCate.data;
      } catch (err) {
        alert(err);
      }
    },
  },
  computed:{
    ...mapGetters(["getCate"]),

  }
};
</script>

<style lang="css" scoped>
#input-group-4,
#input-group-1 {
  padding: 20px;
}

#link {
  color: white;
}

label {
  float: left;
  margin-bottom: 0.5rem;
}

#redTitle {
  font-size: 45px;
  color: #007bff;
  display: block;
  z-index: 7;
  position: relative;
}

.back-line {
  background-color: black;
  margin-top: -35px;
  width: 60vw;
  display: block;
  z-index: 5;
  position: relative;
  height: 1px;
}

#space {
  color: white;
}

.title {
  padding-top: 20px;
  padding-bottom: 50px;
}

#whiteRect {
  background-color: white;
  margin-top: -35px;
  height: 35px;
  width: 340px;
  position: relative;
  display: block;
  z-index: 5;
}
</style>