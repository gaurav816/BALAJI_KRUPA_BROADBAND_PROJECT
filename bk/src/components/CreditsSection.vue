<template>
    <div class="hero_area">
    <!-- header section strats -->
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <router-link to="/" class="navbar-brand">
            <span class="logo">
              <img src="../assets/images/LOGO-BALAJI.png" alt="">
             </span>
            <span class="logo-name">BALAJI KRUPA</span>
         </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="s-1"> </span>
            <span class="s-2"> </span>
            <span class="s-3"> </span>
      </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
              <ul class="navbar-nav  ">
                <li class="nav-item">
                  <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/about" class="nav-link"> About</router-link>
                </li>
                <li class="nav-item">
                  <router-link to="services" class="nav-link"> Services </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="contact" class="nav-link">Contact Us</router-link>
                </li>
                <li>
                  <div class="nav-item phone-number-section">
                  <div class="nav-link"> 
                    <i class="bi bi-telephone-fill"></i>
                    <a href="tel:9821110993">9821110993/</a>
                    <a href="tel:9869352627">9869352627</a>
                  </div>
                  </div>
                </li>
              </ul>
            </div>
            
          </div>
          
        </nav>
      </div>
    </header>
    <div class="container d-flex justify-content-center credits">
        <ul>
            <li>Image by <a href="https://www.freepik.com/free-vector/flat-design-illustration-customer-support_12982910.htm#&position=0&from_view=collections">Freepik</a></li>
            <li><a href="https://www.freepik.com/free-vector/certification-concept-illustration_12704350.htm#&position=1&from_view=collections">Image by storyset</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/electrician-concept-illustration_9319825.htm#&position=2&from_view=collections">Image by storyset</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/colleagues-working-together-project_9174459.htm#&position=4&from_view=collections">Image by pch.vector</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/isometric-5g-internet-concept-with-workers-uniform-laying-ethernet-cable-vector-illustration_16893821.htm#&position=3&from_view=collections">Image by macrovector</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/silhouette-skyline-illustration_3786385.htm#&position=5&from_view=collections">Image by rawpixel.com</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/personal-growth-self-development-composition-with-male-human-characters-illustration_13693654.htm#&position=6&from_view=collections">Image by macrovector</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/tiny-female-person-with-spyglass-looking-job-opportunities_18734212.htm#&position=7&from_view=collections">Image by pch.vector</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/illustration-business-mission_3139819.htm#&position=8&from_view=collections">Image by rawpixel.com</a> on Freepik</li>
            <li><a href="https://www.freepik.com/free-vector/people-ask-question_10837981.htm#&position=11&from_view=collections">Image by tartila</a> on Freepik</li>
            <li>Image by <a href="https://www.freepik.com/free-vector/flat-wifi-concept_4537912.htm#&position=12&from_view=collections">Freepik</a></li>
            <li><a href="https://www.freepik.com/free-vector/hand-holding-magnifier-front-phone-with-city-map-screen-mobile-application-with-route-destination-flat-vector-illustration-navigation-transportation-technology-concept-banner_26921828.htm#&position=10&from_view=collections">Image by pch.vector</a> on Freepik</li>
            
        </ul>
    </div>
    </div>
    
 
    <div class="footer_bg">
        <section class="info_section layout_padding2">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="info_logo">
              <span class="logo">
              <img src="../assets/images/LOGO-BALAJI.png" alt="">
             </span>
              <span class="footer-name">
                Balaji Krupa
              </span>
              <p>
                Surf, Stream, and Stay Connected - Get the Best Internet Plans with Our ISP Today
              </p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_links">
              <h4>
                BASIC LINKS
              </h4>
              <ul class="  ">
                <li class="">
                  <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
                </li>
                <li class="">
                  <router-link to="/about" class="nav-link"> About</router-link>
                </li>
                <li class="">
                  <router-link to="services" class="nav-link"> Services </router-link>
                </li>
                <li class="">
                  <router-link to="contact" class="nav-link">Contact Us</router-link>
                </li>
                <li>
                  <router-link to="credits" class="nav-link">Credits</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <div class="info_contact">
              <h4>
                CONTACT DETAILS
              </h4>
              <a>
                <div class="img-box">
                  <img src="../assets/images/telephone-white.png" width="12px" alt="">
                </div>
                <p>
                  +91 9821110993/9869352627
                </p>
              </a> 
              
              <a href="mailto:balajikrupabroadband@yahoo.com">
                <div class="img-box">
                  <img src="../assets/images/envelope-white.png" width="18px" alt="">
                </div>
                <p>
                  balajikrupabroadband@yahoo.com
                </p>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    <section class="container-fluid footer_section">
      <div class="container">
        <div>
          <p>
          &copy; <span id="displayYear">2023</span> All Rights Reserved By Balaji Krupa Broadband Pvt. Ltd.</p>
          <p>Designed & Developed by :</p>
          <p>Abhishek Wani</p>
          <p>Gaurav Prajapati</p>
        </div>
      </div>
    </section>
</div>
    <!-- end info_section -->


    <!-- footer section -->


</template>

<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){

        },
        methods(){
            
        }
    }   
    
    
</script>

<style>
.credits {
    font-size: 20px;
    text-decoration: none;
    color: #FFF;
    line-height: 40px;
}
</style>
