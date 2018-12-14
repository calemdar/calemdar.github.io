(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),n=a(142),s=a(149),l=a(162),d=a(144),o=a.n(d),c=function(){return r.a.createElement(n.StaticQuery,{query:"1491072257",render:function(e){return r.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:l})};t.default=function(){return r.a.createElement(s.a,null,r.a.createElement("h2",null,"Software Engineer, Game Designer"),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},r.a.createElement(c,null)),r.a.createElement("p",null,"Please hire me!!"),r.a.createElement(n.Link,{to:"/medium/"},"Go to Medium articles"))}},142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return f});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(141),d=a.n(l);a.d(t,"Link",function(){return d.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(143),c=a.n(o);a.d(t,"PageRenderer",function(){return c.a});var A=a(33);a.d(t,"parsePath",function(){return A.a});var u=r.a.createContext({}),f=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},143:function(e,t,a){var i;e.exports=(i=a(146))&&i.default||i},144:function(e,t,a){"use strict";var i=a(35);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(48)),l=i(a(152)),d=i(a(153)),o=i(a(0)),c=i(a(4)),A=function(e){var t=(0,d.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},u={},f=function(e){var t=A(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!u[a]||(u[a]=!0,!1)},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",d=e.height?'height="'+e.height+'" ':"",o=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+l+d+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+o+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=o.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,l.default)(e,["style","onLoad","onError"]);return o.default.createElement("img",(0,d.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!0,n=!1,l=t.fadeIn,d=f(t);!d&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,n=!0),"undefined"==typeof window&&(i=!1,r=!1),t.critical&&(i=!0,r=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:r,IOSupported:n,fadeIn:l,hasNoScript:c,seenBefore:d},a.imageRef=o.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=A(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,u=void 0===c?{}:c,f=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.Tag,y="boolean"==typeof h?"lightgray":h,E=(0,d.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,u),w=(0,d.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l);if(f){var v=f;return o.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(v.srcSet)},o.default.createElement(b,{style:{width:"100%",paddingBottom:100/v.aspectRatio+"%"}}),v.base64&&o.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:v.base64,style:E}),v.tracedSVG&&o.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:v.tracedSVG,style:E}),y&&o.default.createElement(b,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&o.default.createElement("picture",null,v.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),o.default.createElement("source",{srcSet:v.srcSet,sizes:v.sizes}),o.default.createElement(m,{alt:a,title:t,src:v.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:a,title:t},v))}}))}if(p){var S=p,j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:S.width,height:S.height},n);return"inherit"===n.display&&delete j.display,o.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(S.srcSet)},S.base64&&o.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:S.base64,style:E}),S.tracedSVG&&o.default.createElement(m,{alt:this.state.isVisible?"":a,title:t,src:S.tracedSVG,style:E}),y&&o.default.createElement(b,{title:t,style:{backgroundColor:y,width:S.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:S.height}}),this.state.isVisible&&o.default.createElement("picture",null,S.srcSetWebp&&o.default.createElement("source",{type:"image/webp",srcSet:S.srcSetWebp,sizes:S.sizes}),o.default.createElement("source",{srcSet:S.srcSet,sizes:S.sizes}),o.default.createElement(m,{alt:a,title:t,width:S.width,height:S.height,src:S.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,d.default)({alt:a,title:t,width:S.width,height:S.height},S))}}))}return null},t}(o.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var w=b;t.default=w},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Cem Alemdar"}}}}},146:function(e,t,a){"use strict";a.r(t);a(34);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),l=a(49),d=a(2),o=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=o},147:function(e,t,a){},149:function(e,t,a){"use strict";var i=a(145),r=a(0),n=a.n(r),s=a(4),l=a.n(s),d=a(151),o=a.n(d),c=a(142),A=function(e){var t=e.siteTitle;return n.a.createElement("div",{style:{background:"#383A3F",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},u=(a(147),function(e){var t=e.children;return n.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},n.a.createElement("html",{lang:"en"})),n.a.createElement(A,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})});u.propTypes={children:l.a.node.isRequired};t.a=u},162:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAXABQDASIAAhEBAxEB/8QAGQABAAIDAAAAAAAAAAAAAAAAAAMEAQIF/8QAGAEAAgMAAAAAAAAAAAAAAAAAAQMAAgT/2gAMAwEAAhADEAAAAUVvBl1sunmxCN0gLP/EABwQAAICAgMAAAAAAAAAAAAAAAECAAMREgQUIf/aAAgBAQABBQK60k1l1inZbEwVxAvj8jcKcTsvP//EABsRAAICAwEAAAAAAAAAAAAAAAACARESEyFR/9oACAEDAQE/AVWKKMIXkGtPD//EABcRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAIAQIBAT8BqnppTNZ//8QAGxAAAQUBAQAAAAAAAAAAAAAAAAECEBFBElH/2gAIAQEABj8C5bhYil+xpyjYw//EABsQAQADAQEBAQAAAAAAAAAAAAEAESExUWGR/9oACAEBAAE/IUlodJFaXM9q4+8qAqpX2AAvB7CwFvVj2a5s+X5n/9oADAMBAAIAAwAAABAk+L7/xAAZEQACAwEAAAAAAAAAAAAAAAAAEQEhUWH/2gAIAQMBAT8QmFNGkUch/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQMWH/2gAIAQIBAT8QQgY7Nj//xAAfEAEAAgICAgMAAAAAAAAAAAABABEhMUFRYXGB0fD/2gAIAQEAAT8Qd1KsRX6gQFezY+4YCBuniMqyF0chmE9WDpYN8AYoQsnUyD4jAew9QQMH75n/2Q==",aspectRatio:.8552507095553453,src:"/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-53b4a.jpg",srcSet:"/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-bf99b.jpg 75w,\n/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-9d7df.jpg 150w,\n/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-53b4a.jpg 300w,\n/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-3d205.jpg 450w,\n/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-14a2b.jpg 600w,\n/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-a8e6b.jpg 900w,\n/static/silly-cem-002f0d81fbb805e7efd79fd77b138963-2ef21.jpg 904w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-0c86e4f7e2009b725f56.js.map