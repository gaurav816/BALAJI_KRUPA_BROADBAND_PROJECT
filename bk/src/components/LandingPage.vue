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
  
    <!-- end header section -->
    <!-- slider section -->
    <section class=" slider_section ">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-md-6 ">
                  <div class="detail_box">
                    <h1>
                      Blazing Fast Internet
                    </h1>
                    <p>
                      Experience Reliable Internet Like Never Before - Sign Up with Our ISP Now! 
                    </p>
                    <div class="btn-box">
                      <router-link to="/contact" class="btn-1">
                        Contact Us
                      </router-link>
                      
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src="../assets/images/home-page.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      
      </div>
    </section>
    <!-- end slider section -->
  </div>

  <!-- Why US -->
  <section class="why_us container-fluid">
    <h2 class="why_us_header">Why Us?</h2>
      <div class="d-flex row">
        <div class="col-md-5">
          <ul class="">
            <li><i class="bi bi-fast-forward-fill"></i>Fast Internet Speeds</li>
            <li><i class="bi bi-piggy-bank-fill"></i>Affordable Plans</li>
            <li><i class="bi bi-tools"></i>Exceptional Customer Service</li>
            <li><i class="bi bi-currency-rupee"></i>No Hidden Fees</li>
            <li><i class="bi bi-shield-lock-fill"></i>Secure and Safe</li>
            <li><i class="bi bi-ethernet"></i>Multiple Connection Options</li>
          </ul>
        </div>
        <div class="col-md-7">
          <img src="../assets/images/why_us.jpg">
        </div>
      </div>
  </section>

  <section class="find_us container-fluid">
      <div class="d-flex row">
        <div class="col-md-6">
          <img src="../assets/images/find_us.jpg" alt="">
        </div>
        <div class="col-md-6 row">
          <h2 class="find_us_header">Here you can find us</h2>
          <div class="col-md-7">
            <ul>
              <li><i class="bi bi-geo-alt-fill"></i>Santacruz-East</li>
              <li><i class="bi bi-geo-alt-fill"></i>Santacruz-West</li>
              <li><i class="bi bi-geo-alt-fill"></i>Ville Parle-West</li>
              <li><i class="bi bi-geo-alt-fill"></i>Bandra</li>
            </ul>
          </div>
          <div class="col-md-5">
            <ul>
              <li><i class="bi bi-geo-alt-fill"></i>Khar-West</li>
              <li><i class="bi bi-geo-alt-fill"></i>Juhu</li>
              
            </ul>
          </div>
        </div>
      </div>
  </section>

  <section class="ml-3 mr-3 mt-5 container">

    <h2 class="faq_header pb-5 ">Frequently Asked Questions</h2>
    <div class="accordion ml-3 mr-3" id="accordionExample">
  <div class="accordion-item ml-3 mr-3">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <b>What is BK Broadband Offering?</b> 
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Highest data plan offered by us is 500Mbps/Unlimited and the most frequently used by customers is the one that offers 100Mbps/Unlimited.
        <br>
        We also provide <b>CAP</b> data(service provider-imposed limit on the amount of data transferred by a user account at a specified level over a given period of time for a specified fee).
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <b>What is optical fiber?</b>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Optical fiber is a very thin and flexible strand made of glass or plastic that is used to transmit digital information at very high speeds.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <b>What is Gigabit?</b>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Fiber 1000 provides internet speeds up to 1 gigabit per second (Gbps), which is equivalent to 1000 megabits per second (Mbps). This high-speed connection ensures that everyone in your household can use multiple devices, such as computers, smartphones, and tablets, simultaneously, without experiencing any lag or delays.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <b>What is FTTH?</b>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        FTTH stands for "Fiber to the Home," which is a high-speed internet connection that brings fiber-optic cables directly to your home, providing faster and more reliable internet speeds than other types of connections. It allows multiple devices to connect to the internet without any noticeable slowdowns.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <b>How are faster Internet speed important?</b>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Faster internet speeds mean that you can do things on the internet much more quickly and smoothly. For example, you can watch videos or listen to music without them buffering or stopping. You can download files faster and websites will load quicker. With faster internet, you can also use multiple devices at the same time without any problems. This can make working from home easier and can make using the internet more enjoyable.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSix">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <b>How do I get fiber service from my home?</b>
      </button>
    </h2>
    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Installing a brand new fiber network takes time.
        To get fiber service at your home, you should first check whether it is available in your area by contacting local internet service providers (ISPs) or by checking their website. If it is available, you can select a plan that meets your needs and budget. A technician will then be sent by the ISP to your home to install the necessary equipment, which usually includes a modem, router, and fiber-optic cable.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingSeven">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
        <b>What is Gigabit Router?</b>
      </button>
    </h2>
    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        A gigabit router is a type of router that has gigabit Ethernet ports, which means it can handle internet speeds up to 1 gigabit per second (Gbps). This type of router is designed to support high-speed internet connections and can provide fast and reliable network connectivity to multiple devices in your home or office.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingEight">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
        <b>Is it possible to receive the internet speed promised in my plan through Wi-Fi?</b>
      </button>
    </h2>
    <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Although your internet plan may promise a certain speed, it is important to note that the actual internet speed may vary depending on the mode of connectivity. While the internet speed is fastest when a device is directly connected to an Ethernet cable, it may not necessarily be the same when connected through Wi-Fi. This could be due to various reasons such as wireless interference or a poorly configured router.
      </div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="headingNine">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
        <b>How is the Gaming Experience?</b>
      </button>
    </h2>
    <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        We provide stable Internet with no packet loss and low latency.
      </div>
    </div>
  </div>

