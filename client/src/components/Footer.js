import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-2 col-md-6 col-sm-12">
                            <h3>Quick Links</h3>
                            <ul class="list-unstyled jump-links">
                                <li><a href="#">Our Story<span><i class="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Help/FAQ<span><i class="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">My Account<span><i class="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Blog<span><i class="fas fa-long-arrow-alt-right"></i></span></a></li>
                                <li><a href="#">Contacts<span><i class="fas fa-long-arrow-alt-right"></i></span></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Opens Daily!</h3>
                            <ul class="list-unstyled info-links">
                                <li>Sun - Sat : 6PM to 12AM</li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-md-6 col-sm-12">
                            <h3>Contacts</h3>
                            <table class="list-unstyled info-links" cellpadding="6px">
                                <tbody><tr>
                                    <td><i class="fa fa-home"></i></td>
                                    <td><a href="https://goo.gl/maps/gaHoZQfAHWGotm5T8" target="blank">Calle Andres Pastoriza # 8A, La Rinconada, Santiago, Republica Dominicana</a></td>
                                </tr>
                                    <tr>
                                        <td><i class="fa fa-phone"></i></td>
                                        <td><a href="tel:+1(829)978–3299">+1(829)978–3299</a></td>
                                    </tr>
                                    <tr>
                                        <td><i class="fa fa-envelope"></i></td>
                                        <td><a href="mailto:youshop.store@gmail.com">youshop.store@gmail.com</a></td>
                                    </tr>
                                </tbody></table>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12">
                            <h3>Keep In Touch</h3>
                            <div class="row">
                                <div class="col">
                                    <div class="form-div">
                                        <form>
                                            <div class="form-group">
                                                <input type="email" placeholder="Your email" required="required" />
                                                    <button type="submit" class="btn btn-block"><i class="fa fa-angle-right"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="social-div">
                                        <h3>Follow Us</h3>
                                        <ul class="social-links">
                                            <li>
                                                <a class="facebook" href="https://www.facebook.com/LaBru-113792396848028/">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a class="instagram" href="https://www.instagram.com/labru.cuisine/?igshid=1oyi942r2u2i2">
                                                    <i class="fa fa-instagram"></i>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
