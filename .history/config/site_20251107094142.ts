export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "楚白的导航站",
  description: "基于 Next.js 的前端导航网站",
  mainNav: [],
  links: {
    twitter: "https://x.com/VBeFLsKwhTkhFR6",
    github: "https://github.com/fulianbaoBear"
  }
}

export interface NavLink {
  /** 站点图标 */
  icon: string
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc: string
  /** 站点链接 */
  link: string
}

type NavData = {
  title: string
  items: NavLink[]
}

export const NavData: NavData[] = [
  {
    title: "网络效率工具",
    items: [
      {
        icon: "https://hongxingyun.vip/favicon.ico",
        title: "红杏云🚀",
        desc: "10月222G，注册还送免费体验流量！",
        link: "https://hongxingyun.vip/web/"
      },
      {
        icon: "https://www.sibker.com/favicon.ico",
        title: "白月光🚀",
        desc: "IPLC专线，适合流量较小情况使用！",
        link: "https://www.sibker.com/register?code=YU4Dei3K"
      },
      {
        icon: "https://gorelay.net/favicon.ico",
        title: "Gorelay节点加速工具",
        desc: "用于静态住宅IP中转加速及vps部署的节点加速（链式代理）！",
        link: "https://gorelay.net/"
      },
      {
        icon: "https://proton.me/favicon.ico",
        title: "Proton 免费VPN",
        desc: "Proton 免费VPN",
        link: "https://proton.me/"
      }
    ]
  },
  {
    title: "服务器VPS",
    items: [
      {
        icon: "https://www.oracle.com/favicon.ico",
        title: "甲骨文云VPS",
        desc: "甲骨文永久免费VPS",
        link: "https://www.oracle.com/cn/cloud/free/"
      }
    ]
  },
  {
    title: "IP检测",
    items: [
      {
        icon: "https://www.iping.cc/favicon.ico",
        title: "IPING：IP风险监控",
        desc: "IP归属地、纯净度、风险类型在线查询",
        link: "https://www.iping.cc/?utm-source=tool&utm-keyword=?3068"
      },
      {
        icon: "https://ipjiance.com/favicon.ico",
        title: "TK运营IP评分站",
        desc: "检测TikTok IP风险度，如是否命中黑名单、是否为数据中心 IP",
        link: "https://ipjiance.com/"
      },
      {
        icon: "https://fofa.info/favicon.ico",
        title: "IP关联网络探测器",
        desc: "查询IP绑定的网站、系统等信息，分析IP使用情况",
        link: "https://fofa.info/result?qbase64=ZG9tYWluPSJuaWNldGsudG9wIg%3D%3D"
      },
      {
        icon: "https://ipinfo.io/favicon.ico",
        title: "IP综合信息查询",
        desc: "查询IP地理位置、ISP、ASN、公司信息等",
        link: "https://ipinfo.io/"
      },
      {
        icon: "https://whoer.net/favicon.ico",
        title: "Whore: ip伪装度查询",
        desc: "检测IP匿名度、DNS 泄漏、代理使用情况等。",
        link: "https://whoer.net/zh"
      },
      {
        icon: "https://scamalytics.com/favicon.ico",
        title: "IP纯净度检测",
        desc: "检测当前IP是否干净",
        link: "https://scamalytics.com/"
      },
      {
        icon: "https://ip111.cn/favicon.ico",
        title: "IP111",
        desc: "快捷IP状态检测工具",
        link: "https://IP111.cn"
      }
    ]
  }
]
