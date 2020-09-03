<template>
  <div class="index">
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
@import  'http://fonts.googleapis.com/earlyaccess/notosanstc.css';

body{
  font-family: 'Noto Sans TC', sans-serif;
}

a{
    transition: all 0.3s ease 0s;
    text-decoration: none;
}

ul {
    list-style: outside none none;
    margin: 0;
    padding: 0;
}

/*導覽列會員功能 */
.header-area .header-top {
    border-bottom: 1px solid #d3d3d3;
    position: fixed top;
    top: 0;
    width: 100%;
}

.header-default {
    color: #6e6e6e;
    font-size: 20px;
    line-height: 70px;
}

.header-default p {
    margin: 0;
}

.header-user-info {
    padding: 20px;
    text-align: right;
}

.header-user-info a {
    border-left: 1px solid #f1f2f2;
    color: #252525;
    font-size: 15px;
    line-height: 0px;
    padding-left: 14px;
    margin-right: 10px;
}
.header-user-info a:hover {
    color: #96827B;
    text-decoration: none;
}

/*輪播*/
.carousel .carousel-item {
    height: 400px;
  }

.carousel .carousel-item img {
    min-height: 400px;
    max-height: 500px;
    object-fit: cover;
    display: block;
    width: 100%;
    height: 500px;
  }

/*說明*/
.service{
    padding: 60px 0;
    margin-top: 0px;
    margin-bottom: 40px;
    display: flex;
}

.single-item{
  display: float;
  position: relative;
  padding: 60px;
  justify-content: space-between;
}

.service .single-item .fa-4{
    font-size: 50px;
    color: #96827B;
    left: 15px;
    position: absolute;
    top: 15px;
}

/*教材*/
.section-title {
    margin-bottom: 40px;
    position: relative;
    text-align: center;

}

.section-title h4 {
    display: inline-block;
    padding: 0 20px;
    position: relative;
    color: #262b32;
    font-size: 24px;
}

.section-title h4::after {
    bottom: -27px;
    content: "";
    height: 23px;
    left: -75px;
    padding: 0 10px;
    position: absolute;
    right: 0;
    width: 283px;
}

.featured {
    margin-bottom: 70px;
}

/*footer*/

.footer-area {
    background: #E6DDCE;
}

.section-padding2 {
    padding: 15px ;
}

h3.footer-widget-title {
    color: #c38749;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 20px;
    text-transform: uppercase;
}
.toggle-footer li {
    color:#96827B;
    font-size: 12px;
    font-weight: 300;
    line-height: 35px;
}

.toggle-footer li a {
    color: #96827B;
    font-size: 13px;
    transition: all 0.3s ease 0s;
}
.toggle-footer li a:hover {
    color:#ACABA7;
    text-decoration: none;
}

.social-icon ul {
    margin: 0;
    overflow: hidden;
}

.social-icon ul li {
    color: #ddd;
    display: inline-block;
    padding: 11px 0;
}
</style>
