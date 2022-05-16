import './App.css';
import Header from './header';
import Footer from './footer';
import Banner from './banner';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Banner />
      <div className='contain'>
        <div className='box'>
          <a className='link-url'>SỰ KIỆN</a>|<a className='link-url'>HOẠT ĐỘNG</a>
        </div>
        <div className='item-top'>
          <div className='item'>
            <div className='img-item-frame'>
              <img className='img-item' src='https://www.mihaohao.vn/wp-content/uploads/2022/02/hao-hao-2.jpg'/>
            </div>
            <p className='item-text'>Hảo hảo là đơn vị tài trợ chính thức cho giải đấu
            Đấu Trường Danh Vọng mùa Xuân 2022 - mùa giải đầu tiên trong năm </p>
            <button className='btn'>Xem thêm</button>
          </div>
          <div className='item'>
            <div className='img-item-frame'>
              <img className='img-item' src='https://www.mihaohao.vn/wp-content/uploads/2021/12/Banner_dangky_1920.jpg'/>
            </div>
            <p>"Hảo hảo - Music Box" Trao niềm hứng khởi kết triệu...</p>
            <button className='btn'>Xem thêm</button>
          </div>
          <div className='item'>
            <div className='img-item-frame'>
              <img className='img-item' src='https://www.mihaohao.vn/wp-content/uploads/2021/07/hao-hao-mi-an-lien-so-1-tai-khu-vuc-thanh-thi-2019-2.jpg'/>
            </div>
            <p>Hảo hảo - Mỳ ăn liền số 1 tại khu vực thành thị 2019</p>
            <button className='btn'>Xem thêm</button>
          </div>
        </div>
        <div className='item-bot'>
          <div className='item'>
            <div className='img-item-frame'>
              <img className='img-item' src='https://www.mihaohao.vn/wp-content/uploads/2022/04/Tien-Giang-7.jpg'/>
            </div>
            <p>"Hảo hảo - Music Box" Nơi kết triệu yêu thương đến..</p>
            <button className='btn'>Xem thêm</button>
          </div>
          <div className='item'>
            <div className='img-item-frame'>
              <img className='img-item' src='https://www.mihaohao.vn/wp-content/uploads/2022/03/277466955_3084700821772045_4082294176979180993_n-768x512.jpg' />
            </div>
            <p>"Hảo hảo - Music Box" Nơi kết triệu yêu thương đến..</p>
            <button className='btn'>Xem thêm</button>
          </div>
          <div className='item'>
            <div className='img-item-frame'>
              <img className='img-item' src='https://www.mihaohao.vn/wp-content/uploads/2022/03/photo-2-1646905266257136469688-768x660.jpg' />
            </div>
            <p>"Music Box" Âm nhạc đi xa nối yêu thương lại gần</p>
            <button className='btn'>Xem thêm</button>
          </div>
        </div>
        <div>
          <section >

          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
