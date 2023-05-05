<template>
    <div class="special">

        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h2>Get Special Offer For Today With Rona Printing</h2>
                    <div class="element-button">
                        <router-link class="elementor-button-link" :to="{ name: 'home' }">Let’s Try Rona</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="elementor-background-overlay"></div>
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.special {
    background-image: url(https://rona.antstheme.com/wp-content/uploads/2023/04/puzzle-concept-2022-06-27-22-34-42-utc.jpg);
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 80px;
    position: relative;
}

.special h2 {
    font-size: 5em;
    font-weight: 700;
    color: white;

}

.col-md-12.text-center {
    z-index: 100;
}

.elementor-button-link {
    background-color: #ffffff;
    padding: 8px 21px;
    border-radius: 18px;
    text-decoration: none;
    color: rgb(0, 0, 0);
    font-weight: bold;
    font-size: 19px;
    margin-top: 20px;
}

.element-button {
    margin-top: 30px;
}

.elementor-background-overlay {
    background-color: black;
    opacity: 0.6;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
}
</style>
  