# Frontend Performance Cheetsheet
![alt text](./image/frontendPerformanceCheatsheet.png)
## 1. Compression: 
    Gzip HTML, CSS, JavaScript
    WebP compress images
## 2. Selective Rendering
    lazy-loading
    conditional rendering
## 3. Dynamic imports
    use ES6 import
## 4. Code Spliting
    Webpack
## 5. Tree Shaking(Remove the dead code)
    ES6 import/export
    tree shaking tools like webpack, Rollup
## 6. Loading Sequence
    defer or async script
Comparision async, defer, and default <br>
    1. async  </br>
    Html parsing --> Pause parsing for script execution(Whenever downloaded) --> Continue parsing </br>
    2. Defer </br>
    Html parsing --> Complete parsing --> Execute Script in order </br>
    3. Default </br>
    Html parsing --> pause parsing then Download and execute script --> resume html parsing
## 7. Priority-Based Loading
    <link rel='preload'>
## 8. Pre-fetching
    <link rel='prefetch'>
