<template>
    <div class="testimonials container text-center">
        <div class="row">

            <div class="col-12 col-sm-12 col-md-7 elementor">
                <div class="elementor-widget-wrap">
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title elementor-size-default">Testimonials</h2>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title">Get To Know Our Digital Print Services Closer Through
                                Customer Reviews</h2>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <p>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi
                                pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros
                                nunc habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in
                                rhoncus. Diam dignissim facilisis consequat quisque pharetra.</p>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <div class="elementor-button-wrapper">
                                <router-link :to="{ name: 'home' }" class="elementor-link">
                                    Sally Wily - Customer Rona
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-5">
                <div class="img">
                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/portrait-of-joyful-adult-pointing-index-fingers-up-2022-02-04-18-04-50-utc.jpg"
                        alt="" width="100%">
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
.testimonials {
    padding: 80px 0px;
    background-image: url(https://rona.antstheme.com/wp-content/uploads/2023/04/component-background.png);
    background-position: center left;
    background-repeat: no-repeat;
    background-size: 88% auto;
}

.img img {
    width: 100%;
    height: 658px;
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

.elementor-link {
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 2em;
}
</style>
  
