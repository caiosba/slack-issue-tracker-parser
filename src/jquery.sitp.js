/*
 * jQuery Issue Tracker Parser plugin 0.0.1
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
  $.fn.parseIssueTrackerNumbers = function(options) {

    var opts = $.extend({}, $.fn.parseIssueTrackerNumbers.defaults, options);

    return this.not(opts.exclude).each(function() {
      var container = $(this);
      chrome.storage.sync.get({'SITP.urlFormat': 'http://myissuetracker.com/issues/view?id=####'}, function(data) {
        var url = data['SITP.urlFormat'];
        if (!/^https?:\/\//.test(url)) {
          url = 'http://' + url;
        }
        container.html(container.html().replace(/#([0-9]+)/, function(match, contents, offset, s) {
          return "<a class='sitp-link' href='" + url.replace('####', contents) + "' target='_blank'><span>#</span>" + contents + "</a>";
        }));
      });
    });
  }

  $.fn.unparseIssueTrackerNumbers = function(options) {
    var opts = $.extend({}, $.fn.parseIssueTrackerNumbers.defaults, options);
    return this.each(function() {
      var container = $(this);
      container.find('.sitp-link').each(function() {
        var link = $(this);
        span.replaceWith(link.text());
      });
    });
  }

  $.fn.parseIssueTrackerNumbers.defaults = { exclude : '' };
})(jQuery);