</div>
  </section>




    <!-- info section -->
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

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .why_us{
    padding-left:8vw;
    padding-top:8vh; 
    
  }
  .why_us ul{
    padding-top: 4vh;
    list-style-type: none;
  }
  .why_us_header{
    padding-left: 2vw;
    font-size: 50px;
    font-weight: bold;
  }
  .faq_header{
    font-size: 50px;
    font-weight: bold;
  }
  .bi{
    font-size: 40px ;
   margin-right: 20px ;
  }
  .why_us li{
    font-size: 28px;
    line-height: 8vh;
  }
  .why_us img{
    height: 60vh;
    width: 40vw;
    
  }
  .find_us{
    padding-left:8vw;
    padding-top:8vh; 
    
  }
  .find_us img{
    height: 90vh;
    width: 40vw;
  }
  .find_us_header{
    padding-left: 2vw;
    font-size: 50px;
    font-weight: bold;
    margin-bottom: -30vh ;
    margin-top: 13vh;
  }
  .find_us li{
    font-size: 28px;
    line-height: 8vh;
  }
  .find_us ul{
       list-style-type: none;
  }
  @media(max-width:786px){
    .why_us li{
      font-size: 18px;
      line-height: 5vh;
    }
    .why_us img{
      display:none;
    }
    .why_us ul{
    padding-top: 2vh;
  }
  .why_us{
    padding-left:2vw;
    
  }
  .why_us_header{
    padding-left: 3vw;
    font-size: 30px !important;
  }
  .bi{
    font-size: 30px !important;
  }
  .find_us img{
      display:none;
    }
    .find_us li{
      font-size: 22px;
      line-height: 5vh;
    }
    .find_us .col-md-5{
      padding-left:0px ;
    }
    .find_us .col-md-7{
      padding-left:0px ;
    }
    .find_us_header{
    padding-left: 2vw;
    font-size: 30px !important;
    margin-bottom: 0vh ;
    margin-top: 0vh;
    padding-bottom: 4vh;
  }
  .faq_header{
    font-size: 50px;
    font-size: 30px !important;
  }
  .phone-number-section{
    display: none;
  }
  }
</style>
