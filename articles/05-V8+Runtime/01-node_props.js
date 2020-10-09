import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "text": "V8",
        "link": "articles/05-V8+Runtime/00-v8.html"
    },
    'next': {
        "text": "Deno",
        "link": "articles/05-V8+Runtime/02-deno.html"
    },
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'sidebar': [
        {
            "text": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "text": "前端大事记",
            "link": "articles/es-timeline.html",
            "pagePath": "articles/es-timeline.md"
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
                },
                {
                    "text": "版本控制",
                    "link": "articles/01-Programming/07-version-control.html",
                    "pagePath": "articles/01-Programming/07-version-control.md"
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
                },
                {
                    "text": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/03-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/03-javascript-parctice.md"
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
                    "link": "articles/03-HTML+CSS/01-css-design.html",
                    "pagePath": "articles/03-HTML+CSS/01-css-design.md"
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
                    "link": "articles/06-FE+Browser/01-fe-framework.html",
                    "pagePath": "articles/06-FE+Browser/01-fe-framework.md"
                },
                {
                    "text": "前端工具链",
                    "link": "articles/06-FE+Browser/02-fe-tooltain.html",
                    "pagePath": "articles/06-FE+Browser/02-fe-tooltain.md"
                },
                {
                    "text": "前端打包工具",
                    "link": "articles/06-FE+Browser/03-pack-tool.html",
                    "pagePath": "articles/06-FE+Browser/03-pack-tool.md"
                },
                {
                    "text": "移动端 Web 开发",
                    "link": "articles/06-FE+Browser/04-fe-mobile.html",
                    "pagePath": "articles/06-FE+Browser/04-fe-mobile.md"
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
    'pagePath': "articles/05-V8+Runtime/01-node.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/05-V8+Runtime/01-node.html",
    'title': "Node",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Node</h1>\n<ul>\n<li>nodejs I/O 模型、事件模型、高并发\n<ul>\n<li>Node 的 nexttick 以及事件循环每个 stage 做了啥。比如 poll 阶段， timer阶段， check阶段之间的差异</li>\n<li>轮询机制，六个阶段、libuv、process.nextTick</li>\n</ul>\n</li>\n<li>express 中间件</li>\n<li>child_process 模块，父子进程的通信机制</li>\n<li>写一个 http server，并且处理 POST 请求</li>\n<li>mongoose</li>\n<li>何判断一个IP是不是国内IP？</li>\n</ul>\n<h2 id="node-%E7%9A%84%E5%BC%82%E6%AD%A5%E6%80%A7%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">Node 的异步性有什么特点？<a class="anchor" href="#node-%E7%9A%84%E5%BC%82%E6%AD%A5%E6%80%A7%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">§</a></h2>\n<h2 id="node-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">Node 的事件模型<a class="anchor" href="#node-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">§</a></h2>\n<h2 id="node-%E6%A8%A1%E5%9D%97%E5%8C%96">Node 模块化<a class="anchor" href="#node-%E6%A8%A1%E5%9D%97%E5%8C%96">§</a></h2>\n<ul>\n<li>Node 中每个 js 文件模块会包含在隐藏的函数中运行\n<ul>\n<li>function (exports, require, module, __filename, __dirname) {}</li>\n<li>其中，module 代表模块本身，module.exports 可以统一导出</li>\n<li>exports 是形参，指向 module.exports 的值，但是不能统一导出</li>\n</ul>\n</li>\n</ul>\n<h2 id="eventemmiter-%E5%8E%9F%E7%90%86%E5%8F%8A%E5%8A%A8%E6%89%8B%E5%AE%9E%E8%B7%B5">EventEmmiter 原理及动手实践？<a class="anchor" href="#eventemmiter-%E5%8E%9F%E7%90%86%E5%8F%8A%E5%8A%A8%E6%89%8B%E5%AE%9E%E8%B7%B5">§</a></h2>\n<pre class="language-javascript"><code class="language-javascript"><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> root <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> self <span class="token operator">==</span> <span class="token string">\'object\'</span> <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">.</span><span class="token property-access">self</span> <span class="token operator">==</span> self <span class="token operator">&amp;&amp;</span> self<span class="token punctuation">)</span> <span class="token operator">||</span>\n        <span class="token punctuation">(</span><span class="token keyword">typeof</span> global <span class="token operator">==</span> <span class="token string">\'object\'</span> <span class="token operator">&amp;&amp;</span> global<span class="token punctuation">.</span><span class="token property-access">global</span> <span class="token operator">==</span> global <span class="token operator">&amp;&amp;</span> global<span class="token punctuation">)</span> <span class="token operator">||</span>\n        <span class="token keyword">this</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">function</span> <span class="token function">isValidListener</span><span class="token punctuation">(</span><span class="token parameter">listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> listener <span class="token operator">===</span> <span class="token string">\'function\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>listener <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> listener <span class="token operator">===</span> <span class="token string">\'object\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> <span class="token function">isValidListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">.</span><span class="token property-access">listener</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">return</span> <span class="token boolean">false</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token parameter">array<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>\n        item <span class="token operator">=</span> <span class="token keyword">typeof</span> item <span class="token operator">===</span> <span class="token string">\'object\'</span>\n            <span class="token operator">?</span> item<span class="token punctuation">.</span><span class="token property-access">listener</span>\n            <span class="token operator">:</span> item\n\n        <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> array<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">listener</span> <span class="token operator">===</span> item<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                result <span class="token operator">=</span> i\n                <span class="token keyword control-flow">break</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword control-flow">return</span> result\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">function</span> <span class="token function"><span class="token maybe-class-name">EventEmitter</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">__events</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token maybe-class-name">EventEmitter</span><span class="token punctuation">.</span><span class="token constant">VERSION</span> <span class="token operator">=</span> <span class="token string">\'1.0.0\'</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">var</span> proto <span class="token operator">=</span> <span class="token class-name">EventEmitter</span><span class="token punctuation">.</span><span class="token property-access">prototype</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 添加事件\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 事件名称\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">listener</span> 监听器函数\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> 可链式调用\n     */</span>\n    proto<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">on</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>eventName <span class="token operator">||</span> <span class="token operator">!</span>listener<span class="token punctuation">)</span> <span class="token keyword control-flow">return</span><span class="token punctuation">;</span>\n\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isValidListener</span><span class="token punctuation">(</span>listener<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">\'listener must be a function\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">__events</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> listeners <span class="token operator">=</span> events<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">=</span> events<span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">var</span> listenerIsWrapped <span class="token operator">=</span> <span class="token keyword">typeof</span> listener <span class="token operator">===</span> <span class="token string">\'object\'</span><span class="token punctuation">;</span>\n\n        <span class="token comment">// 不重复添加事件</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token function">indexOf</span><span class="token punctuation">(</span>listeners<span class="token punctuation">,</span> listener<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            listeners<span class="token punctuation">.</span><span class="token method function property-access">push</span><span class="token punctuation">(</span>listenerIsWrapped <span class="token operator">?</span> listener <span class="token operator">:</span> <span class="token punctuation">{</span>\n                listener<span class="token operator">:</span> listener<span class="token punctuation">,</span>\n                once<span class="token operator">:</span> <span class="token boolean">false</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 添加事件，该事件只能被执行一次\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 事件名称\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">listener</span> 监听器函数\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> 可链式调用\n     */</span>\n    proto<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">once</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">on</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            listener<span class="token operator">:</span> listener<span class="token punctuation">,</span>\n            once<span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 删除事件\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 事件名称\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">listener</span> 监听器函数\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> 可链式调用\n     */</span>\n    proto<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">off</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> listener</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> listeners <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">__events</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>listeners<span class="token punctuation">)</span> <span class="token keyword control-flow">return</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">var</span> index<span class="token punctuation">;</span>\n        <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> listeners<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token property-access">listener</span> <span class="token operator">===</span> listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                index <span class="token operator">=</span> i<span class="token punctuation">;</span>\n                <span class="token keyword control-flow">break</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> index <span class="token operator">!==</span> <span class="token string">\'undefined\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            listeners<span class="token punctuation">.</span><span class="token method function property-access">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword null nil">null</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 触发事件\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 事件名称\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">args</span> 传入监听器函数的参数，使用数组形式传入\n     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> 可链式调用\n     */</span>\n    proto<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">emit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> listeners <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">__events</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>listeners<span class="token punctuation">)</span> <span class="token keyword control-flow">return</span><span class="token punctuation">;</span>\n\n        <span class="token keyword control-flow">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> listeners<span class="token punctuation">.</span><span class="token property-access">length</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">var</span> listener <span class="token operator">=</span> listeners<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>listener<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                listener<span class="token punctuation">.</span><span class="token method function property-access">listener</span><span class="token punctuation">.</span><span class="token method function property-access">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>listener<span class="token punctuation">.</span><span class="token property-access">once</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token method function property-access">off</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> listener<span class="token punctuation">.</span><span class="token property-access">listener</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword control-flow">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token doc-comment comment">/**\n     * 删除某一个类型的所有事件或者所有事件\n     * <span class="token keyword">@param</span>  <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">eventName</span> 事件名称\n     */</span>\n    proto<span class="token punctuation">.</span><span class="token method-variable function-variable method function property-access">allOff</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span>eventName <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">__events</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">__events</span><span class="token punctuation">[</span>eventName<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token property-access">__events</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> exports <span class="token operator">!=</span> <span class="token string">\'undefined\'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>exports<span class="token punctuation">.</span><span class="token property-access">nodeType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword control-flow">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module <span class="token operator">!=</span> <span class="token string">\'undefined\'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>module<span class="token punctuation">.</span><span class="token property-access">nodeType</span> <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span><span class="token property-access">exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            exports <span class="token operator">=</span> module<span class="token punctuation">.</span><span class="token property-access">exports</span> <span class="token operator">=</span> <span class="token maybe-class-name">EventEmitter</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        exports<span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">EventEmitter</span></span> <span class="token operator">=</span> <span class="token maybe-class-name">EventEmitter</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword control-flow">else</span> <span class="token punctuation">{</span>\n        root<span class="token punctuation">.</span><span class="token property-access"><span class="token maybe-class-name">EventEmitter</span></span> <span class="token operator">=</span> <span class="token maybe-class-name">EventEmitter</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<pre class="language-autoit"><code class="language-autoit">var emitter <span class="token operator">=</span> new <span class="token function">EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">;</span>\n\nfunction <span class="token function">handleOne</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> {\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'第一个监听函数\'</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>\n}\n\nfunction <span class="token function">handleSecond</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> {\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'第二个监听函数\'</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>\n}\n\nfunction <span class="token function">handleThird</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span> {\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'第三个监听函数\'</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">)</span>\n}\n\nemitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">,</span> handleOne<span class="token punctuation">)</span>\n       <span class="token punctuation">.</span><span class="token function">once</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">,</span> handleSecond<span class="token punctuation">)</span>\n       <span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"demo"</span><span class="token punctuation">,</span> handleThird<span class="token punctuation">)</span><span class="token comment">;</span>\n\nemitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">\'demo\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">;</span>\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">=</span><span class="token operator">></span> 第一个监听函数 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">=</span><span class="token operator">></span> 第二个监听函数 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">=</span><span class="token operator">></span> 第三个监听函数 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>\n\nemitter<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">\'demo\'</span><span class="token punctuation">,</span> handleThird<span class="token punctuation">)</span><span class="token comment">;</span>\nemitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">\'demo\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">;</span>\n<span class="token operator">/</span><span class="token operator">/</span> <span class="token operator">=</span><span class="token operator">></span> 第一个监听函数 <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span>\n\nemitter<span class="token punctuation">.</span><span class="token function">allOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">;</span>\nemitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">\'demo\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment">;</span>\n<span class="token operator">/</span><span class="token operator">/</span> nothing\n</code></pre>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#node-%E7%9A%84%E5%BC%82%E6%AD%A5%E6%80%A7%E6%9C%89%E4%BB%80%E4%B9%88%E7%89%B9%E7%82%B9">Node 的异步性有什么特点？</a></li><li><a href="#node-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B">Node 的事件模型</a></li><li><a href="#node-%E6%A8%A1%E5%9D%97%E5%8C%96">Node 模块化</a></li><li><a href="#eventemmiter-%E5%8E%9F%E7%90%86%E5%8F%8A%E5%8A%A8%E6%89%8B%E5%AE%9E%E8%B7%B5">EventEmmiter 原理及动手实践？</a></li></ol></nav>'
        } })
};