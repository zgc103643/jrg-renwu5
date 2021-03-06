var Utils = {

	hasClass: function(ele, cls) {
		return !!ele.className.match(new RegExp('\\b' + cls + '\\b'));
	},

	addClass: function(ele, cls) {
		if(ele.length && ele.length > 0) {
			for(var i = 0; i < ele.length; i++) {
				Utils.singleAddClass(ele[i], cls);
			}
		} else {
			Utils.singleAddClass(ele, cls);
		}
	},
	trim: function(str) {
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	},
	removeClass: function(ele, cls) {
		if(ele.length && ele.length > 0) {
			for(var i = 0; i < ele.length; i++) {
				Utils.singleRemoveClass(ele[i], cls);
			}
		} else {
			Utils.singleRemoveClass(ele, cls);
		}
	},

	singleAddClass: function(ele, cls) {
		if(Utils.hasClass(ele, cls)) return;
		ele.className = Utils.trim(ele.className)+' ' + cls;
	},

	singleRemoveClass: function(ele, cls) {
		ele.className = ele.className.replace(new RegExp('\\b' + cls + '\\b', 'g'), '');
	},

	indexOf: function(ele) {
		var parent = ele.parentElement,
			siblings = parent.children;
		for(var i = 0; i < siblings.length; i++) {
			if(ele === siblings[i]) return i;
		}
		return -1;
	}
};

var tabCt = document.querySelector('.tabs');

tabCt.addEventListener('click', function(e) {
	var target = e.target,
		tabs = tabCt.children,
		index = Utils.indexOf(target),
		panels = document.querySelectorAll('.panel');

	if(index > -1) {
		Utils.removeClass(tabs, 'active');
		Utils.addClass(target, 'active');
		Utils.removeClass(panels, 'active');
		Utils.addClass(panels[index], 'active');
	}
});