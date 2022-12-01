jQuery(document).ready(function ($) {
  $("#mobile_numbers").keyup(function () {
    var costpermsgpart = 0.2;

    var recipientcount = (this.value.match(/,/g) || []).length + 1;
    if (this.value.length < 10) {
      var recipientcount = 0;
    }

    document.getElementById("sms_recipients").innerHTML = recipientcount;

    var msgparts = document.getElementById("sms_parts").innerHTML;
    var cost = msgparts * costpermsgpart;
    var totalcost = Math.round(recipientcount * cost * 10) / 10;

    document.getElementById("sms_cost").innerHTML = totalcost + " SAR";
  });

  $("#sms_text").keyup(function () {
    var costpermsgpart = 0.2;

    var characters = this.value;

    // Detect Unicode chars efficiently.
    // Adapted from:
    // @source https://stackoverflow.com/questions/147824/how-to-find-whether-a-particular-string-has-unicode-characters-esp-double-byte
    var regex = /[^\u0000-\u00ff]/;
    var maxmsglength = (function (str) {
      if (!str.length) {
        // no text
        return 160;
      }
      if (str.charCodeAt(0) > 255) {
        // check first char for unicode (most efficient).
        if (str.length <= 70) {
          return 70;
        }
        return 67;
      }
      if (regex.test(str)) {
        // check all chars for unicode.
        if (str.length <= 70) {
          return 70;
        }
        return 67;
      }
      if (str.length <= 160) {
        // no unicode.
        return 160;
      }
      return 153;
    })(characters);
    // -- //

    var msgparts = Math.ceil(characters.length / maxmsglength);
    var cost = msgparts * costpermsgpart;

    var recipientcount = document.getElementById("sms_recipients").innerHTML;
    var totalcost = Math.round(recipientcount * cost * 10) / 10; // 2 decimal places.

    document.getElementById("sms_chars").innerHTML = characters.length;
    document.getElementById("sms_part_len").innerHTML = maxmsglength;
    document.getElementById("sms_parts").innerHTML = msgparts;
    document.getElementById("sms_cost").innerHTML = totalcost + " SAR";
  });
});
