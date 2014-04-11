/*
 * jQuery Mantisize plugin 0.0.1
 *
 * Copyright (c) 2014 Caio SBA
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Sex Abr 11 01:56:24 BRT 2014
 */
(function($) {
  $.fn.mantisize = function(options) {

    var opts = $.extend({}, $.fn.mantisize.defaults, options);

    return this.not(opts.exclude).each(function() {
      var container = $(this);
      chrome.storage.sync.get({'mantisSlack.mantisHost': 'http://mantis.localhost'}, function(data) {
        var host = data['mantisSlack.mantisHost'];
        if (!/^https?:\/\//.test(host)) {
          host = 'http://' + host;
        }
        if (!/\/$/.test(host)) {
          host += '/';
        }
        container.html(container.html().replace(/#([0-9]+)/, "<a class='mantis-link' href='" + host + "view.php?id=$1' target='_blank'><span>#</span>$1</a>"));
      });
    });
  }

  $.fn.unmantisize = function(options) {
    var opts = $.extend({}, $.fn.mantisize.defaults, options);
    return this.each(function() {
      var container = $(this);
      container.find('.mantis-link').each(function(){
        var link = $(this);
        span.replaceWith(link.text());
      });
    });
  }

  $.fn.mantisize.defaults = { exclude : '' };
})(jQuery);
