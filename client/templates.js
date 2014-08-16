(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<body><nav class="navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a href="/" class="navbar-brand">crab-synth</a></div><ul class="nav navbar-nav"><li><a href="/">playlist</a></li></ul></div></nav><div class="container"><main role="page-container"></main></div></body>';
    };

    // head.jade compiled template
    templatizer["head"] = function tmpl_head() {
        return '<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>';
    };

    // includes/experiment.jade compiled template
    templatizer["includes"]["experiment"] = function tmpl_includes_experiment() {
        return '<li class="person list-group-item"><!--img(role="avatar", width="40", height="40")--><a role="name"></a><span class="btn-group pull-right"> <!--a.btn.btn-default(role="action-edit") play --><!--a.btn.btn-danger(href="#", role="action-delete") delete--></span></li>';
    };

    // includes/formInput.jade compiled template
    templatizer["includes"]["formInput"] = function tmpl_includes_formInput() {
        return '<div class="form-group"><label role="label"></label><div role="message-container"><div role="message-text" class="alert alert-danger"></div></div><input class="form-control"/></div>';
    };

    // includes/person.jade compiled template
    templatizer["includes"]["person"] = function tmpl_includes_person() {
        return '<li class="person list-group-item"><img role="avatar" width="40" height="40"/><a role="name"></a><span class="btn-group pull-right"> <!--a.btn.btn-default(role="action-edit") play --><!--a.btn.btn-danger(href="#", role="action-delete") delete--></span></li>';
    };

    // pages/listen.jade compiled template
    templatizer["pages"]["listen"] = function tmpl_pages_listen() {
        return '<section class="page view-person"><h2 role="name"></h2><img role="avatar" width="80" height="80"/><div class="buttons"><a role="edit" class="btn">Edit</a><button role="delete" class="btn">Delete</button></div></section>';
    };

    // pages/personView.jade compiled template
    templatizer["pages"]["personView"] = function tmpl_pages_personView() {
        return '<div><h1 role="name"></h1><div class="btn-group"><button role="action-play" class="btn btn-default">play (<span role="dumpPlayhead"> </span>s)</button><button href="#" role="action-stop" class="btn btn-danger">stop</button></div><div class="panel"><div class="panel-body"><span role="dump"></span></div></div></div>';
    };

    // pages/playlist.jade compiled template
    templatizer["pages"]["playlist"] = function tmpl_pages_playlist() {
        return '<section class="page pageOne"><h2>Listen to an experiment</h2><ul role="people-list" class="list-group"></ul></section>';
    };

    return templatizer;
}));