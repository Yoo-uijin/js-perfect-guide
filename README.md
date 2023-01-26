# js-perfect-guide

<br/>

## section 22: Utilize Browser Storage

<br/>

### &lt;localStorage, sessionStorage&gt;

    1. Simple key-value store
    2. Manage user preferences or basic user-data
    3. Can be cleared by the user and via JS

    ➡ Easy to use, quite versatile, bad for complex data

### &lt;Cookies&gt;

    1. Simple key-value store (some config options)
    2. Manage user preferences or basic user-data
    3. Can be cleared by the user and via JS

    ➡ A bit clunky to use, quite versatile, expiration point can be set, sent to server, bad for complex data

### &lt;IndexedDB&gt;

    1. Relatively sophisticated, client-side database
    2. Manage complex data your web app needs
    3. Can be cleared by the user and via JS

    ➡ A bit clunky to use, great for complex (non-critical) data, good performance


<br/>
<br/>     
<hr/>    
  
## Section 23: JavaScript & Browser Support
<br/>

### &lt;Browser Feature vs JavaScript Syntax&gt;

    1. Browser Features ("Browser APIs")
      - The browser "decides" which features it offers
      - Examples: fectch(), geolocation, DOM API, ...

      ➡ Implemented individually


    2. JavaScript Syntax
      - The browser's JS engine defines which JS syntax/version is
        supported
      - Examples: let, const, async/await, Promises, ...

      ➡ Implemented individually or in chunks (e.g. ES6)

#### Not all browsers support all features - and support changes all the time in modern ("evergreen") browsers. Legacy browsers (e.g. IE8) do not receive new features anymore.

<br/>
<br/>

### &lt;Which Browser Support Do You Need?&gt;

#### Naive Thought❗ Support ALL Browsers & ALL Browser Versions

- **DON'T** do this
- Disadvantages: Ship too much code, pass up on some features & improvements
- Analyse your market! Who will be your users?  
   ➡ Internal tool/app: Company browser might be clearly defined  
   ➡ Tech-savvy users: Very likely to use cutting-edge browsers & versions  
   ➡ Older people, non-tech-savvy audience: Likely to use older browsers
