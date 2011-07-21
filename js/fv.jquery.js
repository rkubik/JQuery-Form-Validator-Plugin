/*!
 * jQuery Form Validator
 *
 * Copyright 2011, Russell Kubik
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Date: Thu Jun 30 14:16:56 2011 -0400
 */
(function($){
	/* applyNotification
	 * Desc:
	 * 		Takes in a form html element and options and displays the correct notification.
	 * Param:
	 * 		e : form html object
	 *		o : options object
	 */
	function applyNotification(e, o)
	{
		switch(o.notification)
		{
			case 'effect':
				$(e).effect(o.effect, { times:o.effectLoop }, o.effectDuration);
				return;
			case 'icon':
				var img = Image();
				$(img).attr('src', o.iconPath);
				$(img).attr('align', 'middle');
				$(img).addClass('fv-icon');
				$(e).after($(img));
				return;
		}
	}
	/* removeNotification
	 * Desc:
	 * 		Removes the applied notification
	 * Param:
	 * 		t : form html object
	 */
	function removeNotification(t)
	{
		switch(t)
		{
			case 'icon':
				$('.fv-icon').each(function() {
					$(this).remove();
				});
				break;
		}
	}
	/* checkRequired
	 * Desc:
	 * 		Takes in a string type and options and returns true or false based on rules.
	 * Param:
	 * 		t : string
	 * 		o : options object
	 */
	function checkRequired(e,o)
	{
		switch(e.type)
		{
			case 'text':
				if(e.value.length<o.minText)
					return false;
				break;
			case 'password':
				if(e.value.length<o.minPassword)
					return false
				break;
			case 'select-one':
				if(e.selectedIndex==o.selectOneIndex)
					return false;
				break;
			case 'select-multiple':
				if(countSelectMultiple(e)<o.minSelectMultiple)
					return false;
				break;
			case 'textarea':
				if(e.value.length<o.minTextarea)
					return false;
		}
		return true;
	}
	/* countSelectMultiple
	 * Desc:
	 * 		Takes in a select-multiple element and counts how many items in the list are selected.
	 * Param:
	 * 		e : select-multiple object
	 * Return:
	 * 		c : number of items selected
	 */
	function countSelectMultiple(e)
	{
		var c = 0;
		for (var i=0; i<e.length; i++)
			if (e[i].selected)
				c += 1;
		return c;
	}
    $.fn.extend({  
        // Pass the options variable to the function 
        FormValidator: function(options) { 
            // Set the default values, use comma to separate the settings, example: 
            var defaults = {
				// notification : effect, icon
				notification : 'effect',
				// effect options
                effect : 'shake',
                effectDuration : 300,
				effectLoop : 1,
				// icon
				iconPath : 'error.png',
				// element restrictions
				minText: 1,
				minPassword: 1,
				selectOneIndex: -1,
				minSelectMultiple: 1,
				minTextarea: 1
            } 
                  
            var options = $.extend(defaults, options); 
  
			// Iterate over desired forms
            return this.each(function() { 
                var o = options; 
				// Create a new form submit event
				$(this).submit(function() {
					// If notification type is icon, clear previous icons
					removeNotification(o.notification);
					var e = true;
					// Iterate over the required elements and verify that they are filled in
					$('.required', this).each(function() {
						if(!checkRequired(this,o))
						{
							e = false;
							applyNotification(this,o);
						}
					});
					return e;
				});
            }); 
        } 
    });
})(jQuery);