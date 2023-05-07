<template>
    <div class="our-team container text-center">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-6">
                <div class="element-content">
                    <div class="row">
                        <div class="col-md-6 sous-img">
                            <div class="img">
                                <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-11.jpg" alt="qsdqsd"
                                    width="100%">
                            </div>
                        </div>
                        <div class="col-md-6 sous-content">
                            <div class="content">
                                <h3 class="elementor-heading-title elementor-size-default">Alliana H</h3>
                                <div class="icone">
                                    <h4>Ceo Of Rona Printing</h4>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 elementor">
                <div class="elementor-widget-wrap">
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title elementor-size-default" style="color: black;">Our Team
                            </h2>
                        </div>
                    </div>
                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <h2 class="elementor-heading-title" style="color: black;">Unlimited Creativity With Our
                                Professional Team</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6 elementor elementor-text">
                <div class="elementor-widget-wrap">

                    <div class="elementor-element">
                        <div class="elementor-widget-container">
                            <h6>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor
                                facilisi pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis
                                senectus. Quam eros nunc habitant placerat arcu accumsan lacinia erat. Porttitor
                                neque</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-6">
                <div class="element-content">
                    <div class="row">
                        <div class="col-md-6 sous-img">
                            <div class="img">
                                <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-13.jpg" alt="qsdqsd"
                                    width="100%">
                            </div>
                        </div>
                        <div class="col-md-6 sous-content">
                            <div class="content">
                                <h3 class="elementor-heading-title elementor-size-default">Alliana H</h3>
                                <div class="icone">
                                    <h4>Ceo Of Rona Printing</h4>
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
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>
  
<style scoped>
.our-team {
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
    padding-left: 50px;
}


.elementor-widget-container {
    padding: 30px 0px 0px 0px;
}

.elementor-heading-title {
    font-weight: bold;
    font-size: 4em;
    color: rgb(255, 255, 255);
}

.icone h4 {
    color: white;
}

.elementor-heading-title.elementor-size-default {
    font-weight: bold;
    font-size: 2.5em;
    color: rgb(255, 255, 255);
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

.sous-img {
    transition: .5s;
    padding: 0;
}

.sous-img img {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.sous-img:hover {
    transform: scale(1.2);
}

.sous-content {
    background-color: #524bad;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.elementor.elementor-text {
    padding-left: 0;
    padding-right: 71px;
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
        padding: 43px 0;
    }

    .our-team {
        padding-top: 0;
        padding-bottom: 0;
    }

    .elementor {
        text-align: center;
        padding: 0 36px;
    }

    .elementor-heading-title {
        font-size: 2em;
    }

    .elementor-widget-container {
        padding: 10px;
    }

    .elementor.elementor-text {
        padding: 0 36px;
    }

}

@media (min-width: 429px) and (max-width: 834px) {
    .sous-img img {
        height: auto;

    }

    .elementor-heading-title {
        font-size: 2em;
    }
}
</style>
  