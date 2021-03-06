
A combination of parser and Json Converter to get Json objects from XML. It is similar to xml2js but its simple.

Install:
-------
>npm install ecjson

Example:
====
```javascript

var ecjson=require('ecjson');

 ecjson.XmlToJson("<root>Hello</root>", function (JsonData) {
                  console.log(JsonData);
              });
````

Convert Complex XML to Json easily. All the Attributes of any element will be given as the data-members in json.

For Example, the xml:

````xml
<messages>
	<note ID="501">
		<to sendAs="email">Maxwell</to>
		<from>Annabelle</from>
		<heading style="Font:'Calibri'">Reminder</heading>
		<body>Don't forget me this weekend!</body>
	</note>
</messages>
````
will be converted as,

````javascript

{"messages":
	{"note":
		{
		"ID":"501",
		"to":
			{"sendAs":"email",
			"value":"Maxwell"},
		"from":
			{"value":"Annabelle"},
		"heading":
			{"style":"Font:'Calibri'",
			"value":"Reminder"},
		"body":
			{"value":"Don't forget me this weekend!"}
		}
	}
}


````
