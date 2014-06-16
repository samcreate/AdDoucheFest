walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	var replace_txt = "Ad Douche Fest";

	v = v.replace(/\bCannes Lions\b/g, replace_txt);
	v = v.replace(/\bCannes lions\b/g, replace_txt);
	v = v.replace(/\bcannes Lions\b/g, replace_txt);
	v = v.replace(/\bcannes lions\b/g, replace_txt);
	v = v.replace(/\bcannes\b/g, replace_txt);
	v = v.replace(/\bCannes\b/g, replace_txt);
	v = v.replace(/\bCannesLions\b/g, "AdDoucheFest");
	v = v.replace(/\b#CannesLions\b/g, "#AdDoucheFest");
	v = v.replace(/\bCannes_Lions\b/g, "AdDouche_Fest");
	v = v.replace(/\bcanneslions\b/g, "douchefest");
	v = v.replace(/\btogether of people interested in creative communications\b/g, "together of people interested in creative ways of being a complete douche.");

	textNode.nodeValue = v;
}


