<template>
    <div class="pricing">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 top">
                    <h3 class="sous-title">Gallery</h3>
                    <h2 class="title">Spectacular Works From Our Digital Print Services</h2>
                </div>
            </div>
            <div class="row justify-content-between">
                <div class="col-md-4">
                    <div class="content-card">
                        <h2 class="title-card">Basic Packages</h2>
                        <h2 class="packages">$45/Packages</h2>
                        <ul class="list">
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                        </ul>
                        <div class="button">
                            <router-link :to="{ name: 'home' }" class="nav-link elementor-button-link" role="button">
                                Choose Now
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-card" style="background-color: #524bad;color: white;border: none;">
                        <h2 class="title-card" style="color: white;">Best Value</h2>
                        <h2 class="packages" style="color: white;">$75/Packages</h2>
                        <ul class="list">
                            <li class="list-li">
                                <i class="fa fa-check-circle" style="color: white;" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" style="color: white;" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" style="color: white;" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" style="color: white;" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                        </ul>
                        <div class="button">
                            <router-link :to="{ name: 'home' }" style="color: black;background-color: white;"
                                class="nav-link elementor-button-link" role="button">
                                Choose Now
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="content-card">
                        <h2 class="title-card">Super Packages</h2>
                        <h2 class="packages">$125/Packages</h2>
                        <ul class="list">
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                            <li class="list-li">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                                <h5>Lorem ipsum dolor sit amet consec.</h5>
                            </li>
                        </ul>
                        <div class="button">
                            <router-link :to="{ name: 'home' }" class="nav-link elementor-button-link" role="button">
                                Choose Now
                            </router-link>
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
.pricing {
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

.list {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    padding: 28px 0;
}

.packages {
    margin-bottom: 36px;
    color: black;
    font-size: 3em;
    font-weight: 700;
}

.list-li {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-bottom: 20px;
}

.content-card {
    border: 3px solid black;
    padding: 29px;
}

.title-card {
    margin-bottom: 45px;
    font-weight: 700;
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
    margin: 36px 0 16px;
}

.fa {
    font-size: 26px;
    color: black;
    margin-bottom: 6px;
    margin-right: 5px;
}
</style>
  