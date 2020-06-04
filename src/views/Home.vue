<template>
    <div>
        <div class="container-full title">
            <h1 id="redTitle">Protect Yourself</h1>
        </div>
        
        <div class="container-full title">
            <h1 id="redTitle">Plataforma de venda de EPI</h1>
            <hr class="back-line">
            <div class="container" id="whiteRect">
                <p id="space">space</p>
            </div>
        </div>

        <p>Para iniciar uma conta "admin" inserir email: brunomajusta@gmail.com; password: 123123</p>
    </div>
</template>

<style lang="css" scoped>
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
        width: 80vw;
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
        width: 600px;
        position: relative;
        display: block;
        z-index: 5;
    }
</style>