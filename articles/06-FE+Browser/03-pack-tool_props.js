import projectConfig from '/pagic.config.js';
var _a, _b;
export default {
    'prev': {
        "title": "前端工具链",
        "link": "articles/06-FE+Browser/02-fe-tooltain.html"
    },
    'next': {
        "title": "移动端 Web 开发",
        "link": "articles/06-FE+Browser/04-fe-mobile.html"
    },
    'sidebar': [
        {
            "title": "ESMAScript+ 面试宝典",
            "link": "articles/index.html",
            "pagePath": "articles/README.md"
        },
        {
            "title": "前端大事记",
            "link": "articles/es-timeline.html",
            "pagePath": "articles/es-timeline.md"
        },
        {
            "title": "ES 方向 & 谁在招人？",
            "link": "articles/es-direction.html",
            "pagePath": "articles/es-direction.md"
        },
        {
            "title": "职业 & 成长",
            "link": "articles/00-Profession/index.html",
            "pagePath": "articles/00-Profession/README.md"
        },
        {
            "link": "articles/01-Programming/index.html",
            "title": "编程基础",
            "children": [
                {
                    "title": "编程语言",
                    "link": "articles/01-Programming/00-language.html",
                    "pagePath": "articles/01-Programming/00-language.md"
                },
                {
                    "title": "操作系统",
                    "link": "articles/01-Programming/01-operating-system.html",
                    "pagePath": "articles/01-Programming/01-operating-system.md"
                },
                {
                    "title": "算法",
                    "link": "articles/01-Programming/02-algorithms.html",
                    "pagePath": "articles/01-Programming/02-algorithms.md"
                },
                {
                    "title": "设计模式",
                    "link": "articles/01-Programming/03-design-patterns.html",
                    "pagePath": "articles/01-Programming/03-design-patterns.md"
                },
                {
                    "title": "软件工程",
                    "link": "articles/01-Programming/04-software-engineering.html",
                    "pagePath": "articles/01-Programming/04-software-engineering.md"
                },
                {
                    "title": "测试",
                    "link": "articles/01-Programming/05-software-test.html",
                    "pagePath": "articles/01-Programming/05-software-test.md"
                },
                {
                    "title": "版本控制",
                    "link": "articles/01-Programming/06-version-control.html",
                    "pagePath": "articles/01-Programming/06-version-control.md"
                },
                {
                    "title": "计算机组成原理",
                    "link": "articles/01-Programming/07-computer-principles.html",
                    "pagePath": "articles/01-Programming/07-computer-principles.md"
                },
                {
                    "title": "编译原理",
                    "link": "articles/01-Programming/08-compilation-principle.html",
                    "pagePath": "articles/01-Programming/08-compilation-principle.md"
                }
            ],
            "pagePath": "articles/01-Programming/README.md"
        },
        {
            "link": "articles/02-ECMAScript+/index.html",
            "title": "ECMAScript+",
            "children": [
                {
                    "title": "ECMAScript",
                    "link": "articles/02-ECMAScript+/00-ecmascript.html",
                    "pagePath": "articles/02-ECMAScript+/00-ecmascript.md"
                },
                {
                    "title": "JavaScript 基础知识",
                    "link": "articles/02-ECMAScript+/01-javascript.html",
                    "pagePath": "articles/02-ECMAScript+/01-javascript.md"
                },
                {
                    "title": "TypeScript",
                    "link": "articles/02-ECMAScript+/02-typescript.html",
                    "pagePath": "articles/02-ECMAScript+/02-typescript.md"
                },
                {
                    "title": "JavaScript 常见实战题",
                    "link": "articles/02-ECMAScript+/03-javascript-parctice.html",
                    "pagePath": "articles/02-ECMAScript+/03-javascript-parctice.md"
                }
            ],
            "pagePath": "articles/02-ECMAScript+/README.md"
        },
        {
            "link": "articles/03-HTML+CSS/index.html",
            "title": "HTML + CSS",
            "children": [
                {
                    "title": "HTML",
                    "link": "articles/03-HTML+CSS/00-html.html",
                    "pagePath": "articles/03-HTML+CSS/00-html.md"
                },
                {
                    "title": "CSS",
                    "link": "articles/03-HTML+CSS/01-css-design.html",
                    "pagePath": "articles/03-HTML+CSS/01-css-design.md"
                },
                {
                    "title": "HTML + CSS 实战",
                    "link": "articles/03-HTML+CSS/02-html-css-practice.html",
                    "pagePath": "articles/03-HTML+CSS/02-html-css-practice.md"
                },
                {
                    "title": "DOM + BOM",
                    "link": "articles/03-HTML+CSS/03-dom-bom.html",
                    "pagePath": "articles/03-HTML+CSS/03-dom-bom.md"
                }
            ],
            "pagePath": "articles/03-HTML+CSS/README.md"
        },
        {
            "link": "articles/04-Network+API/index.html",
            "title": "网络 + 前后端协作",
            "children": [
                {
                    "title": "网络",
                    "link": "articles/04-Network+API/00-network.html",
                    "pagePath": "articles/04-Network+API/00-network.md"
                },
                {
                    "title": "前后端协作",
                    "link": "articles/04-Network+API/01-fe-be-api.html",
                    "pagePath": "articles/04-Network+API/01-fe-be-api.md"
                },
                {
                    "title": "网络安全",
                    "link": "articles/04-Network+API/02-network-security.html",
                    "pagePath": "articles/04-Network+API/02-network-security.md"
                }
            ],
            "pagePath": "articles/04-Network+API/README.md"
        },
        {
            "link": "articles/05-V8+Runtime/index.html",
            "title": "V8 + JavaScript 运行时",
            "children": [
                {
                    "title": "V8",
                    "link": "articles/05-V8+Runtime/00-v8.html",
                    "pagePath": "articles/05-V8+Runtime/00-v8.md"
                },
                {
                    "title": "Node",
                    "link": "articles/05-V8+Runtime/01-node.html",
                    "pagePath": "articles/05-V8+Runtime/01-node.md"
                },
                {
                    "title": "Deno",
                    "link": "articles/05-V8+Runtime/02-deno.html",
                    "pagePath": "articles/05-V8+Runtime/02-deno.md"
                }
            ],
            "pagePath": "articles/05-V8+Runtime/README.md"
        },
        {
            "link": "articles/06-FE+Browser/index.html",
            "title": "前端应用开发 + 浏览器",
            "children": [
                {
                    "title": "浏览器",
                    "link": "articles/06-FE+Browser/00-browser.html",
                    "pagePath": "articles/06-FE+Browser/00-browser.md"
                },
                {
                    "title": "前端工程化",
                    "link": "articles/06-FE+Browser/01-fe-engineering.html",
                    "pagePath": "articles/06-FE+Browser/01-fe-engineering.md"
                },
                {
                    "title": "前端工具链",
                    "link": "articles/06-FE+Browser/02-fe-tooltain.html",
                    "pagePath": "articles/06-FE+Browser/02-fe-tooltain.md"
                },
                {
                    "title": "前端打包工具",
                    "link": "articles/06-FE+Browser/03-pack-tool.html",
                    "pagePath": "articles/06-FE+Browser/03-pack-tool.md"
                },
                {
                    "title": "移动端 Web 开发",
                    "link": "articles/06-FE+Browser/04-fe-mobile.html",
                    "pagePath": "articles/06-FE+Browser/04-fe-mobile.md"
                },
                {
                    "title": "React",
                    "link": "articles/06-FE+Browser/05-react.html",
                    "pagePath": "articles/06-FE+Browser/05-react.md"
                },
                {
                    "title": "Vue",
                    "link": "articles/06-FE+Browser/06-vue.html",
                    "pagePath": "articles/06-FE+Browser/06-vue.md"
                },
                {
                    "title": "iframe",
                    "link": "articles/06-FE+Browser/07-iframe.html",
                    "pagePath": "articles/06-FE+Browser/07-iframe.md"
                }
            ],
            "pagePath": "articles/06-FE+Browser/README.md"
        },
        {
            "link": "articles/07-BE+Server/index.html",
            "title": "后端应用开发 + 服务器",
            "children": [
                {
                    "title": "Linux + Nginx + 数据库",
                    "link": "articles/07-BE+Server/00-linux-nginx-database.html",
                    "pagePath": "articles/07-BE+Server/00-linux-nginx-database.md"
                },
                {
                    "title": "Node 框架",
                    "link": "articles/07-BE+Server/01-node-framework.html",
                    "pagePath": "articles/07-BE+Server/01-node-framework.md"
                }
            ],
            "pagePath": "articles/07-BE+Server/README.md"
        },
        {
            "title": "如何用 Markdown 绘制图片",
            "link": "articles/draw-in-markdown.html",
            "pagePath": "articles/draw-in-markdown.md"
        },
        {
            "title": "变更日志",
            "link": "articles/roadmap.html",
            "pagePath": "articles/roadmap.md"
        }
    ],
    config: { "root": "/", ...projectConfig, ...(_b = (_a = projectConfig.i18n) === null || _a === void 0 ? void 0 : _a.overrides) === null || _b === void 0 ? void 0 : _b['undefined'] },
    'pagePath': "articles/06-FE+Browser/03-pack-tool.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/06-FE+Browser/03-pack-tool.html",
    'title': "前端打包工具",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>前端打包工具</h1>\n<p>Webpack、Babel、Parcel、Rollup...</p>\n<h2 id="%E6%89%93%E5%8C%85%E5%9F%BA%E7%A1%80">打包基础<a class="anchor" href="#%E6%89%93%E5%8C%85%E5%9F%BA%E7%A1%80">§</a></h2>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF-dce-%E5%92%8C-tree-shaking">什么是 DCE 和 Tree Shaking？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-dce-%E5%92%8C-tree-shaking">§</a></h3>\n<ul>\n<li>DCE 是这样做的：直接把整个鸡蛋放到碗里搅拌做蛋糕，蛋糕做完后再慢慢的从里面挑出蛋壳；相反tree-shaking在开始阶段，就不会把蛋壳放进碗里，而是拿出蛋清和蛋黄放进碗里搅拌，蛋壳呢？蛋壳在一开始就已经丢进垃圾桶里了。</li>\n<li>tree-shaking 作为 rollup 的一个杀手级特性，能够利用 ES6 的静态引入规范，减少包的体积，避免不必要的代码引入。</li>\n<li>tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。这个术语和概念实际上是由 ES2015 模块打包工具 rollup 普及起来的。</li>\n<li>必须遵从的是 ES6 Module 规范</li>\n<li>Tree Shaking 的局限性：\n<ul>\n<li>对于未执行到的代码，单独使用 rollup 并不能移除，依然需要依赖 uglifyJs。</li>\n<li>对于依赖运行时才能确定是否会使用代码，tree-shaking 无法删除。</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpackgruntgulprollupparcel">Webpack/Grunt/Gulp/Rollup/Parcel？<a class="anchor" href="#webpackgruntgulprollupparcel">§</a></h3>\n<ul>\n<li>Webpack：\n<ul>\n<li>基于模块化打包的工具</li>\n<li>Webpack 把一切当成模块，当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。</li>\n<li>适用于大型复杂的前端站点构建，有强大的 loader 和插件生态。打包后的文件实际上就是一个立即执行函数，这个立即执行函数接收一个模块对象参数，其键为各个模块的路径，值为模块内容，立即执行函数内部则处理模块之间的引用，执行模块等，这种情况更适合文件依赖复杂的应用开发。</li>\n</ul>\n</li>\n<li>Grunt、Gulp：\n<ul>\n<li>基于任务运行的工具，会自佛那个执行指定的流水线任务，打造各种工作流。</li>\n<li>目前主流是用 npm script 代替 Grunt/Gulp 的工作流任务。</li>\n</ul>\n</li>\n<li>Rollup：\n<ul>\n<li>使用与基础库的打包，如 vue、d3 等。</li>\n<li>Rollup 就是将各个模块打包进一个文件中，并且通过 Tree-Shaking 来删除无用的代码，可以最大程度上降低代码体积。但是 Rollup 没有 Webpack 如此多的代码分割、按需加载等高级功能，并更聚焦于库的打包，因此更适合库的开发。</li>\n</ul>\n</li>\n<li>Parcel：\n<ul>\n<li>适用于简单的实验性项目，生态才刚刚建立起不久。</li>\n</ul>\n</li>\n</ul>\n<h2 id="webpack-%E5%9F%BA%E7%A1%80">Webpack 基础<a class="anchor" href="#webpack-%E5%9F%BA%E7%A1%80">§</a></h2>\n<h3 id="webpack-5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">Webpack 5 有哪些新特性？<a class="anchor" href="#webpack-5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h3>\n<blockquote>\n<p>参考资料：<a href="https://juejin.im/post/6882663278712094727">阔别两年，webpack 5 正式发布了！</a></p>\n</blockquote>\n<ul>\n<li>Webpack 5：\n<ul>\n<li>整体方向：\n<ul>\n<li>尝试用持久性缓存来提高构建性能。</li>\n<li>尝试用更好的 Tree Shaking 和代码生成来改善包大小。</li>\n<li>尝试改善与网络平台的兼容性。</li>\n<li>尝试在不引入任何破坏性变化的情况下，清理那些在实现 v4 功能时处于奇怪状态的内部结构。</li>\n<li>试图通过现在引入突破性的变化来为未来的功能做准备，尽可能长时间地保持在 v5 版本上。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>模块联邦：让代码直接在项目间利用 CDN 直接共享\n<ul>\n<li>早期共享模块的三种方式：\n<ul>\n<li>NPM 方式共享模块：抽离需要复用的模块为一个单独的 NPM 包。即使使用 Monorepo 可以一定程度解决重复安装和修改困难的问题，但依然需要走本地编译。</li>\n<li>UMD 方式共享模块：模块用 Webpack UMD 模式打包，并输出到其他项目中。最常见。缺点：包体积无法达到本地编译时的优化效果，且库之间容易冲突。</li>\n<li>微前端方式共享模块：分为子应用独立打包和整体应用一起打包。模块复用外，需额外关注样式冲突、生命周期管理。</li>\n</ul>\n</li>\n<li>模块联邦直接将一个应用的包应用于另一个应用，同时具备整体应用一起打包的公共依赖抽取能力。</li>\n<li>使用“中心应用”在线动态分发 Runtime 子模块，并不直接提供给用户使用。</li>\n</ul>\n</li>\n<li>使用持久化缓存提高构建性能。</li>\n<li>使用更好的算法和默认值改进长期缓存。</li>\n</ul>\n<h3 id="%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-loader">有哪些常见的 Webpack Loader？<a class="anchor" href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-loader">§</a></h3>\n<ul>\n<li><code>raw-loader</code>：加载文件原始内容（utf-8）。</li>\n<li><code>file-loader</code>：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)。</li>\n<li><code>url-loader</code>：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)。</li>\n<li><code>source-map-loader</code>：加载额外的 Source Map 文件，以方便断点调试。</li>\n<li><code>svg-inline-loader</code>：将压缩后的 SVG 内容注入代码中。</li>\n<li><code>image-loader</code>：加载并且压缩图片文件。</li>\n<li><code>json-loader</code> 加载 JSON 文件（默认包含）。</li>\n<li><code>handlebars-loader</code>: 将 Handlebars 模版编译成函数并返回。</li>\n<li><code>babel-loader</code>：把 ES6 转换成 ES5。</li>\n<li><code>ts-loader</code>: 将 TypeScript 转换成 JavaScript。</li>\n<li><code>awesome-typescript-loader</code>：将 TypeScript 转换成 JavaScript，性能优于 ts-loader。</li>\n<li><code>sass-loader</code>：将SCSS/SASS代码转换成CSS。</li>\n<li><code>css-loader</code>：加载 CSS，支持模块化、压缩、文件导入等特性。</li>\n<li><code>style-loader</code>：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。</li>\n<li><code>postcss-loader</code>：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀。</li>\n<li><code>eslint-loader</code>：通过 ESLint 检查 JavaScript 代码。</li>\n<li><code>tslint-loader</code>：通过 TSLint 检查 TypeScript 代码。</li>\n<li><code>mocha-loader</code>：加载 Mocha 测试用例的代码。</li>\n<li><code>coverjs-loader</code>：计算测试的覆盖率。</li>\n<li><code>vue-loader</code>：加载 Vue.js 单文件组件。</li>\n<li><code>i18n-loader</code>: 国际化。</li>\n<li><code>cache-loader</code>: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里。</li>\n</ul>\n<h3 id="%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-plugin">有哪些常见的 Webpack Plugin<a class="anchor" href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-plugin">§</a></h3>\n<ul>\n<li><code>define-plugin</code>：定义环境变量 (Webpack4 之后指定 mode 会自动配置)</li>\n<li><code>ignore-plugin</code>：忽略部分文件</li>\n<li><code>html-webpack-plugin</code>：简化 HTML 文件创建 (依赖于 html-loader)</li>\n<li><code>web-webpack-plugin</code>：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用</li>\n<li><code>uglifyjs-webpack-plugin</code>：不支持 ES6 压缩 (Webpack4 以前)</li>\n<li><code>terser-webpack-plugin</code>: 支持压缩 ES6 (Webpack4)</li>\n<li><code>webpack-parallel-uglify-plugin</code>: 多进程执行代码压缩，提升构建速度</li>\n<li><code>mini-css-extract-plugin</code>: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)</li>\n<li><code>serviceworker-webpack-plugin</code>：为网页应用增加离线缓存功能</li>\n<li><code>clean-webpack-plugin</code>: 目录清理</li>\n<li><code>ModuleConcatenationPlugin</code>: 开启 Scope Hoisting</li>\n<li><code>speed-measure-webpack-plugin</code>: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)</li>\n<li><code>webpack-bundle-analyzer</code>: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)</li>\n</ul>\n<h3 id="loader-%E5%92%8C-plugin-%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%8E%E5%AE%9E%E7%8E%B0">Loader 和 Plugin 的区别与实现？<a class="anchor" href="#loader-%E5%92%8C-plugin-%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%8E%E5%AE%9E%E7%8E%B0">§</a></h3>\n<p>Loader：</p>\n<ul>\n<li><code>Loader</code> 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。</li>\n<li><code>Loader</code> 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。</li>\n<li>编写 Loader 的思路：\n<ul>\n<li>Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。</li>\n<li>Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用</li>\n<li>Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据</li>\n<li>尽可能的异步化 Loader，如果计算量很小，同步也可以</li>\n<li>Loader 是无状态的，我们不应该在 Loader 中保留状态</li>\n<li>使用 loader-utils 和 schema-utils 为我们提供的实用工具</li>\n<li>加载本地 Loader 方法\n<ul>\n<li>Npm link</li>\n<li>ResolveLoader</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>Plugin：</p>\n<ul>\n<li><code>Plugin</code> 就是插件，基于事件流框架 <code>Tapable</code>，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。</li>\n<li><code>Plugin</code> 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。</li>\n<li>编写 Plugin 的思路：\n<ul>\n<li>Webpack 在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。</li>\n<li>compiler 暴露了和 Webpack 整个生命周期相关的钩子</li>\n<li>compilation 暴露了与模块和依赖有关的粒度更小的事件钩子</li>\n<li>插件需要在其原型上绑定apply方法，才能访问 compiler 实例</li>\n<li>传给每个插件的 compiler 和 compilation对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件</li>\n<li>找出合适的事件点去完成想要的功能\n<ul>\n<li>emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)</li>\n<li>watch-run 当依赖的文件发生变化时会触发</li>\n</ul>\n</li>\n<li>异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpack-%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B">Webpack 构建流程？<a class="anchor" href="#webpack-%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B">§</a></h3>\n<p>Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：</p>\n<ul>\n<li>初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。</li>\n<li>开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。</li>\n<li>确定入口：根据配置中的 entry 找出所有的入口文件。</li>\n<li>编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。</li>\n<li>完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。</li>\n<li>输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。</li>\n<li>输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。</li>\n</ul>\n<p>在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。</p>\n<h3 id="webpack-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E5%8F%AF%E8%A7%86%E5%8C%96%E5%88%86%E6%9E%90">Webpack 如何进行可视化分析？<a class="anchor" href="#webpack-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E5%8F%AF%E8%A7%86%E5%8C%96%E5%88%86%E6%9E%90">§</a></h3>\n<ul>\n<li>VSCode 插件 <code>Import Cost</code></li>\n<li><code>bundlesize</code> 工具包</li>\n<li>使用 <code>webpack-bundle-analyzer</code> 生成 <code>bundle</code> 的模块组成图</li>\n<li><code>speed-measure-webpack-plugin</code></li>\n<li><code>webpack-bundle-analyzer</code></li>\n</ul>\n<h2 id="webpack-%E8%BF%9B%E9%98%B6">Webpack 进阶<a class="anchor" href="#webpack-%E8%BF%9B%E9%98%B6">§</a></h2>\n<h3 id="webpack-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%B5%81%E7%94%9F%E6%98%8E%E5%91%A8%E6%9C%9F%E5%92%8C-tapabel">Webpack 的事件流、生明周期和 Tapabel？<a class="anchor" href="#webpack-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%B5%81%E7%94%9F%E6%98%8E%E5%91%A8%E6%9C%9F%E5%92%8C-tapabel">§</a></h3>\n<ul>\n<li>Webpack 本质上一种基于事件流的编程范例，其实就是一系列的插件运行。</li>\n<li>Webpack 主要使用 Compiler 和 Compilation 两个类来控制 Webpack 的整个生命周期。他们都继承了 Tapabel 并且通过 Tapabel 来注册了生命周期中的每一个流程需要触发的事件。</li>\n<li>Tapabel 是一个类似于 Node.js 的 EventEmitter 的库，主要是控制钩子函数的发布与订阅，是 Webpack 插件系统的大管家。</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">SyncHook</span><span class="token punctuation">,</span>                   <span class="token comment">// 同步钩子</span>\n    <span class="token maybe-class-name">SyncBailHook</span><span class="token punctuation">,</span>               <span class="token comment">// 同步熔断钩子</span>\n    <span class="token maybe-class-name">SyncWaterfallHook</span><span class="token punctuation">,</span>          <span class="token comment">// 同步流水钩子</span>\n    <span class="token maybe-class-name">SyncLoopHook</span><span class="token punctuation">,</span>               <span class="token comment">// 同步循环钩子</span>\n    <span class="token maybe-class-name">AsyncParalleHook</span><span class="token punctuation">,</span>           <span class="token comment">// 异步并发钩子</span>\n    <span class="token maybe-class-name">AsyncParallelBailHook</span><span class="token punctuation">,</span>      <span class="token comment">// 异步并发熔断钩子</span>\n    <span class="token maybe-class-name">AsyncSeriesHook</span><span class="token punctuation">,</span>            <span class="token comment">// 异步串行钩子</span>\n    <span class="token maybe-class-name">AsyncSeriesBailHook</span><span class="token punctuation">,</span>        <span class="token comment">// 异步串行熔断钩子</span>\n    <span class="token maybe-class-name">AsyncSeriesWaterfallHook</span>     <span class="token comment">// 异步串行流水钩子</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"tapable"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="webpack-%E7%9A%84-hmr-%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86">Webpack 的 HMR 热更新原理<a class="anchor" href="#webpack-%E7%9A%84-hmr-%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86">§</a></h3>\n<ul>\n<li><code>Webpack</code> 的热更新又称热替换（<code>Hot Module Replacement</code>），缩写为 <code>HMR</code>。</li>\n<li>为什么需要 HMR：\n<ul>\n<li>Webapck HMR 不会刷新浏览器，而是运行时对模块进行热替换，保证了应用状态不会丢失，提升了开发效率。</li>\n<li>自动监听、自动打包、自动刷新页面。</li>\n<li>HMR 兼容市面上大多前端框架或库。</li>\n</ul>\n</li>\n<li>HMR 的流程：\n<ul>\n<li>HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)。</li>\n<li>实际上 WDS 与浏览器之间维护了一个 <code>Websocket</code>，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。</li>\n<li>客户端对比出差异后会向 WDS 发起 <code>Ajax</code> 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 <code>jsonp</code> 请求获取该chunk的增量更新。</li>\n<li>后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 <code>HotModulePlugin</code> 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像<code>react-hot-loader</code> 和 <code>vue-loader</code> 都是借助这些 API 实现 HMR。</li>\n</ul>\n</li>\n<li>流程：\n<ul>\n<li>第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文 件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。</li>\n<li>第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 webpack- dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监 控，并且告诉 webpack，将代码打包到内存中。</li>\n<li>第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当 我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静态文件 的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。</li>\n<li>第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs(webpack-dev-server 的依赖)在浏览器 端和服务端之间建立一个 websocket ⻓连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也 包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递 的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。</li>\n<li>webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。</li>\n<li>HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块 的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步 骤。</li>\n<li>而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是 否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。</li>\n<li>最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpack-%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">Webpack 构建速度如何提高？<a class="anchor" href="#webpack-%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">§</a></h3>\n<ul>\n<li>使用 <code>高版本</code> 的 Webpack 和 Node.js</li>\n<li><code>多进程/多实例构建</code>：HappyPack(不维护了)、thread-loader</li>\n<li><code>压缩代码</code>\n<ul>\n<li>多进程并行压缩\n<ul>\n<li>webpack-paralle-uglify-plugin</li>\n<li>uglifyjs-webpack-plugin 开启 parallel 参数 (不支持ES6)</li>\n<li>terser-webpack-plugin 开启 parallel 参数</li>\n</ul>\n</li>\n<li>通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。</li>\n</ul>\n</li>\n<li><code>图片压缩</code>\n<ul>\n<li>使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)</li>\n<li>配置 image-webpack-loader</li>\n</ul>\n</li>\n<li><code>缩小打包作用域</code>：\n<ul>\n<li>exclude/include (确定 loader 规则范围)</li>\n<li>resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)</li>\n<li>resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)</li>\n<li>resolve.extensions 尽可能减少后缀尝试的可能性</li>\n<li>noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)</li>\n<li>IgnorePlugin (完全排除模块)</li>\n<li>合理使用alias</li>\n</ul>\n</li>\n<li><code>提取页面公共资源</code>：\n<ul>\n<li>基础包分离：\n<ul>\n<li>使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中</li>\n<li>使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>DLL</code>：\n<ul>\n<li>使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。</li>\n<li>HashedModuleIdsPlugin 可以解决模块数字id问题</li>\n</ul>\n</li>\n<li><code>充分利用缓存提升二次构建速度</code>：\n<ul>\n<li>babel-loader 开启缓存</li>\n<li>terser-webpack-plugin 开启缓存</li>\n<li>使用 cache-loader 或者 hard-source-webpack-plugin</li>\n</ul>\n</li>\n<li><code>Tree shaking</code>\n<ul>\n<li>打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的bundle中去掉(只能对ES6 Modlue生效) 开发中尽可能使用ES6 Module的模块，提高tree shaking效率</li>\n<li>禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking</li>\n<li>使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码\n<ul>\n<li>purgecss-webpack-plugin 和 mini-css-extract-plugin配合使用(建议)</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>Scope hoisting</code>\n<ul>\n<li>构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突</li>\n<li>必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法</li>\n</ul>\n</li>\n<li><code>动态Polyfill</code>\n<ul>\n<li>建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护。 (部分国内奇葩浏览器UA可能无法识别，但可以降级返回所需全部polyfill)</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpack-%E6%89%93%E5%8C%85%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">Webpack 打包速度如何提高？<a class="anchor" href="#webpack-%E6%89%93%E5%8C%85%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">§</a></h3>\n<ul>\n<li>HappyPack、Cache-loader、排除 node_modules、多线程压缩甚至可以采用分布式编译</li>\n</ul>\n<h2 id="babel">Babel<a class="anchor" href="#babel">§</a></h2>\n<h3 id="babel-%E7%9A%84%E5%8E%9F%E7%90%86">Babel 的原理？<a class="anchor" href="#babel-%E7%9A%84%E5%8E%9F%E7%90%86">§</a></h3>\n<ul>\n<li>\n<p>Babel 转义过程的三个阶段：</p>\n<ul>\n<li>解析 Parse：将代码解析生成抽象预发树（AST），即词法分析与语法分析的过程。</li>\n<li>转换 Transform：对于 AST 进行变换的一系列操作，babel 接受到的 AST 通过 babel-traverse 对其进行遍历，在此过程中进行添加、更新及移除等操作。</li>\n<li>生成 Generate：将变换后的 AST 再转换为 JS 代码，使用到的模块是 babel-generator。</li>\n</ul>\n</li>\n<li>\n<p>使用 Babel：</p>\n<ul>\n<li>Babel 是一个通用的多用途 JavaScript 编译器。通过 Babel 你可以使用（并创建）下一代的 JavaScript，以及下一代的 JavaScript 工具。在得到 JavaScript 新特性广泛普及之前，Babel 能够让你提前（甚至数年）使用它们。</li>\n<li>ES6 代码输入 -&gt; babylon 进行解析 -&gt; 得到 AST -&gt; plugin 用 babel-traverse 包对 AST 树进行遍历转译 -&gt; 得到新的 AST 树 -&gt; 用 babel-generator 通过 AST 树生成 ES5 代码。</li>\n<li>babel 只是转译新标准引入的新语法（箭头函数），而新标准引入的新原生对象以及部分对象新增的原型方法（Proxy、Set），需要 polyfill</li>\n<li>转义：“源码到源码”编译</li>\n</ul>\n</li>\n<li>\n<p>为 Babel 编写插件：</p>\n<ul>\n<li>Babel 解析源码为成 AST，然后插件更改 AST，最后由 Babel 输出代码。</li>\n</ul>\n</li>\n</ul>\n<h3 id="babel-%E5%92%8C-typescript-%E7%9A%84%E5%BC%82%E5%90%8C">Babel 和 TypeScript 的异同？<a class="anchor" href="#babel-%E5%92%8C-typescript-%E7%9A%84%E5%BC%82%E5%90%8C">§</a></h3>\n<ul>\n<li>相同：\n<ul>\n<li>都可以将更高前沿的 JavaScript 新特性编译为普通版本的 JavaScript 代码从而兼容各大浏览器。</li>\n</ul>\n</li>\n<li>不同：\n<ul>\n<li>TypeScript 只专注 TS 语言本身的新特性，Babel 可以通过各种自定义的插件编译各种主流标准下的 JavaScript 代码。</li>\n<li></li>\n</ul>\n</li>\n<li>联姻：\n<ul>\n<li>Babel 推出了编译 TypeScript 的插件：@babel/preset-typescript</li>\n</ul>\n</li>\n</ul>\n<h3 id="babel-7-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">Babel 7 的新特性？<a class="anchor" href="#babel-7-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h3>\n<h3 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h3>\n<ul>\n<li><a href="https://juejin.im/post/6844904094281236487">https://juejin.im/post/6844904094281236487</a></li>\n</ul>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement(Ga, { id: "UA-169223577-1" }),
        React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u524D\u7AEF\u6253\u5305\u5DE5\u5177"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>Webpack、Babel、Parcel、Rollup...</p>\n<h2 id="%E6%89%93%E5%8C%85%E5%9F%BA%E7%A1%80">打包基础<a class="anchor" href="#%E6%89%93%E5%8C%85%E5%9F%BA%E7%A1%80">§</a></h2>\n<h3 id="%E4%BB%80%E4%B9%88%E6%98%AF-dce-%E5%92%8C-tree-shaking">什么是 DCE 和 Tree Shaking？<a class="anchor" href="#%E4%BB%80%E4%B9%88%E6%98%AF-dce-%E5%92%8C-tree-shaking">§</a></h3>\n<ul>\n<li>DCE 是这样做的：直接把整个鸡蛋放到碗里搅拌做蛋糕，蛋糕做完后再慢慢的从里面挑出蛋壳；相反tree-shaking在开始阶段，就不会把蛋壳放进碗里，而是拿出蛋清和蛋黄放进碗里搅拌，蛋壳呢？蛋壳在一开始就已经丢进垃圾桶里了。</li>\n<li>tree-shaking 作为 rollup 的一个杀手级特性，能够利用 ES6 的静态引入规范，减少包的体积，避免不必要的代码引入。</li>\n<li>tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES2015 模块语法的 静态结构 特性，例如 import 和 export。这个术语和概念实际上是由 ES2015 模块打包工具 rollup 普及起来的。</li>\n<li>必须遵从的是 ES6 Module 规范</li>\n<li>Tree Shaking 的局限性：\n<ul>\n<li>对于未执行到的代码，单独使用 rollup 并不能移除，依然需要依赖 uglifyJs。</li>\n<li>对于依赖运行时才能确定是否会使用代码，tree-shaking 无法删除。</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpackgruntgulprollupparcel">Webpack/Grunt/Gulp/Rollup/Parcel？<a class="anchor" href="#webpackgruntgulprollupparcel">§</a></h3>\n<ul>\n<li>Webpack：\n<ul>\n<li>基于模块化打包的工具</li>\n<li>Webpack 把一切当成模块，当 Webpack 处理应用程序时，它会递归地构建一个依赖关系图，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。</li>\n<li>适用于大型复杂的前端站点构建，有强大的 loader 和插件生态。打包后的文件实际上就是一个立即执行函数，这个立即执行函数接收一个模块对象参数，其键为各个模块的路径，值为模块内容，立即执行函数内部则处理模块之间的引用，执行模块等，这种情况更适合文件依赖复杂的应用开发。</li>\n</ul>\n</li>\n<li>Grunt、Gulp：\n<ul>\n<li>基于任务运行的工具，会自佛那个执行指定的流水线任务，打造各种工作流。</li>\n<li>目前主流是用 npm script 代替 Grunt/Gulp 的工作流任务。</li>\n</ul>\n</li>\n<li>Rollup：\n<ul>\n<li>使用与基础库的打包，如 vue、d3 等。</li>\n<li>Rollup 就是将各个模块打包进一个文件中，并且通过 Tree-Shaking 来删除无用的代码，可以最大程度上降低代码体积。但是 Rollup 没有 Webpack 如此多的代码分割、按需加载等高级功能，并更聚焦于库的打包，因此更适合库的开发。</li>\n</ul>\n</li>\n<li>Parcel：\n<ul>\n<li>适用于简单的实验性项目，生态才刚刚建立起不久。</li>\n</ul>\n</li>\n</ul>\n<h2 id="webpack-%E5%9F%BA%E7%A1%80">Webpack 基础<a class="anchor" href="#webpack-%E5%9F%BA%E7%A1%80">§</a></h2>\n<h3 id="webpack-5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">Webpack 5 有哪些新特性？<a class="anchor" href="#webpack-5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h3>\n<blockquote>\n<p>参考资料：<a href="https://juejin.im/post/6882663278712094727">阔别两年，webpack 5 正式发布了！</a></p>\n</blockquote>\n<ul>\n<li>Webpack 5：\n<ul>\n<li>整体方向：\n<ul>\n<li>尝试用持久性缓存来提高构建性能。</li>\n<li>尝试用更好的 Tree Shaking 和代码生成来改善包大小。</li>\n<li>尝试改善与网络平台的兼容性。</li>\n<li>尝试在不引入任何破坏性变化的情况下，清理那些在实现 v4 功能时处于奇怪状态的内部结构。</li>\n<li>试图通过现在引入突破性的变化来为未来的功能做准备，尽可能长时间地保持在 v5 版本上。</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>模块联邦：让代码直接在项目间利用 CDN 直接共享\n<ul>\n<li>早期共享模块的三种方式：\n<ul>\n<li>NPM 方式共享模块：抽离需要复用的模块为一个单独的 NPM 包。即使使用 Monorepo 可以一定程度解决重复安装和修改困难的问题，但依然需要走本地编译。</li>\n<li>UMD 方式共享模块：模块用 Webpack UMD 模式打包，并输出到其他项目中。最常见。缺点：包体积无法达到本地编译时的优化效果，且库之间容易冲突。</li>\n<li>微前端方式共享模块：分为子应用独立打包和整体应用一起打包。模块复用外，需额外关注样式冲突、生命周期管理。</li>\n</ul>\n</li>\n<li>模块联邦直接将一个应用的包应用于另一个应用，同时具备整体应用一起打包的公共依赖抽取能力。</li>\n<li>使用“中心应用”在线动态分发 Runtime 子模块，并不直接提供给用户使用。</li>\n</ul>\n</li>\n<li>使用持久化缓存提高构建性能。</li>\n<li>使用更好的算法和默认值改进长期缓存。</li>\n</ul>\n<h3 id="%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-loader">有哪些常见的 Webpack Loader？<a class="anchor" href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-loader">§</a></h3>\n<ul>\n<li><code>raw-loader</code>：加载文件原始内容（utf-8）。</li>\n<li><code>file-loader</code>：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)。</li>\n<li><code>url-loader</code>：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值会交给 file-loader 处理，小于阈值时返回文件 base64 形式编码 (处理图片和字体)。</li>\n<li><code>source-map-loader</code>：加载额外的 Source Map 文件，以方便断点调试。</li>\n<li><code>svg-inline-loader</code>：将压缩后的 SVG 内容注入代码中。</li>\n<li><code>image-loader</code>：加载并且压缩图片文件。</li>\n<li><code>json-loader</code> 加载 JSON 文件（默认包含）。</li>\n<li><code>handlebars-loader</code>: 将 Handlebars 模版编译成函数并返回。</li>\n<li><code>babel-loader</code>：把 ES6 转换成 ES5。</li>\n<li><code>ts-loader</code>: 将 TypeScript 转换成 JavaScript。</li>\n<li><code>awesome-typescript-loader</code>：将 TypeScript 转换成 JavaScript，性能优于 ts-loader。</li>\n<li><code>sass-loader</code>：将SCSS/SASS代码转换成CSS。</li>\n<li><code>css-loader</code>：加载 CSS，支持模块化、压缩、文件导入等特性。</li>\n<li><code>style-loader</code>：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS。</li>\n<li><code>postcss-loader</code>：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀。</li>\n<li><code>eslint-loader</code>：通过 ESLint 检查 JavaScript 代码。</li>\n<li><code>tslint-loader</code>：通过 TSLint 检查 TypeScript 代码。</li>\n<li><code>mocha-loader</code>：加载 Mocha 测试用例的代码。</li>\n<li><code>coverjs-loader</code>：计算测试的覆盖率。</li>\n<li><code>vue-loader</code>：加载 Vue.js 单文件组件。</li>\n<li><code>i18n-loader</code>: 国际化。</li>\n<li><code>cache-loader</code>: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里。</li>\n</ul>\n<h3 id="%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-plugin">有哪些常见的 Webpack Plugin<a class="anchor" href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-plugin">§</a></h3>\n<ul>\n<li><code>define-plugin</code>：定义环境变量 (Webpack4 之后指定 mode 会自动配置)</li>\n<li><code>ignore-plugin</code>：忽略部分文件</li>\n<li><code>html-webpack-plugin</code>：简化 HTML 文件创建 (依赖于 html-loader)</li>\n<li><code>web-webpack-plugin</code>：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用</li>\n<li><code>uglifyjs-webpack-plugin</code>：不支持 ES6 压缩 (Webpack4 以前)</li>\n<li><code>terser-webpack-plugin</code>: 支持压缩 ES6 (Webpack4)</li>\n<li><code>webpack-parallel-uglify-plugin</code>: 多进程执行代码压缩，提升构建速度</li>\n<li><code>mini-css-extract-plugin</code>: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)</li>\n<li><code>serviceworker-webpack-plugin</code>：为网页应用增加离线缓存功能</li>\n<li><code>clean-webpack-plugin</code>: 目录清理</li>\n<li><code>ModuleConcatenationPlugin</code>: 开启 Scope Hoisting</li>\n<li><code>speed-measure-webpack-plugin</code>: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)</li>\n<li><code>webpack-bundle-analyzer</code>: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)</li>\n</ul>\n<h3 id="loader-%E5%92%8C-plugin-%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%8E%E5%AE%9E%E7%8E%B0">Loader 和 Plugin 的区别与实现？<a class="anchor" href="#loader-%E5%92%8C-plugin-%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%8E%E5%AE%9E%E7%8E%B0">§</a></h3>\n<p>Loader：</p>\n<ul>\n<li><code>Loader</code> 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。 因为 Webpack 只认识 JavaScript，所以 Loader 就成了翻译官，对其他类型的资源进行转译的预处理工作。</li>\n<li><code>Loader</code> 在 module.rules 中配置，作为模块的解析规则，类型为数组。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。</li>\n<li>编写 Loader 的思路：\n<ul>\n<li>Loader 支持链式调用，所以开发上需要严格遵循“单一职责”，每个 Loader 只负责自己需要负责的事情。</li>\n<li>Loader 运行在 Node.js 中，我们可以调用任意 Node.js 自带的 API 或者安装第三方模块进行调用</li>\n<li>Webpack 传给 Loader 的原内容都是 UTF-8 格式编码的字符串，当某些场景下 Loader 处理二进制文件时，需要通过 exports.raw = true 告诉 Webpack 该 Loader 是否需要二进制数据</li>\n<li>尽可能的异步化 Loader，如果计算量很小，同步也可以</li>\n<li>Loader 是无状态的，我们不应该在 Loader 中保留状态</li>\n<li>使用 loader-utils 和 schema-utils 为我们提供的实用工具</li>\n<li>加载本地 Loader 方法\n<ul>\n<li>Npm link</li>\n<li>ResolveLoader</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<p>Plugin：</p>\n<ul>\n<li><code>Plugin</code> 就是插件，基于事件流框架 <code>Tapable</code>，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。</li>\n<li><code>Plugin</code> 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。</li>\n<li>编写 Plugin 的思路：\n<ul>\n<li>Webpack 在运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在特定的阶段钩入想要添加的自定义功能。Webpack 的 Tapable 事件流机制保证了插件的有序性，使得整个系统扩展性良好。</li>\n<li>compiler 暴露了和 Webpack 整个生命周期相关的钩子</li>\n<li>compilation 暴露了与模块和依赖有关的粒度更小的事件钩子</li>\n<li>插件需要在其原型上绑定apply方法，才能访问 compiler 实例</li>\n<li>传给每个插件的 compiler 和 compilation对象都是同一个引用，若在一个插件中修改了它们身上的属性，会影响后面的插件</li>\n<li>找出合适的事件点去完成想要的功能\n<ul>\n<li>emit 事件发生时，可以读取到最终输出的资源、代码块、模块及其依赖，并进行修改(emit 事件是修改 Webpack 输出资源的最后时机)</li>\n<li>watch-run 当依赖的文件发生变化时会触发</li>\n</ul>\n</li>\n<li>异步的事件需要在插件处理完任务时调用回调函数通知 Webpack 进入下一个流程，不然会卡住</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpack-%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B">Webpack 构建流程？<a class="anchor" href="#webpack-%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B">§</a></h3>\n<p>Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：</p>\n<ul>\n<li>初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数。</li>\n<li>开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译。</li>\n<li>确定入口：根据配置中的 entry 找出所有的入口文件。</li>\n<li>编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理。</li>\n<li>完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系。</li>\n<li>输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会。</li>\n<li>输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。</li>\n</ul>\n<p>在以上过程中，Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。</p>\n<h3 id="webpack-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E5%8F%AF%E8%A7%86%E5%8C%96%E5%88%86%E6%9E%90">Webpack 如何进行可视化分析？<a class="anchor" href="#webpack-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E5%8F%AF%E8%A7%86%E5%8C%96%E5%88%86%E6%9E%90">§</a></h3>\n<ul>\n<li>VSCode 插件 <code>Import Cost</code></li>\n<li><code>bundlesize</code> 工具包</li>\n<li>使用 <code>webpack-bundle-analyzer</code> 生成 <code>bundle</code> 的模块组成图</li>\n<li><code>speed-measure-webpack-plugin</code></li>\n<li><code>webpack-bundle-analyzer</code></li>\n</ul>\n<h2 id="webpack-%E8%BF%9B%E9%98%B6">Webpack 进阶<a class="anchor" href="#webpack-%E8%BF%9B%E9%98%B6">§</a></h2>\n<h3 id="webpack-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%B5%81%E7%94%9F%E6%98%8E%E5%91%A8%E6%9C%9F%E5%92%8C-tapabel">Webpack 的事件流、生明周期和 Tapabel？<a class="anchor" href="#webpack-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%B5%81%E7%94%9F%E6%98%8E%E5%91%A8%E6%9C%9F%E5%92%8C-tapabel">§</a></h3>\n<ul>\n<li>Webpack 本质上一种基于事件流的编程范例，其实就是一系列的插件运行。</li>\n<li>Webpack 主要使用 Compiler 和 Compilation 两个类来控制 Webpack 的整个生命周期。他们都继承了 Tapabel 并且通过 Tapabel 来注册了生命周期中的每一个流程需要触发的事件。</li>\n<li>Tapabel 是一个类似于 Node.js 的 EventEmitter 的库，主要是控制钩子函数的发布与订阅，是 Webpack 插件系统的大管家。</li>\n</ul>\n<pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span>\n    <span class="token maybe-class-name">SyncHook</span><span class="token punctuation">,</span>                   <span class="token comment">// 同步钩子</span>\n    <span class="token maybe-class-name">SyncBailHook</span><span class="token punctuation">,</span>               <span class="token comment">// 同步熔断钩子</span>\n    <span class="token maybe-class-name">SyncWaterfallHook</span><span class="token punctuation">,</span>          <span class="token comment">// 同步流水钩子</span>\n    <span class="token maybe-class-name">SyncLoopHook</span><span class="token punctuation">,</span>               <span class="token comment">// 同步循环钩子</span>\n    <span class="token maybe-class-name">AsyncParalleHook</span><span class="token punctuation">,</span>           <span class="token comment">// 异步并发钩子</span>\n    <span class="token maybe-class-name">AsyncParallelBailHook</span><span class="token punctuation">,</span>      <span class="token comment">// 异步并发熔断钩子</span>\n    <span class="token maybe-class-name">AsyncSeriesHook</span><span class="token punctuation">,</span>            <span class="token comment">// 异步串行钩子</span>\n    <span class="token maybe-class-name">AsyncSeriesBailHook</span><span class="token punctuation">,</span>        <span class="token comment">// 异步串行熔断钩子</span>\n    <span class="token maybe-class-name">AsyncSeriesWaterfallHook</span>     <span class="token comment">// 异步串行流水钩子</span>\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"tapable"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n<h3 id="webpack-%E7%9A%84-hmr-%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86">Webpack 的 HMR 热更新原理<a class="anchor" href="#webpack-%E7%9A%84-hmr-%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86">§</a></h3>\n<ul>\n<li><code>Webpack</code> 的热更新又称热替换（<code>Hot Module Replacement</code>），缩写为 <code>HMR</code>。</li>\n<li>为什么需要 HMR：\n<ul>\n<li>Webapck HMR 不会刷新浏览器，而是运行时对模块进行热替换，保证了应用状态不会丢失，提升了开发效率。</li>\n<li>自动监听、自动打包、自动刷新页面。</li>\n<li>HMR 兼容市面上大多前端框架或库。</li>\n</ul>\n</li>\n<li>HMR 的流程：\n<ul>\n<li>HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)。</li>\n<li>实际上 WDS 与浏览器之间维护了一个 <code>Websocket</code>，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。</li>\n<li>客户端对比出差异后会向 WDS 发起 <code>Ajax</code> 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 <code>jsonp</code> 请求获取该chunk的增量更新。</li>\n<li>后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 <code>HotModulePlugin</code> 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像<code>react-hot-loader</code> 和 <code>vue-loader</code> 都是借助这些 API 实现 HMR。</li>\n</ul>\n</li>\n<li>流程：\n<ul>\n<li>第一步，在 webpack 的 watch 模式下，文件系统中某一个文件发生修改，webpack 监听到文件变化，根据配置文 件对模块重新编译打包，并将打包后的代码通过简单的 JavaScript 对象保存在内存中。</li>\n<li>第二步是 webpack-dev-server 和 webpack 之间的接口交互，而在这一步，主要是 dev-server 的中间件 webpack- dev-middleware 和 webpack 之间的交互，webpack-dev-middleware 调用 webpack 暴露的 API对代码变化进行监 控，并且告诉 webpack，将代码打包到内存中。</li>\n<li>第三步是 webpack-dev-server 对文件变化的一个监控，这一步不同于第一步，并不是监控代码变化重新打包。当 我们在配置文件中配置了devServer.watchContentBase 为 true 的时候，Server 会监听这些配置文件夹中静态文件 的变化，变化后会通知浏览器端对应用进行 live reload。注意，这儿是浏览器刷新，和 HMR 是两个概念。</li>\n<li>第四步也是 webpack-dev-server 代码的工作，该步骤主要是通过 sockjs(webpack-dev-server 的依赖)在浏览器 端和服务端之间建立一个 websocket ⻓连接，将 webpack 编译打包的各个阶段的状态信息告知浏览器端，同时也 包括第三步中 Server 监听静态文件变化的信息。浏览器端根据这些 socket 消息进行不同的操作。当然服务端传递 的最主要信息还是新模块的 hash 值，后面的步骤根据这一 hash 值来进行模块热替换。</li>\n<li>webpack-dev-server/client 端并不能够请求更新的代码，也不会执行热更模块操作，而把这些工作又交回给了 webpack，webpack/hot/dev-server 的工作就是根据 webpack-dev-server/client 传给它的信息以及 dev-server 的配置决定是刷新浏览器呢还是进行模块热更新。当然如果仅仅是刷新浏览器，也就没有后面那些步骤了。</li>\n<li>HotModuleReplacement.runtime 是客户端 HMR 的中枢，它接收到上一步传递给他的新模块的 hash 值，它通过 JsonpMainTemplate.runtime 向 server 端发送 Ajax 请求，服务端返回一个 json，该 json 包含了所有要更新的模块 的 hash 值，获取到更新列表后，该模块再次通过 jsonp 请求，获取到最新的模块代码。这就是上图中 7、8、9 步 骤。</li>\n<li>而第 10 步是决定 HMR 成功与否的关键步骤，在该步骤中，HotModulePlugin 将会对新旧模块进行对比，决定是 否更新模块，在决定更新模块后，检查模块之间的依赖关系，更新模块的同时更新模块间的依赖引用。</li>\n<li>最后一步，当 HMR 失败后，回退到 live reload 操作，也就是进行浏览器刷新来获取最新打包代码。</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpack-%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">Webpack 构建速度如何提高？<a class="anchor" href="#webpack-%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">§</a></h3>\n<ul>\n<li>使用 <code>高版本</code> 的 Webpack 和 Node.js</li>\n<li><code>多进程/多实例构建</code>：HappyPack(不维护了)、thread-loader</li>\n<li><code>压缩代码</code>\n<ul>\n<li>多进程并行压缩\n<ul>\n<li>webpack-paralle-uglify-plugin</li>\n<li>uglifyjs-webpack-plugin 开启 parallel 参数 (不支持ES6)</li>\n<li>terser-webpack-plugin 开启 parallel 参数</li>\n</ul>\n</li>\n<li>通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。</li>\n</ul>\n</li>\n<li><code>图片压缩</code>\n<ul>\n<li>使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)</li>\n<li>配置 image-webpack-loader</li>\n</ul>\n</li>\n<li><code>缩小打包作用域</code>：\n<ul>\n<li>exclude/include (确定 loader 规则范围)</li>\n<li>resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)</li>\n<li>resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)</li>\n<li>resolve.extensions 尽可能减少后缀尝试的可能性</li>\n<li>noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)</li>\n<li>IgnorePlugin (完全排除模块)</li>\n<li>合理使用alias</li>\n</ul>\n</li>\n<li><code>提取页面公共资源</code>：\n<ul>\n<li>基础包分离：\n<ul>\n<li>使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中</li>\n<li>使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>DLL</code>：\n<ul>\n<li>使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。</li>\n<li>HashedModuleIdsPlugin 可以解决模块数字id问题</li>\n</ul>\n</li>\n<li><code>充分利用缓存提升二次构建速度</code>：\n<ul>\n<li>babel-loader 开启缓存</li>\n<li>terser-webpack-plugin 开启缓存</li>\n<li>使用 cache-loader 或者 hard-source-webpack-plugin</li>\n</ul>\n</li>\n<li><code>Tree shaking</code>\n<ul>\n<li>打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的bundle中去掉(只能对ES6 Modlue生效) 开发中尽可能使用ES6 Module的模块，提高tree shaking效率</li>\n<li>禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking</li>\n<li>使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码\n<ul>\n<li>purgecss-webpack-plugin 和 mini-css-extract-plugin配合使用(建议)</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>Scope hoisting</code>\n<ul>\n<li>构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突</li>\n<li>必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法</li>\n</ul>\n</li>\n<li><code>动态Polyfill</code>\n<ul>\n<li>建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护。 (部分国内奇葩浏览器UA可能无法识别，但可以降级返回所需全部polyfill)</li>\n</ul>\n</li>\n</ul>\n<h3 id="webpack-%E6%89%93%E5%8C%85%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">Webpack 打包速度如何提高？<a class="anchor" href="#webpack-%E6%89%93%E5%8C%85%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">§</a></h3>\n<ul>\n<li>HappyPack、Cache-loader、排除 node_modules、多线程压缩甚至可以采用分布式编译</li>\n</ul>\n<h2 id="babel">Babel<a class="anchor" href="#babel">§</a></h2>\n<h3 id="babel-%E7%9A%84%E5%8E%9F%E7%90%86">Babel 的原理？<a class="anchor" href="#babel-%E7%9A%84%E5%8E%9F%E7%90%86">§</a></h3>\n<ul>\n<li>\n<p>Babel 转义过程的三个阶段：</p>\n<ul>\n<li>解析 Parse：将代码解析生成抽象预发树（AST），即词法分析与语法分析的过程。</li>\n<li>转换 Transform：对于 AST 进行变换的一系列操作，babel 接受到的 AST 通过 babel-traverse 对其进行遍历，在此过程中进行添加、更新及移除等操作。</li>\n<li>生成 Generate：将变换后的 AST 再转换为 JS 代码，使用到的模块是 babel-generator。</li>\n</ul>\n</li>\n<li>\n<p>使用 Babel：</p>\n<ul>\n<li>Babel 是一个通用的多用途 JavaScript 编译器。通过 Babel 你可以使用（并创建）下一代的 JavaScript，以及下一代的 JavaScript 工具。在得到 JavaScript 新特性广泛普及之前，Babel 能够让你提前（甚至数年）使用它们。</li>\n<li>ES6 代码输入 -&gt; babylon 进行解析 -&gt; 得到 AST -&gt; plugin 用 babel-traverse 包对 AST 树进行遍历转译 -&gt; 得到新的 AST 树 -&gt; 用 babel-generator 通过 AST 树生成 ES5 代码。</li>\n<li>babel 只是转译新标准引入的新语法（箭头函数），而新标准引入的新原生对象以及部分对象新增的原型方法（Proxy、Set），需要 polyfill</li>\n<li>转义：“源码到源码”编译</li>\n</ul>\n</li>\n<li>\n<p>为 Babel 编写插件：</p>\n<ul>\n<li>Babel 解析源码为成 AST，然后插件更改 AST，最后由 Babel 输出代码。</li>\n</ul>\n</li>\n</ul>\n<h3 id="babel-%E5%92%8C-typescript-%E7%9A%84%E5%BC%82%E5%90%8C">Babel 和 TypeScript 的异同？<a class="anchor" href="#babel-%E5%92%8C-typescript-%E7%9A%84%E5%BC%82%E5%90%8C">§</a></h3>\n<ul>\n<li>相同：\n<ul>\n<li>都可以将更高前沿的 JavaScript 新特性编译为普通版本的 JavaScript 代码从而兼容各大浏览器。</li>\n</ul>\n</li>\n<li>不同：\n<ul>\n<li>TypeScript 只专注 TS 语言本身的新特性，Babel 可以通过各种自定义的插件编译各种主流标准下的 JavaScript 代码。</li>\n<li></li>\n</ul>\n</li>\n<li>联姻：\n<ul>\n<li>Babel 推出了编译 TypeScript 的插件：@babel/preset-typescript</li>\n</ul>\n</li>\n</ul>\n<h3 id="babel-7-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">Babel 7 的新特性？<a class="anchor" href="#babel-7-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">§</a></h3>\n<h3 id="%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料<a class="anchor" href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">§</a></h3>\n<ul>\n<li><a href="https://juejin.im/post/6844904094281236487">https://juejin.im/post/6844904094281236487</a></li>\n</ul>'
        } }),
    'contentHasKatex': false,
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol><li><a href="#%E6%89%93%E5%8C%85%E5%9F%BA%E7%A1%80">打包基础</a><ol><li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF-dce-%E5%92%8C-tree-shaking">什么是 DCE 和 Tree Shaking？</a></li><li><a href="#webpackgruntgulprollupparcel">Webpack/Grunt/Gulp/Rollup/Parcel？</a></li></ol></li><li><a href="#webpack-%E5%9F%BA%E7%A1%80">Webpack 基础</a><ol><li><a href="#webpack-5-%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7">Webpack 5 有哪些新特性？</a></li><li><a href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-loader">有哪些常见的 Webpack Loader？</a></li><li><a href="#%E6%9C%89%E5%93%AA%E4%BA%9B%E5%B8%B8%E8%A7%81%E7%9A%84-webpack-plugin">有哪些常见的 Webpack Plugin</a></li><li><a href="#loader-%E5%92%8C-plugin-%E7%9A%84%E5%8C%BA%E5%88%AB%E4%B8%8E%E5%AE%9E%E7%8E%B0">Loader 和 Plugin 的区别与实现？</a></li><li><a href="#webpack-%E6%9E%84%E5%BB%BA%E6%B5%81%E7%A8%8B">Webpack 构建流程？</a></li><li><a href="#webpack-%E5%A6%82%E4%BD%95%E8%BF%9B%E8%A1%8C%E5%8F%AF%E8%A7%86%E5%8C%96%E5%88%86%E6%9E%90">Webpack 如何进行可视化分析？</a></li></ol></li><li><a href="#webpack-%E8%BF%9B%E9%98%B6">Webpack 进阶</a><ol><li><a href="#webpack-%E7%9A%84%E4%BA%8B%E4%BB%B6%E6%B5%81%E7%94%9F%E6%98%8E%E5%91%A8%E6%9C%9F%E5%92%8C-tapabel">Webpack 的事件流、生明周期和 Tapabel？</a></li><li><a href="#webpack-%E7%9A%84-hmr-%E7%83%AD%E6%9B%B4%E6%96%B0%E5%8E%9F%E7%90%86">Webpack 的 HMR 热更新原理</a></li><li><a href="#webpack-%E6%9E%84%E5%BB%BA%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">Webpack 构建速度如何提高？</a></li><li><a href="#webpack-%E6%89%93%E5%8C%85%E9%80%9F%E5%BA%A6%E5%A6%82%E4%BD%95%E6%8F%90%E9%AB%98">Webpack 打包速度如何提高？</a></li></ol></li><li><a href="#babel">Babel</a><ol><li><a href="#babel-%E7%9A%84%E5%8E%9F%E7%90%86">Babel 的原理？</a></li><li><a href="#babel-%E5%92%8C-typescript-%E7%9A%84%E5%BC%82%E5%90%8C">Babel 和 TypeScript 的异同？</a></li><li><a href="#babel-7-%E7%9A%84%E6%96%B0%E7%89%B9%E6%80%A7">Babel 7 的新特性？</a></li><li><a href="#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99">参考资料</a></li></ol></li></ol></nav>'
        } }),
    'date': "2020-10-25T07:04:16.000Z",
    'updated': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ]
};
