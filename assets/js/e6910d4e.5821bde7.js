(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return f}));var i=n(3),r=n(7),o=(n(0),n(149)),a=n(150),l=n(152),c=n(158),p=n(159),s={id:"ios-native",title:"Adding Flipper to iOS apps",sidebar_label:"Generic iOS apps"},u={unversionedId:"getting-started/ios-native",id:"getting-started/ios-native",isDocsHomePage:!1,title:"Adding Flipper to iOS apps",description:"We support both Swift and Objective-C for Flipper with CocoaPods as build and distribution mechanism.",source:"@site/../docs/getting-started/ios-native.mdx",slug:"/getting-started/ios-native",permalink:"/docs/getting-started/ios-native",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/getting-started/ios-native.mdx",version:"current",sidebar_label:"Generic iOS apps",sidebar:"setup",previous:{title:"Adding Flipper to Android apps with Gradle",permalink:"/docs/getting-started/android-native"},next:{title:"Set up your React Native App",permalink:"/docs/getting-started/react-native"}},d=[{value:"CocoaPods",id:"cocoapods",children:[]},{value:"For pure Objective-C projects",id:"for-pure-objective-c-projects",children:[]},{value:"Enabling plugins",id:"enabling-plugins",children:[]},{value:"Having trouble?",id:"having-trouble",children:[]}],b={toc:d};function f(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We support both Swift and Objective-C for Flipper with CocoaPods as build and distribution mechanism."),Object(o.b)("h2",{id:"cocoapods"},"CocoaPods"),Object(o.b)("p",null,"The following configuration assumed CocoaPods 1.9+."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ruby"},"project 'MyApp.xcodeproj'\nflipperkit_version = '0.49.0'\n\ntarget 'MyApp' do\n  platform :ios, '9.0'\n\n  # It is likely that you'll only want to include Flipper in debug builds,\n  # in which case you add the `:configuration` directive:\n  pod 'FlipperKit', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitLayoutComponentKitSupport', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/SKIOSNetworkPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  pod 'FlipperKit/FlipperKitUserDefaultsPlugin', '~>' + flipperkit_version, :configuration => 'Debug'\n  # ...unfortunately at this time that means you'll need to explicitly mark\n  # transitive dependencies as being for debug build only as well:\n  pod 'Flipper-DoubleConversion', :configuration => 'Debug'\n  pod 'Flipper-Folly', :configuration => 'Debug'\n  pod 'Flipper-Glog', :configuration => 'Debug'\n  pod 'Flipper-PeerTalk', :configuration => 'Debug'\n  pod 'CocoaLibEvent', :configuration => 'Debug'\n  pod 'boost-for-react-native', :configuration => 'Debug'\n  pod 'OpenSSL-Universal', :configuration => 'Debug'\n  pod 'CocoaAsyncSocket', :configuration => 'Debug'\n  # ...except, of course, those transitive dependencies that your\n  # application itself depends, e.g.:\n  pod 'ComponentKit', '~> 0.30'\n\n  # If you use `use_frameworks!` in your Podfile,\n  # uncomment the below $static_framework array and also\n  # the pre_install section.  This will cause Flipper and\n  # it's dependencies to be built as a static library and all other pods to\n  # be dynamic.\n  #\n  # NOTE Doing this may lead to a broken build if any of these are also\n  #      transitive dependencies of other dependencies and are expected\n  #      to be built as frameworks.\n  #\n  # $static_framework = ['FlipperKit', 'Flipper', 'Flipper-Folly',\n  #   'CocoaAsyncSocket', 'ComponentKit', 'Flipper-DoubleConversion',\n  #   'Flipper-Glog', 'Flipper-PeerTalk', 'Flipper-RSocket', 'Yoga', 'YogaKit',\n  #   'CocoaLibEvent', 'OpenSSL-Universal', 'boost-for-react-native']\n  #\n  # pre_install do |installer|\n  #   Pod::Installer::Xcode::TargetValidator.send(:define_method, :verify_no_static_framework_transitive_dependencies) {}\n  #   installer.pod_targets.each do |pod|\n  #       if $static_framework.include?(pod.name)\n  #         def pod.build_type;\n  #           Pod::BuildType.static_library\n  #         end\n  #       end\n  #     end\n  # end\nend\n")),Object(o.b)("h2",{id:"for-pure-objective-c-projects"},"For pure Objective-C projects"),Object(o.b)("p",null,"For pure Objective-C projects, add the following things in your settings:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"/usr/lib/swift")," as the first entry of the ",Object(o.b)("inlineCode",{parentName:"li"},"LD_RUNPATH_SEARCH_PATHS")),Object(o.b)("li",{parentName:"ol"},"Add the following in ",Object(o.b)("inlineCode",{parentName:"li"},"LIBRARY_SEARCH_PATHS"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'"\\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\\"",\n"\\"$(TOOLCHAIN_DIR)/usr/lib/swift-5.0/$(PLATFORM_NAME)\\"",\n')),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"If after the above two steps there are still error's like ",Object(o.b)("inlineCode",{parentName:"li"},"Undefined symbol _swift_getFunctionReplacement")," then set ",Object(o.b)("inlineCode",{parentName:"li"},"DEAD_CODE_STRIPPING")," to ",Object(o.b)("inlineCode",{parentName:"li"},"YES"),". Reference for this fix is ",Object(o.b)("a",{parentName:"li",href:"https://forums.swift.org/t/undefined-symbol-swift-getfunctionreplacement/30495/4"},"here"))),Object(o.b)("p",null,"This is done to overcome a bug with Xcode 11 which fails to compile swift code when bitcode is enabled. Flipper transitively depends on YogaKit which is written in Swift. More about this issue can be found ",Object(o.b)("a",{parentName:"p",href:"https://twitter.com/krzyzanowskim/status/1151549874653081601?s=21"},"here")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/Carthage/Carthage/issues/2825"},"here"),"."),Object(o.b)("p",null,"Install the dependencies by running ",Object(o.b)("inlineCode",{parentName:"p"},"pod install"),". You can now import and initialize Flipper in your\nAppDelegate."),Object(o.b)(c.a,{defaultValue:"ios",values:[{label:"iOS",value:"ios"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},Object(o.b)(p.a,{value:"ios",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-objective-c"},"#import <FlipperKit/FlipperClient.h>\n#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>\n#import <FlipperKitLayoutComponentKitSupport/FlipperKitLayoutComponentKitSupport.h>\n#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>\n#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>\n#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>\n\n@implementation AppDelegate\n\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  FlipperClient *client = [FlipperClient sharedClient];\n  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];\n  [FlipperKitLayoutComponentKitSupport setUpWithDescriptorMapper: layoutDescriptorMapper];\n  [client addPlugin: [[FlipperKitLayoutPlugin alloc] initWithRootNode: application\n                                                 withDescriptorMapper: layoutDescriptorMapper]];\n\n  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];\n  [client addPlugin: [[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];\n  [client start];\n  ...\n}\n@end\n"))),Object(o.b)(p.a,{value:"swift",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-swift"},"import UIKit\nimport FlipperKit\n@UIApplicationMain\nclass AppDelegate: UIResponder, UIApplicationDelegate {\n\n  var window: UIWindow?\n\n\n  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {\n    // Override point for customization after application launch.\n    let client = FlipperClient.shared()\n    let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())\n    FlipperKitLayoutComponentKitSupport.setUpWith(layoutDescriptorMapper)\n    client?.add(FlipperKitLayoutPlugin(rootNode: application, with: layoutDescriptorMapper!))\n    client?.start()\n    return true\n  }\n}\n")))),Object(o.b)("h2",{id:"enabling-plugins"},"Enabling plugins"),Object(o.b)("p",null,"Finally, you need to add plugins to your Flipper client. Above, we have only added the Layout Inspector plugin to get you started. See ",Object(o.b)(l.a,{to:Object(a.a)("/docs/setup/network-plugin"),mdxType:"Link"},"Network Plugin")," and ",Object(o.b)(l.a,{to:Object(a.a)("/docs/setup/layout-plugin"),mdxType:"Link"},"Layout Inspector Plugin")," for information on how to add them, and also enable Litho or ComponentKit support. You can check the sample apps in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/flipper"},"GitHub repo")," for examples of integrating other plugins."),Object(o.b)("h2",{id:"having-trouble"},"Having trouble?"),Object(o.b)("p",null,"See the ",Object(o.b)(l.a,{to:Object(a.a)("/docs/troubleshooting"),mdxType:"Link"},"troubleshooting page")," for help with known problems."),Object(o.b)("div",{class:"warning"},Object(o.b)("p",null,"On iOS, we currently do not support connecting to physical devices.")))}f.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),b=i,f=u["".concat(a,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(f,l(l({ref:t},p),{},{components:n})):r.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},150:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var i=n(16),r=n(151);function o(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var o=void 0===i?{}:i,a=o.forcePrependBaseUrl,l=void 0!==a&&a,c=o.absolute,p=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(l)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return p?e+s:s}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},151:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}))},152:function(e,t,n){"use strict";var i=n(0),r=n.n(i),o=n(10),a=n(151),l=n(8),c=Object(i.createContext)({collectLink:function(){}}),p=n(150),s=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};t.a=function(e){var t,n,u,d=e.isNavLink,b=e.to,f=e.href,g=e.activeClassName,m=e.isActive,h=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,O=void 0===v||v,y=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),w=Object(p.b)().withBaseUrl,j=Object(i.useContext)(c),C=b||f,k=Object(a.a)(C),F=null==C?void 0:C.replace("pathname://",""),N=void 0!==F?(n=F,O&&function(e){return e.startsWith("/")}(n)?w(n):n):void 0,P=Object(i.useRef)(!1),D=d?o.e:o.c,S=l.default.canUseIntersectionObserver;Object(i.useEffect)((function(){return!S&&k&&window.docusaurus.prefetch(N),function(){S&&u&&u.disconnect()}}),[N,S,k]);var A=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,K=!N||!k||A;return N&&k&&!A&&!h&&j.collectLink(N),K?r.a.createElement("a",Object.assign({href:N},C&&!k&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(D,Object.assign({},y,{onMouseEnter:function(){P.current||(window.docusaurus.preload(N),P.current=!0)},innerRef:function(e){var t,n;S&&e&&k&&(t=e,n=function(){window.docusaurus.prefetch(N)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),n())}))}))).observe(t))},to:N||""},d&&{isActive:m,activeClassName:g}))}},153:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},155:function(e,t,n){"use strict";var i=n(0),r=n(156);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},156:function(e,t,n){"use strict";var i=n(0),r=Object(i.createContext)(void 0);t.a=r},158:function(e,t,n){"use strict";var i=n(0),r=n.n(i),o=n(155),a=n(153),l=n(59),c=n.n(l);var p=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,d=e.groupId,b=e.className,f=Object(o.a)(),g=f.tabGroupChoices,m=f.setTabGroupChoices,h=Object(i.useState)(l),v=h[0],O=h[1],y=i.Children.toArray(e.children),w=[];if(null!=d){var j=g[d];null!=j&&j!==v&&u.some((function(e){return e.value===j}))&&O(j)}var C=function(e){var t=e.target,n=w.indexOf(t),i=y[n].props.value;O(i),null!=d&&(m(d,i),setTimeout((function(){var e,n,i,r,o,a,l,p;(e=t.getBoundingClientRect(),n=e.top,i=e.left,r=e.bottom,o=e.right,a=window,l=a.innerHeight,p=a.innerWidth,n>=0&&o<=p&&r<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},k=function(e){var t,n;switch(e.keyCode){case s:var i=w.indexOf(e.target)+1;n=w[i]||w[0];break;case p:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:Object(a.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:k,onFocus:C,onClick:C},n)}))),t?Object(i.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(i.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},159:function(e,t,n){"use strict";var i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}}}]);