import React from 'react'
import { FaCalendarAlt, FaBell, FaUser, FaCartPlus, FaHeart } from "react-icons/fa";
import Navbar from '../../components/Navbar/Navbar';
import Anh10 from '../../image/JBL_Quantum400_Lifestyle1.png'
import Anh11 from '../../image/JBL_TUNE220TWS_Lifestyle_black.png'


const Blog = () => {
    return (
        <div>
            <Navbar/>
            <div className="section">
                <div className="container">
                    <div className="section-header">
                        <h2>latest blog</h2>
                    </div>
                    <div className="blog">
                        <div className="blog-img">
                            <img src={`${require("../../image/JBL_Quantum400_Lifestyle1.png")}`} alt="" />
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Âm nhạc làm bạn cảm thấy hạnh phúc hơn
                            </div>
                            <div className="blog-preview">
                                Nghiên cứu đã chứng minh rằng khi bạn nghe bài hát yêu thích, não của bạn sẽ giải phóng dopamine, một dạng dẫn truyền thần kinh. Valorie Salimpoor, một nhà thần kinh học tại trường Đại học McGill, đã tiến hành thử nghiệm trên 8 người yêu thích âm nhạc bằng cách tiêm một chất phóng xạ vào cơ thể họ, sau đó cho nghe bản nhạc mà họ yêu thích. Một máy PET dùng để quét các phản xạ thần kinh cho thấy rằng một lượng lớn dopamine đã được phóng ra, điều này cho thấy rằng họ có những cảm xúc hạnh phúc, thích thú và vui vẻ.
                            </div>
                            <button className="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="blog row-revere">
                        <div className="blog-img">
                            <img src={`${require("../../image/JBL_Tune_125TWS_Lifestyle2.png")} `} alt="" />
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Âm nhạc giúp bạn có thêm nhiều động lực
                            </div>
                            <div className="blog-preview">
                                Marcelo Bigliassi cùng đồng nghiệp của ông đã nhận ra rằng các vận động viên khi nghe thể loại nhạc có tiết tấu nhanh hoặc chậm sẽ hoàn thành chặng đường 800m nhanh hơn so với các vận động viên nghe nhạc có tiết tấu bình thường hoặc không nghe nhạc. Nếu bạn muốn tham gia vào các hoạt động yêu cầu vận động mạnh thì hãy nghe nhạc để chúng truyền cảm hứng cho bạn nhé!
                            </div>
                            <button className="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="blog">
                        <div className="blog-img">
                            <img src={`${require("../../image/JBL_Quantum400_Lifestyle1.png")}`} alt="" />
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Âm nhạc làm giảm căng thẳng và cải thiện sức khỏe
                            </div>
                            <div className="blog-preview">
                                Khi nghe những bài hát mà bạn yêu thích có thể làm giảm đi các hoóc-môn gây căng thẳng trong cơ thể, giúp cơ thể chống lại các triệu chứng gây căng thẳng kéo dài. Đây là một phần phát hiện quan trọng bởi căng thẳng chiếm 60% nguyên nhân gây ra tất cả các bệnh. Một nghiên cứu cho thấy rằng nếu mọi người tham gia sáng tác bằng các nhạc cụ hay ngồi hát cùng nhau, hệ thống miễn dịch của họ được thúc đẩy mạnh hơn so với việc chỉ ngồi yên lắng nghe.
                            </div>
                            <button className="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="blog row-revere">
                        <div className="blog-img">
                            <img src={`${require("../../image/JBL_Tune_125TWS_Lifestyle2.png")}`} alt="" />
                        </div>
                        <div className="blog-info">
                            <div className="blog-title">
                                Âm nhạc giúp bạn ngủ ngon hơn
                            </div>
                            <div className="blog-preview">
                                Hơn 30% người Mỹ thường bị mất ngủ. Một nghiên cứu cho thấy những sinh viên nghe nhạc cổ điển thư giãn trong 45 phút trước khi đi ngủ thường sẽ ngủ ngon hơn so với những người nghe audiobook hoặc không nghe gì cả. Nếu cảm thấy khó ngủ, hãy thử nghe một chút nhạc Bach hoặc nhạc Mozart trước khi đi ngủ nhé!
                            </div>
                            <button className="btn-flat btn-hover">read more</button>
                        </div>
                    </div>
                    <div className="section-footer">
                        <a href="#" className="btn-flat btn-hover">view all</a>
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
                                <input type="email" placeholder="ENTER YOUR EMAIL" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Blog