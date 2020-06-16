import React, {Component} from 'react'
import './style.scss'

interface TabBarProps {
  changeTabFn: Function
}
interface TabArrys {
  icon: string,
  tabType: string,
  title: string,
}
interface TabBarState {
  activeTab: string,
  tabLists: TabArrys[]
}
// Loading组件
class TabBar extends Component<TabBarProps,TabBarState> {
  constructor(props:TabBarProps) {
    super(props)
    this.state = {
      activeTab: "home",
      tabLists: [
        {
          icon: 'https://b.pingan.com.cn/station/site/common/mobilehome/images/Tab-Icon.png',
          tabType: "home",
          title: "首页"
        },
        {
          icon: 'https://b.pingan.com.cn/station/site/common/mobilehome/images/Tab-Icon.png',
          tabType: "licai",
          title: "理财"
        },
        {
          icon: 'https://b.pingan.com.cn/station/site/common/mobilehome/images/Tab-Icon.png',
          tabType: "xinyongka",
          title: "信用卡"
        },
        {
          icon: 'https://b.pingan.com.cn/station/site/common/mobilehome/images/Tab-Icon.png',
          tabType: "daikuan",
          title: "贷款"
        },
        {
          icon: 'https://b.pingan.com.cn/station/site/common/mobilehome/images/Tab-Icon.png',
          tabType: "myself",
          title: "我的"
        }
      ]
    }
  }
  changTabFn = (type:string)=>{
    this.setState({
      activeTab: type
    })
  }
  render()  {
    return (
      <div className="tabs-box">
        {
          this.state.tabLists.length > 0 && this.state.tabLists.map((tabItem: any) => (
              <span className={{'active-tab':tabItem.tabType === this.state.activeTab ,"tab"}}  onClick={()=>this.changTabFn(tabItem.tabType)}  key={tabItem.tabType}>
                <img src={tabItem.icon} alt=""/>
                <h3>{tabItem.title}</h3>
              </span>
          ))
        }
      </div>
    )
  }
}


export default TabBar
