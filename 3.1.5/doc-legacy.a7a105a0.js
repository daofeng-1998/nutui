System.register(["./vendor-legacy.7d1181c8.js"],(function(s){"use strict";var t,a,n;return{setters:[function(s){t=s.e,a=s.o,n=s.G}],execute:function(){const l={class:"markdown-body"},p=[n('<h1>Barrage 弹幕</h1><h3>介绍</h3><p>用于话语和词组的轮播展示，适用于视频中或其他类似需求中。</p><h3>安装</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;\n<span class="hljs-comment">//vue</span>\n<span class="hljs-keyword">import</span> { Barrage } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;\n<span class="hljs-comment">//taro</span>\n<span class="hljs-keyword">import</span> { Barrage } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;\n\n<span class="hljs-keyword">const</span> app = createApp();\napp.use(Barrage);\n\n</code></pre><h2>代码演示</h2><h3>基础用法1</h3><p><code>Icon</code> 的 <code>name</code> 属性支持传入图标名称或图片链接。</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-barrage</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&quot;danmu&quot;</span> <span class="hljs-attr">:danmu</span>=<span class="hljs-string">&quot;list&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-barrage</span>&gt;</span>\n</code></pre><pre><code class="language-javascript">  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> inputVal = ref&lt;any&gt;(<span class="hljs-string">&#39;&#39;</span>);\n    <span class="hljs-keyword">const</span> danmu = ref&lt;any&gt;(<span class="hljs-literal">null</span>);\n    <span class="hljs-keyword">let</span> list = ref([<span class="hljs-string">&quot;画美不看&quot;</span>, <span class="hljs-string">&quot;不明觉厉&quot;</span>, <span class="hljs-string">&quot;喜大普奔&quot;</span>, <span class="hljs-string">&quot;男默女泪&quot;</span>, <span class="hljs-string">&quot;累觉不爱&quot;</span>, <span class="hljs-string">&quot;爷青结&quot;</span>]); \n    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addDanmu</span>(<span class="hljs-params"></span>) </span>{\n      danmu.value.add(inputVal.value);\n    }\n    <span class="hljs-keyword">return</span> {\n      inputVal,\n      danmu,\n      list,\n      addDanmu\n    };\n  }\n</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>danmu</td><td>弹幕列表数据</td><td>Array</td><td>[]</td></tr><tr><td>frequency</td><td>可视区域内每个弹幕出现的时间间隔</td><td>Number</td><td>200</td></tr><tr><td>speeds</td><td>每个弹幕的滚动时间</td><td>Number</td><td>2000</td></tr><tr><td>rows</td><td>弹幕行数，分几行展示</td><td>Number</td><td>1</td></tr><tr><td>top</td><td>弹幕垂直距离</td><td>Number</td><td>10</td></tr><tr><td>loop</td><td>是否循环播放</td><td>Boolean</td><td>true</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>add</td><td>添加数据</td><td>-</td></tr></tbody></table>',15)];s("default",{setup:(s,{expose:n})=>(n({frontmatter:{}}),(s,n)=>(a(),t("div",l,p)))})}}}));