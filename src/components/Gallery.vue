<template>
    <div class="gallery">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 top">
                    <h3 class="sous-title">Gallery</h3>
                    <h2 class="title">Spectacular Works From Our Digital Print Services</h2>
                </div>
            </div>
            <div class="row justify-content-between">

                <div class="col-md-6">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-16.jpg" alt="" width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Flower 3D Printing</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-19.jpg" alt="" width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Flower 3D Printing</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-15.jpg" alt="" width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Flower 3D Printing</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>



                <div class="col-md-4">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-6.jpg" alt="" width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Flower 3D Printing</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-18.jpg" alt="" width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Flower 3D Printing</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                        </div>
                        <div class="overlay"></div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-178.jpg" alt="" width="100%">
                        <div class="detail">
                            <h2 class="h2-detail">Flower 3D Printing</h2>
                            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
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
.gallery {
    padding: 80px;
}

.top {
    margin-bottom: 40px;
}

.top .sous-title {
    font-weight: 700;
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

    .gallery {
        padding: 80px 21px;
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

}

@media (min-width: 429px) and (max-width: 834px) {
    .gallery {
        padding: 80px 21px;
    }

    .content img {
        height: 176px;
    }
}
</style>
  