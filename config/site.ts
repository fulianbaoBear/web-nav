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
        icon: "https://images.chubaiai.com/Picgo/20251107102404217.webp",
        title: "红杏云🚀",
        desc: "10月222G，注册还送免费体验流量！",
        link: "https://hongxingyun.vip/web/"
      },
      {
        icon: "https://images.chubaiai.com/Picgo/20251107102527801.webp",
        title: "白月光🚀",
        desc: "IPLC专线，适合流量较小情况使用！",
        link: "https://www.sibker.com/register?code=YU4Dei3K"
      },
      {
        icon: "https://images.chubaiai.com/Picgo/20251107102617898.webp",
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
      },
      {
        icon: "https://www.lcayun.com/favicon.ico",
        title: "LCA云",
        desc: "高性价比VPS服务商",
        link: "https://www.lcayun.com/"
      },
      {
        icon: "https://images.chubaiai.com/Picgo/20251107153413331.webp",
        title: "VMISS",
        desc: "优质VPS云服务器提供商",
        link: "https://www.vmiss.com/"
      },
      {
        icon: "https://www.racknerd.com/favicon.ico",
        title: "RackNerd",
        desc: "美国老牌VPS服务商",
        link: "https://www.racknerd.com/"
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
        icon: "https://images.chubaiai.com/Picgo/20251107102726417.webp",
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
        icon: "https://images.chubaiai.com/Picgo/20251107103028564.webp",
        title: "IP纯净度检测",
        desc: "检测当前IP是否干净",
        link: "https://scamalytics.com/"
      },
      {
        icon: "https://images.chubaiai.com/Picgo/20251107103114077.webp",
        title: "IP111",
        desc: "快捷IP状态检测工具",
        link: "https://IP111.cn"
      }
    ]
  },
  {
    title: "影视",
    items: [
      {
        icon: "https://www.faviconextractor.com/favicon/decotv.120629.xyz?larger=true",
        title: "decotv",
        desc: "在线影视平台",
        link: "https://decotv.120629.xyz/"
      },
      {
        icon: "https://www.faviconextractor.com/favicon/katelyatv.120629.xyz?larger=true",
        title: "katelyatv",
        desc: "在线影视平台",
        link: "https://katelyatv.120629.xyz/"
      },
      {
        icon: "https://www.faviconextractor.com/favicon/tv.xugf.dpdns.org?larger=true",
        title: "moontv",
        desc: "在线影视平台",
        link: "https://tv.xugf.dpdns.org/"
      },
      {
        icon: "https://www.faviconextractor.com/favicon/tv.clubai.dpdns.org?larger=true",
        title: "OUONNKI",
        desc: "在线影视平台",
        link: "https://tv.clubai.dpdns.org/"
      },
      {
        icon: "https://www.faviconextractor.com/favicon/libretv.clubai.dpdns.org?larger=true",
        title: "libretv",
        desc: "在线影视平台",
        link: "https://libretv.clubai.dpdns.org/"
      },
      {
        icon: "https://images.chubaiai.com/Picgo/20251107151741668.webp",
        title: "555影视",
        desc: "在线影视平台",
        link: "https://55u21.art/"
      }
    ]
  },
  {
    title: "博客",
    items: [
      {
        icon: "https://www.faviconextractor.com/favicon/blog.chubaiai.com?larger=true",
        title: "楚白博客",
        desc: "个人技术博客分享",
        link: "https://blog.chubaiai.com/"
      }
    ]
  },
  {
    title: "在线工具",
    items: [
      {
        icon: "https://www.faviconextractor.com/favicon/pdf.chubai.online?larger=true",
        title: "PDF工具",
        desc: "在线PDF处理工具",
        link: "https://pdf.chubai.online/"
      },
      {
        icon: "https://www.faviconextractor.com/favicon/tool.chubai.online?larger=true",
        title: "IT工具箱",
        desc: "开发者常用工具集合",
        link: "https://tool.chubai.online/"
      },
      {
        icon: "https://images.chubaiai.com/Picgo/20251107151833924.webp",
        title: "工具站",
        desc: "实用在线工具集合",
        link: "https://tools.120629.xyz"
      },
      {
        icon: "https://www.faviconextractor.com/favicon/translate.xugf.dpdns.org?larger=true",
        title: "LibreTranslate 翻译",
        desc: "开源的在线翻译工具",
        link: "https://translate.xugf.dpdns.org/?source=auto&target=zh&q="
      }
    ]
  },
  {
    title: "音乐",
    items: [
      {
        icon: "https://www.faviconextractor.com/favicon/solara.120629.xyz?larger=true",
        title: "Solara音乐",
        desc: "在线音乐播放平台",
        link: "https://solara.120629.xyz/"
      }
    ]
  },
  {
    title: "新闻资讯",
    items: [
      {
        icon: "https://images.chubaiai.com/Picgo/20251107151925580.webp",
        title: "互联网日报",
        desc: "每日互联网热点新闻",
        link: "https://internetdaily.chubai.online/"
      },
      {
        icon: "https://images.chubaiai.com/Picgo/20251107152009158.webp",
        title: "航运AI早报",
        desc: "每日AI资讯早报",
        link: "https://zaobao.chubai.online/aizaobao/"
      }
    ]
  },
  {
    title: "网盘搜索",
    items: [
      {
        icon: "https://www.faviconextractor.com/favicon/panhub.chubai.online?larger=true",
        title: "PanHub",
        desc: "网盘资源搜索引擎",
        link: "https://panhub.chubai.online/"
      },
      {
        icon: "https://www.faviconextractor.com/favicon/search.chubai.online?larger=true",
        title: "网盘搜索",
        desc: "多平台网盘资源搜索",
        link: "https://search.chubai.online/"
      }
    ]
  }
]
