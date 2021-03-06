/**
 * Created by VM07 on 19/12/2014.
 */


var DOMParser = require('xmldom').DOMParser;
var indexfinder=function (main,str){
    return main.indexOf(str) == 0;
  };
var GetJson= function (xml) {
    //var xml= new DOMParser().parseFromString(XmlString,"text/xml")
    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
           // obj["Attr"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                if(!indexfinder((attribute.nodeName).toString(),"xmlns"))
                obj[attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName=="#text"?"value":item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = GetJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(GetJson(item));
            }
        }
    }
    return(obj);
};
var XmlToJson= function (XmlString,callback) {
    var JsonData= GetJson(new DOMParser().parseFromString(XmlString,"text/xml"));
    callback(JsonData);
}

module.exports.XmlToJson=XmlToJson;