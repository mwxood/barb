<?php include('includes/head.php'); ?>

<div class="content">
    <?php include('includes/header.php'); ?>
    <main>
        <section class="contact-wrap">
            <div class="contacts">
                <div class="custom-container">
                    <span class="location">
                        Контакти
                    </span>
                </div>
            </div>
            <!--end contacts-->

            <div class="contact-section">
                <div class="custom-container">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.0591402970626!2d25.611269815694314!3d42.42647603889678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a869917f86c613%3A0x453f68fbc60e54d9!2sul.%20%22Doctor%20Todor%20Stoyanovich%22%2023%2C%206003%20Stara%20Zagora%20Centre%2C%20Stara%20Zagora!5e0!3m2!1sen!2sbg!4v1622092628773!5m2!1sen!2sbg" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div><!--end map-->
                            <span class="contact-address">
                                <span class="town">Стара Загора</span>
                                <span class="streen">ул.”д-р Тодор Стоянович” 23</span>
                            </span>
                        </div>
                        <!--end col-md-6-->
                        <div class="col-md-6">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.168138825562!2d25.626251415694192!3d42.424155839043735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a8699c3824fc99%3A0xe7415ac036a6466b!2sbul.%20%22Ruski%22%2032%2C%206000%20Stara%20Zagora%20Centre%2C%20Stara%20Zagora!5e0!3m2!1sen!2sbg!4v1622092665751!5m2!1sen!2sbg" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </div><!--end map-->
                            <span class="contact-address">
                                <span class="town">Стара Загора</span>
                                <span class="streen">ул.”Руски” 32</span>
                            </span>
                        </div>
                        <!--end col-md-6-->
                    </div>
                    <!--end row-->

                    <div class="contact-info">
                        <h1 class="contact-heading">
                            Свържете се с нас
                            <span class="contact-desc">
                            споделите вашите впечатления от храната или обслужването в нашите обекти.
                            </span>
                        </h1>

                        <div class="contact-form-holder">
                            <div class="contact-form">
                                <form action="" method="post">
                                    <div class="fourm-group">
                                        <label>
                                            <input class="input-bg" type="text" placeholder="Вашето име" required name="name" />
                                        </label>
                                        <label>
                                            <input class="input-bg" type="email" placeholder="Email"  required name="email" />
                                        </label>

                                        <label>
                                            <input class="input-bg" type="phone" placeholder="Телефон за контакт"  required name="phone" />
                                        </label>
                                    </div>

                                    <textarea class="input-bg" name="message" placeholder="Вашето съобщение"  required></textarea>
                                    <div class="captcha-holder">
                                        <div class="captcha"></div>
                                        <input class="btn form-btn" value="Изпрати" type="submit" />
                                    </div>
                                </form>
                            </div><!--end contact-form-->
                            <div class="contact-form-address">
                                <span class="phone-address"><img src="assets/img/contact-phone-icon.png" alt="phone"/>Телефон за поръчки <a href="tel:0882982222">0882 982 222</a></span>
                                <span class="address"><img src="assets/img/contact-pin-icon.png" alt="address"/>Адрес за кореспонденция: <strong>Стара Загора, ул. „Руски“ 32</strong></span>
                                <div class="merchant-info">
                                    <span class="merchant-title">Данни за търговеца:</span>
                                    <span class="merchant-number">Барбекюто ЕООД, ЕИК:123750819 </span>
                                    <span class="mol">Лице за контакт: Донка Петрова </span>
                                </div>
                            </div><!--end contact-form-address-->
                        </div>
                    </div><!--end contact-info-->
                </div>
                <!--end custom-container-->
            </div>
            <!--end contact-section-->
        </section>

    </main>
</div>
<!--end content-->
<?php include('includes/footer.php') ?>