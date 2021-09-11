Ext.data.JsonP.Autolinker_HtmlTag({"tagname":"class","name":"Autolinker.HtmlTag","autodetected":{},"files":[{"filename":"HtmlTag.js","href":"HtmlTag.html#Autolinker-HtmlTag"}],"extends":null,"members":[{"name":"attrs","tagname":"cfg","owner":"Autolinker.HtmlTag","id":"cfg-attrs","meta":{}},{"name":"innerHTML","tagname":"cfg","owner":"Autolinker.HtmlTag","id":"cfg-innerHTML","meta":{}},{"name":"innerHtml","tagname":"cfg","owner":"Autolinker.HtmlTag","id":"cfg-innerHtml","meta":{}},{"name":"tagName","tagname":"cfg","owner":"Autolinker.HtmlTag","id":"cfg-tagName","meta":{}},{"name":"whitespaceRegex","tagname":"property","owner":"Autolinker.HtmlTag","id":"property-whitespaceRegex","meta":{"protected":true}},{"name":"constructor","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-constructor","meta":{}},{"name":"addClass","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-addClass","meta":{"chainable":true}},{"name":"buildAttrsStr","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-buildAttrsStr","meta":{"protected":true}},{"name":"getAttr","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-getAttr","meta":{}},{"name":"getAttrs","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-getAttrs","meta":{}},{"name":"getClass","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-getClass","meta":{}},{"name":"getInnerHtml","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-getInnerHtml","meta":{}},{"name":"getTagName","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-getTagName","meta":{}},{"name":"hasClass","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-hasClass","meta":{}},{"name":"removeClass","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-removeClass","meta":{"chainable":true}},{"name":"setAttr","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-setAttr","meta":{"chainable":true}},{"name":"setAttrs","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-setAttrs","meta":{"chainable":true}},{"name":"setClass","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-setClass","meta":{}},{"name":"setInnerHtml","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-setInnerHtml","meta":{"chainable":true}},{"name":"setTagName","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-setTagName","meta":{"chainable":true}},{"name":"toAnchorString","tagname":"method","owner":"Autolinker.HtmlTag","id":"method-toAnchorString","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Autolinker.HtmlTag","short_doc":"Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/HtmlTag.html#Autolinker-HtmlTag' target='_blank'>HtmlTag.js</a></div></pre><div class='doc-contents'><p>Represents an HTML tag, which can be used to easily build/modify HTML tags programmatically.</p>\n\n<p>Autolinker uses this abstraction to create HTML tags, and then write them out as strings. You may also use\nthis class in your code, especially within a <a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a>.</p>\n\n<h2>Examples</h2>\n\n<p>Example instantiation:</p>\n\n<pre><code>var tag = new <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a>( {\n    tagName : 'a',\n    attrs   : { 'href': 'http://google.com', 'class': 'external-link' },\n    innerHtml : 'Google'\n} );\n\ntag.toAnchorString();  // &lt;a href=\"http://google.com\" class=\"external-link\"&gt;Google&lt;/a&gt;\n\n// Individual accessor methods\ntag.getTagName();                 // 'a'\ntag.getAttr( 'href' );            // 'http://google.com'\ntag.hasClass( 'external-link' );  // true\n</code></pre>\n\n<p>Using mutator methods (which may be used in combination with instantiation config properties):</p>\n\n<pre><code>var tag = new <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a>();\ntag.setTagName( 'a' );\ntag.setAttr( 'href', 'http://google.com' );\ntag.addClass( 'external-link' );\ntag.setInnerHtml( 'Google' );\n\ntag.getTagName();                 // 'a'\ntag.getAttr( 'href' );            // 'http://google.com'\ntag.hasClass( 'external-link' );  // true\n\ntag.toAnchorString();  // &lt;a href=\"http://google.com\" class=\"external-link\"&gt;Google&lt;/a&gt;\n</code></pre>\n\n<h2>Example use within a <a href=\"#!/api/Autolinker-cfg-replaceFn\" rel=\"Autolinker-cfg-replaceFn\" class=\"docClass\">replaceFn</a></h2>\n\n<pre><code>var html = <a href=\"#!/api/Autolinker-method-link\" rel=\"Autolinker-method-link\" class=\"docClass\">Autolinker.link</a>( \"Test google.com\", {\n    replaceFn : function( match ) {\n        var tag = match.buildTag();  // returns an <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a> instance, configured with the Match's href and anchor text\n        tag.setAttr( 'rel', 'nofollow' );\n\n        return tag;\n    }\n} );\n\n// generated html:\n//   Test &lt;a href=\"http://google.com\" target=\"_blank\" rel=\"nofollow\"&gt;google.com&lt;/a&gt;\n</code></pre>\n\n<h2>Example use with a new tag for the replacement</h2>\n\n<pre><code>var html = <a href=\"#!/api/Autolinker-method-link\" rel=\"Autolinker-method-link\" class=\"docClass\">Autolinker.link</a>( \"Test google.com\", {\n    replaceFn : function( match ) {\n        var tag = new <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a>( {\n            tagName : 'button',\n            attrs   : { 'title': 'Load URL: ' + match.getAnchorHref() },\n            innerHtml : 'Load URL: ' + match.getAnchorText()\n        } );\n\n        return tag;\n    }\n} );\n\n// generated html:\n//   Test &lt;button title=\"Load URL: http://google.com\"&gt;Load URL: google.com&lt;/button&gt;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-attrs' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-cfg-attrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-cfg-attrs' class='name expandable'>attrs</a> : Object.&lt;String, String&gt;<span class=\"signature\"></span></div><div class='description'><div class='short'>An key/value Object (map) of attributes to create the tag with. ...</div><div class='long'><p>An key/value Object (map) of attributes to create the tag with. The keys are the attribute names, and the\nvalues are the attribute values.</p>\n</div></div></div><div id='cfg-innerHTML' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-cfg-innerHTML' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-cfg-innerHTML' class='name expandable'>innerHTML</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Alias of innerHtml, accepted for consistency with the browser DOM api, but prefer the camelCased version\nfor acronym ...</div><div class='long'><p>Alias of <a href=\"#!/api/Autolinker.HtmlTag-cfg-innerHtml\" rel=\"Autolinker.HtmlTag-cfg-innerHtml\" class=\"docClass\">innerHtml</a>, accepted for consistency with the browser DOM api, but prefer the camelCased version\nfor acronym names.</p>\n</div></div></div><div id='cfg-innerHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-cfg-innerHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-cfg-innerHtml' class='name expandable'>innerHtml</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The inner HTML for the tag. ...</div><div class='long'><p>The inner HTML for the tag.</p>\n\n<p>Note the camel case name on <code>innerHtml</code>. Acronyms are camelCased in this utility (such as not to run into the acronym\nnaming inconsistency that the DOM developers created with <code>XMLHttpRequest</code>). You may alternatively use <a href=\"#!/api/Autolinker.HtmlTag-cfg-innerHTML\" rel=\"Autolinker.HtmlTag-cfg-innerHTML\" class=\"docClass\">innerHTML</a>\nif you prefer, but this one is recommended.</p>\n</div></div></div><div id='cfg-tagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-cfg-tagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-cfg-tagName' class='name expandable'>tagName</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The tag name. ...</div><div class='long'><p>The tag name. Ex: 'a', 'button', etc.</p>\n\n<p>Not required at instantiation time, but should be set using <a href=\"#!/api/Autolinker.HtmlTag-method-setTagName\" rel=\"Autolinker.HtmlTag-method-setTagName\" class=\"docClass\">setTagName</a> before <a href=\"#!/api/Autolinker.HtmlTag-method-toAnchorString\" rel=\"Autolinker.HtmlTag-method-toAnchorString\" class=\"docClass\">toAnchorString</a>\nis executed.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-whitespaceRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-property-whitespaceRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-property-whitespaceRegex' class='name expandable'>whitespaceRegex</a> : RegExp<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Regular expression used to match whitespace in a string of CSS classes. ...</div><div class='long'><p>Regular expression used to match whitespace in a string of CSS classes.</p>\n<p>Defaults to: <code>/\\s+/</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Autolinker.HtmlTag-method-constructor' class='name expandable'>Autolinker.HtmlTag</a>( <span class='pre'>[cfg]</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cfg</span> : Object (optional)<div class='sub-desc'><p>The configuration properties for this class, in an Object (map)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-addClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-addClass' class='name expandable'>addClass</a>( <span class='pre'>cssClass</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Convenience method to add one or more CSS classes to the HtmlTag. ...</div><div class='long'><p>Convenience method to add one or more CSS classes to the HtmlTag. Will not add duplicate CSS classes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cssClass</span> : String<div class='sub-desc'><p>One or more space-separated CSS classes to add.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>This HtmlTag instance, so that method calls may be chained.</p>\n</div></li></ul></div></div></div><div id='method-buildAttrsStr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-buildAttrsStr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-buildAttrsStr' class='name expandable'>buildAttrsStr</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Support method for toAnchorString, returns the string space-separated key=\"value\" pairs, used to populate\nthe stringi...</div><div class='long'><p>Support method for <a href=\"#!/api/Autolinker.HtmlTag-method-toAnchorString\" rel=\"Autolinker.HtmlTag-method-toAnchorString\" class=\"docClass\">toAnchorString</a>, returns the string space-separated key=\"value\" pairs, used to populate\nthe stringified HtmlTag.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Example return: <code>attr1=\"value1\" attr2=\"value2\"</code></p>\n</div></li></ul></div></div></div><div id='method-getAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-getAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-getAttr' class='name expandable'>getAttr</a>( <span class='pre'>attrName</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves an attribute from the HtmlTag. ...</div><div class='long'><p>Retrieves an attribute from the HtmlTag. If the attribute does not exist, returns <code>undefined</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrName</span> : String<div class='sub-desc'><p>The attribute name to retrieve.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The attribute's value, or <code>undefined</code> if it does not exist on the HtmlTag.</p>\n</div></li></ul></div></div></div><div id='method-getAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-getAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-getAttrs' class='name expandable'>getAttrs</a>( <span class='pre'></span> ) : Object.&lt;String, String&gt;<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the attributes Object (map) for the HtmlTag. ...</div><div class='long'><p>Retrieves the attributes Object (map) for the HtmlTag.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object.&lt;String, String&gt;</span><div class='sub-desc'><p>A key/value object of the attributes for the HtmlTag.</p>\n</div></li></ul></div></div></div><div id='method-getClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-getClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-getClass' class='name expandable'>getClass</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when\nthere a...</div><div class='long'><p>Convenience method to retrieve the CSS class(es) for the HtmlTag, which will each be separated by spaces when\nthere are multiple.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInnerHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-getInnerHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-getInnerHtml' class='name expandable'>getInnerHtml</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the inner HTML for the tag. ...</div><div class='long'><p>Retrieves the inner HTML for the tag.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-getTagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-getTagName' class='name expandable'>getTagName</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieves the tag name. ...</div><div class='long'><p>Retrieves the tag name.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-hasClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-hasClass' class='name expandable'>hasClass</a>( <span class='pre'>cssClass</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Convenience method to check if the tag has a CSS class or not. ...</div><div class='long'><p>Convenience method to check if the tag has a CSS class or not.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cssClass</span> : String<div class='sub-desc'><p>The CSS class to check for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the HtmlTag has the CSS class, <code>false</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-removeClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-removeClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-removeClass' class='name expandable'>removeClass</a>( <span class='pre'>cssClass</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Convenience method to remove one or more CSS classes from the HtmlTag. ...</div><div class='long'><p>Convenience method to remove one or more CSS classes from the HtmlTag.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cssClass</span> : String<div class='sub-desc'><p>One or more space-separated CSS classes to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>This HtmlTag instance, so that method calls may be chained.</p>\n</div></li></ul></div></div></div><div id='method-setAttr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-setAttr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-setAttr' class='name expandable'>setAttr</a>( <span class='pre'>attrName, attrValue</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets an attribute on the HtmlTag. ...</div><div class='long'><p>Sets an attribute on the HtmlTag.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrName</span> : String<div class='sub-desc'><p>The attribute name to set.</p>\n</div></li><li><span class='pre'>attrValue</span> : String<div class='sub-desc'><p>The attribute value to set.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>This HtmlTag instance, so that method calls may be chained.</p>\n</div></li></ul></div></div></div><div id='method-setAttrs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-setAttrs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-setAttrs' class='name expandable'>setAttrs</a>( <span class='pre'>attrs</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets one or more attributes on the HtmlTag. ...</div><div class='long'><p>Sets one or more attributes on the HtmlTag.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attrs</span> : Object.&lt;String, String&gt;<div class='sub-desc'><p>A key/value Object (map) of the attributes to set.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>This HtmlTag instance, so that method calls may be chained.</p>\n</div></li></ul></div></div></div><div id='method-setClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-setClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-setClass' class='name expandable'>setClass</a>( <span class='pre'>cssClass</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the provided cssClass, overwriting any current CSS classes on the HtmlTag. ...</div><div class='long'><p>Sets the provided <code>cssClass</code>, overwriting any current CSS classes on the HtmlTag.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cssClass</span> : String<div class='sub-desc'><p>One or more space-separated CSS classes to set (overwrite).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>This HtmlTag instance, so that method calls may be chained.</p>\n</div></li></ul></div></div></div><div id='method-setInnerHtml' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-setInnerHtml' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-setInnerHtml' class='name expandable'>setInnerHtml</a>( <span class='pre'>html</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets the inner HTML for the tag. ...</div><div class='long'><p>Sets the inner HTML for the tag.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>html</span> : String<div class='sub-desc'><p>The inner HTML to set.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>This HtmlTag instance, so that method calls may be chained.</p>\n</div></li></ul></div></div></div><div id='method-setTagName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-setTagName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-setTagName' class='name expandable'>setTagName</a>( <span class='pre'>tagName</span> ) : <a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Sets the tag name that will be used to generate the tag with. ...</div><div class='long'><p>Sets the tag name that will be used to generate the tag with.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tagName</span> : String<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Autolinker.HtmlTag\" rel=\"Autolinker.HtmlTag\" class=\"docClass\">Autolinker.HtmlTag</a></span><div class='sub-desc'><p>This HtmlTag instance, so that method calls may be chained.</p>\n</div></li></ul></div></div></div><div id='method-toAnchorString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Autolinker.HtmlTag'>Autolinker.HtmlTag</span><br/><a href='source/HtmlTag.html#Autolinker-HtmlTag-method-toAnchorString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Autolinker.HtmlTag-method-toAnchorString' class='name expandable'>toAnchorString</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Override of superclass method used to generate the HTML string for the tag. ...</div><div class='long'><p>Override of superclass method used to generate the HTML string for the tag.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});