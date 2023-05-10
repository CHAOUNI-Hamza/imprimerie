<template>
    <div class="blog container text-center">
        <div class="row">
            <div class="col-md-12 text-center">
                <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/news1.jpg" alt="" class="img-top"
                    width="70%">
            </div>
            <div class="col-md-8 left">
                <div class="title">
                    <h2>Digital Printing Technology For Your Project Inkjet Vs. Laser</h2>
                </div>
                <div class="text">
                    <p>Lorem ipsum dolor sit amet consectetur. Non commodo mi elit ut convallis. Tempor facilisi
                        pellentesque sem praesent tortor venenatis. Diam volutpat interdum quis senectus. Quam eros nunc
                        habitant placerat arcu accumsan lacinia erat. Porttitor neque pharetra viverra in rhoncus. Diam
                        dignissim facilisis consequat quisque pharetra donec tortor. Ullamcorper convallis sed amet duis sit
                        id pharetra massa habitant.

                        Magna diam nibh urna adipiscing suspendisse. Ac fermentum mattis velit consectetur duis mi vitae
                        amet integer. In ac eu magna ipsum. Velit malesuada ornare lectus ut curabitur nulla. Consectetur ut
                        pellentesque sed justo tortor pretium id. Quam ante suspendisse laoreet tortor nam suspendisse in.
                        Neque pellentesque odio lacinia libero egestas.Facilisis lobortis fringilla diam amet amet volutpat
                        placerat varius. Turpis fermentum lectus mi est enim.

                        Tellus laoreet consequat vel cras eu. Posuere nunc adipiscing metus nec. Lacus dignissim duis
                        condimentum sagittis. Ut vel sed quisque amet risus cursus cras. Nulla sollicitudin tortor duis nunc
                        lacus vel semper urna. Lacinia id magna arcu id.Consequat viverra at habitasse porta malesuada porta
                        condimentum. Velit scelerisque ultrices ut nisl maada turpis. Rhoncus tristique vitae adipiscing
                        enim posuere. Pretium lorem ornare ut amet est. Iaculis

                        lectus odio posuere mattis sed leo volutpat. Porttitor dignissim et neque tincidunt eget facilisis.
                        Ut nibh lacinia in diam mollis pellentesque lectus diam. Ut posuere bibendum fermentum quis. Lectus
                        at eget nunc libero purus mattis. Turpis in condimentum in nisi nisl amet est elementum. Commodo sed
                        odio tempor varius nisl. Id semper ornare nulla arcu bibendum adipiscing arcu magna duis. Mauris
                        risus molestie maecenas viverra urna fermentum est nulla viverra.</p>
                </div>
            </div>
            <div class="col-md-4 right">
                <div class="content">
                    <div class="img">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/news1-853x1024.jpg" alt=""
                            width="80%">
                    </div>
                    <div class="detail">
                        <h2>Experience The Power…</h2>
                        <p>Blog Detail Lorem ipsum dolor…</p>
                    </div>
                </div>
                <div class="content">
                    <div class="img">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/news2.jpg" alt="" width="80%">
                    </div>
                    <div class="detail">
                        <h2>Experience The Power…</h2>
                        <p>Blog Detail Lorem ipsum dolor…</p>
                    </div>
                </div>
                <div class="content">
                    <div class="img">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/news3-853x1024.jpg" alt=""
                            width="80%">
                    </div>
                    <div class="detail">
                        <h2>Experience The Power…</h2>
                        <p>Blog Detail Lorem ipsum dolor…</p>
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
/* start media */
.blog {
    padding: 40px 40px 0 40px;
}

.left,
.right {
    text-align: left;
    margin-top: 30px;
}

.left .title h2 {
    font-weight: 700;
    font-size: 2.5em;
}

.content {
    margin-top: 20px;
    display: flex;
}

.detail {
    /*padding-left: 28px;*/
}

.detail h2 {
    font-weight: 700;
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

    .detail {
        padding-top: 28px;
    }

    .img-top {
        width: 100%;
    }
}
</style>
  
