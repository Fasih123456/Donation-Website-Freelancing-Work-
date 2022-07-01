import Footer from "./Footer";
import Header from "./Header";

const Homecontent = () => {
    return (
        <div>
        <Header />
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">

                    <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">Donate a Car Today!</h2>

                        </a>
                        <p class="post-meta">
                        We make it easy for you and the organisation you care about to donate a car. Giving old cars, removing cars, recycling cars, or just junking cars is a simple procedure for you and the charity that will benefit. Every gift is an honour for us to handle, and we're dedicated to giving our best service at every turn.                        </p>

                        <li class="post-meta">Free towing or Pick-up in Every Province</li>
                        <li class="post-meta">Simple online form</li>
                        <li class="post-meta">Numerous Charities to Pick From</li>
                        <li class="post-meta">Every gift is guaraneteed a tax receipt</li>

                    </div>

                    <hr class="my-4" />

                    <div class="post-preview">
                        <a href="post.html"><h2 class="post-title">Your Dependable Choice</h2></a>
                        <p class="post-meta">
                        Your automotive contribution has value in terms of money and sentiment. We promise to uphold both as part of our donor support commitment. The donation of your charity automobile will be carefully managed for you with honesty and attention to timely details so that you may give with ease to the cause that is most important to you.
                        </p>
                    </div>

                    <hr class="my-4" />

                    <div class="post-preview">
                        <a href="post.html">
                            <h2 class="post-title">Donate Now and Make a Difference</h2>
                        </a>
                        <p class="post-meta">
                        The charity that means the most to you benefits from your used automobile contributions. Through InTow, you may choose to donate your car to ANY recognised Canadian charity, and we'll see to it that they have a simple time accepting it. Since there are no costs associated with participating in our gift-receiving programme, your charity of choice may use every dollar you donate to support the important work they are doing on behalf of Canadians just like you.
                        </p>

                        <div class="d-flex justify-content-end mb-4"><a class="btn btn-primary text-uppercase" href=""><Link style={{color: "white "}} to="/DonateToday" id='page1'>Donate Now →</Link></a></div>
                    </div>

                    <hr class="my-4" />


  


                </div>
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Homecontent;