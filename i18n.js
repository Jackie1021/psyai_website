/* ============================================================
   PsyAI — lightweight i18n
   English is the source (captured live from the DOM); this file
   provides Simplified (zh-CN) and Traditional (zh-TW) Chinese.
   Elements opt in with a data-i18n="key" attribute.
   ============================================================ */
(function () {
  "use strict";

  var I18N = {
    "zh-CN": {
      "meta.title.index": "PsyAI — 重新看见人与人的连接",
      "meta.title.work": "商业落地与 AI 智能体 — PsyAI",

      // nav
      "nav.mission": "使命",
      "nav.approach": "理念",
      "nav.products": "产品",
      "nav.collab": "合作与招聘",
      "nav.milestones": "里程碑",
      "nav.team": "团队",
      "nav.getintouch": "联系我们",

      // hero
      "hero.eyebrow": "AI 原生社交平台",
      "hero.title": "重新看见<br /><em>人与人的连接。</em>",
      "hero.sub": "我们正在打造 AI 时代的社交范式——告别无尽的滑动，让 AI 真正读懂每一个人，并围绕真实的你建立有意义的连接。",
      "hero.cta1": "探索我们的产品",
      "hero.cta2": "了解我们的使命 &rsaquo;",

      // mission
      "mission.eyebrow": "我们的使命",
      "mission.title": "滑动时代正在终结。<br />我们打造<em>为你而生</em>的连接。",
      "mission.p1": "过去十年，社交意味着滑动——把一个人简化为一张照片和一瞬间的选择。这一代人比以往任何时候都更“连接”，却也更孤独。",
      "mission.p2": "PsyAI 的存在，正是为了终结这种取舍。我们用 AI 不是去取代人与人的羁绊，而是去<strong>理解</strong>它们——读懂价值观、抱负，以及每个人看待世界的方式，再为他独一无二地打造一个社交平台。",

      // approach
      "approach.eyebrow": "为一个人打造的社交平台",
      "approach.title": "每一款产品都源于同一个信念：<br />AI 能帮助我们<em>真正看见</em>彼此。",
      "approach.p1.title": "理解",
      "approach.p1.desc": "我们的模型读取情绪、经历与意图——对人的理解远超关键词与头像。复杂正是关键：一个人可以既感性又理性，而我们能够察觉。",
      "approach.p2.title": "连接",
      "approach.p2.desc": "我们以生活方式、价值观、抱负与理念来匹配——靠洞察连接，而非外表。结果意义深远得多：匹配更少，但每一个都真正重要。",
      "approach.p3.title": "进化",
      "approach.p3.desc": "一个在无尽循环中学习的 AI，每一次互动都让它更具洞察力。你停留得越久，它就越懂得你正在成为的那个人。",

      // products
      "products.eyebrow": "我们的产品",
      "products.title": "两款产品。<br />一个使命。",
      "products.psycho.index": "产品 01 · 社交网络",
      "products.psycho.line": "为渴望意义的一代人打造的 AI 增强社交网络。",
      "products.psycho.desc": "写给渴望深度连接的年轻人——一个不断进化的 AI 伙伴，搭配基于洞察的匹配，让对话化为真正的理解。",
      "products.psycho.cta": "下载 Android 版",
      "products.dopa.index": "产品 02 · 精选约会",
      "products.dopa.line": "你的每一次心动，都被读懂。",
      "products.dopa.desc": "为大学生精选的 AI 约会。不滑动、不尬聊——每周三，只送上一场用心匹配的真实约会。",
      "products.dopa.cta": "访问 DopaMine",
      "compare.others.label": "其他约会软件",
      "compare.others.sub": "无尽的滑动与尬聊",
      "compare.dopa.sub": "一份即可赴约的邀请",

      // collaboration
      "collab.eyebrow": "合作与招聘",
      "collab.title": "我们为你打造软件——<br /><em>从头到尾，一手交付。</em>",
      "collab.lead": "除了自有产品，我们也为企业和个人交付软件——从<strong>算法优化</strong>一直到上架的成品 App。一支研究级团队，没有交接、没有中间商。",
      "collab.service1": "算法优化",
      "collab.service2": "网站设计",
      "collab.service3": "移动应用",
      "collab.service4": "小程序",
      "collab.service5": "定制 AI 智能体",
      "collab.value1.num": "端到端",
      "collab.value1.label": "策略、设计、开发到发布——由同一支团队全程负责。",
      "collab.value2.num": "2–4 周",
      "collab.value2.label": "从第一通电话，到可用原型交到你手上。",
      "collab.value3.num": "研究级",
      "collab.value3.label": "由港大博士打造的 AI——而非拼凑的模板。",
      "collab.selected": "精选案例",
      "collab.viewmore": "查看更多",
      "work.lingua.desc": "实时双语转写，停顿也不中断——一次录音即可生成可对话编辑的康奈尔笔记。",
      "work.lingua.demo": "观看演示",
      "work.finance.name": "金融资产问答",
      "work.finance.desc": "横跨实时行情与金融知识库的双通道助手——Agent 路由加 RAG，让回答低幻觉、有据可循。",
      "work.finance.demo1": "演示 1",
      "work.finance.demo2": "演示 2",
      "collab.startproject": "启动一个项目",

      // careers
      "careers.eyebrow": "招聘 · 我们正在招人",
      "careers.title": "<em>与我们一起</em>，构建社交的未来。",
      "careers.lead": "我们是一支精干、行动迅速的港大研究者与开发者团队。你将从第一天起就独当一面，并在数周而非数季内交付给真实用户。",
      "job.viewdetails": "查看详情",
      "job.resp": "职责",
      "job.req": "要求",
      "job1.title": "网站与 App 全栈开发工程师",
      "job1.resp1": "从想法到上架，端到端开发并交付 Web 与移动产品。",
      "job1.resp2": "将 LLM 与 Agent 工作流直接集成进产品功能。",
      "job1.resp3": "负责 App Store / Play Store 发版与上线后迭代。",
      "job1.resp4": "与创始人并肩，0→1 地全权负责。",
      "job1.req1": "扎实的全栈能力——React / React Native、Node.js 或 Python、PostgreSQL。",
      "job1.req2": "有实打实的移动端开发与真实上架经验。",
      "job1.req3": "熟悉 AI / LLM API，并能搭建 Agent 流程。",
      "job1.req4": "快速、独立，并有真正的产品思维。",
      "job2.title": "新媒体运营与短视频创作者",
      "job2.resp1": "策划、拍摄并剪辑面向 TikTok、抖音、Instagram 与小红书的短视频。",
      "job2.resp2": "在各平台增长我们的账号，并建立有黏性的社群。",
      "job2.resp3": "用 AI 工具加速脚本、剪辑与制作。",
      "job2.resp4": "负责内容日历，并对增长结果负责。",
      "job2.req1": "拥有真实传播力的短视频作品集。",
      "job2.req2": "多平台运营经验与敏锐的增长直觉。",
      "job2.req3": "熟练使用 AI 内容工具，真正懂潮流。",
      "job2.req4": "有创意、自驱，并以数据驱动。",
      "careers.joinus": "加入我们",

      // milestones
      "ms.eyebrow": "过往战绩",
      "ms.title": "起步六个月。<br />融资 HK$1M。<em>一切才刚刚开始。</em>",
      "ms.stat1.label": "累计融资 · ≈ 12.8 万美元",
      "ms.stat2.label": "科技园非稀释拨款 · 0% 股权",
      "ms.stat3.label": "孵化器与基金 · 科技园 · 数码港 · 港大 TEC",
      "ms.stat4.label": "已上市的消费产品",
      "ms.t1.date": "2026年6月",
      "ms.t1.title": "DopaMine 正式上线",
      "ms.t1.meta": "面向香港大学生的零滑动 AI 约会——每周三晚 7 点，精选一场真实约会。",
      "ms.t2.date": "2026年5月",
      "ms.t2.title": "第 12 届香港大学生创新创业大赛 — 决赛入围",
      "ms.t2.meta": "在 20 多所高校中晋级决赛。",
      "ms.t3.date": "2026年5月",
      "ms.t3.title": "Psycho 封闭测试",
      "ms.t3.meta": "首轮面向真实用户的封测，验证产品与体验。",
      "ms.t4.date": "2026年4月",
      "ms.t4.title": "香港科技园 Ideation 计划",
      "ms.t4.meta": "入选并获 HK$100K 非稀释种子拨款。",
      "ms.t5.date": "2026年3月",
      "ms.t5.title": "数码港创意微型基金 — 决赛入围",
      "ms.t5.meta": "晋级 CCMF 最终阶段。",
      "ms.t6.date": "2026年2月",
      "ms.t6.title": "港大 TEC 核心孵化",
      "ms.t6.meta": "入选港大科技创业核心孵化计划。",
      "ms.t7.date": "2025年12月",
      "ms.t7.title": "香港 Techathon+ — 优异奖",
      "ms.t7.meta": "可信 AI 与数据科学（学生组），由科技园联合 20 多所大学举办。",
      "ms.cta": "查看全部里程碑",

      // team
      "team.eyebrow": "团队",
      "team.title": "由全球<em>顶尖实验室</em>的<br />AI 博士打造。",
      "team.lead": "PsyAI 由活跃在 AI 最前沿的博士研究者与教授创立并打造——与曾在大规模产业中身经百战的工程师并肩交付。研究级的严谨，创始人级的速度。",
      "team.acad": "学界 · 博士与教授",
      "team.industry": "业界 · 实战开发者",
      "cred.hku": "香港大学",
      "cred.berkeley": "加州大学伯克利",
      "cred.mit": "麻省理工",
      "cred.tsinghua": "清华大学",
      "cred.freiburg": "弗赖堡大学",
      "cred.copenhagen": "哥本哈根大学",
      "cred.fudan": "复旦大学",
      "cred.ucas": "中国科学院大学",
      "cred.tencent": "腾讯",
      "cred.bytedance": "字节跳动",
      "cred.unitree": "宇树科技",

      // contact
      "contact.title": "让我们一起，重塑连接。",
      "contact.sub": "无论是商业合作、科研协作还是投资，我们都期待与你聊聊。",

      // footer
      "footer.tagline": "重新看见人与人的连接。",
      "footer.h.products": "产品",
      "footer.h.company": "公司",
      "footer.h.work": "与我们合作",
      "footer.h.contact": "联系",
      "footer.collaboration": "合作",
      "footer.careers": "招聘",
      "footer.portfolio": "作品集",
      "footer.workagents": "商业落地与智能体",
      "footer.hk": "香港",
      "footer.rights": "© 2026 PsyAI. 保留所有权利。",
      "footer.built": "香港出品",

      // work.html
      "worknav.back": "&lsaquo; 返回首页",
      "workhero.eyebrow": "合作 · 更多案例",
      "workhero.title": "商业落地案例，<br />与<em>开箱即用的 AI 智能体套件。</em>",
      "workhero.sub": "在 Lingua 与金融资产问答之外——这些是我们为真实企业交付的生产级系统，外加四套可贴牌、按行业部署的 AI 智能体。每一张截图都是真实、可上线的产品形态。",
      "workhero.back": "&lsaquo; 返回合作与招聘",
      "work.cw.eyebrow": "商业落地",
      "work.cw.title": "四套方案，<br /><em>2–4 周交付。</em>",
      "case1.index": "案例 01 · 连锁零售 · 美业 · 教育",
      "case1.title": "私域 AI 客服 + 留资智能体",
      "case1.pain": "<b>痛点 —</b> 80% 咨询重复；非工作时间的线索无人应答。",
      "case1.sol": "<b>方案 —</b> 企业微信 / 抖音私信 + 商品库 RAG + 自动留资。",
      "case1.resulttag": "实测 · 12 家奶茶连锁 · 6 个月",
      "case1.result": "<b>84% 自动解决</b> · 每月省 HK$8,400 · 非工作时段线索 +35%",
      "case2.index": "案例 02 · 餐饮 · 诊所 · 美业 · 本地服务",
      "case2.title": "AI 电话助理 · 语音智能体",
      "case2.pain": "<b>痛点 —</b> 高峰期 25–35% 来电漏接——直接流失订单。",
      "case2.sol": "<b>方案 —</b> ASR + LLM + TTS，自动订座、报价并转接店长。",
      "case2.resulttag": "实测 · 3 家中型餐厅 · 3 个月",
      "case2.result": "漏接率 <b>30% → 0%</b> · 每月 +412 单 · 24/7 不打烊",
      "case3.index": "案例 03 · 外贸 · 电商 · 工厂 · 律所",
      "case3.title": "老板日报机器人 · 内部数据自动化",
      "case3.pain": "<b>痛点 —</b> 每天 2 小时手工汇总；异常 3–5 天后才被发现。",
      "case3.sol": "<b>方案 —</b> 对接金蝶 / 用友，每天早上 8 点自动推送摘要到老板微信。",
      "case3.resulttag": "实测 · 跨境卖家 · 6 个仓 · 9 个月",
      "case3.result": "<b>每天省 2 小时</b> · 异常提前 5 天发现 · 缺货提前预警",
      "case4.index": "案例 04 · 医美 · 诊所 · 培训 · 连锁",
      "case4.title": "预约 + 会员小程序，含数据看板",
      "case4.pain": "<b>痛点 —</b> 外包报价 HK$5–15 万，做完就消失；现成 SaaS 又永远不贴合。",
      "case4.sol": "<b>方案 —</b> 定制预约 + 会员 + 多店看板 + AI 洞察。",
      "case4.resulttag": "实测 · 4 店医美连锁 · 2 个月",
      "case4.result": "<b>预约转化 +9.2pt</b> · 空位率 −11pt · 比外包便宜 40–60%",
      "work.agents.eyebrow": "AI 智能体套件",
      "work.agents.title": "四套智能体。<br /><em>约 70% 已预制。</em>",
      "work.agents.lead": "核心代码已经完成。带上你的品牌、行业数据与流程——我们大约两周就能交付一个可运行的定制产品。",
      "agent1.title": "Cupid Agent — 相亲与社交",
      "agent1.desc": "六维灵魂契合度评分、AI 破冰话术与关系演进分析。",
      "agent2.title": "Career Agent — 求职",
      "agent2.desc": "实时抓取 JD、定向改写简历、自动投递与面试日程管理。",
      "agent3.title": "Marketing Agent — 增长",
      "agent3.desc": "一个大脑统管整个漏斗——自动在抖音 / 小红书 / Instagram 发布，并提供投放洞察。",
      "agent4.title": "Restaurant OS — 餐厅大脑",
      "agent4.desc": "扫码点单 + 自动记账 + 多店看板 + AI 经营建议。",
      "work.cta.title": "不在这份清单上？<br /><em>聊聊看。</em>",
      "work.cta.sub": "一通 30 分钟的电话，我会直接告诉你能不能做、怎么做、几周交付——不推销、不空话。",
      "work.cta.home": "返回首页"
    },

    "zh-TW": {
      "meta.title.index": "PsyAI — 重新看見人與人的連結",
      "meta.title.work": "商業落地與 AI 智能體 — PsyAI",

      "nav.mission": "使命",
      "nav.approach": "理念",
      "nav.products": "產品",
      "nav.collab": "合作與招聘",
      "nav.milestones": "里程碑",
      "nav.team": "團隊",
      "nav.getintouch": "聯絡我們",

      "hero.eyebrow": "AI 原生社交平台",
      "hero.title": "重新看見<br /><em>人與人的連結。</em>",
      "hero.sub": "我們正在打造 AI 時代的社交範式——告別無盡的滑動，讓 AI 真正讀懂每一個人，並圍繞真實的你建立有意義的連結。",
      "hero.cta1": "探索我們的產品",
      "hero.cta2": "了解我們的使命 &rsaquo;",

      "mission.eyebrow": "我們的使命",
      "mission.title": "滑動時代正在終結。<br />我們打造<em>為你而生</em>的連結。",
      "mission.p1": "過去十年，社交意味著滑動——把一個人簡化為一張照片和一瞬間的選擇。這一代人比以往任何時候都更「連結」，卻也更孤獨。",
      "mission.p2": "PsyAI 的存在，正是為了終結這種取捨。我們用 AI 不是去取代人與人的羈絆，而是去<strong>理解</strong>它們——讀懂價值觀、抱負，以及每個人看待世界的方式，再為他獨一無二地打造一個社交平台。",

      "approach.eyebrow": "為一個人打造的社交平台",
      "approach.title": "每一款產品都源於同一個信念：<br />AI 能幫助我們<em>真正看見</em>彼此。",
      "approach.p1.title": "理解",
      "approach.p1.desc": "我們的模型讀取情緒、經歷與意圖——對人的理解遠超關鍵字與頭像。複雜正是關鍵：一個人可以既感性又理性，而我們能夠察覺。",
      "approach.p2.title": "連結",
      "approach.p2.desc": "我們以生活方式、價值觀、抱負與理念來匹配——靠洞察連結，而非外表。結果意義深遠得多：匹配更少，但每一個都真正重要。",
      "approach.p3.title": "進化",
      "approach.p3.desc": "一個在無盡循環中學習的 AI，每一次互動都讓它更具洞察力。你停留得越久，它就越懂得你正在成為的那個人。",

      "products.eyebrow": "我們的產品",
      "products.title": "兩款產品。<br />一個使命。",
      "products.psycho.index": "產品 01 · 社交網絡",
      "products.psycho.line": "為渴望意義的一代人打造的 AI 增強社交網絡。",
      "products.psycho.desc": "寫給渴望深度連結的年輕人——一個不斷進化的 AI 夥伴，搭配基於洞察的匹配，讓對話化為真正的理解。",
      "products.psycho.cta": "下載 Android 版",
      "products.dopa.index": "產品 02 · 精選約會",
      "products.dopa.line": "你的每一次心動，都被讀懂。",
      "products.dopa.desc": "為大學生精選的 AI 約會。不滑動、不尬聊——每週三，只送上一場用心匹配的真實約會。",
      "products.dopa.cta": "造訪 DopaMine",
      "compare.others.label": "其他約會軟體",
      "compare.others.sub": "無盡的滑動與尬聊",
      "compare.dopa.sub": "一份即可赴約的邀請",

      "collab.eyebrow": "合作與招聘",
      "collab.title": "我們為你打造軟體——<br /><em>從頭到尾，一手交付。</em>",
      "collab.lead": "除了自有產品，我們也為企業和個人交付軟體——從<strong>演算法優化</strong>一直到上架的成品 App。一支研究級團隊，沒有交接、沒有中間商。",
      "collab.service1": "演算法優化",
      "collab.service2": "網站設計",
      "collab.service3": "行動應用",
      "collab.service4": "小程式",
      "collab.service5": "客製 AI 智能體",
      "collab.value1.num": "端到端",
      "collab.value1.label": "策略、設計、開發到發布——由同一支團隊全程負責。",
      "collab.value2.num": "2–4 週",
      "collab.value2.label": "從第一通電話，到可用原型交到你手上。",
      "collab.value3.num": "研究級",
      "collab.value3.label": "由港大博士打造的 AI——而非拼湊的模板。",
      "collab.selected": "精選案例",
      "collab.viewmore": "查看更多",
      "work.lingua.desc": "即時雙語轉寫，停頓也不中斷——一次錄音即可生成可對話編輯的康乃爾筆記。",
      "work.lingua.demo": "觀看演示",
      "work.finance.name": "金融資產問答",
      "work.finance.desc": "橫跨即時行情與金融知識庫的雙通道助手——Agent 路由加 RAG，讓回答低幻覺、有據可循。",
      "work.finance.demo1": "演示 1",
      "work.finance.demo2": "演示 2",
      "collab.startproject": "啟動一個專案",

      "careers.eyebrow": "招聘 · 我們正在招人",
      "careers.title": "<em>與我們一起</em>，構建社交的未來。",
      "careers.lead": "我們是一支精幹、行動迅速的港大研究者與開發者團隊。你將從第一天起就獨當一面，並在數週而非數季內交付給真實用戶。",
      "job.viewdetails": "查看詳情",
      "job.resp": "職責",
      "job.req": "要求",
      "job1.title": "網站與 App 全端開發工程師",
      "job1.resp1": "從想法到上架，端到端開發並交付 Web 與行動產品。",
      "job1.resp2": "將 LLM 與 Agent 工作流直接整合進產品功能。",
      "job1.resp3": "負責 App Store / Play Store 發版與上線後迭代。",
      "job1.resp4": "與創辦人並肩，0→1 地全權負責。",
      "job1.req1": "扎實的全端能力——React / React Native、Node.js 或 Python、PostgreSQL。",
      "job1.req2": "有實打實的行動端開發與真實上架經驗。",
      "job1.req3": "熟悉 AI / LLM API，並能搭建 Agent 流程。",
      "job1.req4": "快速、獨立，並有真正的產品思維。",
      "job2.title": "新媒體營運與短影片創作者",
      "job2.resp1": "策劃、拍攝並剪輯面向 TikTok、抖音、Instagram 與小紅書的短影片。",
      "job2.resp2": "在各平台成長我們的帳號，並建立有黏性的社群。",
      "job2.resp3": "用 AI 工具加速腳本、剪輯與製作。",
      "job2.resp4": "負責內容行事曆，並對成長結果負責。",
      "job2.req1": "擁有真實傳播力的短影片作品集。",
      "job2.req2": "多平台營運經驗與敏銳的成長直覺。",
      "job2.req3": "熟練使用 AI 內容工具，真正懂潮流。",
      "job2.req4": "有創意、自驅，並以數據驅動。",
      "careers.joinus": "加入我們",

      "ms.eyebrow": "過往戰績",
      "ms.title": "起步六個月。<br />融資 HK$1M。<em>一切才剛剛開始。</em>",
      "ms.stat1.label": "累計融資 · ≈ 12.8 萬美元",
      "ms.stat2.label": "科技園非稀釋撥款 · 0% 股權",
      "ms.stat3.label": "孵化器與基金 · 科技園 · 數碼港 · 港大 TEC",
      "ms.stat4.label": "已上市的消費產品",
      "ms.t1.date": "2026年6月",
      "ms.t1.title": "DopaMine 正式上線",
      "ms.t1.meta": "面向香港大學生的零滑動 AI 約會——每週三晚 7 點，精選一場真實約會。",
      "ms.t2.date": "2026年5月",
      "ms.t2.title": "第 12 屆香港大學生創新創業大賽 — 決賽入圍",
      "ms.t2.meta": "在 20 多所高校中晉級決賽。",
      "ms.t3.date": "2026年5月",
      "ms.t3.title": "Psycho 封閉測試",
      "ms.t3.meta": "首輪面向真實用戶的封測，驗證產品與體驗。",
      "ms.t4.date": "2026年4月",
      "ms.t4.title": "香港科技園 Ideation 計劃",
      "ms.t4.meta": "入選並獲 HK$100K 非稀釋種子撥款。",
      "ms.t5.date": "2026年3月",
      "ms.t5.title": "數碼港創意微型基金 — 決賽入圍",
      "ms.t5.meta": "晉級 CCMF 最終階段。",
      "ms.t6.date": "2026年2月",
      "ms.t6.title": "港大 TEC 核心孵化",
      "ms.t6.meta": "入選港大科技創業核心孵化計劃。",
      "ms.t7.date": "2025年12月",
      "ms.t7.title": "香港 Techathon+ — 優異獎",
      "ms.t7.meta": "可信 AI 與數據科學（學生組），由科技園聯合 20 多所大學舉辦。",
      "ms.cta": "查看全部里程碑",

      "team.eyebrow": "團隊",
      "team.title": "由全球<em>頂尖實驗室</em>的<br />AI 博士打造。",
      "team.lead": "PsyAI 由活躍在 AI 最前沿的博士研究者與教授創立並打造——與曾在大規模產業中身經百戰的工程師並肩交付。研究級的嚴謹，創辦人級的速度。",
      "team.acad": "學界 · 博士與教授",
      "team.industry": "業界 · 實戰開發者",
      "cred.hku": "香港大學",
      "cred.berkeley": "加州大學柏克萊",
      "cred.mit": "麻省理工",
      "cred.tsinghua": "清華大學",
      "cred.freiburg": "弗萊堡大學",
      "cred.copenhagen": "哥本哈根大學",
      "cred.fudan": "復旦大學",
      "cred.ucas": "中國科學院大學",
      "cred.tencent": "騰訊",
      "cred.bytedance": "字節跳動",
      "cred.unitree": "宇樹科技",

      "contact.title": "讓我們一起，重塑連結。",
      "contact.sub": "無論是商業合作、科研協作還是投資，我們都期待與你聊聊。",

      "footer.tagline": "重新看見人與人的連結。",
      "footer.h.products": "產品",
      "footer.h.company": "公司",
      "footer.h.work": "與我們合作",
      "footer.h.contact": "聯絡",
      "footer.collaboration": "合作",
      "footer.careers": "招聘",
      "footer.portfolio": "作品集",
      "footer.workagents": "商業落地與智能體",
      "footer.hk": "香港",
      "footer.rights": "© 2026 PsyAI. 保留所有權利。",
      "footer.built": "香港出品",

      "worknav.back": "&lsaquo; 返回首頁",
      "workhero.eyebrow": "合作 · 更多案例",
      "workhero.title": "商業落地案例，<br />與<em>開箱即用的 AI 智能體套件。</em>",
      "workhero.sub": "在 Lingua 與金融資產問答之外——這些是我們為真實企業交付的生產級系統，外加四套可貼牌、按行業部署的 AI 智能體。每一張截圖都是真實、可上線的產品形態。",
      "workhero.back": "&lsaquo; 返回合作與招聘",
      "work.cw.eyebrow": "商業落地",
      "work.cw.title": "四套方案，<br /><em>2–4 週交付。</em>",
      "case1.index": "案例 01 · 連鎖零售 · 美業 · 教育",
      "case1.title": "私域 AI 客服 + 留資智能體",
      "case1.pain": "<b>痛點 —</b> 80% 諮詢重複；非工作時間的線索無人應答。",
      "case1.sol": "<b>方案 —</b> 企業微信 / 抖音私信 + 商品庫 RAG + 自動留資。",
      "case1.resulttag": "實測 · 12 家奶茶連鎖 · 6 個月",
      "case1.result": "<b>84% 自動解決</b> · 每月省 HK$8,400 · 非工作時段線索 +35%",
      "case2.index": "案例 02 · 餐飲 · 診所 · 美業 · 本地服務",
      "case2.title": "AI 電話助理 · 語音智能體",
      "case2.pain": "<b>痛點 —</b> 高峰期 25–35% 來電漏接——直接流失訂單。",
      "case2.sol": "<b>方案 —</b> ASR + LLM + TTS，自動訂座、報價並轉接店長。",
      "case2.resulttag": "實測 · 3 家中型餐廳 · 3 個月",
      "case2.result": "漏接率 <b>30% → 0%</b> · 每月 +412 單 · 24/7 不打烊",
      "case3.index": "案例 03 · 外貿 · 電商 · 工廠 · 律所",
      "case3.title": "老闆日報機器人 · 內部數據自動化",
      "case3.pain": "<b>痛點 —</b> 每天 2 小時手工彙總；異常 3–5 天後才被發現。",
      "case3.sol": "<b>方案 —</b> 對接金蝶 / 用友，每天早上 8 點自動推送摘要到老闆微信。",
      "case3.resulttag": "實測 · 跨境賣家 · 6 個倉 · 9 個月",
      "case3.result": "<b>每天省 2 小時</b> · 異常提前 5 天發現 · 缺貨提前預警",
      "case4.index": "案例 04 · 醫美 · 診所 · 培訓 · 連鎖",
      "case4.title": "預約 + 會員小程式，含數據看板",
      "case4.pain": "<b>痛點 —</b> 外包報價 HK$5–15 萬，做完就消失；現成 SaaS 又永遠不貼合。",
      "case4.sol": "<b>方案 —</b> 客製預約 + 會員 + 多店看板 + AI 洞察。",
      "case4.resulttag": "實測 · 4 店醫美連鎖 · 2 個月",
      "case4.result": "<b>預約轉化 +9.2pt</b> · 空位率 −11pt · 比外包便宜 40–60%",
      "work.agents.eyebrow": "AI 智能體套件",
      "work.agents.title": "四套智能體。<br /><em>約 70% 已預製。</em>",
      "work.agents.lead": "核心程式碼已經完成。帶上你的品牌、行業數據與流程——我們大約兩週就能交付一個可運行的客製產品。",
      "agent1.title": "Cupid Agent — 相親與社交",
      "agent1.desc": "六維靈魂契合度評分、AI 破冰話術與關係演進分析。",
      "agent2.title": "Career Agent — 求職",
      "agent2.desc": "即時抓取 JD、定向改寫履歷、自動投遞與面試日程管理。",
      "agent3.title": "Marketing Agent — 成長",
      "agent3.desc": "一個大腦統管整個漏斗——自動在抖音 / 小紅書 / Instagram 發布，並提供投放洞察。",
      "agent4.title": "Restaurant OS — 餐廳大腦",
      "agent4.desc": "掃碼點單 + 自動記帳 + 多店看板 + AI 經營建議。",
      "work.cta.title": "不在這份清單上？<br /><em>聊聊看。</em>",
      "work.cta.sub": "一通 30 分鐘的電話，我會直接告訴你能不能做、怎麼做、幾週交付——不推銷、不空話。",
      "work.cta.home": "返回首頁"
    }
  };

  var LANGS = ["en", "zh-CN", "zh-TW"];
  var SHORT = { "en": "EN", "zh-CN": "简体", "zh-TW": "繁體" };
  var HTMLLANG = { "en": "en", "zh-CN": "zh-Hans", "zh-TW": "zh-Hant" };
  var STORE = "psyai_lang";

  var nodes = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  var baseline = nodes.map(function (el) { return el.innerHTML; });

  function apply(lang) {
    if (LANGS.indexOf(lang) < 0) lang = "en";
    var dict = I18N[lang] || {};
    nodes.forEach(function (el, i) {
      var key = el.getAttribute("data-i18n");
      if (lang === "en") {
        el.innerHTML = baseline[i];
      } else if (Object.prototype.hasOwnProperty.call(dict, key)) {
        el.innerHTML = dict[key];
      } else {
        el.innerHTML = baseline[i];
      }
    });
    document.documentElement.setAttribute("lang", HTMLLANG[lang] || "en");
    document.querySelectorAll("[data-lang-label]").forEach(function (c) {
      c.textContent = SHORT[lang];
    });
    document.querySelectorAll(".lang__menu [data-lang]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }

  // wire up the switcher(s)
  document.querySelectorAll("[data-lang-switch]").forEach(function (root) {
    var btn = root.querySelector(".lang__btn");
    var menu = root.querySelector(".lang__menu");
    if (!btn || !menu) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = root.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("[data-lang]").forEach(function (opt) {
      opt.addEventListener("click", function () {
        apply(opt.getAttribute("data-lang"));
        root.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  });
  document.addEventListener("click", function () {
    document.querySelectorAll("[data-lang-switch].open").forEach(function (r) {
      r.classList.remove("open");
      var b = r.querySelector(".lang__btn");
      if (b) b.setAttribute("aria-expanded", "false");
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll("[data-lang-switch].open").forEach(function (r) {
        r.classList.remove("open");
      });
    }
  });

  var saved = "en";
  try { saved = localStorage.getItem(STORE) || "en"; } catch (e) {}
  apply(saved);
})();
