// import React, { useState, useEffect } from 'react'
// import './../Home/Home.css'
// import Img1 from './../../image/img_1.png'
// import Img2 from './../../image/img_2.png'
// import Img3 from './../../image/img_3.png'
// import toBottom from './../../image/to_bottom.png'
// import Product1 from './../../image/product_1.png'
// import Product2 from './../../image/product_2.png'
// import Product3 from './../../image/product_3.png'
// import Product4 from './../../image/product_4.png'
// import Product5 from './../../image/product_5.png'
// import Product6 from './../../image/product_6.png'
// import Star from './../../image/star.png'
// import Prev from './../../image/prev.png'
// import Next from './../../image/next.png'
// import Avt from './../../image/avatar_1.png'

// const Home = () => {
//   return (
//     <div>
//       <div className='banner'>
//         <div className='box-left'>
//           <h2>
//             <span>THỨC ĂN</span>
//             <br />
//             <span>THƯỢNG HẠNG</span>
//           </h2>
//           <p>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng
//             hợp vệ sinh đến người dùng, phục vụ người dùng 1 cách
//             hoàn hảo nhất</p>
//           <button>Mua ngay</button>
//         </div>
//         <div className='box-right'>
//           <img src={Img1} />
//           <img src={Img2} />
//           <img src={Img3} />
//         </div>
//         <div className='to-bottom'>
//           <a href='.list-products'>
//             <img src={toBottom} />
//           </a>
//         </div>
//       </div>
//       <div className="wp-products">
//         <h2>SẢN PHẨM CỦA CHÚNG TÔI</h2>
//         <ul className='list-products'>
//           <div className="item">
//             <img src={Product1} alt='' />
//             <div className="stars">
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//             </div>
//             <div className="name">Món ăn 1</div>
//             <div className="desc">Mô tả ngắn cho sản phẩm</div>
//             <div className="price">500.00VND</div>
//           </div>
//           <div className="item">
//             <img src={Product2} alt='' />
//             <div className="stars">
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//             </div>
//             <div className="name">Món ăn 2</div>
//             <div className="desc">Mô tả ngắn cho sản phẩm</div>
//             <div className="price">500.00VND</div>
//           </div>
//           <div className="item">
//             <img src={Product3} alt='' />
//             <div className="stars">
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//             </div>
//             <div className="name">Món ăn 3</div>
//             <div className="desc">Mô tả ngắn cho sản phẩm</div>
//             <div className="price">500.00VND</div>
//           </div>
//           <div className="item">
//             <img src={Product4} alt='' />
//             <div className="stars">
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//             </div>
//             <div className="name">Món ăn 4</div>
//             <div className="desc">Mô tả ngắn cho sản phẩm</div>
//             <div className="price">500.00VND</div>
//           </div>
//           <div className="item">
//             <img src={Product5} alt='' />
//             <div className="stars">
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//             </div>
//             <div className="name">Món ăn 5</div>
//             <div className="desc">Mô tả ngắn cho sản phẩm</div>
//             <div className="price">500.00VND</div>
//           </div>
//           <div className="item">
//             <img src={Product6} alt='' />
//             <div className="stars">
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//               <span><img src={Star} /></span>
//             </div>
//             <div className="name">Món ăn 6</div>
//             <div className="desc">Mô tả ngắn cho sản phẩm</div>
//             <div className="price">500.00VND</div>
//           </div>
//         </ul>
//         <div className="list-page">
//           <div className="item"><a href=''>1</a></div>
//           <div className="item"><a href=''>2</a></div>
//           <div className="item"><a href=''>3</a></div>
//           <div className="item"><a href=''>4</a></div>
//         </div>
//       </div>
//       <div className="saleoff">
//         <div className="box-left">
//           <h1>
//             <span>GIẢM GIÁ LÊN ĐẾN</span>
//             <span>45%</span>
//           </h1>
//         </div>
//         <div className="box-right"></div>
//       </div>
//       <div className="comment">
//         <h2>NHẬN XÉT CỦA KHÁCH HÀNG</h2>
//         <div className="comment-body">
//           <div className="prev">
//             <a href="#">
//               <img src={Prev} alt='' />
//             </a>
//           </div>
//           <ul className="list-comment">
//             <li className="item">
//               <div className="avatar">
//                 <img src={Avt} />
//               </div>
//               <div className="stars">
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//               </div>
//               <div className="name">Đỗ Phương Anh</div>
//               <div className="text">
//                 <p>Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.</p>
//               </div>
//             </li>
//             <li className="item">
//               <div className="avatar">
//                 <img src={Avt} />
//               </div>
//               <div className="stars">
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//               </div>
//               <div className="name">Lê Tự Hữu</div>
//               <div className="text">
//                 <p>Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.</p>
//               </div>
//             </li>
//             <li className="item">
//               <div className="avatar">
//                 <img src={Avt} />
//               </div>
//               <div className="stars">
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//                 <span><img src={Star} /></span>
//               </div>
//               <div className="name">Vương Tuấn Anh</div>
//               <div className="text">
//                 <p>Lorem Ipsum is simply dummy text of the printing and
//                   typesetting industry. Lorem Ipsum has been the industry's
//                   standard dummy text ever since the 1500s, when an unknown
//                   printer took a galley of type and scrambled it to make a type
//                   specimen book.</p>
//               </div>
//             </li>
//           </ul>
//           <div className="next">
//             <a href="#">
//               <img src={Next} alt='' />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home