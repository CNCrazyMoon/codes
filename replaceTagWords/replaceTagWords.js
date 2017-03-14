/**
 * @author lzx
 * 2015-3-14 16:42:45
 *
 * 某字符串检测到有字符集中的任何元素进行标红处理
 */

!(function() {

	// 拓展一个replaceAll 语法
	String.prototype.replaceAll = function(string, newString) {
		return this.replace(new RegExp(string, "ig"), newString);
	};

	// 检测是否为数组
	function isArray(object) {
		return object && typeof object === 'object' &&
			Array == object.constructor;
	}

	/**
	 * 核心
	 * @param  {String} content 目标字符串
	 * @param  {string/Array} words   目标字符集
	 * @return {string}         content
	 */
	function replaceTagWords(content, words) {
		if (arguments.length < 2) {
			console.error("2 params needed,but now is " + Arguments.length);
		}

		if (!content) {
			console.error("content should not be null");
		}

		if (!words) {
			console.error("words should not be null");
		}

		if (typeof(words) == 'string') {
			content = content.replaceAll(words, '<em>' + words + '</em>');
		}
		if (isArray(words)) {
			for (var i = 0; i < words.length; i++) {
				content = content.replaceAll(words[i], '<em>' + words[i] + '</em>');
			}
		}
		return content;
	}

	window.replaceTagWords = replaceTagWords;
})();

// test

// var content = "2014年8月3日&nbsp;-&nbsp;香港大公网日前发表日本著名作家加藤嘉一的分析文章称,周永康的落马表明习近平等中国高层极力推动的各项改革与制度化挂钩的可能性与急迫性,严格贯彻“权力...";

// replaceTagWords(content,['2014','香港'])
// replaceTagWords(content,"日本")