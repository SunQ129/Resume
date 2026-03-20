export const translations = {
  zh: {
    nav: {
      about: '關於我',
      experience: '經歷',
      education: '學歷',
      projects: '專案',
      certifications: '證照',
      community: '參與社群',
      articles: '文章連結',
      contact: '聯絡方式'
    },
    hero: {
      tag: '資訊安全專家 / Security Expert',
      titleP1: "Hi, I'm ",
      titleName: "Jeremy",
      titleP2: ",\nCloud Security\nArchitect.",
      description: "我具備防火牆與雲端資安背景，專長於設計 Zero Trust 架構與多層次防禦機制，協助企業在 AWS / GCP 等雲端平台上建置安全可擴展的系統架構。我深信唯有將資安融入每個開發階段，才能建構真正具韌性的系統。",
      btnExp: "查看經歷",
      btnContact: "聯絡我",
      card1Title: "Cloud Infrastructure",
      card1Desc: "AWS & GCP 架構規劃、Security Groups、VPC 防護與雲端原生資安服務整合。",
      card2Title: "Zero Trust Architecture",
      card2Desc: "企業零信任轉型、ZTNA 部署、EDR端點強化與 IAM 存取控制規劃。"
    },
    experience: {
      title: "工作經歷",
      present: "目前",
      previous: "過去",
      jobs: [
        {
          role: '資深工程師 (Senior Engineer)',
          company: 'BTSE',
          period: '目前',
          achievements: [
            '管理與維護地端防火牆，包含規則優化、異常流量排查，以及潛在安全漏洞驗證。',
            '管理並優化跨 Cloudflare 與 AWS 環境的 Web 應用程式防火牆 (WAF) 規則；執行規則調整與異常調查，確保 Web 應用的持續防禦。',
            '定期執行雲端基礎架構 (AWS) 的安全評估與審查，識別錯誤配置、權限問題與架構層面風險。',
            '主導網路與雲端元件之資安資產盤點與文件化，支援治理、合規性與稽核準備工作。',
            '與 SOC 及其他資安團隊協作，調查並回應資安事件，分析警示事件並提升偵測準確度。',
            '支援防火牆與 WAF 維運流程的持續改善，使其符合零信任 (Zero Trust) 與縱深防禦 (Defense-in-Depth) 的資安原則。'
          ]
        },
        {
          role: '雲端資安解決方案架構師 (Cloud Security Solution Architect)',
          company: 'eCloudvalley Digital Technology',
          period: '過去',
          achievements: [
            '規劃並展示資安解決方案（滲透測試、SOC、MSSP、SIEM）以支援業務拓展。',
            '協助客戶導入 CNAPP，整合安全檢測進入 CI/CD，強化雲端開發環境安全。',
            '針對不同行業需求設計 ZTNA 解決方案，推動零信任架構轉型。',
            '導入 CSA CCM 評估架構，協助客戶辨識雲端風險並提供改善建議。'
          ]
        },
        {
          role: '資安技術經理 / 資安工程師',
          company: 'MetaAge Digital',
          period: '過去',
          achievements: [
            '管理近 200 件資安專案，技術範疇涵蓋 CNAPP、NGFW、EDR/XDR、WAF 等。',
            '建立 SOP 制度並提升跨部門溝通效率，確保專案進度與客戶滿意度。',
            '執行雲端與網路資安評估，提供自動化改善建議與實作支援。',
            '負責技術 PoC、教育訓練、專案文件撰寫與內部知識傳承。'
          ]
        }
      ]
    },
    education: {
      title: "學歷",
      items: [
        {
          school: "國立中央大學 (National Central University)",
          degree: "資訊管理碩士 (M.S. in Information Management)",
          period: "2025 - 2027"
        },
        {
          school: "國立臺北大學 (National Taipei University)",
          degree: "企業管理學士 (B.B.A.)",
          period: "2015 - 2019"
        }
      ]
    },
    projects: {
      title: "指標性專案",
      subtitle: "從架構評估、概念驗證 (POC) 到企業級規模的實作部署。",
      list: [
        {
          title: 'Maestro POC 專案',
          client: 'Phison Electronics',
          highlights: [
            '主導部署 Maestro 架構與核心產品，作為整體導入策略的先驅。',
            '透過深入研究技術文件，解決系統效能與日誌定位問題。',
            '確保前期驗證順利通過，有效推動後續專案成交。'
          ]
        },
        {
          title: 'Maestro 升級專案',
          client: 'Inventec',
          highlights: [
            '參與台灣首例 Maestro 架構升級案，處理全新架構技術挑戰。',
            '進行多次實驗室模擬排除異常情況，確保升級流程穩定。',
            '精準規劃將系統中斷時間縮短至線路切換瞬間，成為最佳實作標竿。'
          ]
        },
        {
          title: '總部資安建置專案',
          client: 'Everlight',
          highlights: [
            '負責從 POC 到正式上線的端對端架構評估與部署設計。',
            '建置防火牆架構並預留後續網路最佳化彈性。',
            '跨團隊協調解決新架構認知落差，優化部署流程與工作標準。'
          ]
        }
      ]
    },
    certifications: {
      title: "專業證照"
    },
    community: {
      title: "參與社群",
      items: [
        {
          org: "ISC2 台北分會 (ISC2 Taipei Chapter)",
          role: "參與成員",
          desc: "參與全球最大的網路安全專業組織 ISC2 台北分會事務，與業界專家交流前瞻資安技術，持續為台灣資安生態系貢獻心力。"
        },
        {
          org: "Wuson",
          role: "志工 (Volunteer)",
          desc: "擔任 Wuson 志工，致力於推廣資訊安全意識、協助社群活動舉辦，深耕在地資安文化。"
        }
      ]
    },
    footer: {
      title: "聯絡方式",
      desc: "尋求雲端資安諮詢、架構規劃或合作機會？歡迎隨時與我聯繫！",
      location: "桃園市, 台灣"
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      education: 'Education',
      projects: 'Projects',
      certifications: 'Certifications',
      community: 'Community',
      articles: 'Articles',
      contact: 'Contact'
    },
    hero: {
      tag: 'Security Expert / Cloud Architect',
      titleP1: "Hi, I'm ",
      titleName: "Jeremy",
      titleP2: ",\nCloud Security\nArchitect.",
      description: "With a strong background in firewall and cloud security, I specialize in designing Zero Trust architectures and multi-layered defense mechanisms. I help enterprises build secure, scalable systems on AWS and GCP. I strongly believe that embedding security into every phase of development is the only way to build truly resilient systems.",
      btnExp: "View Experience",
      btnContact: "Contact Me",
      card1Title: "Cloud Infrastructure",
      card1Desc: "AWS & GCP Architecture, Security Groups, VPC Protection, and Cloud-Native Security Integration.",
      card2Title: "Zero Trust Architecture",
      card2Desc: "Enterprise Zero Trust Transformation, ZTNA Deployment, EDR Hardening, and IAM Access Control."
    },
    experience: {
      title: "Experience",
      present: "Present",
      previous: "Previous",
      jobs: [
        {
          role: 'Senior Engineer',
          company: 'BTSE',
          period: 'Present',
          achievements: [
            'Managed and maintained on-premise firewalls, including rule optimization, troubleshooting abnormal traffic, and verifying potential security vulnerabilities.',
            'Administered and optimized Web Application Firewall (WAF) rules across Cloudflare and AWS environments; performed rule tuning and anomaly investigations to ensure continuous web application protection.',
            'Conducted regular security assessments and reviews of cloud infrastructures (AWS), identifying misconfigurations, privilege issues, and architecture-level risks.',
            'Led security asset inventory and documentation for network and cloud components, supporting governance, compliance, and audit readiness.',
            'Collaborated with the SOC and security teams to investigate and respond to security incidents, analyze alerts, and enhance detection accuracy.',
            'Supported ongoing improvement of firewall and WAF operation workflows to align with Zero Trust and defense-in-depth security principles.'
          ]
        },
        {
          role: 'Cloud Security Solution Architect',
          company: 'eCloudvalley Digital Technology',
          period: 'Previous',
          achievements: [
            'Planned and demonstrated security solutions (Penetration Testing, SOC, MSSP, SIEM) to support business expansion.',
            'Assisted clients in adopting CNAPP and integrating security checks into CI/CD pipelines to harden cloud development environments.',
            'Designed ZTNA solutions tailored to various industry needs, driving Zero Trust architecture transformations.',
            'Implemented CSA CCM assessment frameworks to help clients identify cloud risks and provide actionable improvements.'
          ]
        },
        {
          role: 'Security Technical Manager / Security Engineer',
          company: 'MetaAge Digital',
          period: 'Previous',
          achievements: [
            'Managed nearly 200 cybersecurity projects covering CNAPP, NGFW, EDR/XDR, and WAF technologies.',
            'Established SOPs and improved cross-departmental communication efficiency, ensuring project progress and high client satisfaction.',
            'Conducted cloud and network security assessments, providing automated improvement recommendations and implementation support.',
            'Responsible for technical PoCs, educational training, project documentation, and internal knowledge transfer.'
          ]
        }
      ]
    },
    education: {
      title: "Education",
      items: [
        {
          school: "National Central University",
          degree: "M.S. in Information Management",
          period: "2025 - 2027"
        },
        {
          school: "National Taipei University",
          degree: "B.B.A.",
          period: "2015 - 2019"
        }
      ]
    },
    projects: {
      title: "Key Projects",
      subtitle: "From architecture evaluation and POC to enterprise-scale implementation.",
      list: [
        {
          title: 'Maestro POC Project',
          client: 'Phison Electronics',
          highlights: [
            'Led the deployment of Maestro architecture and core products as the pioneer of the overall implementation strategy.',
            'Resolved system performance and log positioning issues by deeply researching technical documentation.',
            'Ensured the smooth passage of the preliminary validation, effectively driving subsequent project sales.'
          ]
        },
        {
          title: 'Maestro Upgrade Project',
          client: 'Inventec',
          highlights: [
            'Participated in Taiwan\'s first Maestro architecture upgrade, handling technical challenges brought by the new architecture.',
            'Conducted multiple laboratory simulations to eliminate anomalies and ensure a stable upgrade process.',
            'Precision planning reduced system downtime to the exact moment of line switching, establishing a best practice benchmark.'
          ]
        },
        {
          title: 'Headquarters Security Implementation',
          client: 'Everlight',
          highlights: [
            'Responsible for end-to-end architecture evaluation, deployment design, and final implementation from POC to production.',
            'Built the firewall architecture with built-in flexibility for future network optimization.',
            'Coordinated across teams to resolve cognitive gaps regarding the new architecture, optimizing deployment workflows and standards.'
          ]
        }
      ]
    },
    certifications: {
      title: "Certifications"
    },
    community: {
      title: "Community Involvement",
      items: [
        {
          org: "ISC2 Taipei Chapter",
          role: "Chapter Member",
          desc: "Actively involved with the ISC2 Taipei Chapter, the world's leading cybersecurity professional organization. Engage with industry experts to exchange forward-looking security technologies and contribute to Taiwan's cybersecurity ecosystem."
        },
        {
          org: "Wuson",
          role: "Volunteer",
          desc: "Serve as a Wuson volunteer, dedicated to promoting cybersecurity awareness, assisting in organizing community events, and cultivating local cybersecurity culture."
        }
      ]
    },
    footer: {
      title: "Contact",
      desc: "Looking for cloud security consulting, architecture planning, or partnership opportunities? Feel free to reach out!",
      location: "Taoyuan, Taiwan"
    }
  }
};
