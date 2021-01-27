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

//+ Text Box Controls property
// https://csharp-video-tutorials.blogspot.com/2012/10/aspnet-textbox-control-part-10.html
//+radio button
// https://csharp-video-tutorials.blogspot.com/2012/10/aspnet-radio-button-control-part-11.html
//+ checkbox
//https://csharp-video-tutorials.blogspot.com/2012/10/aspnet-checkbox-control-part-12.html
//https://csharp-video-tutorials.blogspot.com/2012/10/dropdownlist-in-aspnet-part-16.html
//https://csharp-video-tutorials.blogspot.com/2012/11/data-bind-aspnet-dropdownlist-with-data.html

//! For finding the physical path
Server.MapPath(".") //+ returns the current physical directory of the page that you are running. It actually points to the current folder
Server.MapPath("..") //+ returns the parent pysical directory of the page that you are running.
Server.MapPath("~")  //+ returns the physical path of the root directory of the application. points to the project root

//* retrieve data from dropdownlist
//+ Selected Item Text: DropDownList1.SelectedItem.Text
//+ Selected Item Value: DropDownList1.SelectedItem.Value
//https://csharp-video-tutorials.blogspot.com/2012/11/cascading-dropdown-in-aspnet-part-22.html
// https://csharp-video-tutorials.blogspot.com/2012/11/aspnet-checkboxlist-control-part-23.html
//https://csharp-video-tutorials.blogspot.com/2012/11/aspnet-listbox-control-part-25.html
//https://csharp-video-tutorials.blogspot.com/2012/11/fileupload-control-in-aspnet-part-30.html
//https://csharp-video-tutorials.blogspot.com/2012/11/aspnet-calendar-control-part-32.html

//! HiddenField
//https://csharp-video-tutorials.blogspot.com/2012/11/aspnet-calendar-control-part-32.html
//! UseSubmitBehavior
//+ The UseSubmitBehavior property specifies if the Button control uses the browser's built-in submit function or the ASP.NET postback mechanism.
//+ This property is TRUE by default. When set to FALSE, ASP.NET adds a client-side script to post the form.
//https://csharp-video-tutorials.blogspot.com/2012/11/literal-control-in-aspnet-part-41.html
//! Panel control
//+ It is used to group controlls together
//https://csharp-video-tutorials.blogspot.com/2012/11/aspnet-panel-control-part-42.html

//! Validator
//https://csharp-video-tutorials.blogspot.com/2012/11/requiredfield-validator-control-in.html
//https://csharp-video-tutorials.blogspot.com/2012/11/rangevalidator-control-in-aspnet-part-45.html
//https://csharp-video-tutorials.blogspot.com/2012/11/comparevalidator-control-in-aspnet-part.html
//https://csharp-video-tutorials.blogspot.com/2012/11/regularexpressionvalidator-control-in.html
//https://csharp-video-tutorials.blogspot.com/2012/11/customvalidator-control-in-aspnet-part.html

//! Different page navigation techniques
//https://csharp-video-tutorials.blogspot.com/2012/11/different-page-navigation-techniques-in.html
//% HyperLink
//% Response Redirect
//+ Response.Redirect is similar to clicking on a hyperlink. The Hyperlink control does not expose any server side events. 
//+ So when the user clicks on a hyperlink, there is no server side event to intercept the click. Response.Redirect causes 2 request/response cycles.
//+ Also, note that when Response.Redirect is used the URL in the address bar changes and the browser history is maintained.
//+ Response.Redirect() can be used to navigate pages/websites on the same web server or on a different web server.
//https://csharp-video-tutorials.blogspot.com/2012/11/responseredirect-in-aspnet-part-52.html
//%Server Transfer
//+ Just like hyperlink and Response.Redirect, Server.Transfer is used to navigate to other pages/sites running on the same web server.
//+  Server.Transfer is faster than Response.Redirect as the redirection happens on the server in one Request/Response cycle. Response.Redirect() involves 2 Request/Response cycles.
//+ we can use the data from the previous request
//* System.Collections.Specialized.NameValueCollection nameValueCollection = Request.Form;
//* lblName.Text = nameValueCollection["txtName"];
//* lblEmail.Text = nameValueCollection["txtEmail"];
//https://csharp-video-tutorials.blogspot.com/2012/11/servertransfer-in-aspnet-part-53.html
//% Server Execute
//* Server.Execute()
//+ Server.Transfer terminates the execution of the current page and starts the execution of the new page, where as Server.Execute process the second Web form
//+ without leaving the first Web form. After completing the execution of the first webform, the control returns to the second webform.
//https://csharp-video-tutorials.blogspot.com/2012/11/serverexecute-in-aspnet-part-54.html
//% Cross page posting
//+ Cross page posting allows to post one page to another page. By default, when you click a button, the webform posts to itself. If you want to post to another 
//+ webform on a button click, set the PostBackUrl of the button, to the page that you want to post to.
//https://csharp-video-tutorials.blogspot.com/2012/11/cross-page-posting-in-aspnet-part-55.html
//% Opening new window using javascript
window.open(URL, name, features, replace);
//https://csharp-video-tutorials.blogspot.com/2012/11/opening-new-window-using-javascript-in.html

