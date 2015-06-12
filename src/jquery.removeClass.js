/*
  jQuery Remove Class Plugin: A plugin which takes multiple arguments
  including strings and regular expressions
  Copyright (C) 2015-06-12  Sean MacIsaac

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see <http://www.gnu.org/licenses/>.

  Contact: seanjmacisaac@gmail.com
*/
(function ($) {
  'use strict';
  function removeClass() {
    var i, n, c, j, k = arguments.length;
    function remove(a) {
      function eachString(i) {
        if (typeof a[i] === 'string') {
          while (c.indexOf(a[i]) > -1) {
            c.splice(c.indexOf(a[i]), 1);
          }
          eachString(i + 1);
        }
        return c.join(' ');
      }
      if (typeof a === 'string') {
        a = a.split(' ');
        c = this.className.split(' ');
        this.className = eachString(0);
      } else if (typeof a.test === 'function') {
        this.className = this.className.replace(a, '').replace(/[\s]+/g, ' ').trim();
      } else {
        throw 'Invalid type for removeClass';
      }
    }
    function each() {
      for (j = 0; j < k; j++) {
        remove.call(this, arguments[j]);
      }
    }
    for (i = 0, n = this.length; i < n; i++) {
      each.apply(this[i], arguments);
    }
    return this;
  }
  $.fn.removeClass = removeClass;
}(jQuery));
