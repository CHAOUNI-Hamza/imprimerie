<template>
    <!-- start footer -->
    <footer class="footer">
        <div class="container">
            <footer class="site-footer">
                <div class="footer-top">
                    <div class="row  justify-content-between">
                        <div class="col-lg-3 col-md-6 lign">
                            <div class="footer-block">
                                <p class="footer-logo" style="font-size: 20px;">
                                    <router-link :to="{ name: 'home' }" class="navbar-brand logo">
                                        <span>My</span>Printer
                                    </router-link>
                                </p>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore
                                        et dolore magna aliqua. </p>
                                </div>
                                <ul class="social-icons">
                                    <li>
                                        <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 lign">
                            <div class="footer-links">
                                <h4 class="font-weight-bold">Services</h4>
                                <ul class="list-unstyled p-0">
                                    <li class="links mb-2 d-flex align-items-center">
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        <a href="#">Digital Print</a>
                                    </li>
                                    <li class="links mb-2 d-flex align-items-center">
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        <a href="#">Doc Print</a>
                                    </li>
                                    <li class="links mb-2 d-flex align-items-center">
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        <a href="#">Shirt Print</a>
                                    </li>
                                    <li class="links mb-2 d-flex align-items-center">
                                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                                        <a href="#">Doc Sticker Print</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 lign">
                            <div class="footer-newletter">
                                <h4 class="font-weight-bold">Contact Us</h4>
                                <div class="footer-contact-info">
                                    <div class="footer-address d-flex mb-2">
                                        <span class="icon">
                                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                                        </span>
                                        <p class="mb-0">
                                            Rue jbel Hebro hay nacer, Salé/Rabat
                                        </p>
                                    </div>
                                    <div class="footer-address d-flex mb-2">
                                        <span class="icon">
                                            <i class="fa fa-phone-square" aria-hidden="true"></i>
                                        </span>
                                        <p>

                                            +212 6 55 71 82 55
                                        </p>
                                    </div>
                                    <div class="footer-address d-flex mb-2">
                                        <span class="icon">
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                        <p class="mb-0">

                                            chaounihamza19@gmail.com
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="row justify-content-between">
                        <div class="col-md-5 left">
                            <p>
                                © 2023. All Rights Reserved. Good Doctor by Chaouni Designed by Hamza
                            </p>
                        </div>
                        <div class="col-md-3 right">
                            <p>
                                Terms and ConditionsPolicy
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </footer>
    <!-- end footer -->
</template>
      
<script>
export default {
    components: {},
    data() {
        return {
            listsInformation: [
                {
                    title: 'Search for Doctors',
                    link: 'about'
                },
                {
                    title: 'Login',
                    link: 'contact'
                },
                {
                    title: 'Register',
                    link: ''
                },
                {
                    title: 'Booking',
                    link: ''
                },
                {
                    title: 'Patient Dashboard',
                    link: ''
                }
            ],
            listsQuickShop: [
                {
                    title: 'Appointments',
                    link: ''
                },
                {
                    title: 'Chat',
                    link: ''
                },
                {
                    title: 'Login',
                    link: ''
                },
                {
                    title: 'Register',
                    link: ''
                },
                {
                    title: 'Doctor Dashboard',
                    link: ''
                }
            ],
            listsCustomerServices: [
                {
                    title: 'Help & FAQs',
                    link: ''
                },
                {
                    title: 'Returns Policy',
                    link: ''
                },
                {
                    title: 'Terms & Conditions',
                    link: ''
                },
                {
                    title: 'Privacy Policy',
                    link: ''
                },
                {
                    title: 'Support Center',
                    link: ''
                }
            ],
            showInformation: true,
            showCustomerServices: true,
            showQuickShop: true,
            subscribe: {
                name: "subscribe",
                email: ''
            }
        }
    },
    methods: {
        //
    },
    mounted() {
        //
    }
}
</script>
      
<style scoped>
.footer-bottom {
    padding-top: 30px;
    border-top: 1px solid #ffffff14;
    padding-bottom: 10px;
}

.footer-top {
    padding-bottom: 40px;
}

.footer {
    padding: 50px 30px 0 30px;
    background-color: #524bad;
    color: white;
    text-align: left;
}

.footer-logo {
    display: inline-block;
    margin-right: 30px;
    width: 160px;
}

.img-logo {
    max-width: 100%;
    height: auto;
}

.social-icons {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    font-size: 25px;
}

.social-icons li {
    margin-right: 15px;
}

a {
    color: #ffffff;
    text-decoration: none;
    background-color: transparent;
}

.links a {
    transition: 1s;
}

.links:hover a {
    margin-left: 10px;
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

.navbar-responsive .navbar-brand {
    margin-right: 110px;
}

.footer-links h4 {
    font-weight: bold;
}

.links .fa {
    margin-right: 15px;
}

.icon {
    width: 30px;
}
</style>
      
      
      
      