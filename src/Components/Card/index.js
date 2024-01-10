import FbImageLibrary from 'react-fb-image-grid'
import React from 'react';
import "./style.css";
import likeImg from "./like.png"
import commentImg from "./comments.png"
import shareImg from "./share.png"



function Cards({ allCards, changeBTnText, changeBTnText2, changeBTnText3, name, date, img }) {
    return <div className='posts'>
        <h1 className='fb'>Facebook</h1>
        {allCards.map(function (item) {
            return <div className='box'>
                <div className='main-head'>
                    <div className='img1'>
                        <img src={img} />
                    </div>

                    <div className='name-date'>
                        <h1 className='name'>{name}</h1>
                        <div className='date'>{date}</div>
                    </div>
                </div>
                <div className='items'>
                    <h1><strong>Id : </strong>{item.id}</h1>
                    <h1><strong>Item : </strong>{item.title}</h1>
                    <h1><strong>Description : </strong>{item.description}</h1>
                    <h1><strong>Brand : </strong>{item.brand}</h1>
                    <h1><strong>Category : </strong>{item.category}</h1>
                </div>
                <hr />
                <div className='img'>
                    <FbImageLibrary images={item.images} />
                </div>
                <div className='reacion '>
                    <div className='like' >
                        <div className=''>
                            <div className='emoji flex items-center mb-32' >
                                <img className='size-10 ' src='https://media.tenor.com/_e4JAx0iHS0AAAAi/facebook-emoji.gif' />
                                <img className='size-16' src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/65ea2034559659.56d57de06cea2.gif' />

                                <img className='size-10' src='https://media.tenor.com/BFf9VRQVHs8AAAAM/jonathan-arum.gif' />

                            </div>
                        </div>
                        <span className='icons'><img src={likeImg} /></span>
                        <span >{changeBTnText}</span>
                    </div  >
                    <div className='like'>
                        <span className='icons' ><img src={commentImg} /></span>
                        <span >{changeBTnText2}</span>
                    </div>
                    <div className='like'>
                        <span className='icons'><img src={shareImg} /></span>
                        <span >{changeBTnText3}</span>
                    </div>

                </div>

            </div>

        })}
    </div>



}

export default Cards