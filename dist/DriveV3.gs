(function(scope,nameSpace){
	/*
	 * Library Code
	 */
	function setTokenService(a){tokenService_=a}function testTokenService(){return tokenService_()}function CALL_(e,c){var b={method:'',muteHttpExceptions:!0,contentType:'application/json',headers:{Authorization:'Bearer '+tokenService_()}};var d=BASEURL_+e;for(option in c)b[option]=c[option];var a=UrlFetchApp.fetch(d,b);if(a.getResponseCode()!=200)throw new Error(a.getContentText());else return JSON.parse(a.getContentText())}function CALLPAGE_(g,h,i){var e={method:'',muteHttpExceptions:!0,contentType:'application/json',headers:{Authorization:'Bearer '+tokenService_()}};for(option in h)e[option]=h[option];var a=BASEURL_+g;var b=[];var c;do{c&&(a=buildUrl_(a,{pageToken:c}));var d=UrlFetchApp.fetch(a,e);if(d.getResponseCode()!=200)throw new Error(d.getContentText());var f=JSON.parse(d.getContentText());c=f.nextPageToken,b=b.concat(f[i]),a=BASEURL_+g}while(c);return b}function buildUrl_(b,a){var a=a||{};var c=Object.keys(a).map(function(b){return encodeURIComponent(b)+'='+encodeURIComponent(a[b])}).join('&');return b+(b.indexOf('?')>=0?'&':'?')+c}function aboutGet(d){var a=buildUrl_('about',d);var b={method:'GET'};var c=CALL_(a,b);return c}function changesGetStartPageToken(d){var a=buildUrl_('changes/startPageToken',d);var b={method:'GET'};var c=CALL_(a,b);return c}function changesList(e,d){var a=buildUrl_('changes',d);var b={method:'GET'};var c=CALLPAGE_(a,b,'changes');return c}function changesWatch(f,d,e){var a=buildUrl_('changes/watch',e);var b={method:'POST',payload:JSON.stringify(d)};var c=CALL_(a,b);return c}function channelsStop(d,e){var a=buildUrl_('channels/stop',e);var b={method:'POST',payload:JSON.stringify(d)};var c=CALL_(a,b);return c}function commentsCreate(d,a,e){var b=buildUrl_('files/'+d+'/comments',e);var c={method:'POST',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function commentsDelete(d,e,f){var a=buildUrl_('files/'+d+'/comments/'+e,f);var b={method:'DELETE'};var c=CALL_(a,b);return c}function commentsGet(d,e,f){var a=buildUrl_('files/'+d+'/comments/'+e,f);var b={method:'GET'};var c=CALL_(a,b);return c}function commentsList(d,e){var a=buildUrl_('files/'+d+'/comments',e);var b={method:'GET'};var c=CALLPAGE_(a,b,'comments');return c}function commentsUpdate(d,e,a,f){var b=buildUrl_('files/'+d+'/comments/'+e,f);var c={method:'PATCH',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function filesCopy(d,a,e){var b=buildUrl_('files/'+d+'/copy',e);var c={method:'POST',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function filesCreate(a,d){var b=buildUrl_('files',d);var c={method:'POST',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function filesDelete(d,e){var a=buildUrl_('files/'+d,e);var b={method:'DELETE'};var c=CALL_(a,b);return c}function filesEmptyTrash(d){var a=buildUrl_('files/trash',d);var b={method:'DELETE'};var c=CALL_(a,b);return c}function filesExport(d,f,e){var a=buildUrl_('files/'+d+'/export',e);var b={method:'GET'};var c=CALL_(a,b);return c}function filesGenerateIds(d){var a=buildUrl_('files/generateIds',d);var b={method:'GET'};var c=CALL_(a,b);return c}function filesGet(d,e){var a=buildUrl_('files/'+d,e);var b={method:'GET'};var c=CALL_(a,b);return c}function filesList(d){var a=buildUrl_('files',d);var b={method:'GET'};var c=CALLPAGE_(a,b,'files');return c}function filesUpdate(d,a,e){var b=buildUrl_('files/'+d,e);var c={method:'PATCH',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function filesWatch(d,a,e){var b=buildUrl_('files/'+d+'/watch',e);var c={method:'POST',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function permissionsCreate(d,a,e){var b=buildUrl_('files/'+d+'/permissions',e);var c={method:'POST',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function permissionsDelete(d,e,f){var a=buildUrl_('files/'+d+'/permissions/'+e,f);var b={method:'DELETE'};var c=CALL_(a,b);return c}function permissionsGet(d,e,f){var a=buildUrl_('files/'+d+'/permissions/'+e,f);var b={method:'GET'};var c=CALL_(a,b);return c}function permissionsList(d,e){var a=buildUrl_('files/'+d+'/permissions',e);var b={method:'GET'};var c=CALL_(a,b);return c}function permissionsUpdate(d,e,a,f){var b=buildUrl_('files/'+d+'/permissions/'+e,f);var c={method:'PATCH',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function repliesCreate(d,e,a,f){var b=buildUrl_('files/'+d+'/comments/'+e+'/replies',f);var c={method:'POST',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function repliesDelete(d,e,f,g){var a=buildUrl_('files/'+d+'/comments/'+e+'/replies/'+f,g);var b={method:'DELETE'};var c=CALL_(a,b);return c}function repliesGet(d,e,f,g){var a=buildUrl_('files/'+d+'/comments/'+e+'/replies/'+f,g);var b={method:'GET'};var c=CALL_(a,b);return c}function repliesList(d,e,f){var a=buildUrl_('files/'+d+'/comments/'+e+'/replies',f);var b={method:'GET'};var c=CALLPAGE_(a,b,'replies');return c}function repliesUpdate(d,e,f,a,g){var b=buildUrl_('files/'+d+'/comments/'+e+'/replies/'+f,g);var c={method:'PATCH',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}function revisionsDelete(d,e,f){var a=buildUrl_('files/'+d+'/revisions/'+e,f);var b={method:'DELETE'};var c=CALL_(a,b);return c}function revisionsGet(d,e,f){var a=buildUrl_('files/'+d+'/revisions/'+e,f);var b={method:'GET'};var c=CALL_(a,b);return c}function revisionsList(d,e){var a=buildUrl_('files/'+d+'/revisions',e);var b={method:'GET'};var c=CALL_(a,b);return c}function revisionsUpdate(d,e,a,f){var b=buildUrl_('files/'+d+'/revisions/'+e,f);var c={method:'PATCH',payload:JSON.stringify(a)};var a=CALL_(b,c);return a}var BASEURL_='https://www.googleapis.com/drive/v3/';var tokenService_;(function(f,g,e,d,h){function i(a){d=a}function j(){return d()}function b(g,c){var b={method:'',muteHttpExceptions:!0,contentType:'application/json',headers:{Authorization:'Bearer '+d()}};var f=e+g;for(option in c)b[option]=c[option];var a=UrlFetchApp.fetch(f,b);if(a.getResponseCode()!=200)throw new Error(a.getContentText());else return JSON.parse(a.getContentText())}function c(j,i,k){var f={method:'',muteHttpExceptions:!0,contentType:'application/json',headers:{Authorization:'Bearer '+d()}};for(option in i)f[option]=i[option];var g=e+j;var a=[];var b;do{b&&(g+='pageToken='+b);var c=UrlFetchApp.fetch(g,f);if(c.getResponseCode()!=200)throw new Error(c.getContentText());var h=JSON.parse(c.getContentText());b=h.nextPageToken,a=a.concat(h[k])}while(b);return a}function a(b,a){var a=a||{};var c=Object.keys(a).map(function(b){return encodeURIComponent(b)+'='+encodeURIComponent(a[b])}).join('&');return b+(b.indexOf('?')>=0?'&':'?')+c}function k(f){var c=a('about',f);var d={method:'GET'};var e=b(c,d);return e}function l(f){var c=a('changes/startPageToken',f);var d={method:'GET'};var e=b(c,d);return e}function m(g,f){var b=a('changes',f);var d={method:'GET'};var e=c(b,d,'items');return e}function n(h,f,g){var b=a('changes/watch',g);var d={method:'POST',payload:JSON.stringify(f)};var e=c(b,d,'items');return e}function o(f,g){var c=a('channels/stop',g);var d={method:'POST',payload:JSON.stringify(f)};var e=b(c,d);return e}function p(f,c,g){var d=a('files/'+f+'/comments',g);var e={method:'POST',payload:JSON.stringify(c)};var c=b(d,e);return c}function q(f,g,h){var c=a('files/'+f+'/comments/'+g,h);var d={method:'DELETE'};var e=b(c,d);return e}function r(f,g,h){var c=a('files/'+f+'/comments/'+g,h);var d={method:'GET'};var e=b(c,d);return e}function s(f,g){var b=a('files/'+f+'/comments',g);var d={method:'GET'};var e=c(b,d,'items');return e}function t(f,g,c,h){var d=a('files/'+f+'/comments/'+g,h);var e={method:'PATCH',payload:JSON.stringify(c)};var c=b(d,e);return c}function u(f,c,g){var d=a('files/'+f+'/copy',g);var e={method:'POST',payload:JSON.stringify(c)};var c=b(d,e);return c}function v(c,f){var d=a('files',f);var e={method:'POST',payload:JSON.stringify(c)};var c=b(d,e);return c}function w(f,g){var c=a('files/'+f,g);var d={method:'DELETE'};var e=b(c,d);return e}function x(f){var c=a('files/trash',f);var d={method:'DELETE'};var e=b(c,d);return e}function y(f,h,g){var c=a('files/'+f+'/export',g);var d={method:'GET'};var e=b(c,d);return e}function z(f){var c=a('files/generateIds',f);var d={method:'GET'};var e=b(c,d);return e}function A(f,g){var c=a('files/'+f,g);var d={method:'GET'};var e=b(c,d);return e}function B(f){var b=a('files',f);var d={method:'GET'};var e=c(b,d,'items');return e}function C(f,c,g){var d=a('files/'+f,g);var e={method:'PATCH',payload:JSON.stringify(c)};var c=b(d,e);return c}function D(f,c,g){var d=a('files/'+f+'/watch',g);var e={method:'POST',payload:JSON.stringify(c)};var c=b(d,e);return c}function E(f,c,g){var d=a('files/'+f+'/permissions',g);var e={method:'POST',payload:JSON.stringify(c)};var c=b(d,e);return c}function F(f,g,h){var c=a('files/'+f+'/permissions/'+g,h);var d={method:'DELETE'};var e=b(c,d);return e}function G(f,g,h){var c=a('files/'+f+'/permissions/'+g,h);var d={method:'GET'};var e=b(c,d);return e}function H(f,g){var c=a('files/'+f+'/permissions',g);var d={method:'GET'};var e=b(c,d);return e}function I(f,g,c,h){var d=a('files/'+f+'/permissions/'+g,h);var e={method:'PATCH',payload:JSON.stringify(c)};var c=b(d,e);return c}function J(f,g,c,h){var d=a('files/'+f+'/comments/'+g+'/replies',h);var e={method:'POST',payload:JSON.stringify(c)};var c=b(d,e);return c}function K(f,g,h,i){var c=a('files/'+f+'/comments/'+g+'/replies/'+h,i);var d={method:'DELETE'};var e=b(c,d);return e}function L(f,g,h,i){var c=a('files/'+f+'/comments/'+g+'/replies/'+h,i);var d={method:'GET'};var e=b(c,d);return e}function M(f,g,h){var b=a('files/'+f+'/comments/'+g+'/replies',h);var d={method:'GET'};var e=c(b,d,'items');return e}function N(f,g,h,c,i){var d=a('files/'+f+'/comments/'+g+'/replies/'+h,i);var e={method:'PATCH',payload:JSON.stringify(c)};var c=b(d,e);return c}function O(f,g,h){var c=a('files/'+f+'/revisions/'+g,h);var d={method:'DELETE'};var e=b(c,d);return e}function P(f,g,h){var c=a('files/'+f+'/revisions/'+g,h);var d={method:'GET'};var e=b(c,d);return e}function Q(f,g){var c=a('files/'+f+'/revisions',g);var d={method:'GET'};var e=b(c,d);return e}function R(f,g,c,h){var d=a('files/'+f+'/revisions/'+g,h);var e={method:'PATCH',payload:JSON.stringify(c)};var c=b(d,e);return c}e='https://www.googleapis.com/drive/v3/',h={setTokenService:i,testTokenService:j,aboutGet:k,changesGetStartPageToken:l,changesList:m,changesWatch:n,channelsStop:o,commentsCreate:p,commentsDelete:q,commentsGet:r,commentsList:s,commentsUpdate:t,filesCopy:u,filesCreate:v,filesDelete:w,filesEmptyTrash:x,filesExport:y,filesGenerateIds:z,filesGet:A,filesList:B,filesUpdate:C,filesWatch:D,permissionsCreate:E,permissionsDelete:F,permissionsGet:G,permissionsList:H,permissionsUpdate:I,repliesCreate:J,repliesDelete:K,repliesGet:L,repliesList:M,repliesUpdate:N,revisionsDelete:O,revisionsGet:P,revisionsList:Q,revisionsUpdate:R},f[g]=f[g]||h}(this,'DriveV3'))
	/*
	 * End Library Code
	 */
var publicAPI = { 
    setTokenService:setTokenService,testTokenService:testTokenService,aboutGet:aboutGet,changesGetStartPageToken:changesGetStartPageToken,changesList:changesList,changesWatch:changesWatch,channelsStop:channelsStop,commentsCreate:commentsCreate,commentsDelete:commentsDelete,commentsGet:commentsGet,commentsList:commentsList,commentsUpdate:commentsUpdate,filesCopy:filesCopy,filesCreate:filesCreate,filesDelete:filesDelete,filesEmptyTrash:filesEmptyTrash,filesExport:filesExport,filesGenerateIds:filesGenerateIds,filesGet:filesGet,filesList:filesList,filesUpdate:filesUpdate,filesWatch:filesWatch,permissionsCreate:permissionsCreate,permissionsDelete:permissionsDelete,permissionsGet:permissionsGet,permissionsList:permissionsList,permissionsUpdate:permissionsUpdate,repliesCreate:repliesCreate,repliesDelete:repliesDelete,repliesGet:repliesGet,repliesList:repliesList,repliesUpdate:repliesUpdate,revisionsDelete:revisionsDelete,revisionsGet:revisionsGet,revisionsList:revisionsList,revisionsUpdate:revisionsUpdate
                };
scope[nameSpace] = scope[nameSpace] || publicAPI;
})(this, "DriveV3");