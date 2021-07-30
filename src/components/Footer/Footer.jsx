import React from "react";
import "./Footer.css";
import Logo from "../../resources/images/Logo/logo2.png"


export default function Footer() {

    return (
        <section className="Footer">
            <div className="Footer-holder">
                <div className="Footer-nav">

                    {/* /////////////////////////////////// */}
                    <div>
                        <img className="footerLogo" src={Logo} alt="" />
                        <div className="Footer-icons">
                            <i className="icon-location" />
                            <p>
                                تهران،خ ولی عصر، نرسیده به کوچه شهریار، پ 11
                            </p>
                        </div>
                        <div className="Footer-icons">
                            <i className="icon-location" />
                            <p>
                                contact@company.com
                            </p>
                        </div>
                        <div className="Footer-icons">
                            <i className="icon-location" />
                            <p>
                                +098 2233 456
                        </p>
                        </div>


                    </div>
                    {/* //////////////////////////////// */}
                    <div className="Footer-cata">
                        <h4>دسته بندی ها</h4>
                        <ul>
                            <li>مردانه</li>
                            <li>زنانه</li>
                            <li>کیف</li>
                            <li>کفش</li>
                            <li>سایر</li>
                        </ul>
                    </div>
                    {/* ////////////////////////////////////// */}
                    {/* //////////////////////////////// */}
                    <div className="Footer-cata">
                        <h4>اطلاعات</h4>
                        <ul>
                            <li>درباره ما</li>
                            <li>تماس با ما</li>
                            <li>تیم ما</li>
                            <li>قوانین و مقررات</li>
                            <li>تعویض و بازگشت</li>
                        </ul>
                    </div>
                    {/* ////////////////////////////////////// */}
                    {/* //////////////////////////////// */}
                    <div className="Footer-cata">
                        <h4>لینکهای مفید</h4>
                        <ul>
                            <li>حساب من</li>
                            <li>موقعیت</li>
                            <li>سفارش بلیط</li>
                            <li>سایز بندی ها</li>
                            <li>سایر</li>
                        </ul>
                    </div>
                    {/* ////////////////////////////////////// */}
                    <div className="subsCribe">
                        <div><p>با دنبال کردن ما از تخفیفها با خبر شوید</p> </div>
                        <div className="footer-btn">
                            <p>دنبال کردن</p>
                        </div>
                        <div>
                            <i className="icon-cc-visa" />
                            <i className="icon-cc-mastercard" />
                            <i className="icon-cc-paypal" />
                            <i className="icon-cc-stripe" />
                            <i className="icon-cc-amex" />
                        </div>
                    </div>
                    {/* //////////////////////////////////////////////// */}
                </div>
                <div className="Footer-CW">
                    <div> <p>کلیه حقوق این سایت متعلق به Hamiiid.ir می باشد</p></div>
                    <div className="Footer-CW-nav">
                        <ul>
                            <li>خانه</li>
                            <li>وبلاگ</li>
                            <li>درباره ما</li>
                            <li>سایر محصولات</li>
                            <li>تماس با ما</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )

}
