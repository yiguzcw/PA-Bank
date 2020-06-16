import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Carousel, WingBlank } from 'antd-mobile';
import axios from 'axios';
import {homeUrl} from '../../api/ApiUrls'

import './style.scss'

interface HomeProps {

}

interface HomeState {
  data: string[],
  imgHeight: number
}

// 推荐页面

class Home extends Component {
  public state: HomeState = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }

  async componentDidMount() {
    let datas = await axios.get(homeUrl,{})
    if(!datas){
      this.setState(this.state.data, datas as any)
    }
    // alert(window.navigator.userAgent)

  }

  render() {
    return (
      <div className="home-page">
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
            beforeChange={(from:any, to:any) => console.log(`slide from ${from} to ${to}`)}
            afterChange={(index:any) => console.log('slide to', index)}
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>
    )
  }
}

export default Home