//! Techniques to send data from one webform to another
//% Context.Handler
//+ Page lastpage = (Page)Context.Handler;
//https://csharp-video-tutorials.blogspot.com/2012/11/techniques-to-send-data-from-one.html
//% QueryString
//* Response.Redirect("WebForm2.aspx?UserName=" + Server.UrlEncode(txtName.Text) + "&UserEmail=" + Server.UrlEncode(txtEmail.Text));
//* lblName.Text = Request.QueryString["UserName"];
//https://csharp-video-tutorials.blogspot.com/2012/11/querystring-in-aspnet-part-59.html
//%Cookies
//* HttpCookie cookie = new HttpCookie("UserDetails");
//* cookie["Name"] = txtName.Text;
//* cookie["Email"] = txtEmail.Text;
//* cookie.Expires = DateTime.Now.AddDays(30); // for giving expiry time for a cookies, by default it will expire when browser closes
//* Response.Cookies.Add(cookie);
//+ web sites use cookies to store user preferences or other information that is client-specific. Cookies store small amounts of information on the client’s machine.
//* HttpCookie cookie = Request.Cookies["UserDetails"];
//* if (cookie != null)
//* {
//*     lblName.Text = cookie["Name"];
//*     lblEmail.Text = cookie["Email"];
//* }
//https://csharp-video-tutorials.blogspot.com/2012/11/cookies-in-aspnet-part-60.html
//https://csharp-video-tutorials.blogspot.com/2012/11/how-to-check-if-cookies-are-enabled-or.html
//% Session state
//+ Just like Query strings, Session State variables can also be used to send data from one webform to another.
Session["Name"] = txtName.Text;
lblName.Text = Session["Name"].ToString();
//* <sessionState mode="InProc" timeout="30"></sessionState>
//https://csharp-video-tutorials.blogspot.com/2012/11/aspnet-session-state-part-62.html
//* <sessionState mode="InProc" cookieless="true"></sessionState>
//https://csharp-video-tutorials.blogspot.com/2012/11/cookie-less-sessions-in-aspnet-part-63.html
//https://csharp-video-tutorials.blogspot.com/2012/12/inporc-aspnet-session-state-mode.html
//https://csharp-video-tutorials.blogspot.com/2012/12/stateserver-aspnet-session-state-mode.html
//https://csharp-video-tutorials.blogspot.com/2012/12/sqlserver-aspnet-session-state-mode.html
//! Application state
//https://csharp-video-tutorials.blogspot.com/2012/12/aspnet-application-state-part-67.html
//https://csharp-video-tutorials.blogspot.com/2012/12/aspnet-application-state-real-time.html
Application["UsersOnline"] = 0;
Application.Lock();
Application["UsersOnline"] = (int)Application["UsersOnline"] + 1;
Application.UnLock();
Response.Write("Number of Users Online = " +
    Application["UsersOnline"].ToString());

//! Error handling
//https://csharp-video-tutorials.blogspot.com/2012/12/exception-handling-in-aspnet-part-69.html
//+ Handling exceptions using try/catch blocks is commonly termed as structured exception handling. Asp.net provide 2 error events
//+ Page_Error - This event is raised at the page level, when there is an unhandled exception on the page. The event handler resides on the page.
//+ Application_Error - This event is raised at the application level, when there is an unhandled exception at an application level. The event handler resides in Global.asax file
//*protected void Page_Error(object sender, EventArgs e)
//*{
//*    Exception ex = Server.GetLastError();
//*    Server.ClearError();
//*    Response.Redirect("Errors.aspx");
//*}
//https://csharp-video-tutorials.blogspot.com/2012/12/error-events-in-aspnet-part-70.html
//! Logging to SQL
//https://csharp-video-tutorials.blogspot.com/2012/12/logging-exception-to-database-part-75.html
//% adding settings to web.config
//*<appSettings>
//*  <!--LogProvider = Database|EventViewer|Both-->
//*  <add key="LogProvider" value="Both"/>
//*</appSettings>
//+ retrieving
//% string logProvider = ConfigurationManager.AppSettings["LogProvider"];

//! Sending email
//*MailMessage mailMessage = new MailMessage("from_email@gmail.com", "To_Email@gmail.com");
//*public static void SendEmail(string emailbody)
//*{
//*    MailMessage mailMessage = new MailMessage("from_email@gmail.com", "To_Email@gmail.com");// Specify the from and to email address
//*    mailMessage.Body = emailbody;// Specify the email body
//*    mailMessage.Subject = "Exception";// Specify the email Subject
//*
//*    SmtpClient smtpClient = new SmtpClient("smtp.gmail.com", 587);// Specify the SMTP server name and post number
//*    smtpClient.Credentials = new System.Net.NetworkCredential() // Specify your gmail address and password
//*    {
//*        UserName = "from_email@gmail.com", Password = "your_password"
//*    };
//*    smtpClient.EnableSsl = true;// Gmail works on SSL, so set this property to true
//*    smtpClient.Send(mailMessage);// Finall send the email message using Send() method
//*}
//% can add in web.config settings
//* <system.net>
//*   <mailSettings>
//*     <smtp deliveryMethod="Network" >
//*       <network host="smtp.gmail.com" enableSsl="true" port="587"
//*         userName="your_email@gmail.com" password="your_password"/>
//*     </smtp>
//*   </mailSettings>
//* </system.net>
//https://csharp-video-tutorials.blogspot.com/2012/12/sending-emails-in-aspnet-using-smtp.html

