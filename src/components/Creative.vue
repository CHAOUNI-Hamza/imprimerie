<template>
    <div class="creative">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 top">
                    <h3 class="sous-title">Creative Production Team</h3>
                </div>
            </div>
            <div class="row justify-content-between">

                <div class="col-md-3 col-sm-6 card-img-content">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/team4-768x1024.jpg" alt=""
                            width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Lisa Marianasa</h2>
                            <h6>Designer Of Rona</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 card-img-content">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/team1-768x1024.jpg" alt=""
                            width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Lisa Marianasa</h2>
                            <h6>Designer Of Rona</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 card-img-content">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/team2.jpg" alt="" width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Lisa Marianasa</h2>
                            <h6>Designer Of Rona</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 card-img-content">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/team3-768x1024.jpg" alt=""
                            width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Lisa Marianasa</h2>
                            <h6>Designer Of Rona</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>
  
<style scoped>
.creative {
    padding: 80px;
}

.top {
    margin-bottom: 40px;
}

.top .sous-title {
    font-weight: 700;
    font-size: 3.5em;
}

.card-img-content {
    padding: 0;
    margin: 0;
}

.top .title {
    font-size: 3em;
    font-weight: 700;
}

.content {
    position: relative;
    overflow: hidden;
    margin-top: 20px;
}

.detail {
    position: absolute;
    top: 100%;
    left: 10%;
    color: white;
    z-index: 10;
    transition: 1s;
    opacity: 0;
}

.h2-detail {
    font-size: 2.5em;
    font-weight: 700;
    width: 79%;
    text-align: left;
}

.content img {
    height: 350px;
}

h6 {
    text-align: left;
    width: 80%;
    font-size: 1.5em;
}

.content:hover .detail {
    top: 25%;
    opacity: 1;
}

.content:hover .overlay {
    top: 0;
    opacity: 0.6;
}

.overlay {
    position: absolute;
    background-color: black;

    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    transition: 1s;
    opacity: 0;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {

    .creative {
        padding: 0px 21px;
    }

    .top .title {
        font-size: 1.5em;
    }

    .top .sous-title {
        font-size: 2.5em;
    }

    .content img {
        height: 300px;
    }

    .card-img-content {
        padding: 10px;
    }

}

@media (min-width: 429px) and (max-width: 834px) {
    .creative {
        padding: 80px 21px;
    }

    .content img {
        height: 231px;
    }

    .h2-detail {
        font-size: 1.5em;
    }

    h6 {
        font-size: 1em;
    }
}
</style>
  