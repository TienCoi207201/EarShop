import React from 'react'

const ProductDetail = () => {
  return (
    <div>
        <header>
        <div className="mobile-menu bg-second">
            <a href="#" className="mb-logo">ATShop</a>
            <span className="mb-menu-toggle" id="mb-menu-toggle">
                <i className='bx bx-menu'></i>
            </span>
        </div>
        <div className="header-wrapper" id="header-wrapper">
            <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
                <i className='bx bx-x'></i>
            </span>
            <div className="bg-second">
                <div className="top-header container">
                    <ul className="devided">
                        <li>
                            <a href="#">+84345199196</a>
                        </li>
                        <li>
                            <a href="#">namtien9182@gmail</a>
                        </li>
                    </ul>
                    <ul className="devided">
                        <li className="dropdown">
                            <a href="">USD</a>
                            <i className='bx bxs-chevron-down'></i>
                            <ul className="dropdown-content">
                                <li><a href="#">VND</a></li>
                                <li><a href="#">JPY</a></li>
                                <li><a href="#">EUR</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="">ENGLISH</a>
                            <i className='bx bxs-chevron-down'></i>
                            <ul className="dropdown-content">
                                <li><a href="#">VIETNAMESE</a></li>
                                <li><a href="#">JAPANESE</a></li>
                                <li><a href="#">FRENCH</a></li>
                                <li><a href="#">SPANISH</a></li>
                            </ul>
                        </li>
                        <li><a href="#">ORDER TRACKING</a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-main">
                <div className="mid-header container">
                    <a href="#" className="logo">ATShop</a>
                    <div className="search">
                        <input type="text" placeholder="Search"/>
                        <i className='bx bx-search-alt'></i>
                    </div>
                    <ul className="user-menu">
                        <li><a href="#"><i className='bx bx-bell'></i></a></li>
                        <li><a href="#"><i className='bx bx-user-circle'></i></a></li>
                        <li><a href="#"><i className='bx bx-cart'></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="bg-second">
                <div className="bottom-header container">
                    <ul className="main-menu">
                        <li><a href="#">home</a></li>
                        <li className="mega-dropdown">
                            <a href="./products.html">Shop<i className='bx bxs-chevron-down'></i></a>
                            <div className="mega-content">
                                <div className="row">
                                    <div className="col-3 col-md-12">
                                        <div className="box">
                                            <h3>Categories</h3>
                                            <ul>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Inear headphone</a></li>
                                                <li><a href="#">Overear headphone</a></li>
                                                <li><a href="#">sport headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-12">
                                        <div className="box">
                                            <h3>Categories</h3>
                                            <ul>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Inear headphone</a></li>
                                                <li><a href="#">Overear headphone</a></li>
                                                <li><a href="#">sport headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-12">
                                        <div className="box">
                                            <h3>Categories</h3>
                                            <ul>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Inear headphone</a></li>
                                                <li><a href="#">Overear headphone</a></li>
                                                <li><a href="#">sport headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-3 col-md-12">
                                        <div className="box">
                                            <h3>Categories</h3>
                                            <ul>
                                                <li><a href="#">Wireless</a></li>
                                                <li><a href="#">Inear headphone</a></li>
                                                <li><a href="#">Overear headphone</a></li>
                                                <li><a href="#">sport headphone</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row img-row">
                                    <div className="col-3">
                                        <div className="box">
                                            <img src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="box">
                                            <img src="./images/JBL_TUNE220TWS_ProductImage_Pink_ChargingCaseOpen.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="box">
                                            <img src="./images/JBL_JR 310BT_Product Image_Hero_Skyblue.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="box">
                                            <img src="./images/JBLHorizon_001_dvHAMaster.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <div className="bg-main">
        <div className="container">
            <div className="box">
                <div className="breadcumb">
                    <a href="./index.html">home</a>
                    <span><i className='bx bxs-chevrons-right'></i></span>
                    <a href="./products.html">all products</a>
                    <span><i className='bx bxs-chevrons-right'></i></span>
                    <a href="./product-detail.html">JBL Tune 750TNC</a>
                </div>
            </div>
            <div className="row product-row">
                <div className="col-5 col-md-12">
                    <div className="product-img" id="product-img">
                        <img src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt=""/>
                    </div>
                    <div className="box">
                        <div className="product-img-list">
                            <div className="product-img-item">
                                <img src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt=""/>
                            </div>
                            <div className="product-img-item">
                                <img src="./images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp" alt=""/>
                            </div>
                            <div className="product-img-item">
                                <img src="./images/JBL_Quantum_400_Product Image_Hero 02.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7 col-md-12">
                    <div className="product-info">
                        <h1>
                            JBL TUNE 750TNC
                        </h1>
                        <div className="product-info-detail">
                            <span className="product-info-detail-title">Brand:</span>
                            <a href="#">JBL</a>
                        </div>
                        <div className="product-info-detail">
                            <span className="product-info-detail-title">Rated:</span>
                            <span className="rating">
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                                <i className='bx bxs-star'></i>
                            </span>
                        </div>
                        <p className="product-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo libero alias officiis dolore doloremque eveniet culpa dignissimos, itaque, cum animi excepturi sed veritatis asperiores soluta, nisi atque quae illum. Ipsum.
                        </p>
                        <div className="product-info-price">$2345</div>
                        <div className="product-quantity-wrapper">
                            <span className="product-quantity-btn">
                                <i className='bx bx-minus'></i>
                            </span>
                            <span className="product-quantity">1</span>
                            <span className="product-quantity-btn">
                                <i className='bx bx-plus'></i>
                            </span>
                        </div>
                        <div>
                            <button className="btn-flat btn-hover">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-header">
                    description
                </div>
                <div className="product-detail-description">
                    <button className="btn-flat btn-hover btn-view-description" id="view-all-description">
                        view all
                    </button>
                    <div className="product-detail-description-content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium obcaecati odit dolorem, doloremque accusamus esse neque ipsa dignissimos saepe quisquam tempore perferendis deserunt sapiente! Recusandae illum totam earum ratione.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam incidunt maxime rerum reprehenderit voluptas asperiores ipsam quas consequuntur maiores, at odit obcaecati vero sunt! Reiciendis aperiam perferendis consequuntur odio quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quaerat eum veniam doloremque nihil repudiandae odio ratione culpa libero tempora. Expedita, quo molestias. Minus illo quis dignissimos aliquid sapiente error!
                        </p>
                        <img src="./images/JBL_Quantum_400_Product Image_Hero 02.png" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis accusantium officia, quae fuga in exercitationem aliquam labore ex doloribus repellendus beatae facilis ipsam. Veritatis vero obcaecati iste atque aspernatur ducimus.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat quam praesentium id sit amet magnam ad, dolorum, cumque iste optio itaque expedita eius similique, ab adipisci dicta. Quod, quibusdam quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, in corrupti ipsam sint error possimus commodi incidunt suscipit sit voluptatum quibusdam enim eligendi animi deserunt recusandae earum natus voluptas blanditiis?
                        </p>
                        <img src="./images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt=""/>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ullam quam fugit veniam ipsum recusandae incidunt, ex ratione, magnam labore ad tenetur officia! In, totam. Molestias sapiente deserunt animi porro?
                        </p>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-header">
                    review
                </div>
                <div>
                    <div className="user-rate">
                        <div className="user-info">
                            <div className="user-avt">
                                <img src="./images/tuat.jpg" alt=""/>
                            </div>
                            <div className="user-name">
                                <span className="name">Lưu Văn Tiến</span>
                                <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                            </div>
                        </div>
                        <div className="user-rate-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                        </div>
                    </div>
                    <div className="user-rate">
                        <div className="user-info">
                            <div className="user-avt">
                                <img src="./images/tuat.jpg" alt=""/>
                            </div>
                            <div className="user-name">
                                <span className="name">tuat tran anh</span>
                                <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                            </div>
                        </div>
                        <div className="user-rate-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                        </div>
                    </div>
                    <div className="user-rate">
                        <div className="user-info">
                            <div className="user-avt">
                                <img src="./images/tuat.jpg" alt=""/>
                            </div>
                            <div className="user-name">
                                <span className="name">tuat tran anh</span>
                                <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                            </div>
                        </div>
                        <div className="user-rate-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                        </div>
                    </div>
                    <div className="user-rate">
                        <div className="user-info">
                            <div className="user-avt">
                                <img src="./images/tuat.jpg" alt=""/>
                            </div>
                            <div className="user-name">
                                <span className="name">tuat tran anh</span>
                                <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                            </div>
                        </div>
                        <div className="user-rate-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                        </div>
                    </div>
                    <div className="user-rate">
                        <div className="user-info">
                            <div className="user-avt">
                                <img src="./images/tuat.jpg" alt=""/>
                            </div>
                            <div className="user-name">
                                <span className="name">tuat tran anh</span>
                                <span className="rating">
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                    <i className='bx bxs-star'></i>
                                </span>
                            </div>
                        </div>
                        <div className="user-rate-content">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
                        </div>
                    </div>
                    <div className="box">
                        <ul className="pagination">
                            <li><a href="#"><i className='bx bxs-chevron-left'></i></a></li>
                            <li><a href="#" className="active">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#"><i className='bx bxs-chevron-right'></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="box-header">
                    related products
                </div>
                <div className="row" id="related-products"></div>
            </div>
        </div>
    </div>
    <footer className="bg-second">
        <div className="container">
            <div className="row">
                <div className="col-3 col-md-6">
                    <h3 className="footer-head">Products</h3>
                    <ul className="menu">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">product help</a></li>
                        <li><a href="#">warranty</a></li>
                        <li><a href="#">order status</a></li>
                    </ul>
                </div>
                <div className="col-3 col-md-6">
                    <h3 className="footer-head">services</h3>
                    <ul className="menu">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">product help</a></li>
                        <li><a href="#">warranty</a></li>
                        <li><a href="#">order status</a></li>
                    </ul>
                </div>
                <div className="col-3 col-md-6">
                    <h3 className="footer-head">support</h3>
                    <ul className="menu">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">product help</a></li>
                        <li><a href="#">warranty</a></li>
                        <li><a href="#">order status</a></li>
                    </ul>
                </div>
                <div className="col-3 col-md-6 col-sm-12">
                    <div className="contact">
                        <h3 className="contact-header">
                            ATShop
                        </h3>
                        <ul className="contact-socials">
                            <li><a href="#">
                                    <i className='bx bxl-facebook-circle'></i>
                                </a></li>
                            <li><a href="#">
                                    <i className='bx bxl-instagram-alt'></i>
                                </a></li>
                            <li><a href="#">
                                    <i className='bx bxl-youtube'></i>
                                </a></li>
                            <li><a href="#">
                                    <i className='bx bxl-twitter'></i>
                                </a></li>
                        </ul>
                    </div>
                    <div className="subscribe">
                        <input type="email" placeholder="ENTER YOUR EMAIL"/>
                        <button>subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default ProductDetail