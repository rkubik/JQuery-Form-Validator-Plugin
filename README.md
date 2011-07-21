JQuery Form Validator Plugin - Easy form validation, tons of options, light-weight
================================

Usage
---
Needed files:

    jquery.js (1.5+)
	jquery-ui.js (1.5+)
	fv-jquery.js

Optional files:

    fv-style.css
	images/error.png

Basic use:

JavaScript:

	$(document).ready(function() {
		// Applies the form validator on all forms in the document
		$('form').FormValidator();
	});
	
Html:

	<form action="serve.php" method="post">
		<div><label for="name">Name:</label> <input type="text" name="name"/></div>
		<!--Put the class 'required' on fields which need to be filled in-->
		<div><label for="email">Email:</label> <input class="required" type="text" name="email"/></div>
	</form>

Options
---
* notification `String` Default: 'effect'

    **Description**: If a form element has not been filled out properly alert using one of the following notification options.
	
	**Options**: ['effect','icons']

* effect `String` Default: 'shake'

    **Description**: If notification has been set to 'effect', choose which effect your would like to trigger.
	
	**Options**: ['blind', 'bounce', 'clip', 'drop', 'explode', 'fold', 'highlight', 'puff', 'pulsate', 'scale', 'shake', 'size', 'slide', 'transfer']
    
* effectDuration `Int` Default: 300

    **Description**: How long the effect lasts.
	
	**Options**: Positive integer

* effectLoop `Int` Default: 1

    **Description**: How many times to loop the effect.
	
	**Options**: Positive integer

* iconPath `String` Default: 'images/error.png'

    **Description**: If notification has been set to 'icons', the path to look for the icon.
	
	**Options**: Valid file path

* iconDuration `Int` Default: 1000

    **Description**: How long to fade in the icon.
	
	**Options**: Positive integer

* minText `Int` Default: 1

    **Description**: Minimum length of an input textbox.
	
	**Options**: Positive integer

* minPassword `Int` Default: 1

    **Description**: Minimum length of an input password.
	
	**Options**: Positive integer

* selectOneIndex `Int` Default: -1

    **Description**: Invalid dropdown option. Example: If you have a default option '-- Select One --' change this to 0
	
	**Options**: Integer

* minSelectMultiple `Int` Default: 1

    **Description**: Minimum number of option to select from a select-multiple element.
	
	**Options**: Positive integer

* minTextarea `Int` Default: 1

    **Description**: Minimum length of a textarea box.
	
	**Options**: Positive integer