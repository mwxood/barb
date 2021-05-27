<body>
    <header class="header-bg">
        <div class="header-inner">
            <a class="logo" href="#">
                <img data-src="assets/img/logo.png" alt="Brand logo" />
            </a>
            <div class="header-right-col">
                <a class="phone" href="tel:088 545 3333">
                    <span class="phone-icon">
                        <img data-src="assets/img/phone-icon.png" alt="Phone icon" />
                    </span>

                    <span class="header-phone">
                        <span class="phone-number">088 545 3333</span>
                    </span>
                    <span class="phone-desc">
                        Поръчай сега
                    </span>
                </a>
                <a href="#" class="menu-btn">
                    <span class="hamburger">
                        <span></span>
                    </span>
                    Меню
                </a>
                <a href="#" class="basket-btn">
                    <span class="basket-icon"></span>
                    <span class="cart-count">10</span>
                </a>
            </div>
            <!--end header-right-col-->
        </div>
        <!--end header-inner-->
    </header>

    <div class="cart-holder">
        <form action="" method="post">
            <span class="cart-title">
                Вашата поръчка
            </span>
            <span class="waiting-time ">
                <span class="clock-icon"><img data-src="assets/img/clock-icon.png" alt="Clock icon" /></span>
                Приблизително време за доставка 50 мин
            </span>
            <div class="order-holder">

                <div class="order">
                    <span class="order-img">
                        <img data-src="assets/img/cart-1.jpg" alt="Product image" />
                    </span>
                    <span class="order-name">
                        Апетитно свинско шишче
                    </span>

                    <span class="order-quantity">
                        <span class="minus-btn">-</span>
                        <input type="number" class="custom-number" value="1" />
                        <span class="plus-btn">+</span>
                    </span>

                    <span class="order-price-holder">
                        <span class="order-price">
                            4,40лв
                        </span>

                        <a href="#" class="order-clear">
                            <img data-src="assets/img/close-icon.png" alt="Clear icon" />
                        </a>
                    </span>


                </div>
                <!--end order-->

                <div class="order">
                    <span class="order-img">
                        <img data-src="assets/img/cart-2.jpg" alt="Product image" />
                    </span>
                    <span class="order-name">
                        Селска салата
                    </span>

                    <span class="order-quantity">
                        <span class="minus-btn">-</span>
                        <input type="number" name="quantity" class="custom-number" value="1" />
                        <span class="plus-btn">+</span>
                    </span>

                    <span class="order-price-holder">
                        <span class="order-price">
                            2,20лв
                        </span>

                        <a href="#" class="order-clear">
                            <img data-src="assets/img/close-icon.png" alt="Clear icon" />
                        </a>
                    </span>
                </div>
                <!--end order-->



            </div>
            <!--end order-holder-->

            <div class="voucher-holder">
                <label class="custom-checkbox">
                    <input type="checkbox" name="voucher-agree" class="checkbox voucher-check">
                    <span class="checkmark"></span>
                    Имам ваучер за отстъпка
                </label>

                <div class="voucher-input">
                    <div class="form-group">
                        <input type="text" name="voucher" class="input-bg" />
                        <input type="submit" value="Приложи" class="submit-btn" />
                    </div>
                    <!--end form-group-->
                </div>
                <!--end voucher-input-->
            </div>
            <!--end voucher-holder-->

            <div class="order-total-holder">
                <div class="total-inner">
                    <span class="order-title">Сума:</span>
                    <span class="order-sum">6,60лв</span>
                </div>
                <!--end total-inner-->
                <div class="total-inner">
                    <span class="order-title">Доставка:</span>
                    <span class="order-sum">3,00лв</span>
                </div>
                <!--end total-inner-->
                <div class="total-inner">
                    <span class="order-title">Общо за плащане:</span>
                    <span class="order-sum big-sum">9,60лв</span>
                </div>
                <!--end total-inner-->
            </div>
            <!--end order-total-holder-->

            <div class="order-client-info">
                <span class="cart-title">Данни за доставка</span>
                <div class="client-form">
                    <div class="input-holder">
                        <label>
                            <input type="text" class="input-bg" name="name" placeholder="Вашето име" />
                        </label>
                    </div>
                    <!--end input-holder-->

                    <div class="input-holder">
                        <label>
                            <input type="phone" class="input-bg" name="phone" placeholder="Телефон за контакт" />
                        </label>
                    </div>
                    <!--end input-holder-->

                    <div class="input-holder">
                        <label>
                            <input type="email" class="input-bg" name="email" placeholder="Email" />
                        </label>
                    </div>
                    <!--end input-holder-->

                    <div class="input-holder mt-4">
                        <label class="custom-radio">
                            <input checked name="address" class="cart-radio" type="radio">
                            <span class="checkmark"></span>
                            Адрес за доставка в град Стара Загора
                        </label>
                    </div>
                    <!--end input-holder-->

                    <div class="input-holder">
                        <label class="custom-radio">
                            <input checked name="address" class="cart-radio" type="radio">
                            <span class="checkmark"></span>
                            До наш обект
                        </label>
                    </div>
                    <!--end input-holder-->

                    <div class="input-holder">
                        <label>
                            <input type="text" class="input-bg" name="street" placeholder="Улица/квартал" />
                        </label>
                    </div>
                    <!--end input-holder-->


                    <div class="input-holder flex-container space-between">
                        <label class="half-width">
                            <input type="text" class="input-bg" name="street-number" placeholder="Номер" />
                        </label>

                        <label class="half-width">
                            <input type="text" class="input-bg" name="appartament" placeholder="Етаж/Апартамент" />
                        </label>
                    </div>
                    <!--end input-holder-->
                </div>

            </div>
            <!--end order-client-info-->

            <div class="payment-info">
                <span class="cart-title">Плащане</span>

                <div class="input-holder">
                    <label class="custom-radio">
                        <input checked name="delivery" class="cart-radio" type="radio">
                        <span class="checkmark"></span>
                        При доставка
                    </label>
                </div>
                <!--end input-holder-->

                <div class="input-holder">
                    <label class="custom-radio">
                        <input checked name="delivery" class="cart-radio" type="radio">
                        <span class="checkmark"></span>
                        С карта
                    </label>
                </div>
                <!--end input-holder-->

                <div class="input-holder mt-5">
                    <label class="custom-checkbox">
                        <input type="checkbox" name="voucher-agree" class="checkbox voucher-check">
                        <span class="checkmark"></span>
                        Съгласен съм с условията за използване на <a href="#">bbqto.bg</a>
                    </label>
                </div>
                <!--end input-holder-->

                <div class="input-holder mt-5">
                    <input type="submit" class="cart-btn btn" name="payment-btn" value="Завърши поръчката" />
                </div>
                <!--end input-holder-->
            </div>
            <!--end payment-info-->
        </form>
    </div>
    <!--end cart-holder-->

    <?php include('navigation.php') ?>