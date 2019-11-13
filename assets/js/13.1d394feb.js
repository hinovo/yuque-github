(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{219:function(t,s,a){"use strict";a.r(s);var r=a(0),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"doc-文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#doc-文档"}},[t._v("#")]),t._v(" Doc - 文档")]),t._v(" "),a("h2",{attrs:{id:"获取一个仓库的文档列表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取一个仓库的文档列表"}},[t._v("#")]),t._v(" 获取一个仓库的文档列表")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":namespace")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs \n")])])]),a("blockquote",[a("p",[t._v("需要 Repo 的 "),a("code",[t._v("abilities.read")]),t._v(" 权限")])]),a("p",[t._v("如果是 Group 成员，将能获取到私密文档、未发布的草稿。")]),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("Array<"),a("a",{attrs:{href:"DocSerializer",target:"_blank"}},[t._v("DocSerializer")]),t._v(">")]),a("p",[t._v("Example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"title"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"快速开始"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"slug"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get-stared"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"status"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"public"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"created_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-06T23:44:00.000Z"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"updated_at"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2016-09-06T23:44:00.000Z"')]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("h2",{attrs:{id:"获取单篇文档的详细信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#获取单篇文档的详细信息"}},[t._v("#")]),t._v(" 获取单篇文档的详细信息")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":namespace")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":slug")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GET")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":repo_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),t._v(" \n")])])]),a("h3",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",{staticClass:"lake-table"},[a("colgroup",[a("col",{attrs:{width:"90"}}),a("col",{attrs:{width:"379"}})]),a("tbody",[a("tr",[a("td",[a("p",[t._v("Key")])]),a("td",[a("p",[t._v("Description")])])]),a("tr",[a("td",[a("p",[t._v("raw")])]),a("td",[a("p",[t._v("raw=1 返回文档最原始的格式")])])])])]),t._v(" "),a("h3",{attrs:{id:"response-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-2"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("a",{attrs:{href:"DocDetailSerializer",target:"_blank"}},[t._v("DocDetailSerializer")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   DocDetailSerializer\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"abilities"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"update"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"destroy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("h2",{attrs:{id:"创建文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建文档"}},[t._v("#")]),t._v(" 创建文档")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":namespace")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs \n")])])]),a("blockquote",[a("p",[t._v("需要 Repo 的 "),a("code",[t._v("abilities.doc.create")]),t._v(" 权限")])]),t._v(" "),a("h3",{attrs:{id:"parameters-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",{staticClass:"lake-table"},[a("colgroup",[a("col",{attrs:{width:"90"}}),a("col",{attrs:{width:"406"}})]),a("tbody",[a("tr",[a("td",[a("p",[t._v("Key")])]),a("td",[a("p",[t._v("Description")])])]),a("tr",[a("td",[a("p",[t._v("title")])]),a("td",[a("p",[t._v("标题")])])]),a("tr",[a("td",[a("p",[t._v("slug")])]),a("td",[a("p",[t._v("文档 Slug")])])]),a("tr",[a("td",[a("p",[t._v("public")])]),a("td",[a("p",[t._v("0 - 私密，1 - 公开")])])]),a("tr",[a("td",{staticStyle:{"background-color":"#FFFFFF"},attrs:{colspan:"1"}},[a("p",[t._v("format")])]),a("td",{staticStyle:{"background-color":"#FFFFFF"},attrs:{colspan:"1"}},[a("p",[t._v("支持 markdown 和 lake，默认为 markdown")])])]),a("tr",[a("td",[a("p",[t._v("body")])]),a("td",[a("p",[t._v("format 描述的正文内容，最大允许 5MB")])])])])]),t._v(" "),a("h3",{attrs:{id:"response-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-3"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("a",{attrs:{href:"DocDetailSerializer",target:"_blank"}},[t._v("DocDetailSerializer")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   DocDetailSerializer\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("h2",{attrs:{id:"更新文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新文档"}},[t._v("#")]),t._v(" 更新文档")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PUT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":namespace")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PUT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":repo_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),t._v(" \n")])])]),a("blockquote",[a("p",[t._v("需要 Doc 的 "),a("code",[t._v("abilities.update")]),t._v(" 权限")])]),a("p",[t._v("注意! 这里最后个参数是 "),a("code",[t._v("id")]),t._v(" （文档编号）而不是 "),a("code",[t._v("slug")]),t._v("，原因是为了避免 slug 改变无法正确保存。")]),t._v(" "),a("h3",{attrs:{id:"parameters-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("table",{staticClass:"lake-table"},[a("colgroup",[a("col",{attrs:{width:"90"}}),a("col",{attrs:{width:"289"}})]),a("tbody",[a("tr",[a("td",[a("p",[t._v("Key")])]),a("td",[a("p",[t._v("Description")])])]),a("tr",[a("td",[a("p",[t._v("title")])]),a("td",[a("p",[t._v("标题")])])]),a("tr",[a("td",[a("p",[t._v("slug")])]),a("td",[a("p",[t._v("文档 Slug")])])]),a("tr",[a("td",[a("p",[t._v("public")])]),a("td",[a("p",[t._v("0 - 私密")]),a("p",[t._v("1 - 公开")])])]),a("tr",[a("td",[a("p",[t._v("body")])]),a("td",[a("p",[t._v("已发布的正文 Markdown")])])])])]),t._v(" "),a("h3",{attrs:{id:"response-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-4"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("a",{attrs:{href:"DocDetailSerializer",target:"_blank"}},[t._v("DocDetailSerializer")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   DocDetailSerializer\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),a("h2",{attrs:{id:"删除文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除文档"}},[t._v("#")]),t._v(" 删除文档")]),t._v(" "),a("div",{staticClass:"language-rb extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rb"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":namespace")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DELETE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repos"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":repo_id")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":id")]),t._v(" \n")])])]),a("blockquote",[a("p",[t._v("需要 Doc 的 "),a("code",[t._v("abilities.destroy")]),t._v(" 权限")])]),t._v(" "),a("h3",{attrs:{id:"response-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response-5"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[a("a",{attrs:{href:"DocDetailSerializer",target:"_blank"}},[t._v("DocDetailSerializer")])]),a("br"),a("br"),a("a",{staticClass:"yuque-link",attrs:{target:"_blank",href:"https://www.yuque.com/yuque/developer/doc"}},[a("svg",{attrs:{viewBox:"64 64 896 896","data-icon":"yuque",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}},[a("path",{attrs:{d:"M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z"}})]),t._v(" 使用语雀查看")])])}),[],!1,null,null,null);s.default=e.exports}}]);