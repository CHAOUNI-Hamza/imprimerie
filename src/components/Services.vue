<template>
    <div class="services text-center">
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-md-8">
                    <h2 class="sous-title">Services</h2>
                    <h2 class="title">Easy And Fast Print Customization With Digital Print Services</h2>
                </div>
                <div class="col-md-3 elementor-button">
                    <div class="elementor-button-wrapper">
                        <router-link :to="{ name: 'home' }" class="elementor-button-link">
                            Learn More
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="element-content">
                        <div class="row">
                            <div class="col-md-6 sous-img">
                                <div class="img">
                                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-10.jpg"
                                        alt="qsdqsd" width="100%">
                                </div>
                            </div>
                            <div class="col-md-6 sous-content">
                                <div class="content">
                                    <h3 class="elementor-heading-title elementor-size-default">Doc Print</h3>
                                    <div class="icone">
                                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="col-md-6">
                    <div class="element-content">
                        <div class="row">
                            <div class="col-md-6 sous-img">
                                <div class="img">
                                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-31.jpg"
                                        alt="qsdqsd" width="100%">
                                </div>
                            </div>
                            <div class="col-md-6 sous-content">
                                <div class="content">
                                    <h3 class="elementor-heading-title elementor-size-default">Shirt Print</h3>
                                    <div class="icone">
                                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div class="col-md-6">
                    <div class="element-content">
                        <div class="row">
                            <div class="col-md-6 sous-content">
                                <div class="content">
                                    <h3 class="elementor-heading-title elementor-size-default">Sticker Print</h3>
                                    <div class="icone">
                                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 sous-img">
                                <div class="img">
                                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-9-2.jpg"
                                        alt="qsdqsd" width="100%">
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div class="col-md-6">
                    <div class="element-content">
                        <div class="row">
                            <div class="col-md-6 sous-content">
                                <div class="content">
                                    <h3 class="elementor-heading-title elementor-size-default">Digital Print</h3>
                                    <div class="icone">
                                        <i class="fa fa-arrow-down" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 sous-img">
                                <div class="img">
                                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-8.jpg"
                                        alt="qsdqsd" width="100%">
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
  
<script>
export default {
    name: 'Client',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.services {
    padding: 80px 0px;
    background: #524bad;
}

.sous-title {
    font-weight: bold;
    color: rgb(255, 255, 255);
    text-align: left;
}

.title {
    font-size: 3.5em;
    font-weight: bold;
    color: rgb(255, 255, 255);
    margin-bottom: 63px;
    text-align: left;
}

.elementor-button-link {
    background-color: #ff9247;
    padding: 8px 21px;
    border-radius: 18px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 19px;
}

.sous-content {
    display: flex;
    align-items: center;
    justify-content: center;
}

.elementor-heading-title {
    font-size: 3em;
    color: rgb(255, 255, 255);
    font-weight: 700;
}

.icone .fa {
    font-size: 2em;
    color: rgb(255, 255, 255);
    margin-top: 33px;
}

.elementor-button {
    display: flex;
    align-items: center;
    justify-content: end;
}



.sous-img {
    transition: .5s;
    padding: 0;
}

.sous-img:hover {
    transform: scale(1.2);
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {

    .sous-title {
        text-align: center;
        font-size: 2em;
    }

    .title {
        font-size: 2.5em;
        padding: 12px;
        text-align: center;
    }

    .elementor-button {
        justify-content: center;
        margin-bottom: 61px;
    }

    .sous-content {
        margin: 43px 0;
    }

}

@media (min-width: 429px) and (max-width: 834px) {
    .title {
        font-size: 1.5em;
    }
}
</style>
  
