import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function ComponentOwl() {
  return (
    <>
      <OwlCarousel
      className="owl-carousel owl-theme"
      autoPlay={false}
      items={3}
      center={false}
      nav={true}
      margin={40}
      dots={false}
      loop={true}
      navText={["<i class='fa fa-arrow-left' aria-hidden='true'></i>", "<i class='fa fa-arrow-right' aria-hidden='true'></i>"]}
      responsive={{
        0: {
          items: 1,
        },
        575: { items: 1 },
        768: { items: 2 },
        991: { items: 3 },
      }}
    >
      <div className="owl-item"> 
            <div className="card d-flex flex-column"> <div className="mt-2"> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star-half-alt active-star"></span> 
            </div> 
            <div className="main font-weight-bold pb-2 pt-1">Great Service</div> 
            <div className="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div> 
            <div className="d-flex flex-row profile pt-4 mt-auto"> 
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-circle" /> 
              <div className="d-flex flex-column pl-2"> 
                <div className="name">Megan</div> 
                <p className="text-muted designation">CEO of My Company</p> 
              </div> 
            </div> 
          </div> 
        </div> 
        <div className="owl-item"> 
          <div className="card d-flex flex-column"> 
            <div className="mt-2"> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star-half-alt active-star"></span> 
            </div> 
            <div className="main font-weight-bold pb-2 pt-1">Great Service</div> 
            <div className="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div> 
            <div className="d-flex flex-row profile pt-4 mt-auto"> 
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-circle" /> 
              <div className="d-flex flex-column pl-2"> 
                <div className="name">Megan</div> 
                <p className="text-muted designation">CEO of My Company</p> 
              </div> 
            </div> 
          </div> 
        </div> 
        <div className="owl-item"> 
          <div className="card d-flex flex-column"> 
            <div className="mt-2"> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star-half-alt active-star"></span> 
            </div> 
            <div className="main font-weight-bold pb-2 pt-1">Great Service</div> 
            <div className="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div> 
            <div className="d-flex flex-row profile pt-4 mt-auto"> 
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-circle" /> 
              <div className="d-flex flex-column pl-2"> 
                <div className="name">Megan</div> 
                <p className="text-muted designation">CEO of My Company</p> 
              </div> 
            </div> 
          </div> 
        </div> 
        <div className="owl-item"> 
          <div className="card d-flex flex-column"> 
            <div className="mt-2"> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star-half-alt active-star"></span> 
            </div> 
            <div className="main font-weight-bold pb-2 pt-1">Great Service</div> 
            <div className="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div> 
            <div className="d-flex flex-row profile pt-4 mt-auto"> 
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-circle" /> 
              <div className="d-flex flex-column pl-2"> 
                <div className="name">Megan</div> 
                <p className="text-muted designation">CEO of My Company</p> 
              </div> 
            </div> 
          </div> 
        </div> 
        <div className="owl-item"> 
          <div className="card d-flex flex-column"> 
            <div className="mt-2"> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star active-star"></span> 
              <span className="fas fa-star-half-alt active-star"></span> 
            </div> 
            <div className="main font-weight-bold pb-2 pt-1">Great Service</div> 
            <div className="testimonial"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolores molestias veniam inventore itaque eius iure omnis, temporibus culpa id. </div> 
            <div className="d-flex flex-row profile pt-4 mt-auto"> 
              <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" className="rounded-circle" /> <div className="d-flex flex-column pl-2"> 
                <div className="name">Megan</div> 
                <p className="text-muted designation">CEO of My Company</p> 
              </div> 
            </div> 
          </div> 
        </div>
      
    </OwlCarousel>
    </>
    
  
    );
}

export default ComponentOwl;