__report = {"info":{"file":"src/Codehouse.Web/scripts/website/services/LazyImageService.js","fileShort":"website/services/LazyImageService.js","fileSafe":"website_services_LazyImageService_js","link":"files/website_services_LazyImageService_js/index.html"},"complexity":{"aggregate":{"line":1,"complexity":{"sloc":{"physical":147,"logical":83},"cyclomatic":14,"halstead":{"operators":{"distinct":19,"total":180,"identifiers":["__stripped__"]},"operands":{"distinct":65,"total":207,"identifiers":["__stripped__"]},"length":387,"vocabulary":84,"difficulty":30.25384615384615,"volume":2473.82684261538,"effort":74842.77670774068,"bugs":0.82460894753846,"time":4157.932039318926},"params":5}},"functions":[{"name":"<anonymous>","line":1,"complexity":{"sloc":{"physical":147,"logical":3},"cyclomatic":1,"halstead":{"operators":{"distinct":5,"total":7,"identifiers":["__stripped__"]},"operands":{"distinct":8,"total":9,"identifiers":["__stripped__"]},"length":16,"vocabulary":13,"difficulty":2.8125,"volume":59.207035490257475,"effort":166.51978731634915,"bugs":0.019735678496752493,"time":9.25109929535273},"params":0}},{"name":"lazyLoader","line":3,"complexity":{"sloc":{"physical":142,"logical":23},"cyclomatic":2,"halstead":{"operators":{"distinct":11,"total":36,"identifiers":["__stripped__"]},"operands":{"distinct":25,"total":37,"identifiers":["__stripped__"]},"length":73,"vocabulary":36,"difficulty":8.14,"volume":377.40452510528877,"effort":3072.072834357051,"bugs":0.1258015083684296,"time":170.67071301983617},"params":3}},{"name":"getDocHeight","line":13,"complexity":{"sloc":{"physical":7,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":3,"total":15,"identifiers":["__stripped__"]},"operands":{"distinct":8,"total":20,"identifiers":["__stripped__"]},"length":35,"vocabulary":11,"difficulty":3.75,"volume":121.08010665230542,"effort":454.0503999461453,"bugs":0.040360035550768475,"time":25.225022219230297},"params":0}},{"name":"addImage","line":27,"complexity":{"sloc":{"physical":9,"logical":5},"cyclomatic":3,"halstead":{"operators":{"distinct":4,"total":8,"identifiers":["__stripped__"]},"operands":{"distinct":7,"total":8,"identifiers":["__stripped__"]},"length":16,"vocabulary":11,"difficulty":2.2857142857142856,"volume":55.350905898196764,"effort":126.51635633873545,"bugs":0.018450301966065587,"time":7.028686463263081},"params":1}},{"name":"removeImage","line":38,"complexity":{"sloc":{"physical":13,"logical":8},"cyclomatic":4,"halstead":{"operators":{"distinct":11,"total":17,"identifiers":["__stripped__"]},"operands":{"distinct":9,"total":18,"identifiers":["__stripped__"]},"length":35,"vocabulary":20,"difficulty":11,"volume":151.26748332105768,"effort":1663.9423165316346,"bugs":0.05042249444035256,"time":92.44123980731302},"params":1}},{"name":"getDocHeight","line":55,"complexity":{"sloc":{"physical":7,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":3,"total":15,"identifiers":["__stripped__"]},"operands":{"distinct":8,"total":20,"identifiers":["__stripped__"]},"length":35,"vocabulary":11,"difficulty":3.75,"volume":121.08010665230542,"effort":454.0503999461453,"bugs":0.040360035550768475,"time":25.225022219230297},"params":0}},{"name":"checkDocumentHeight","line":62,"complexity":{"sloc":{"physical":13,"logical":7},"cyclomatic":3,"halstead":{"operators":{"distinct":6,"total":10,"identifiers":["__stripped__"]},"operands":{"distinct":5,"total":8,"identifiers":["__stripped__"]},"length":18,"vocabulary":11,"difficulty":4.800000000000001,"volume":62.26976913547136,"effort":298.8948918502626,"bugs":0.020756589711823786,"time":16.605271769459033},"params":0}},{"name":"checkImages","line":76,"complexity":{"sloc":{"physical":31,"logical":20},"cyclomatic":5,"halstead":{"operators":{"distinct":12,"total":50,"identifiers":["__stripped__"]},"operands":{"distinct":21,"total":50,"identifiers":["__stripped__"]},"length":100,"vocabulary":33,"difficulty":14.285714285714285,"volume":504.4394119358453,"effort":7206.277313369218,"bugs":0.16814647064528176,"time":400.34873963162323},"params":0}},{"name":"clearRenderTimer","line":109,"complexity":{"sloc":{"physical":4,"logical":2},"cyclomatic":1,"halstead":{"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]},"operands":{"distinct":3,"total":4,"identifiers":["__stripped__"]},"length":6,"vocabulary":5,"difficulty":1.3333333333333333,"volume":13.931568569324174,"effort":18.575424759098897,"bugs":0.004643856189774725,"time":1.0319680421721609},"params":0}},{"name":"startRenderTimer","line":114,"complexity":{"sloc":{"physical":3,"logical":1},"cyclomatic":1,"halstead":{"operators":{"distinct":2,"total":2,"identifiers":["__stripped__"]},"operands":{"distinct":4,"total":4,"identifiers":["__stripped__"]},"length":6,"vocabulary":6,"difficulty":1,"volume":15.509775004326936,"effort":15.509775004326936,"bugs":0.005169925001442312,"time":0.861654166907052},"params":0}},{"name":"startWatchingWindow","line":118,"complexity":{"sloc":{"physical":6,"logical":4},"cyclomatic":1,"halstead":{"operators":{"distinct":3,"total":7,"identifiers":["__stripped__"]},"operands":{"distinct":11,"total":14,"identifiers":["__stripped__"]},"length":21,"vocabulary":14,"difficulty":1.9090909090909092,"volume":79.95445336320968,"effort":152.64032005703666,"bugs":0.026651484454403226,"time":8.480017780946481},"params":0}},{"name":"stopWatchingWindow","line":126,"complexity":{"sloc":{"physical":6,"logical":4},"cyclomatic":1,"halstead":{"operators":{"distinct":3,"total":6,"identifiers":["__stripped__"]},"operands":{"distinct":9,"total":12,"identifiers":["__stripped__"]},"length":18,"vocabulary":12,"difficulty":2,"volume":64.52932501298082,"effort":129.05865002596164,"bugs":0.02150977500432694,"time":7.169925001442313},"params":0}},{"name":"windowChanged","line":133,"complexity":{"sloc":{"physical":5,"logical":2},"cyclomatic":2,"halstead":{"operators":{"distinct":3,"total":3,"identifiers":["__stripped__"]},"operands":{"distinct":2,"total":2,"identifiers":["__stripped__"]},"length":5,"vocabulary":5,"difficulty":1.5,"volume":11.60964047443681,"effort":17.414460711655217,"bugs":0.0038698801581456034,"time":0.9674700395364009},"params":0}}],"maintainability":68.64326785926055,"params":0.38461538461538464,"module":"website/services/LazyImageService.js"},"jshint":{"messages":[{"severity":"error","line":97,"column":24,"message":"'i' is already defined.","source":"'{a}' is already defined."}]}}