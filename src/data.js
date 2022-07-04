let products = [
    {
        name: 'JBL E55BT KEY BLACK',
        image1: './image/JBL_E55BT_KEY_BLACK_6175_FS_x1-1605x1605px.png',
        image2: './image/JBL_LIVE650BTNC_Product Image_Folded_Black.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL JR 310BT',
        image1: './image/JBL_JR 310BT_Product Image_Hero_Skyblue.png',
        image2: './image/JBL_JR 310BT_Product Image_Detail_Skyblue.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL TUNE 750BTNC',
        image1: './image/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png',
        image2: './image/JBL_E55BT_KEY_RED_6063_FS_x1-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Horizon',
        image1: './image/JBLHorizon_001_dvHAMaster.png',
        image2: './image/JBLHorizon_BLK_002_dvHAMaster.webp',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Tune 220TWS',
        image1: './image/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png',
        image2: './image/JBL_TUNE220TWS_ProductImage_Pink_Back.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'UA Project Rock',
        image1: './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_HERO.png',
        image2: './image/190402_E1_FW19_EarbudsWCase_S13_0033-1_1605x1605_BACK.png',
        old_price: '400',
        curr_price: '300'
    },
    {
        name: 'JBL Endurance SPRINT',
        image1: './image/JBL_Endurance-SPRINT_Product-Image_Red_front-1605x1605px.webp',
        image2: './image/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp',
        old_price: '400',
        curr_price: '300'
    },
]

let product_list = document.querySelector('.latest-products')
let best_product_list = document.querySelector('.best-products')

products.forEach(e => {
    let prod = `
        <div className="col-3 col-md-6 col-sm-12">
            <div className="product-card">
                <div className="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div className="product-card-info">
                    <div className="product-btn">
                        <button className="btn-flat btn-hover btn-shop-now">shop now</button>
                        <button className="btn-flat btn-hover btn-cart-add">
                            <FaCartPlus/>
                        </button>
                        <button className="btn-flat btn-hover btn-cart-add">
                            <FaHeart/>
                        </button>
                    </div>
                    <div className="product-card-name">
                        ${e.name}
                    </div>
                    <div className="product-card-price">
                        <span><del>${e.old_price}</del></span>
                        <span className="curr-price">${e.curr_price}</span>
                    </div>
                </div>
            </div>
        </div>
    `
    // product_list.insertAdjacentHTML("beforeend", prod);
    // best_product_list.insertAdjacentHTML("afterbegin", prod);
})


