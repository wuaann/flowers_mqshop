import './detail.css'

function Detail(id) {
    const productDetail = ({
        el: "#app",
        data: {
            productTitle: "Round Neck Vue Logo T-Shirt",
            productPrice: "$20",
            productChecks: [
                "100% cotton on the neckline",
                "certified and safe",
                "ash in color",
                "Smooth in quality"
            ],
            bannerImage: "https://i.imgur.com/Nmuu6Jh.jpg",
            productImages: [
                {
                    id: 3435,
                    imageUrl: "https://i.imgur.com/Nmuu6Jh.jpg"
                },
                {
                    id: 3436,
                    imageUrl: "https://i.imgur.com/VFcTYyU.jpg"
                }
            ],
            cart: 0,
            stockAvailability: true,
            activeClass: 0
        },
        methods: {
            addToCart: function () {
                this.cart = this.cart + 1;
            },
            currentThumnail: function (image, index) {
                this.bannerImage = image;
                this.activeClass = index;
            }
        }
    });


    return (
        <>
            <div id="app">
                <div className="container container-space">
                    <div className="row">
                        <div className="col-md-6">
                            <img className="img-fluid" src={productDetail.data.bannerImage} alt=""/>
                            <div className="product-thumbnails">

                            </div>
                        </div>

                        <div className="col-md-4">
                            <h1 className="my-4">{productDetail.data.productTitle} - {productDetail.data.productPrice}</h1>
                            <h3 className="my-3">
                                <svg width="36" height="36" viewBox="0 0 24 24">
                                    <path
                                        d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"/>
                                </svg>
                            </h3>
                            <h3 className="my-3">Details</h3>

                            <button type="button"
                                    className="btn btn-outline-primary btn-lg btn-block btn-custom-color">ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Detail;