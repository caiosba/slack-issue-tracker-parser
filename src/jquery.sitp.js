/*global chrome,jQuery*/

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
      chrome.storage.sync.get({
        'SITP.urlFormat': 'http://myissuetracker.com/issues/view?id=####',
        'SITP.issuePrefix': '#'
      }, function(data) {
        var url = data['SITP.urlFormat'],
          prefix = data['SITP.issuePrefix'] || '#',
          regex = new RegExp('(^|\\s+)' + prefix + '([0-9]+)', 'gm');
        
        if (!/^https?:\/\//.test(url)) {
          url = 'http://' + url;
        }
        container.html(container.html().replace(regex, function(match, space, contents/*, offset, s*/) {
          return (space || '') + "<a class='sitp-link' href='" + url.replace('####', contents) + "' target='_blank'>" + prefix + contents + "</a>";
        }));
      });
    });
  };

  $.fn.unparseIssueTrackerNumbers = function(options) {
    var opts = $.extend({}, $.fn.parseIssueTrackerNumbers.defaults, options);
    return this.each(function() {
      var container = $(this);
      container.find('.sitp-link').each(function() {
        var link = $(this);
        span.replaceWith(link.text());
      });
    });
  };

  $.fn.parseIssueTrackerNumbers.defaults = { exclude : '' };
})(jQuery);
