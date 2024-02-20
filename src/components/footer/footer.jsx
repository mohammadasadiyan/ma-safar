import React from 'react';
import "./Footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>در فضای مجاری ما را دنبال کنید:</span>
        </div>

        <div>
          <a href='https://www.instagram.com/kayhanpardaz?igsh=MXlhbDdxaXRzYTVz' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' style={{fontSize : "30px"}} />
          </a>
          <a href='/redirect' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='linkedin' style={{fontSize : "30px"}}/>
          </a>
          <a href='https://t.me/mohammadasadiyan' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='telegram' style={{fontSize : "30px"}}/>
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'style={{textAlign: "right"}}>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                درباره ما
              </h6>
              <p style={{textAlign: "right"}}>
              یک سامانه جامع هوشمند برای مدیریت کسب‌وکار به افزایش فروش، کاهش هزینه‌ها و تسهیل عملیات هر کسب‌وکار کمک کنیم.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'style={{textAlign: "right"}}>توسعه دهندگان</h6>
              <p style={{textAlign: "right"}}>
                <a href='#mohammadasadiyan' className='text-reset'>
                  محمد اسدیان
                </a>
              </p>
              <p style={{textAlign: "right"}}>
                <a href='#mohammadasadiyan' className='text-reset'>
                  نیما اسلام پنا
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'style={{textAlign: "right"}}>
              <h6 className='text-uppercase fw-bold mb-4'>لیک های مرتبط</h6>
              <p>
                <a href='#!' className='text-reset'style={{textAlign: "right"}}>
                  پروفایل ها
                </a>
              </p>
              <p>
                <a href='https://t.me/KayhanPardaz' className='text-reset'>
                  کانال خبر رسانی
                </a>
              </p>
              
              <p>
                <a href='https://t.me/kayhanpardazgp' className='text-reset'>
                  گروه تلگرام
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{textAlign: "right"}}>ارتباط با ما</h6>
              <p style={{textAlign: "right"}}>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                رامسر نارنج بن
              </p>
              <p style={{textAlign: "right"}}>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                kayhanpardazco@gmail.com
              </p>
              <p style={{textAlign: "right"}}>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> <span className='phone'>+ 98 939 261 7796</span>              </p>
              <p>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        تمامی حقوق محفوض می باشد. ساخته شده توسط kayhan-pardaz.ir
        </a>
      </div>
    </MDBFooter>
  );
}