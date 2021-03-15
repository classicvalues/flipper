(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{114:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return b}));var i=t(3),a=t(7),r=(t(0),t(149)),o={id:"navigation-plugin",title:"Navigation Plugin Setup",sidebar_label:"Navigation"},p={unversionedId:"setup/navigation-plugin",id:"setup/navigation-plugin",isDocsHomePage:!1,title:"Navigation Plugin Setup",description:"Adding the plugin using Buck",source:"@site/../docs/setup/navigation-plugin.mdx",slug:"/setup/navigation-plugin",permalink:"/docs/setup/navigation-plugin",editUrl:"https://github.com/facebook/flipper/blob/master/website/../docs/setup/navigation-plugin.mdx",version:"current",sidebar_label:"Navigation",sidebar:"setup",previous:{title:"Layout Inspector Setup",permalink:"/docs/setup/layout-plugin"},next:{title:"Network Setup",permalink:"/docs/setup/network-plugin"}},l=[{value:"Adding the plugin using Buck",id:"adding-the-plugin-using-buck",children:[]},{value:"Adding the plugin to non-buck-based apps",id:"adding-the-plugin-to-non-buck-based-apps",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]}]}],c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",n)}},d=c("FbInternalOnly"),u=c("FbNavigationPluginSetup"),s={toc:l};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)(d,{mdxType:"FbInternalOnly"},Object(r.b)("h2",{id:"adding-the-plugin-using-buck"},"Adding the plugin using Buck"),Object(r.b)(u,{mdxType:"FbNavigationPluginSetup"}),Object(r.b)("h2",{id:"adding-the-plugin-to-non-buck-based-apps"},"Adding the plugin to non-buck-based apps")),Object(r.b)("h3",{id:"android"},"Android"),Object(r.b)("p",null,"First, add the plugin to your Flipper client instance:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.android.AndroidFlipperClient;\nimport com.facebook.flipper.plugins.navigation.NavigationFlipperPlugin;\n\nfinal FlipperClient client = AndroidFlipperClient.getInstance(this);\nclient.addPlugin(NavigationFlipperPlugin.getInstance());\n")),Object(r.b)("p",null,"Navigation events in the app can then be recorded by calling ",Object(r.b)("inlineCode",{parentName:"p"},"sendNavigationEvent")," method of the ",Object(r.b)("inlineCode",{parentName:"p"},"NavigationFlipperPlugin")," instance from anywhere in the app. This allows for the Navigation Plugin to be integrated into existing navigation frameworks."),Object(r.b)("h4",{id:"using-android-deep-links"},"Using Android Deep Links"),Object(r.b)("p",null,"The Navigation Plugin can be used with built in ",Object(r.b)("a",{parentName:"p",href:"https://developer.android.com/training/app-links/deep-linking"},"deep links for Android"),"."),Object(r.b)("p",null,"To deep link to an activity, edit the AndroidManifest.xml and add the intent filter for the given activity."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-xml"},'<intent-filter>\n  <action android:name="android.intent.action.VIEW" />\n  <category android:name="android.intent.category.DEFAULT" />\n  <category android:name="android.intent.category.BROWSABLE" />\n  <data android:scheme="flipper" android:host="deep_link_activity" />\n</intent-filter>\n')),Object(r.b)("p",null,"This will allow the user to jump to ",Object(r.b)("inlineCode",{parentName:"p"},"flipper://deep_link_activity")," within Flipper."),Object(r.b)("p",null,"To log that navigation event in  flipper, we can send the navigation event in the Activity's ",Object(r.b)("inlineCode",{parentName:"p"},"onCreate")," method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class DeepLinkActivity extends AppCompatActivity {\n  @Override\n  protected void onCreate(final Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    NavigationFlipperPlugin.getInstance().sendNavigationEvent("flipper://deep_link_activity/");\n    ...\n')),Object(r.b)("h4",{id:"third-party-solutions"},"Third Party Solutions"),Object(r.b)("p",null,"The Navigation Plugin can easily be integrated into a third party navigation framework."),Object(r.b)("h5",{id:"airbnb-deep-link-dispatch"},"AirBnB Deep Link Dispatch"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/airbnb/DeepLinkDispatch"},"Deep Link Dispatch")," will work out of the box with Flipper for navigating to links, including support for url parameters. To add logging, simply add a BroadcastReceiver to your app that is called on any incoming deep links."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-java"},'public class DeepLinkReceiver extends BroadcastReceiver {\n  private static final String TAG = "DeepLinkReceiver";\n\n  @Override public void onReceive(Context context, Intent intent) {\n    String deepLinkUri = intent.getStringExtra(DeepLinkHandler.EXTRA_URI);\n    if (intent.getBooleanExtra(DeepLinkHandler.EXTRA_SUCCESSFUL, false)) {\n      NavigationFlipperPlugin.getInstance().sendNavigationEvent(deepLinkUri);\n    }\n  }\n}\n\npublic class DeepLinkApplication extends Application {\n  @Override public void onCreate() {\n    super.onCreate();\n    IntentFilter intentFilter = new IntentFilter(DeepLinkHandler.ACTION);\n    LocalBroadcastManager.getInstance(this).registerReceiver(new DeepLinkReceiver(), intentFilter);\n  }\n}\n')),Object(r.b)("h3",{id:"ios"},"iOS"),Object(r.b)("p",null,"iOS support is coming soon."))}b.isMDXComponent=!0},149:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var i=t(0),a=t.n(i);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),d=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=d(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(t),b=i,g=u["".concat(o,".").concat(b)]||u[b]||s[b]||r;return t?a.a.createElement(g,p(p({ref:n},c),{},{components:t})):a.a.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=b;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<r;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);