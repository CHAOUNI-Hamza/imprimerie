<template>
    <section class="banner" :class="{ 'day-mode': isDayMode, 'night-mode': isNightMode }">
        <header>
            <router-link :to="{ name: 'home' }" class="navbar-brand logo">
                <span>My</span>Printer
            </router-link>
            <ul class="link">
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="nav-link active">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'aboutus' }" class="nav-link">About Us</router-link>
                </li>
                <li class="nav-item dropdown">
                    <router-link :to="{ name: 'services' }" class="nav-link dropdown-toggle" id="navbarDropdown1"
                        role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</router-link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                        <li>
                            <router-link :to="{ name: 'services' }" class="dropdown-item"
                                style="color: black;">Services</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'servicedetail' }" class="dropdown-item" style="color: black;">Service
                                Detail</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <router-link :to="{ name: 'team' }" class="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">Pages</router-link>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <router-link :to="{ name: 'team' }" class="dropdown-item"
                                style="color: black;">Team</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'gallery' }" class="dropdown-item"
                                style="color: black;">Gallery</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'pricing' }" class="dropdown-item"
                                style="color: black;">Pricing</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'blogs' }" class="dropdown-item"
                                style="color: black;">Blog</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'blog' }" class="dropdown-item" style="color: black;">Blog
                                Detail</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'faq' }" class="dropdown-item" style="color: black;">Faq</router-link>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'contactus' }" class="nav-link">Contact Us</router-link>
                </li>
            </ul>
            <ul class="link">
                <li>
                    <router-link :to="{ name: 'home' }" class="nav-link elementor-button-link" role="button">
                        Get quote
                    </router-link>
                </li>

            </ul>
            <ul class="checkbtn">
                <li>
                    <label for="" @click="showNavbaResponsive = !showNavbaResponsive">
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </label>
                </li>
            </ul>
        </header>

        <div class="content">
            <h2>Elevate Your Brand With Our Digital Print Services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus est exercitationem ut asperiores minus?
                Quos a omnis laboriosam accusamus velit, ipsa corrupti, expedita repellendus odit natus obcaecati, iure
                tempore cum.</p>
        </div>
        <img src="@/assets/color.png" alt="" class="color">
        <img src="@/assets/men.png" alt="" class="men">
        <ul class="sci">
            <li>
                <router-link :to="{ name: 'home' }">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home' }">
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home' }">
                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home' }">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                </router-link>
            </li>

        </ul>
        <div class="dayNight">
            <i @click="switchToDay" v-if="isNightMode" class="fa fa-moon-o" aria-hidden="true"></i>
            <i @click="switchToNight" v-if="isDayMode" class="fa fa-sun-o" aria-hidden="true"></i>
        </div>
        <!-- start navbar responsive -->
        <div class="navbar-responsive" :class="{ active: showNavbaResponsive }">
            <div class="closemmn" @click="showNavbaResponsive = !showNavbaResponsive">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </div>
            <div>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'aboutus' }" class="nav-link">About Us</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link :to="{ name: 'services' }" class="nav-link dropdown-toggle" id="navbarDropdown1"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">Service</router-link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown1">
                            <li>
                                <router-link :to="{ name: 'services' }" class="dropdown-item"
                                    style="color: black;">Services</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'servicedetail' }" class="dropdown-item"
                                    style="color: black;">Service
                                    Detail</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <router-link :to="{ name: 'team' }" class="nav-link dropdown-toggle" id="navbarDropdown"
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</router-link>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <router-link :to="{ name: 'team' }" class="dropdown-item"
                                    style="color: black;">Team</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'gallery' }" class="dropdown-item"
                                    style="color: black;">Gallery</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'pricing' }" class="dropdown-item"
                                    style="color: black;">Pricing</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'blogs' }" class="dropdown-item"
                                    style="color: black;">Blog</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'blog' }" class="dropdown-item" style="color: black;">Blog
                                    Detail</router-link>
                            </li>
                            <li>
                                <router-link :to="{ name: 'faq' }" class="dropdown-item"
                                    style="color: black;">Faq</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'contactus' }" class="nav-link">Contact Us</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- end navbar responsive -->
    </section>
</template>
  
