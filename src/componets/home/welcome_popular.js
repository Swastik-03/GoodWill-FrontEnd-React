import React from 'react'

function welcome_popular() {
    return (
        <div>


            <section class="welcome-one" style={{backgroundImage: 'url(assets/images/backgrounds/welcome_one_bg.jpg)' }}>
                <div class="welcome-one-hands"
                    style={{backgroundImage:'url(assets/images/backgrounds/welcome_one_hands.jpg)'}}>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6">
                            <div class="welcome-one__left">
                                <div class="welcome-one__img wow slideInLeft" data-wow-delay="100ms">
                                    <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt=""/>
                                        <div class="welcome-one__badge">
                                            <img src="assets/images/resources/welcome_one_badge.png" alt=""/>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6">
                            <div class="welcome-one__right">
                                <div class="block-title text-left" style={{marginTop: '-11px'}}>
                                    <h4>Helping Today</h4>
                                    <h2>Our Goal is to Help Poor People</h2>
                                </div>
                                <p class="welcome-one__text">Lorem ipsum dolor sit amet, consectetur notted adipisicing elit
                                    sed do eiusmod tempor incididunt ut labore et simply free text dolore magna aliqua lonm
                                    andhn.</p>
                                <ul class="welcome-one__list list-unstyled">
                                    <li><span class="icon-confirmation"></span>Nsectetur cing do not elit.</li>
                                    <li><span class="icon-confirmation"></span>Suspe ndisse suscipit sagittis in leo.</li>
                                    <li><span class="icon-confirmation"></span>Entum estibulum dignissim lipsm posuere.</li>
                                </ul>
                                <div class="welcome-one__campaigns">
                                    <div class="iocn">
                                        <i class="fa-sharp fa-solid fa-treasure-chest"></i>
                                    </div>
                                    <div class="text">
                                        <h2 class="counter">86,700</h2>
                                        <p>Successfull Campaigns</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--Welcome One End-->

            <!--Popular Causes Start--> */}
            <section class="popular-causes">
                <div class="container">
                    <div class="block-title text-left">
                        <h4>Help the People</h4>
                        <h2>Our Popular Causes</h2>
                    </div>
                    <div class="row">
                        {/* <!--Popular Causes Single--> */}
                        <div class="popular-causes__sinlge col-sm-4">
                            <div class="popular-causes__img">
                                <img src="assets/images/resources/popular-causes-img-1.jpg" alt=""/>
                                    <div class="popular-causes__category">
                                        <p>Food</p>
                                    </div>
                            </div>
                            <div class="popular-causes__content">
                                <div class="popular-causes__title">
                                    <h3><a href="campaign-details.html">Raise Fund for Clean & Healthy Water</a>
                                    </h3>
                                    <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                </div>
                                <div class="popular-causes__progress">
                                    <div class="bar">
                                        <div class="bar-inner count-bar" data-percent="36%">
                                            <div class="count-text">36%</div>
                                        </div>
                                    </div>
                                    <div class="popular-causes__goals">
                                        <p><span>$25,270</span> Raised</p>
                                        <p><span>$30,000</span> Goal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--Popular Causes Single--> */}
                        <div class="popular-causes__sinlge col-sm-4">
                            <div class="popular-causes__img">
                                <img src="assets/images/resources/popular-causes-img-2.jpg" alt=""/>
                                    <div class="popular-causes__category">
                                        <p>Education</p>
                                    </div>
                            </div>
                            <div class="popular-causes__content">
                                <div class="popular-causes__title">
                                    <h3><a href="campaign-details.html">Education for Poor Children</a>
                                    </h3>
                                    <p>Aliq is notm hendr erit a augue insu image pellen tes.</p>
                                </div>
                                <div class="popular-causes__progress">
                                    <div class="bar">
                                        <div class="bar-inner count-bar" data-percent="36%">
                                            <div class="count-text">36%</div>
                                        </div>
                                    </div>
                                    <div class="popular-causes__goals">
                                        <p><span>$25,270</span> Raised</p>
                                        <p><span>$30,000</span> Goal</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}

export default welcome_popular