//! Tracing
//* <trace enabled="true"/>
//https://csharp-video-tutorials.blogspot.com/2012/12/tracing-in-aspnet-part-79.html
//https://csharp-video-tutorials.blogspot.com/2012/12/writing-custom-aspnet-tracing-messages.html

//! Application pool
//https://csharp-video-tutorials.blogspot.com/2012/12/application-pools-in-iis-part-82.html

//! Anonymous authentication
//https://csharp-video-tutorials.blogspot.com/2012/12/anonymous-authentication-in-aspnet-part.html
//https://csharp-video-tutorials.blogspot.com/2012/12/anonymous-authentication-and-aspnet.html
//! Windows authentication
//https://csharp-video-tutorials.blogspot.com/2012/12/windows-authentication-in-aspnet-part-87.html
//https://csharp-video-tutorials.blogspot.com/2012/12/windows-authentication-and.html
//! Forms authentication
//https://csharp-video-tutorials.blogspot.com/2012/12/forms-authentication-using-user-names.html
//https://csharp-video-tutorials.blogspot.com/2012/12/forms-authentication-in-aspnet-and-user.html
//https://csharp-video-tutorials.blogspot.com/2012/12/forms-authentication-against-users-in.html
//https://csharp-video-tutorials.blogspot.com/2012/12/forms-authentication-and-locking-user.html
//https://csharp-video-tutorials.blogspot.com/2012/12/implementing-password-reset-link-in.html
//https://csharp-video-tutorials.blogspot.com/2012/12/implementing-change-password-page-in.html

//! SSL
//https://csharp-video-tutorials.blogspot.com/2012/12/secure-socket-layer-in-aspnet-part-100.html
//https://csharp-video-tutorials.blogspot.com/2012/12/secure-socket-layer-in-aspnet-part-100.html
//https://csharp-video-tutorials.blogspot.com/2012/12/redirect-http-to-https-in-iis-part-102.html

//! User Control
//https://csharp-video-tutorials.blogspot.com/2012/12/user-controls-in-aspnet-part-104.html
//https://csharp-video-tutorials.blogspot.com/2012/12/adding-and-using-user-controls-on.html

//! Custom Controls
//* skipped

//!Caching
//https://csharp-video-tutorials.blogspot.com/2013/01/caching-in-aspnet-part-119.html
//https://csharp-video-tutorials.blogspot.com/2013/01/caching-multiple-responses-for-single.html
//https://csharp-video-tutorials.blogspot.com/2013/01/controlling-aspnet-caching-in-code-part.html
//https://csharp-video-tutorials.blogspot.com/2013/02/caching-application-data-in-aspnet-part.html
//* Cache["ProductsData"] = ds;
//* DataSet ds = (DataSet)Cache["ProductsData"];
Cache.Insert("ProductsData", ds);  //+ another way.
Cache.remove("ProductsData")
//https://csharp-video-tutorials.blogspot.com/2013/02/caching-in-aspnet-absoluteexpiration.html
//https://csharp-video-tutorials.blogspot.com/2013/02/caching-in-aspnet-absoluteexpiration.html
//https://csharp-video-tutorials.blogspot.com/2013/02/cache-dependency-on-files-in-aspnet.html
//https://csharp-video-tutorials.blogspot.com/2013/02/reloading-or-refreshing-cache.html
//https://csharp-video-tutorials.blogspot.com/2013/02/reloading-or-refreshing-cache.html
//https://csharp-video-tutorials.blogspot.com/2013/02/cache-dependency-on-sql-server-database.html
//https://csharp-video-tutorials.blogspot.com/2013/02/reload-data-into-cache-automatically.html

//! AutoEventWireup
//https://csharp-video-tutorials.blogspot.com/2013/03/what-is-autoeventwireup-in-aspnet-part.html

//! upload and download file
//https://csharp-video-tutorials.blogspot.com/2013/08/how-to-upload-and-download-files-using.html
//! Get and Post
//https://www.youtube.com/watch?v=Un2JTC7tFPI&list=PL6n9fhu94yhXQS_p1i-HLIftB9Y7Vnxlo&index=143
//https://csharp-video-tutorials.blogspot.com/2013/09/part-144-how-to-check-if-request-method.html

//!AutoComplete
//https://csharp-video-tutorials.blogspot.com/2013/09/part-145-implementing-autocomplete.html
//! Skipped master pages and other topics , capcha

//! Uploading file to SQL
//https://csharp-video-tutorials.blogspot.com/2015/08/save-image-to-database-using-aspnet.html
//https://csharp-video-tutorials.blogspot.com/2015/08/load-image-from-database-in-aspnet.html 