<script>
export default {
    name: 'Header',
    props: {},
    data() {
        return {
            isDayMode: true,
            isNightMode: false,
            showNavbaResponsive: false,
        }
    },
    methods: {
        switchToDay() {
            this.isDayMode = true;
            this.isNightMode = false;
        },
        switchToNight() {
            this.isDayMode = false;
            this.isNightMode = true;
        }
    }
}
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.elementor-button-link {
    background-color: #ff9247;
    padding: 8px 21px;
    border-radius: 18px;
}

.banner {
    font-family: 'Roboto', sans-serif;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 100px;

    transition: .5s;
}

.dropdown-item {
    transition: .5s;
}

.dropdown-item:hover {
    color: #524bad !important;
}

.dropdown-menu {
    display: none;
    top: 40px;
    transition: 1s;
}

.dropdown-menu.show {
    display: block;
    border-radius: 5px;
    border: none;
    top: 0px;
}

.day-mode {
    background: #524bad;
}

.night-mode {
    background: #333;
}

.night-mode ul li .nav-link {

    color: #fff !important;

}


.night-mode .chat {
    background: #333;
    color: #fff;
}

.checkbtn {
    color: #fff;
}

.night-mode h3 {
    color: #fff;
}

header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 40px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    color: #ffffff;
    font-weight: bold;
    font-size: 1.5em;
    text-decoration: none;
}

.logo span {
    color: #3fb984 !important;
    margin-right: 5px;
}

ul {
    display: flex;
    gap: 70px;
}

ul li {
    list-style: none;
}

ul li .nav-link {
    text-decoration: none;
    font-weight: 500;
    font-size: 1.2em;
    color: #fff;
    transition: 0.5s;
    font-weight: bold;
}

.content {
    position: relative;
    max-width: 700px;
    z-index: 10;
}

h3 {
    font-size: 2em;
    color: #333;
    font-weight: 200;
    transition: .5s;
}

h2 {
    font-size: 4.5em;
    color: #fff;
    font-weight: bold;
    transition: .5s;
}

p {
    font-size: 1.2em;
    color: rgb(255, 255, 255);
    margin: 10px 0;
    transition: .5s;
}

button {
    position: relative;
    background: #3fb984;
    color: #fff;
    border: none;
    outline: none;
    padding: 15px 35px;
    font-size: 1.25em;
    letter-spacing: 0.05em;
    margin-right: 20px;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: .5s;
}

.chat {
    background: transparent;
    color: #333;
}

.chat .fa {
    position: relative;
    color: #00a6f5;
    font-size: 1.5em;
    top: 5px;
    margin-right: 11px;
}

.sci {
    position: absolute;
    bottom: 30px;
    display: flex;
    gap: 20px;
}


.sci li {
    list-style: none;
}

.sci li a {
    text-decoration: none;
    font-size: 1.5em;
    color: rgb(255, 255, 255);
}

.sci li a:hover {
    color: #00a6f5;
}

.dayNight {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 25px;
    width: 60px;
    height: 60px;
    background: #f0f0f0;
    color: #666;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .5s;
    font-size: 2em;
    border-radius: 50%;
}

.color {
    position: absolute;
    right: 3%;
    max-width: 500px;

}

#text {
    color: #3fb984;

}



.men {
    position: absolute;
    right: 2%;
    max-width: 448px;
    bottom: 0px;
    animation: mymove-61dd7a3d 8s ease-in-out infinite;
}

.link {
    margin-bottom: 0;
}

@keyframes mymove {

    0%,
    100% {
        transform: translateX(0px);
    }

    50% {
        transform: translateX(-50px);
    }
}




/* Navbar Responsive */
.navbar-responsive {
    display: flex;
    position: fixed;
    z-index: 999;
    background: #ffffff;
    height: 100%;
    justify-content: left;
    top: 0;
    left: -419px;
    transition: all 1s ease-in-out;
    font-family: "Poppins", sans-serif;
}

.navbar-responsive .closemmn {
    color: #73d0f3;
    background-color: #fff;
    position: absolute;
    top: 15px;
    right: -27px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    font-size: 34px;
    border-radius: 50%;
}

.navbar-responsive .navbar-brand {
    margin-right: 110px;
}

.navbar-responsive .navbar-nav {
    width: 215px;
    padding: 10px;
}

