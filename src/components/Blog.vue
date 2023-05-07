<template>
    <div class="blog">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 top">
                    <h3 class="sous-title">Blog</h3>
                    <h2 class="title">Digital Printing Industry Update Latest News And Information</h2>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-4">
                    <div class="content-card">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/news2.jpg" alt="" width="100%">
                        <div class="content">
                            <h2 class="title-card">Experience The Power Of Digital Printing</h2>
                            <h2 class="packages">Blog Detail Lorem ipsum dolor sit amet consectetur. Non commodo mi elit…
                            </h2>
                            <div class="button">
                                <router-link :to="{ name: 'home' }" class="nav-link elementor-button-link" role="button">
                                    See Detail
                                </router-link>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-card">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/news3-853x1024.jpg" alt=""
                            width="100%">
                        <div class="content">
                            <h2 class="title-card">Experience The Power Of Digital Printing</h2>
                            <h2 class="packages">Blog Detail Lorem ipsum dolor sit amet consectetur. Non commodo mi elit…
                            </h2>
                            <div class="button">
                                <router-link :to="{ name: 'home' }" class="nav-link elementor-button-link" role="button">
                                    See Detail
                                </router-link>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-card">
                        <img src="https://rona.antstheme.com/wp-content/uploads/2023/04/news4-853x1024.jpg" alt=""
                            width="100%">
                        <div class="content">
                            <h2 class="title-card">Experience The Power Of Digital Printing</h2>
                            <h2 class="packages">Blog Detail Lorem ipsum dolor sit amet consectetur. Non commodo mi elit…
                            </h2>
                            <div class="button">
                                <router-link :to="{ name: 'home' }" class="nav-link elementor-button-link" role="button">
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
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>
  
<style scoped>
.blog {
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
    margin-top: 45px;
    text-align: left;
}

.content-card img {
    width: 100%;
    height: 350px;
}

.packages {
    color: #000000a6;
    font-size: 1em;
    font-weight: 700;
}

.list-li {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 20px;
}

.content-card {
    padding: 29px;
}

.title-card {
    margin-bottom: 30px;
    font-weight: 700;
    color: black;
    font-size: 1.8em;
}

.elementor-button-link {
    background-color: #ff9247;
    padding: 8px 21px;
    border-radius: 18px;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin: 36px 0 16px;
    text-align: center;
    width: 50%;
}

.fa {
    font-size: 26px;
    color: black;
    margin-bottom: 6px;
    margin-right: 5px;
}

.content-card img {
    transition: 1s;
}

.content-card:hover img {
    transform: scale(1.1);
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {
    .top .sous-title {
        font-size: 3em;
    }

    .blog {
        padding: 18px;
    }

    .top .title {
        font-size: 2em;
    }

    .content-card {
        padding: 0 0 40px 0;
    }

}

@media (min-width: 429px) and (max-width: 834px) {
    .blog {
        padding: 70px 18px;
    }

    .top .sous-title {
        font-size: 4em;
    }



    .top .title {
        font-size: 2em;
    }

    .content-card {
        padding: 0 0 40px 0;
    }

    .content-card img {
        height: 250px;
    }

    .title-card {

        font-size: 1.5em;
    }

    .elementor-button-link {
        width: 100%;
    }
}
</style>
  