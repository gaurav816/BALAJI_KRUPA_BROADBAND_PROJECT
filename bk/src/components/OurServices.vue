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
<div class="container serv">
    <h1 class="text-center pt-3 pb-2"><b>OUR SERVICES</b></h1>
    
    <div class="text-center">
      <img src="../assets/images/ott.png" alt="" class="ott_desktop">
      <div class="ott_mobile">
        <img src="../assets/images/ottm-1.png" alt="">
        <img src="../assets/images/ottm-2.png" alt="">
      </div>
    </div>
    <div class="row playbox text-center pt-5">
        <h3><b>Partnered By </b><span><a href="https://playboxtv.in/index.html"><img src="../assets/images/PLAYBOX.png" alt="" class="playbox_img"></a></span></h3>
    </div>
  </div>
</div> 

<section class="services pt-5">
  
  <div class="cont d-flex justify-content-around flex-column flex-lg-row align-items-center ">
    <div class="card">
        <div class="face face1">
            <div class="content">
                <div class="icon">
                    <img src="../assets/images/residential.png" alt="">
                </div>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
                <h5 class="text-center"><b>Residential Broadband</b></h5>
                <p>Residential broadband refers to high-speed internet services that are designed and marketed for use in homes, providing fast and reliable access to the internet through a wired or wireless connection.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face face1">
            <div class="content">
                <div class="icon">
                    <img src="../assets/images/commercial.png" alt="">
                </div>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
              <h5 class="text-center"><b>Commercial Broadband</b></h5>
              <p>Commercial broadband is a faster and more reliable internet service for businesses, with higher bandwidth and dedicated lines, designed to meet the needs of businesses.</p>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="face face1">
            <div class="content">
                <div class="icon" >                    
                    <img src="../assets/images/optic.png" alt="">
                </div>
            </div>
        </div>
        <div class="face face2">
            <div class="content">
              <h5 class="text-center"><b>FTTH Connection</b></h5>
              <p>FTTH stands for "Fiber to the Home", which is a type of broadband internet service that delivers high-speed data through a fiber-optic cable directly to a residential or commercial building.</p>
            </div>
        </div>
    </div>
</div>

<div class="container serv-2">
  <div class="row">
    <div class="col-md-6">
      <h2>DOT Certified ISP And IP1</h2>
      <ul>
        <li>We are DOT Certified ISP/Mumbai.</li>
        <li>We are IP1 ISP/Mumbai</li>
      </ul>
    </div>
    <div class="col-md-6">
      <img src="../assets/images/certification.png" alt="" class="serv-img">
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <img src="../assets/images/installation.png" alt="" class="serv-img">
    </div>
    <div class="col-md-6">
      <h2>Quick Installtion</h2>
      <ul>
        <li>Internet connections are installed quickly.</li>
        <li>Installation can be done at any given location.</li>
      </ul>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <h2>24x7 Customer Service</h2>
      <ul>
        <li>Technical team is available for your service.</li>
        <li>Support team is available for your service.</li>
        <li>24X7 to resolve customer queries.</li>
      </ul>
    </div>
    <div class="col-md-6">
      <img src="../assets/images/customer-serivce.png" alt="" class="serv-img">
    </div>
  </div>
</div>
</section>


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
.ser{
  padding-left: 5vw !important;
  padding-right: 5vw !important;
}

.cont {
    /* width: 1000px; */
    position: relative;
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 100px;
}

.cont .card {
    position: relative;
    border-radius: 10px;
}

.cont .card .icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #f00;
    transition: 0.7s;
    z-index: 1;
}

.cont .card:nth-child(1) .icon {
    background: #e07768;
}

.cont .card:nth-child(2) .icon {
    background: #6eadd4;
}

.cont .card:nth-child(3) .icon {
    background: #4aada9;
}


.cont .card .icon .fa {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
}

.category {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 80px;
    transition: 0.7s;
    color: #fff;
}

.cont .card .face {
    width: 300px;
    height: 200px;
    transition: 0.5s;
}

.cont .card .face.face1 {
    position: relative;
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    transform: translateY(100px);
}

.cont .card:hover .face.face1{
    background: #ff0057;
    transform: translateY(0px);
}

.cont .card .face.face1 .content {
    opacity: 1;
    transition: 0.5s;
}

.cont.card:hover .face.face1 .content {
    opacity: 1;
}

.cont .card .face.face1 .content i{
    max-width: 100px;
}

.cont .card .face.face2 {
    position: relative;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 20px 50px rgba(0,0,0,0.8);
    transform: translateY(-100px);
}

.cont .card:hover .face.face2{
    transform: translateY(0);
}

.cont .card .face.face2 .content p {
    margin: 0;
    padding: 0;
    text-align: center;
    color: #414141;
}

.cont .card .face.face2 .content h3 {
    margin: 0 0 10px 0;
    padding: 0;
    color: #fff;
    font-size: 24px;
    text-align: center;
    color: #414141;
} 

.cont a {
    text-decoration: none;
    color: #414141;
}

.slotName {
    width: 21rem;
    margin: 0 auto;
    text-align: center;
    
}

.slotDetails {
    width: 20rem;
    margin: 0 auto;
    text-align: left;
    
}

.slotName button{
    margin: 0 auto;
}
  
.slotName .card{
    /* border: none; */
    /* box-shadow: 4px 4px 4px #aaaaaa;
    border-radius: 15px; */
    background-color : #332940;    
    color: #fff;
    margin-bottom: 3%;
}

.slotName {
    border: 3px solid black;
    box-shadow: 4px 4px 4px #aaaaaa;
    border-radius: 15px;
    color: black;
    margin-bottom: 2%;
}

.getDetails{
    margin : 0 auto;
}

.icon img{
  width:100%;
  height:100%;
}
.services h1{
font-weight:800;
}
.serv{
  color: white;
}
.serv ul{
  line-height: 5vh;;
}
.serv-img{
  height:75%;
  width: 75%;
}
.serv-2 ul{
  line-height: 5vh;
  font-size: larger;
}
.playbox_img{
  height:40vh;
  width: auto;
}
.playbox h3{
  color: black;
}
.playbox{
  cursor: pointer;
}
.ott_mobile{
  display: none;
}



@media(max-width:786px){
  .serv ul{
  line-height: 4vh;
}
.security-mobile{
  padding-bottom: 200px;
}
  .serv-2 img{
    display: none;
  }
  .ott_desktop{
    display: none;
  }
.ott_mobile{
  display: block;
}
.ott_mobile img{
  height: 40vh;
  width: auto;
}

.playbox img{
  height: 20vh;
  width: auto;
}
}


</style>
