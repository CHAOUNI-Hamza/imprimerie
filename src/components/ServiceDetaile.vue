<template>
    <div class="blog container text-center">
        <div class="row justify-content-center">
            <div class="col-md-12 text-center">
                <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/image-10.jpg" alt="" class="img-top"
                    width="70%">
            </div>
            <div class="col-md-6 left">
                <div class="title">
                    <h2>Document Printing</h2>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi
                        pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc
                        habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus.</p>
                </div>
            </div>
            <div class="col-md-4 right">
                <div class="title">
                    <h2>Available Hours*</h2>
                </div>
                <div class="content">
                    <div class="img day">
                        Monday - Friday
                    </div>
                    <div class="detail">
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        07.00 am - 08.00 pm
                    </div>
                </div>
                <div class="content">
                    <div class="img day">
                        Monday - Friday
                    </div>
                    <div class="detail">
                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                        07.00 am - 08.00 pm
                    </div>
                </div>
            </div>
        </div>
        <div class="services-provided">
            <h2 class="text-center">Services Provided</h2>
            <div class="row">
                <div class="col-md-3 card-icone">
                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/graphic-design_-layers.png" alt=""
                        width="50%">
                    <div class="contenu">Document Photocopy</div>
                </div>
                <div class="col-md-3 card-icone">
                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/graphic-design_text-tool.png" alt=""
                        width="50%">
                    <div class="contenu">Making Stamps And Seals</div>
                </div>
                <div class="col-md-3 card-icone">
                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/graphic-design_branding.png" alt=""
                        width="50%">
                    <div class="contenu">Document Binding</div>
                </div>
                <div class="col-md-3 card-icone">
                    <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/graphic-design_print.png" alt=""
                        width="50%">
                    <div class="contenu">Document Lamination</div>
                </div>
            </div>
            <h2 class="text-center">One Stop Shop For All Your Printing Needs Let Us Help You Today!</h2>
            <form>
                <div class="row">
                    <div class="col-md-6" style="text-align: left;">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>

                    </div>
                    <div class="col-md-6" style="text-align: left;">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Phone</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Service</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button type="submit" class="btn btn-primary elementor-button-link">Send</button>
                    </div>
                </div>


            </form>

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
/* start media */
.blog {
    padding: 40px 40px 0 40px;
}

.elementor-button-link {
    background-color: #ff9247;
    padding: 8px 21px;
    border-radius: 18px;
    border: navajowhite;
}

.left,
.right {
    text-align: left;
    margin-top: 30px;
}

form .form-control {
    border-radius: 0;
    font-size: 12px;
    padding: 9px 0 9px 17px;
}

.left .title h2 {
    font-weight: 700;
    font-size: 2.5em;
}

.card-icone {
    margin-top: 40px;
}

.right .title h2 {
    font-weight: 700;
}

.content {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid #0000004f;
}

.detail h2 {
    font-weight: 700;
}

.contenu {
    font-size: 19px;
    font-weight: 700;
    padding-top: 20px;
}

.services-provided {
    padding: 50px 0;
}

form {
    margin-top: 60px;
}

.services-provided h2 {
    font-size: 3em;
    font-weight: 700;
    margin-top: 60px;
}

@media (min-width: 0px) and (max-width: 428px) {

    .left,
    .right {
        text-align: center;
        margin-top: 30px;
    }

    .blog {
        padding: 10px 10px 0 10px;
    }

    .left .title h2 {
        font-weight: 700;
        font-size: 1.8em;
    }

    .content {
        display: block;
    }

    .detail {
        padding-top: 28px;
    }

    form {
        padding: 0 30px;
    }

    .services-provided h2 {
        font-size: 2em;

    }
}

@media (min-width: 429px) and (max-width: 834px) {
    .content {
        display: block;
    }

    .left .title h2 {
        font-size: 1.5em;
    }

    .detail h2 {
        font-size: 2em;
    }



    .img-top {
        width: 100%;
    }

    .right .title h2 {
        font-size: 1.6em;
    }
}
</style>
  
