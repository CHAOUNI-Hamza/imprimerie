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
import GoToTopButton from "./components/GoToTopButton.vue";
import Welcome from "./components/Welcome.vue";
import Creative from "./components/Creative.vue";
import History from "./components/History.vue";
import Servicee from "./components/Servicee.vue";
import Ceo from "./components/Ceo.vue";
import BlogDetail from "./components/BlogDetail.vue";
import ServiceDetaile from "./components/ServiceDetaile.vue";
import Contact from "./components/Contact.vue";

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
        Vue.component("GoToTopButton", GoToTopButton)
        Vue.component("Welcome", Welcome)
        Vue.component("Creative", Creative)
        Vue.component("History", History)
        Vue.component("Servicee", Servicee)
        Vue.component("Ceo", Ceo)
        Vue.component("BlogDetail", BlogDetail)
        Vue.component("ServiceDetaile", ServiceDetaile)
        Vue.component("Contact", Contact)
    },
};

export default GlobalComponents;