.navbar-responsive .collapse .nav-link {
    font-weight: 600;
    text-transform: capitalize;
    transition: 0.5s;
}

.navbar-responsive .collapse .nav-link:hover {
    background: #75d0f3;
    color: black;
}

.navbar-responsive .icons-col a {
    position: relative;
    color: black;
    display: inherit;
    font-size: 25px;
}

.navbar-responsive .icons-col button {
    background: none;
    border: none;
    font-size: 23px;
}

.navbar-responsive .icons-col a .cart {
    position: absolute;
    background: black;
    color: white;
    min-width: 16px;
    height: 16px;
    border-radius: 16px;
    line-height: 17px;
    right: 40px;
    top: 0px;
    font-size: 11px;
}

.navbar-responsive .navbar-nav a {
    position: relative;
    color: black;
    font-size: 13px;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    line-height: 40px;
    padding: 0 15px;
    display: flex;
    align-items: center;
    margin-left: 12px;
}

.navbar-responsive .navbar-nav a span {
    position: absolute;
    top: -10px;
    left: 55%;
    font-size: 8px;
    background-color: green;
    display: inline-block;
    padding: 3px 4px;
    vertical-align: middle;
    color: white;
    line-height: 1;
    z-index: 4;
}

.navbar-responsive .navbar-nav a span::after {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    display: inline-block;
    height: 0;
    width: 0;
    border-top: 5px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid green;
    top: 7px;
    left: 3px;
}

.navbar-responsive .search-popup {
    width: 100%;
    padding: 40px 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: white;
    text-align: left;
    opacity: 0;
    display: none;
    transform: translateY(100%);
}

.navbar-responsive .search-popup button {
    background: none;
    border: none;
}

.navbar-responsive .search-popup .closeSearch {
    position: absolute;
    color: black;
    font-size: 17px;
    top: 10px;
    right: 20px;
}

.navbar-responsive .search-popup h4 {
    font-weight: 800;
    color: black;
    font-size: 16px;
}

.navbar-responsive .input-group .form-control {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    border-bottom: 1px solid #eeeeee;
}

.navbar-responsive .input-group .btn {
    border: none;
}

.navbar-responsive .input-group .form-control::placeholder {
    font-size: 12px;
}

.navbar-responsive .search-popup-none {
    opacity: 1;
    display: block;
    transform: translateY(0);
}

.banner .checkbtn {
    display: none;
    cursor: pointer;
}

/* start media */
@media (min-width: 0px) and (max-width: 428px) {

    .banner .navbar-brand {
        margin: initial;
    }

    h2 {
        font-size: 2em;
    }

    p {
        font-size: 1em;
    }

    .sci {
        bottom: 105px;
        gap: 70px;
    }

    .content {

        margin-bottom: 110px;
    }

    .banner header {
        padding: 16px 19px;
    }

    .banner {
        padding: 26px;
    }

    .banner .checkbtn {
        display: block;
    }

    .banner .link {
        display: none;
    }

    .navbar-responsive.active {
        left: 0;
    }

    .navbar-responsive .navbar-nav .nav-link {
        line-height: 0;
    }

    .navbar-responsive .navbar-nav {
        padding: 53px 10px;
    }
}

@media (min-width: 429px) and (max-width: 834px) {
    .navbar-responsive .navbar-nav .nav-link {
        line-height: 0;
    }

    .navbar-responsive .navbar-nav {
        padding: 53px 10px;
    }

    .banner .navbar-brand {
        margin: initial;
    }

    h2 {
        font-size: 3em;
    }

    p {
        font-size: 1.5em;
        margin-top: 57px;
    }

    .sci {
        bottom: 157px;
        gap: 131px;
    }

    .content {

        margin-bottom: 420px;
    }

    .banner header {
        padding: 44px 66px;
    }

    .banner {
        padding: 87px;
    }

    .banner .checkbtn {
        display: block;
    }

    .banner .link {
        display: none;
    }

    .navbar-responsive.active {
        left: 0;
    }

    .sci li a {
        font-size: 3.5em;
    }

    .men {
        max-width: 635px;

    }

    .logo {

        font-size: 2.5em;

    }

    label .fa {
        font-size: 2em;
    }
}

/* end media */
</style>
  