<template>
    <div class="fast-cheap container text-center">
        <div class="row">
            <div class="col-12">
                <h2 class="sous-title">Why?</h2>
                <h2 class="title">Fast, Cheap And High-Quality Digital Prints Why Not?</h2>
            </div>

            <div class="col-12 col-sm-12 col-md-4">
                <img decoding="async" width="150" height="150"
                    src="https://rona.antstheme.com/wp-content/uploads/2023/04/digital-marketing_premium-content.png"
                    class="elementor-animation-grow attachment-large size-large wp-image-449" alt="" loading="lazy">
                <div class="content">
                    <h2 class="title-svg">Modern Technology</h2>
                    <p class="text">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut</p>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4 center">
                <img decoding="async" width="150" height="150"
                    src="https://rona.antstheme.com/wp-content/uploads/2023/04/digital-marketing_copywriting.png"
                    class="elementor-animation-grow attachment-large size-large wp-image-449" alt="" loading="lazy">
                <div class="content">
                    <h2 class="title-svg">Speed And Accuracy</h2>
                    <p class="text">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut</p>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-4">
                <img decoding="async" width="150" height="150"
                    src="https://rona.antstheme.com/wp-content/uploads/2023/04/digital-marketing_target-audience.png"
                    class="elementor-animation-grow attachment-large size-large wp-image-449" alt="" loading="lazy">
                <div class="content">
                    <h2 class="title-svg">Professional Team</h2>
                    <p class="text">Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut</p>
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
.fast-cheap {
    padding: 80px 0px;

}

.sous-title {
    font-weight: bold;
    color: black;
}

.title {
    font-size: 4.5em;
    font-weight: bold;
    color: black;
    margin-bottom: 63px;
}

.center {
    border-left: 3px solid black;
    border-right: 3px solid black;
}

.title-svg {
    font-weight: bold;
    color: black;
    font-size: 2em;
    margin-top: 26px;
}

.text {
    font-size: 1.1em;
    margin-top: 26px;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {
    .sous-title {
        font-size: 2em;
    }

    .title {
        font-size: 2.5em;
        padding: 10px;
    }

    .fast-cheap {
        padding: 0px;

    }
}

@media (min-width: 429px) and (max-width: 834px) {
    .sous-title {
        font-size: 3em;
    }

    .title {
        font-size: 3.5em;
        padding: 10px;
    }

}
</style>
  
