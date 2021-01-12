//% ASP.Net is a framework to develop web applications by microsoft. dynamic data driven web applications
//% ASP.Net is a subset of .Net framework
//% ADO.Net is also another subset of .Net framework.
//% IIS is use to host ASP application
//% One solution can contain multiple different projects. solution will have an extention sln
//% Depending on the language we choose, the extention of the project will be different, c# will have csproj, visualbasic have vbproj

//! HTTP Protocol
// https://csharp-video-tutorials.blogspot.com/2012/10/what-is-viewstate-in-aspnet-part-3.html
//+ HTTP Protocol is a stateless protocol, which means, it will not retain the state between user requests
//+ Web forms lives barely for a moment, when request is received an instance of the requested web forms created, events will be processed
//+ it will generate th html and post back to the client, then web forms will be immediately destroyed
//+ same next time we click a button or make a request

//! Use of View State
//+ we can use viewstate to store the data between requests, The view state data travels between every request and response between the client and we server,
//+ view state will be stored in the browse as a hidden state

//! View states are used internally in ASP.Net server controls.
//+ Because Web forms have very short lifetimes, ASP.NET takes special steps to preserve the data entered in the controls on a Web form. Data entered in controls 
//+ is sent with each request and restored to controls in Page_Init. The data in these controls is then available in the Page_Load(), Button_Click(), and many more 
//+ events, that occur after Page_Init() event. On the other hand the HTML controls, do not retain state across post backs. Only ASP.NET server controls retains state.
//+ To convert normal html control to asp.net control, we need to add a property runat="server"

//+ In a web application, events can occur at 3 levels
//+ 1. At the Application Level(Example: Application Start)
//+ 2. At the Page Level(Example: Page Load)
//+ 3. At the Control Level (Example: Button Click)
//+ ViewState variables are used to preserve data across page post back. By default, ViewState of one webform is not available in another webform.
//+ If you want to make your data available on multiple web forms, there are several techniques in ASP.NET, as listed below.
//+ 1. Query Strings
//+ 2. Cookies
//+ 3. Session State
//+ 4. Application State

//! Session state variables
//+ Session state variables are available across all pages, but only for a given single session. Session variables are like single-user global data. Only
//+ the current session has access to its Session state.

//! Application State
//+ Application State variables are available across all pages and across all sessions. Application State variables are like multi-user global data.
//+ All sessions can read and write Application State variables.

//+ In an ASP.NET web application, Global.asax file conatins the application level events.
//+ Application_Start, Application_End, Application_Error, Session_Start, Session_End are the events
//+ By default session uses cookies
//+ A session is a unique instance of the browser. A single user can have multiple sessions, by visiting your application,
//+ with multiple instances of the browser running with a different session-id on his machine.
// https://csharp-video-tutorials.blogspot.com/2012/10/events-in-life-cycle-of-web-application.html
//+ we can use coockie less session , change the setting in web.config
//% ViewState:
//+ 1. ViewState of a webform is available only with in that webform
//+ 2. ViewState is stored on the page in a hidden field called _ViewState. Because of this, the ViewState, will be lost, 
//+ if you navigate awaya from the page, or if the broswer is closed.
//+ 3. ViewState is used by all asp.net controls to retain their state across postback
//%Session State:
//+ 1. Session state variables are available across all pages, but only for a given single session. Session variables are like single-user global data.
//+ 2. Session state variables are stored on the web server.
//+ 3. SessionState variables are cleared, when the user session times out. The default is 20 minutes. This is configurable in web.config
//%Application State:
//+ 1. Application State variables are available across all pages and across all sessions. Application State variables are like multi-user global data.
//+ 2. Application State variables are stored on the web server.
//+ 3. Application State variables are cleared, when the process hosting the application is restarted.
// https://csharp-video-tutorials.blogspot.com/2012/10/difference-between-viewstate-session.html

//% The following are some of the commonly used events in the life cycle of an asp.net webform. These events are shown in order of occurrence, except for,
//+ Error event, which occurs only if there is an unhandled exception.
//+ PreInit - As the name suggests, this event happens just before page initialization event starts.  IsPostBack, IsCallback and IsCrossPagePostBack properties
//+ are set at this stage. This event allows us to set the master page and theme of a web application dynamically. PreInit is extensively used when working with dynamic controls.
//+ Init - Page Init, event occurs after the Init event, of all the individual controls on the webform. Use this event to read or initialize control properties. 
//+ The server controls are loaded and initialized from the Web form’s view state.
//+ InitComplete - As the name says, this event gets raised immediately after page initialization.
//+ PreLoad - Happens just before the Page Load event.
//+ Load - Page Load event, occurs before the load event of all the individual controls on that webform.
//+ Control Events - After the Page load event, the control events like button's click, dropdownlist's selected index changed events are raised.
//+ Load Complete - This event is raised after the control events are handled.
//+ PreRender - This event is raised just before the rendering stage of the page.
//+ PreRenderComplete - Raised immediately after the PreRender event.
//+ Unload - Raised for each control and then for the page. At this stage the page is, unloaded from memory.
//+ Error - This event occurs only if there is an unhandled exception.

//! Server control events
//+ Postback events - These events submit the Web page, immediately to the server for processing. Click event of a button control is an example for PostBack event.
//+ Cached events - These events are saved in the page’s view state to be processed when a postback event occurs. TextChanged event of TextBox control, 
//+ and SelectedIndexChanged event of a DropDownList control are examples of cached events. Cached events can be converted into postback events, by setting the AutoPostBack property of the control to true.
//+ Validation events - These events occur on the client, before the page is posted back to the server. All validation controls use these type of events.
//+ thses control events will execute after Page_Load and Before Page_LoadComplete events.
//% IsPostBack
//+ It is a Page level property, that can be used to determine whether the page is being loaded in response to a client postback, or if it is being loaded and accessed for the first time.
//* we can disable viewstate in the control property.
//* What is a web server?
//+ In simple terms, a web server, is a software, that is used to deliver web pages to clients using the Hypertext Transfer Protocol (HTTP). 
//+ For example, IIS is a web server that can be used to run asp.net web applications.