import { createRouter , createWebHistory } from 'vue-router';
import LandingPage from '../src/components/LandingPage';
import AboutUs from '../src/components/AboutUs';
import ContactUs from '../src/components/ContactUs';
import OurServices from '../src/components/OurServices';
import CreditsSection from '../src/components/CreditsSection';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/' , component : LandingPage},
        { path: '/about', component : AboutUs},
        { path: '/contact', component : ContactUs},
        { path: '/services', component : OurServices},
        { path: '/credits' , component : CreditsSection },
        { path: '/:notFound(.*)' , redirect: '/' },
        
    ],
    scrollBehavior(to) {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    }
});

export default router;
