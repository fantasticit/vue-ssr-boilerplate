<template>
  <div class="container">
    <h1>项目说明</h1>
<article class="markdown-body entry-content"><h1><a id="user-content-vue-ssr-boilerplate" class="anchor" aria-hidden="true" href="#vue-ssr-boilerplate"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>vue-ssr-boilerplate</h1>
<h3><a id="user-content-a-boilerplate-for-developing-server-side-render-vuejs-application" class="anchor" aria-hidden="true" href="#a-boilerplate-for-developing-server-side-render-vuejs-application"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A boilerplate for developing Server Side Render Vue.js Application</h3>
<h2><a id="user-content-1-服务端渲染介绍" class="anchor" aria-hidden="true" href="#1-服务端渲染介绍"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. 服务端渲染介绍</h2>
<p>参考文章：<a href="https://ssr.vuejs.org" rel="nofollow">Vue SSR 渲染指南</a></p>
<h2><a id="user-content-2-如何使用" class="anchor" aria-hidden="true" href="#2-如何使用"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. 如何使用</h2>
<p>使用的前提是安装依赖,即: <code>npm i</code>.</p>
<h3><a id="user-content-21-开发模式" class="anchor" aria-hidden="true" href="#21-开发模式"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.1 开发模式</h3>
<p>执行 <code>npm run dev</code> 即可.</p>
<h3><a id="user-content-22-生产模式" class="anchor" aria-hidden="true" href="#22-生产模式"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2.2 生产模式</h3>
<p>生产模式,首先进行打包,然后再运行相关服务,即:</p>
<div class="highlight highlight-source-shell"><pre>npm run build <span class="pl-k">&amp;&amp;</span> npm start <span class="pl-c"><span class="pl-c">#</span> 如果线上使用 pm2,也可以用 npm run pm2</span></pre></div>
<p>生产模式如果要启用 <code>service-worker(pwa)</code>,首先确保部署时采用了 <code>https</code> 协议,然后修改 <code>build/webpack.client.conf.js</code> 中 SWPlugin 相关配置,例如:</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">new</span> <span class="pl-en">SWPrecachePlugin</span>({
  cacheId<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>vue-ssr-justemit<span class="pl-pds">'</span></span>,
  filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>service-worker.js<span class="pl-pds">'</span></span>,
  minify<span class="pl-k">:</span> <span class="pl-c1">true</span>,
  <span class="pl-c"><span class="pl-c">//</span> 设置为 false, sw生成的缓存是 filename?hash 形式，以便于浏览器更新缓存</span>
  dontCacheBustUrlsMatching<span class="pl-k">:</span> <span class="pl-c1">false</span>,
  <span class="pl-c"><span class="pl-c">//</span> 忽略文件</span>
  staticFileGlobsIgnorePatterns<span class="pl-k">:</span> [<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\.</span>map<span class="pl-k">$</span><span class="pl-pds">/</span></span>,<span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>css<span class="pl-k">$</span><span class="pl-pds">/</span></span>],
  <span class="pl-c"><span class="pl-c">//</span> For unknown URLs, fallback to the index page</span>
  navigateFallback<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>https://example/<span class="pl-pds">'</span></span>, <span class="pl-c"><span class="pl-c">//</span> 这里修改为 线上部署的地址</span>
  <span class="pl-c"><span class="pl-c">//</span> 运行时缓存</span>
  runtimeCaching<span class="pl-k">:</span> [ <span class="pl-c"><span class="pl-c">//</span> 这里修改为您实际开发时所需要的相关路由</span>
    {
      urlPattern<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>/<span class="pl-pds">'</span></span>,
      handler<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>networkFirst<span class="pl-pds">'</span></span>
    },
    {
      urlPattern<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\/</span>(page1<span class="pl-k">|</span>page2<span class="pl-k">|</span>page3)<span class="pl-pds">/</span></span>,
      handler<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>networkFirst<span class="pl-pds">'</span></span>
    }
  ]
}</pre></div>
<p>存在的问题:
当浏览器访问 <code>https://example.com/</code> 时,注册的 service-worker 的域是 <code>https://example.com/</code> ,是不能直接浏览器输入 <code>https://example.com/page1</code> 来访问 <code>/page1</code> 这个路由的的.</p>
<p>解决办法: 浏览器新标签直接访问 <code>https://example.com/page1</code> (直接访问走的是 服务端的路由匹配,即 <code>entry-server</code>), 将该域的 service-worker 注册,其他路由同理.</p>
<p>希望有懂这一块的小伙伴可以帮忙解决.(:</p>
<h2><a id="user-content-3-源码结构" class="anchor" aria-hidden="true" href="#3-源码结构"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>3 源码结构</h2>
<p>服务端渲染应当为每个请求创建一个新的根 Vue 实例。如果在多个请求之间共享一个实例，显然是错误的。所以所有的根实例、根路由、根状态都应当是一个工厂函数，每次请求都应当得到一个新的根实例。</p>
<div class="highlight highlight-source-shell"><pre>src
├── components <span class="pl-c"><span class="pl-c">#</span> 组件</span>
├── router <span class="pl-c"><span class="pl-c">#</span> vue-router</span>
├── store <span class="pl-c"><span class="pl-c">#</span> vuex store</span>
├── App.vue
├── app.js <span class="pl-c"><span class="pl-c">#</span> 通用 entry(universal entry)</span>
├── entry-client.js <span class="pl-c"><span class="pl-c">#</span> 仅运行于浏览器</span>
└── entry-server.js <span class="pl-c"><span class="pl-c">#</span> 仅运行于服务器</span></pre></div>
<ul>
<li>
<p><code>app.js</code></p>
<p><code>app.js</code> 是程序的“通用入口”。在客户端程序中，直接用此文件创建根 Vue 实例，并直接挂载到 DOM（激活）。在服务端渲染中，则将责任转到客户端入口文件。<code>app.js</code> 只是简单到处 <code>createApp</code> 函数。</p>
</li>
<li>
<p><code>entry-client.js</code></p>
<p>客户端入口只需要创建应用程序，并将其挂载到 DOM 中：</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> { <span class="pl-smi">createApp</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>./app<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> { <span class="pl-c1">app</span> } <span class="pl-k">=</span> <span class="pl-en">createApp</span>()
<span class="pl-smi">app</span>.<span class="pl-en">$mount</span>(<span class="pl-s"><span class="pl-pds">'</span>#app<span class="pl-pds">'</span></span>)</pre></div>
</li>
<li>
<p><code>entry-server.js</code></p>
<p>服务器入口使用 <code>export default</code> 导出函数，并在每次渲染时重复调用此函数，用于创建和返回应用程序实例。也可以用于服务器端路由匹配和数据预取逻辑。</p>
</li>
</ul>
<p>再次强调，如果使用了 <code>vue-router</code>、<code>vuex</code> 等，需要导出的均是一个工厂函数，而不是一个单例。</p>
<h2><a id="user-content-4-坑点提示" class="anchor" aria-hidden="true" href="#4-坑点提示"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4 坑点提示</h2>
<h3><a id="user-content-41-window-及其他浏览器环境下属性" class="anchor" aria-hidden="true" href="#41-window-及其他浏览器环境下属性"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.1 window 及其他浏览器环境下属性</h3>
<p>由于采用了服务端渲染，所有关于浏览器上属性的使用，需要首先判断 <code>window</code> 对象是否存在。</p>
<h3><a id="user-content-42-单元测试" class="anchor" aria-hidden="true" href="#42-单元测试"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4.2 单元测试</h3>
<p>默认采用 <code>jest</code> 和 <code>vue-test-utils</code> 进行测试，如果测试的组件需要用到 <code>vuex</code>，需要在测试的代码中新创建一个 <code>store</code> 传入，例如：</p>
<div class="highlight highlight-source-js"><pre><span class="pl-k">import</span> { <span class="pl-smi">createStore</span> } <span class="pl-k">from</span> <span class="pl-s"><span class="pl-pds">'</span>@/store<span class="pl-pds">'</span></span>

<span class="pl-k">const</span> <span class="pl-c1">store</span> <span class="pl-k">=</span> <span class="pl-en">createStore</span>()

<span class="pl-en">test</span>(<span class="pl-s"><span class="pl-pds">'</span>test<span class="pl-pds">'</span></span>, () <span class="pl-k">=&gt;</span> {
  <span class="pl-k">const</span> <span class="pl-c1">wrapper</span> <span class="pl-k">=</span> <span class="pl-en">shallow</span>(Component, { store })
})</pre></div>
<h2><a id="user-content-5-其他" class="anchor" aria-hidden="true" href="#5-其他"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>5 其他</h2>
<ul>
<li>如果未来需要使用到“页面缓存或组件缓存”，可参考：<a href="https://ssr.vuejs.org/zh/guide/caching.html#%E9%A1%B5%E9%9D%A2%E7%BA%A7%E5%88%AB%E7%BC%93%E5%AD%98-page-level-caching" rel="nofollow">缓存</a></li>
</ul>
<h2><a id="user-content-license" class="anchor" aria-hidden="true" href="#license"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>LICENSE</h2>
<p>MIT</p>
</article>
  </div>
</template>

<script>
export default {}
</script>
