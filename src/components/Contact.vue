<template>
    <div class="contact">
        <div class="container">
            <div class="row">
                <div class="col-md-6 left">
                    <div class="title">
                        <h2 style="text-align: left;">Let’s Get In Touch</h2>
                    </div>
                    <form>
                        <div class="row">
                            <div class="col-md-6" style="text-align: left;">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Name</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>

                            </div>
                            <div class="col-md-6" style="text-align: left;">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Service</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: left;">
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Message</label>
                                    <textarea type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <div class="col-md-12" style="text-align: left;">
                                <button type="submit" class="btn btn-primary elementor-button-link">Send</button>
                            </div>
                        </div>


                    </form>
                </div>
                <div class="col-md-6 right">
                    <h2 class="title-right">Need More Help?</h2>
                    <p>
                        Need More Help?
                        Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi
                        pellentesque sem praesen</p>
                    <ul class="information">
                        <li>
                            <span><i class="fa fa-phone-square" aria-hidden="true"></i></span>
                            <span>+212 6 55 72 81 55</span>
                        </li>
                        <li>
                            <span><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <span>chaounihamza19@gmail.com</span>
                        </li>
                        <li>
                            <span><i class="fa fa-map-marker" aria-hidden="true"></i></span>
                            <span>Salé / Rabat - kom sektour, 73</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="map container">
        <div class="title-maps">
            <h2 class="title-maps text-center">Maps</h2>
            <div class="row">
                <div class="col-md-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105884.89453202965!2d-6.939664790313968!3d33.969333764848955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b871f50c5c1%3A0x7ac946ed7408076b!2sRabat!5e0!3m2!1sfr!2sma!4v1683754074310!5m2!1sfr!2sma"
                        width="100%" height="550" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
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
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map .title-maps {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 40px;
}

.contact,
.map {
    padding: 80px 0;
}

.information li {
    display: flex;
    font-size: 1.5em;
    font-weight: 600;
}

.information li .fa {
    width: 50px;
}

.title h2 {
    text-align: left;
    font-size: 2em;
    font-weight: 700;
}

.left {
    padding: 0 50px;
}

form {
    padding: 30px 0;
}

form .form-control {
    border-radius: 0;
    font-size: 12px;
    padding: 9px 0 9px 17px;
}

.elementor-button-link {
    background-color: #ff9247;
    padding: 8px 21px;
    border-radius: 18px;
    border: navajowhite;
    text-align: left;
    margin-top: 40px;
}

.right {
    background-color: #efefef;
    text-align: left;
    padding: 40px;
    display: block;
    align-items: center;
    justify-content: center;
}

.title-right {
    font-size: 3em;
    font-weight: 700;
    margin-bottom: 39px;
}

.right p {
    margin-bottom: 39px;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {
    .title-right {
        font-size: 2.3em;
    }

    .information li {
        font-size: 1em;
    }

    .information {
        padding-left: 0;
    }

    .map {
        padding-top: 0;
    }
}

@media (min-width: 429px) and (max-width: 834px) {
    .information li {
        font-size: 1em;
    }

    .information {
        padding-left: 0;
    }

    .map {
        padding-top: 0;
    }
}
</style>
  