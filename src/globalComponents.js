import Header from "./components/Header.vue";
import Client from "./components/Client.vue";
import AboutUs from "./components/AboutUs.vue";
import FastCheap from "./components/FastCheap.vue";
import Services from "./components/Services.vue";
import OurTeam from "./components/OurTeam.vue";
import Special from "./components/Special.vue";
import Gallery from "./components/Gallery.vue";
import Pricing from "./components/Pricing.vue";
import Testimonials from "./components/Testimonials.vue";
import Blog from "./components/Blog.vue";
import Footer from "./components/Footer.vue";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
    install(Vue) {
        Vue.component("Header", Header)
        Vue.component("Client", Client)
        Vue.component("FastCheap", FastCheap)
        Vue.component("AboutUs", AboutUs)
        Vue.component("Services", Services)
        Vue.component("OurTeam", OurTeam)
        Vue.component("Special", Special)
        Vue.component("Gallery", Gallery)
        Vue.component("Pricing", Pricing)
        Vue.component("Testimonials", Testimonials)
        Vue.component("Blog", Blog)
        Vue.component("Footer", Footer)
    },
};

export default GlobalComponents;
