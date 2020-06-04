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
      <form v-on:submit.prevent="login()">
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
            <select class="form-control" v-model="category">
              <option>Default select</option>
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
export default {
  name: "EpiForm",
  data: () => ({
    name: "",
    category: "",
    price: "",
    img: ""
  })
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