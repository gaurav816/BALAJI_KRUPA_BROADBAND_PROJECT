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
    <h1 class="contact_us_header">CONTACT US</h1>
    <section class="contact_us">
    <div class="mt-5 mb-5 d-flex justify-content-center">
        <div class="con d-flex justify-content-center">
            <div class="content">
            <div class="left-side">
                <div class="address details">
                <i class="fa-solid fa-location-dot"></i>
                <a href="https://www.google.com/maps/place/BALAJI+Broadband+Internet+%26+Cable+Services/@19.081307,72.8362851,15z/data=!4m15!1m8!3m7!1s0x3be7c94161cee113:0x3582381b593896af!2sBALAJI+Broadband+Internet+%26+Cable+Services!8m2!3d19.081307!4d72.8362851!10e1!16s%2Fg%2F11nfp61ysd!3m5!1s0x3be7c94161cee113:0x3582381b593896af!8m2!3d19.081307!4d72.8362851!16s%2Fg%2F11nfp61ysd">
                <div class="topic">Address</div>
                <div class="text-one">A Wing, Top Floor,</div>
                <div class="text-one">Hasmukh(Kerala) Nagar 2,Tagore Rd,</div>
                <div class="text-two">Santacruz West - 400054, Mumbai, Maharashtra </div>
                </a>
                </div>
                <div class="phone details">
                <i class="fa-solid fa-phone"></i>
                <div class="topic">Phone</div>
                <a href="tel:9821110993"><div class="text-one">9821110993</div></a>
                <a href="tel:9869352627"><div class="text-two">9869352627</div></a>
                </div>
                <div class="email details">
                <i class="fa-solid fa-envelope"></i>
                <div class="topic">Email</div>
                <a href="mailto:balajikrupabroadband@yahoo.com"><div class="text-two">balajikrupabroadband@yahoo.com</div></a>
                </div>
            </div>
            <div class="right-side">
                <div class="m-2">
                  <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15082.400876038844!2d72.8362851!3d19.081307!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c94161cee113%3A0x3582381b593896af!2sBALAJI%20Broadband%20Internet%20%26%20Cable%20Services!5e0!3m2!1sen!2sin!4v1682007649832!5m2!1sen!2sin" width="800px" height="300px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  
                </div>
            </div>
        </div>
    </div>
    </div>
  </section> 
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
.icon{
    color: purple;
    font-size: 40px;
}

.con{
  width: 85%;
  background: #fff;
  border-radius: 6px;
  padding: 20px 60px 30px 40px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}
.con .content{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.con .content .left-side{
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  position: relative;
}
.content .left-side::before{
  content: '';
  position: absolute;
  height: 70%;
  width: 2px;
  right: -15px;
  top: 50%;
  transform: translateY(-50%);
  background: #afafb6;
}
.content .left-side .details{
  margin: 14px;
  text-align: center;
}
.content .left-side .details i{
  font-size: 30px;
  color: #0d42ff;
  margin-bottom: 10px;
}
.content .left-side .details .topic{
  font-size: 18px;
  font-weight: 500;
}
.content .left-side .details .text-one,
.content .left-side .details .text-two{
  font-size: 14px;
  color: #585895;
}
.con .content .right-side{
  width: 100%;
  margin-left: 75px;
}
.map{
    width: 60vw;
    height: 60vh;
}
/* @media (max-width: 1205px) {
  .con{
    width: 90%;
    padding: 30px 40px 40px 35px ;
  }
  .con .content .right-side{
   width: 100%;
   margin-left: 55px;
}
.map{
    width: 80vw;
    height: 60vh;
} */
/* } */
@media (max-width: 1200px) {
  .map{
    width: 75vw;
    height: 60vh;
    margin-left: 25px;
  }
  .con{
    height: 100%;
  }
  .con .content{
    flex-direction: column;
  }
 .con .content .left-side{
   width: 100%;
   flex-direction: row;
   margin-top: 40px;
   justify-content: center;
   flex-wrap: wrap;
 }
 .con .content .left-side::before{
   display: none;
 }
 .con .content .right-side{
   width: 100%;
   margin-left: 0;
   margin-right: 0;
 }
}
.contact_us{
  padding-top: 6vh;
}
.contact_us_header{
  color: white;
  text-align: center;
  font-weight: bold;
  padding-top: 10vh;
}
.hero_area .bi{
  font-size: 22px;
  color: #fff;
}
.hero_area a{
  text-decoration: none;
  color: #fff;
}
</style>
