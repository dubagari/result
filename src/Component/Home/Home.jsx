
import './Home.css'
import image from '../pic/image2.jpg'
import image2 from '../pic/image1.jpg'
import { HiOutlineArrowLongRight } from 'react-icons/hi2'
import { IoLocation } from 'react-icons/io5'
import {BiPhoneCall } from 'react-icons/bi'
import {RxEnvelopeClosed } from 'react-icons/rx'
import { Button, Article } from './Button'



const Home = () => {

  const data = {
    text: 'Build your world',
    text2: 'lets get in touch',
    arrow: <HiOutlineArrowLongRight size={50} color={'#fff'} />,
    text3: 'rescamp',
    intro: 'introduction',
  }
  
  return (
    <>
    <section>
        <div className="hero container">

          
          
          <div className="home">
            <div className="contain">
              <h2>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit.</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum perferendis veritatis aspernatur in veniam, incidunt error dicta maiores, nam explicabo sequi vero doloribus qui nobis quam libero, vitae molestiae repellendus vel. Voluptas iste, fugit perspiciatis, nulla aut dolor consequatur earum nihil, vel corrupti eligendi quibusdam incidunt unde! Hic, nisi fugiat!</p>

                
              <div className="btn-flex home-btn">
                  {<Button text={data.text} />}
                  <HiOutlineArrowLongRight size={50} color={'#fff'} />  
                </div>
              
              
            </div>

            <div className="image-contain">
              <div className="contin">
              <div className="image">
                <img src={image} alt="pic" />
              </div>
              </div>
            </div>
          </div>

          <article>
            
            <div className="contact-list home">
              <div className="list1">
                <IoLocation size={40} color='#fff' />
                <div className="text">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>

              <div className="line"></div>

              <div className="list2">
                 <BiPhoneCall size={40} color='#fff' />
                <div className="text">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>

              <div className="line"></div>

              <div className="list3">
                 <RxEnvelopeClosed size={40} color='#fff' />
                <div className="text">
                  <h3>Lorem, ipsum dolor.</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>

            </div>

          </article>


          <article>
                <div className="contact container">
                  
              {<Article arrow={data.arrow} text3={ data.text3} intro={data.intro} />}
                    
                    <div className="contain2">
                           <div className="btn-info">
                              <div className="contin">
                              <div className="image">
                                <img src={image2} alt="pic" />
                              </div>
                              </div>
                        </div>
                      
                             <div className="text">
                              <h1 className='uppercase'>about</h1>
                              <h3>Lorem, ipsum dolor.</h3>
                                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Voluptatem fugiat distinctio dolore natus, saepe facilis excepturi at. Facilis,
                            exercitationem neque suscipit asperiores rerum totam earum voluptatem ex dolorum quia! Eius,
                            assumenda ipsam! Expedita, deserunt ducimus nihil commodi ex minus praesentium unde? Consectetur,
                            ipsa. Quia velit, cum in ipsam distinctio porro voluptates possimus totam iste quaerat dignissimos
                            amet id repellat odio sit quas eum dolorem qui aliquid consequatur. Provident, sit repellendus! Sequi
                            eveniet dolorem veniam suscipit ratione libero nulla, vel delectus adipisci ut nostrum error nihil
                            necessitatibus tempore consequuntur labore in ducimus commodi rerum officiis quibusdam, dolore tempora
                            eos! Molestias, expedita.</p>
                            
                            <div className="home-btn"> 
                            {<Button text={data.text2}/>}
                            </div>
                          </div>
                      
                  </div>
                </div>
          </article>

          <article>
            <div className="contact container">
            {<Article/>}
            </div>

          </article>
        <div className="val">
          <div className="hero2">
            <div className="back1"></div>
            <div className="back1"></div>
            <div className="back1"></div>
            <div className="back1"></div>
            <div className="back1"></div>
          </div>
        </div>
        </div>


    </section>
    </>
  )
}

export default Home
