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