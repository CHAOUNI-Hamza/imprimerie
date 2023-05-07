<template>
    <div class="about container text-center">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6">
                <div class="img">
                    <img src="https://tglcreation.com/blog/wp-content/uploads/2014/01/nuancier-pantone.jpg" alt=""
                        width="100%">
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 elementor">
                <div class="elementor-widget-wrap">
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title elementor-size-default">About Us</h2>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title">Experience the Power of Digital
                                Printing</h2>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <p>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi
                                pellentesque sem praesent tortor venenatis.</p>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <div class="elementor-button-wrapper">
                                <router-link :to="{ name: 'home' }" class="elementor-button-link">
                                    See Detail
                                </router-link>
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
.about {
    padding: 80px 0px;
    background-image: url(https://rona.antstheme.com/wp-content/uploads/2023/04/component-background.png);
    background-position: center left;
    background-repeat: no-repeat;
    background-size: 88% auto;
}

.img img {
    width: 80%;
}

.elementor {
    display: flex;
    align-content: center;
    align-items: center;
    text-align: left;
}

.elementor-widget-container {
    padding: 30px 0px 0px 0px;
}

.elementor-heading-title {
    font-weight: bold;
    font-size: 4em;
    color: black;
}

.elementor-heading-title.elementor-size-default {
    font-weight: bold;
    font-size: 2.5em;
    color: black;
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

/* start media */
@media (min-width: 0px) and (max-width: 428px) {
    .elementor {
        text-align: center;
    }

    .elementor-heading-title {
        font-size: 3em;
    }
}

@media (min-width: 429px) and (max-width: 834px) {

    .elementor-heading-title {
        font-size: 2em;
    }

    .elementor-widget-container {
        padding: 0;
    }
}
</style>
  
