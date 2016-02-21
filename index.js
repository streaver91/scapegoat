module.exports = (function() {
  var _lut = {
    '&': '&amp;',
    '"': '&quot;',
    '\'': '&#39;',
    '<': '&lt;',
    '>': '&gt;',
  };

  var _escape = function(html) {
    ret = String(html);
    Object.keys(_lut).forEach(function(key) {
      var reg = new RegExp(key, 'g');
      ret = ret.replace(reg, _lut[key]);
    });
    return ret;
  };

  var _unescape = function(html) {
    var ret = String(html);
    Object.keys(_lut).forEach(function(key) {
      var reg = new RegExp(_lut[key], 'g');
      ret = ret.replace(reg, key)
    });
    return ret;
  };

  return {
    escape: _escape,
    unescape: _unescape,
  };
})();
 
