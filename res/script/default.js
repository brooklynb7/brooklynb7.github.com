(function(){
	var kila = {};

	kila.image = function(small,large){
		this.img_path = "res/images/";
		this.small = this.img_path + small;
		this.large = this.img_path + large;
	};

	kila.image.prototype.content = function(){
		var $content = $("<a  href='" + this.large + "' class='fancy'/>"),
			$img = $("<img src='" + this.small + "' />");
		$content.append($img);
		return $content;
	};

	window.kila = kila;
})();