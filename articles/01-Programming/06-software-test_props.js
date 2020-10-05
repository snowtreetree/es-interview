import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "安全",
        "link": "articles/01-Programming/05-network-security.html"
    },
    'next': {
        "link": "articles/02-ECMAScript+/index.html",
        "text": "ECMAScript+"
    },
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'sidebar': [
        {
            "text": "Hello",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "text": "职业 & 成长",
            "link": "articles/00-Profession/index.html",
            "pagePath": "articles/00-Profession/README.md"
        },
        {
            "link": "articles/01-Programming/index.html",
            "title": "编程基础",
            "children": [
                {
                    "text": "编程语言",
                    "link": "articles/01-Programming/00-language.html",
                    "pagePath": "articles/01-Programming/00-language.md"
                },
                {
                    "text": "操作系统",
                    "link": "articles/01-Programming/01-operating-system.html",
                    "pagePath": "articles/01-Programming/01-operating-system.md"
                },
                {
                    "text": "算法",
                    "link": "articles/01-Programming/02-algorithms.html",
                    "pagePath": "articles/01-Programming/02-algorithms.md"
                },
                {
                    "text": "设计模式",
                    "link": "articles/01-Programming/03-design-patterns.html",
                    "pagePath": "articles/01-Programming/03-design-patterns.md"
                },
                {
                    "text": "工程化",
                    "link": "articles/01-Programming/04-software-engineering.html",
                    "pagePath": "articles/01-Programming/04-software-engineering.md"
                },
                {
                    "text": "安全",
                    "link": "articles/01-Programming/05-network-security.html",
                    "pagePath": "articles/01-Programming/05-network-security.md"
                },
                {
                    "text": "测试",
                    "link": "articles/01-Programming/06-software-test.html",
                    "pagePath": "articles/01-Programming/06-software-test.md"
                }
            ],
            "text": "编程基础",
            "pagePath": "articles/01-Programming/README.md"
        },
        {
            "link": "articles/02-ECMAScript+/index.html",
            "title": "ECMAScript+",
            "children": [
                {
                    "text": "ECMAScript",
                    "link": "articles/02-ECMAScript+/00-ecmascript.html",
                    "pagePath": "articles/02-ECMAScript+/00-ecmascript.md"
                },
                {
                    "text": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/01-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/01-javascript.md"
                },
                {
                    "text": "TypeScript",
                    "link": "articles/02-ECMAScript+/02-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/02-typescript.md"
                }
            ],
            "text": "ECMAScript+",
            "pagePath": "articles/02-ECMAScript+/README.md"
        },
        {
            "link": "articles/03-HTML+CSS/index.html",
            "title": "HTML + CSS",
            "children": [
                {
                    "text": "HTML",
                    "link": "articles/03-HTML+CSS/00-html.html",
                    "pagePath": "articles/03-HTML+CSS/00-html.md"
                },
                {
                    "text": "CSS",
                    "link": "articles/03-HTML+CSS/01-css.html",
                    "pagePath": "articles/03-HTML+CSS/01-css.md"
                },
                {
                    "text": "HTML + CSS 实战",
                    "link": "articles/03-HTML+CSS/02-html-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/02-html-css-practice.md"
                }
            ],
            "text": "HTML + CSS",
            "pagePath": "articles/03-HTML+CSS/README.md"
        },
        {
            "link": "articles/04-Network+API/index.html",
            "title": "网络 + 前后端协作",
            "children": [
                {
                    "text": "网络",
                    "link": "articles/04-Network+API/00-network.html",
                    "pagePath": "articles/04-Network+API/00-network.md"
                },
                {
                    "text": "前后端协作",
                    "link": "articles/04-Network+API/01-fe-be-api.html",
                    "pagePath": "articles/04-Network+API/01-fe-be-api.md"
                },
                {
                    "text": "登录",
                    "link": "articles/04-Network+API/02-login.html",
                    "pagePath": "articles/04-Network+API/02-login.md"
                }
            ],
            "text": "网络 + 前后端协作",
            "pagePath": "articles/04-Network+API/README.md"
        },
        {
            "link": "articles/05-V8+Runtime/index.html",
            "title": "V8 + JavaScript 运行时",
            "children": [
                {
                    "text": "V8",
                    "link": "articles/05-V8+Runtime/00-v8.html",
                    "pagePath": "articles/05-V8+Runtime/00-v8.md"
                },
                {
                    "text": "Node",
                    "link": "articles/05-V8+Runtime/01-node.html",
                    "pagePath": "articles/05-V8+Runtime/01-node.md"
                },
                {
                    "text": "Deno",
                    "link": "articles/05-V8+Runtime/02-deno.html",
                    "pagePath": "articles/05-V8+Runtime/02-deno.md"
                }
            ],
            "text": "V8 + JavaScript 运行时",
            "pagePath": "articles/05-V8+Runtime/README.md"
        },
        {
            "link": "articles/06-FE+Browser/index.html",
            "title": "前端应用开发 + 浏览器",
            "children": [
                {
                    "text": "浏览器",
                    "link": "articles/06-FE+Browser/00-browser.html",
                    "pagePath": "articles/06-FE+Browser/00-browser.md"
                },
                {
                    "text": "前端",
                    "link": "articles/06-FE+Browser/01-fe.html",
                    "pagePath": "articles/06-FE+Browser/01-fe.md"
                }
            ],
            "text": "前端应用开发 + 浏览器",
            "pagePath": "articles/06-FE+Browser/README.md"
        },
        {
            "link": "articles/07-BE+Server/index.html",
            "title": "后端应用开发 + 服务器",
            "children": [
                {
                    "text": "Linux + Nginx + 数据库",
                    "link": "articles/07-BE+Server/00-linux-nginx-database.html",
                    "pagePath": "articles/07-BE+Server/00-linux-nginx-database.md"
                },
                {
                    "text": "Node 框架",
                    "link": "articles/07-BE+Server/01-node-framework.html",
                    "pagePath": "articles/07-BE+Server/01-node-framework.md"
                }
            ],
            "text": "后端应用开发 + 服务器",
            "pagePath": "articles/07-BE+Server/README.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/01-Programming/06-software-test.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/01-Programming/06-software-test.html",
    'title': "测试",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>测试</h1>\n<h2 id="app-%E6%B5%8B%E8%AF%95%E5%92%8C-web-%E6%B5%8B%E8%AF%95">App 测试和 Web 测试<a class="anchor" href="#app-%E6%B5%8B%E8%AF%95%E5%92%8C-web-%E6%B5%8B%E8%AF%95">§</a></h2>\n<ul>\n<li>\n<p>Web</p>\n</li>\n<li>\n<ul>\n<li>B/S 架构，根据不同浏览器内核测试</li>\n<li>客户端同步更新</li>\n<li>性能：响应时间为主</li>\n<li>交互：鼠标、键盘</li>\n<li>测试：常规 Web 测试</li>\n</ul>\n</li>\n<li>\n<p>App</p>\n</li>\n<li>\n<ul>\n<li>C/S 架构，根据各种终端设备测试</li>\n<li>客户端需要主动升级，因此需要对新功能各个版本上回归测试</li>\n<li>性能：需要关心流量、电量、CPU、GPU、内存</li>\n<li>交互：各种分辨率、屏幕尺寸；触摸屏</li>\n<li>测试：Web 测试、弱网络测试、中断、来电、短信、关机、重启</li>\n</ul>\n</li>\n</ul>\n<h2 id="%E9%BB%91%E7%9B%92%E6%B5%8B%E8%AF%95%E5%92%8C%E7%99%BD%E7%9B%92%E6%B5%8B%E8%AF%95">黑盒测试和白盒测试<a class="anchor" href="#%E9%BB%91%E7%9B%92%E6%B5%8B%E8%AF%95%E5%92%8C%E7%99%BD%E7%9B%92%E6%B5%8B%E8%AF%95">§</a></h2>\n<ul>\n<li>白盒测试：基于代码结构。语句覆盖、判定覆盖、条件覆盖、判定/条件覆盖、条件组合覆盖和路径覆盖</li>\n<li>黑河测试：基于用户需求。等价类划分方法、边界值分析方法、错误推测方法、因果图方法、判定表驱动分析方法、正交实验法、场景法。依据是用户需求规格说明书，详细设计说明书</li>\n</ul>\n<h2 id="%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%95%E6%B5%81%E7%A8%8B">软件测试流程<a class="anchor" href="#%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%95%E6%B5%81%E7%A8%8B">§</a></h2>\n<ul>\n<li>测试需求分析阶段</li>\n<li>测试计划阶段：编写测试计划，参考软件需求规格说明书等</li>\n<li>测试设计阶段：编写测试用例等</li>\n<li>测试执行阶段：冒烟测试、正式测试、BUG管理</li>\n<li>测试评估阶段：测试报告</li>\n<li>测试流程：了解用户需求--&gt;参考需求规格说明书--&gt;测试计划（人力物力时间进度的安排）--&gt;编写测试用例--&gt;评审用例--&gt;搭建环境--&gt;测试包安排预测（冒烟测试）-正式测试-bug-测试结束出报告--&gt;版本上线--&gt;面向用户</li>\n</ul>\n<h2 id="%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%B3%BB%E7%BB%9F%E6%B5%8B%E8%AF%95">单元测试、集成测试、系统测试<a class="anchor" href="#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%B3%BB%E7%BB%9F%E6%B5%8B%E8%AF%95">§</a></h2>\n<ul>\n<li>粒度不同：单元测试粒度最小，集成测试粒度居中，系统测试粒度最大。</li>\n<li>测试方式不同：单元测试一般由开发小组采用白盒方式来测试，集成测试一般由开发小组采用白盒加黑盒的方式来测试，系统测试一般由独立测试小组采用黑盒方式来测试。</li>\n<li>测试内容不同：单元测试主要测试单元是否符合“设计”，集成测试既验证“设计”，又验证“需求”，系统测试主要测试系统是否符合“需求规格说明书”。</li>\n<li>使用阶段不同：单元测试为开发人员在开发阶段要做的事情，集成测试和系统测试为测试人员在测试周期内级层做的工作。</li>\n</ul>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#app-%E6%B5%8B%E8%AF%95%E5%92%8C-web-%E6%B5%8B%E8%AF%95">App 测试和 Web 测试</a></li><li><a href="#%E9%BB%91%E7%9B%92%E6%B5%8B%E8%AF%95%E5%92%8C%E7%99%BD%E7%9B%92%E6%B5%8B%E8%AF%95">黑盒测试和白盒测试</a></li><li><a href="#%E8%BD%AF%E4%BB%B6%E6%B5%8B%E8%AF%95%E6%B5%81%E7%A8%8B">软件测试流程</a></li><li><a href="#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95%E9%9B%86%E6%88%90%E6%B5%8B%E8%AF%95%E7%B3%BB%E7%BB%9F%E6%B5%8B%E8%AF%95">单元测试、集成测试、系统测试</a></li></ol></nav>'
        } })
};