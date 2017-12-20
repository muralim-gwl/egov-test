import Api from '../../../api/api';

export function int_to_words(int) {
  if (int === 0) return 'zero';

  var ONES = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  var TENS = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var SCALE = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

  // Return string of first three digits, padded with zeros if needed
  function get_first(str) {
    return ('000' + str).substr(-3);
  }

  // Return string of digits with first three digits chopped off
  function get_rest(str) {
    return str.substr(0, str.length - 3);
  }

  // Return string of triplet convereted to words
  function triplet_to_words(_3rd, _2nd, _1st) {
    return (
      (_3rd == '0' ? '' : ONES[_3rd] + ' hundred ') +
      (_1st == '0' ? TENS[_2nd] : (TENS[_2nd] && TENS[_2nd] + '-') || '') +
      (ONES[_2nd + _1st] || ONES[_1st])
    );
  }

  // Add to words, triplet words with scale word
  function add_to_words(words, triplet_words, scale_word) {
    return triplet_words ? triplet_words + ((scale_word && ' ' + scale_word) || '') + ' ' + words : words;
  }

  function iter(words, i, first, rest) {
    if (first == '000' && rest.length === 0) return words;
    return iter(add_to_words(words, triplet_to_words(first[0], first[1], first[2]), SCALE[i]), ++i, get_first(rest), get_rest(rest));
  }

  var words = iter('', 0, get_first(String(int)), get_rest(String(int)));
  if (words) words = words[0].toUpperCase() + words.substring(1);
  return words;
}

export function getFullDate(dat, needTime = false) {
  var _date = new Date(dat);
  if (needTime) {
    return (
      ('0' + _date.getDate()).slice(-2) +
      '/' +
      ('0' + (_date.getMonth() + 1)).slice(-2) +
      '/' +
      _date.getFullYear() +
      ' ' +
      ('0' + _date.getHours()).slice(-2) +
      ':' +
      ('0' + _date.getMinutes()).slice(-2) +
      ':' +
      ('0' + _date.getSeconds()).slice(-2)
    );
  } else {
    return ('0' + _date.getDate()).slice(-2) + '/' + ('0' + (_date.getMonth() + 1)).slice(-2) + '/' + _date.getFullYear();
  }
}

export function fileUpload(file, module, cb) {
  if (file.constructor == File) {
    let formData = new FormData();
    formData.append('tenantId', localStorage.getItem('tenantId'));
    formData.append('module', module);
    formData.append('file', file);
    Api.commonApiPost('/filestore/v1/files', {}, formData).then(
      function(response) {
        cb(null, response);
      },
      function(err) {
        cb(err.message);
      }
    );
  } else {
    cb(null, {
      files: [
        {
          fileStoreId: file,
        },
      ],
    });
  }
}

export function getInitiatorPosition(cb) {
  if (localStorage.userRequest) {
    var employeeId = JSON.parse(localStorage.userRequest).id;
    Api.commonApiPost('/hr-employee/employees/_search', { id: employeeId }, {}).then(
      function(res) {
        if (
          res &&
          res.Employee &&
          res.Employee[0] &&
          res.Employee[0].assignments &&
          res.Employee[0].assignments[0] &&
          res.Employee[0].assignments[0].position
        ) {
          cb(null, res.Employee[0].assignments[0].position);
        } else {
          cb(null, '');
        }
      },
      function(err) {
        cb(err);
      }
    );
  } else {
    cb(null, '');
  }
}

export function getTitleCase(field) {
  if (field) {
    var newField = field[0].toUpperCase();
    for (let i = 1; i < field.length; i++) {
      if (field[i - 1] != ' ' && field[i] != ' ') {
        newField += field.charAt(i).toLowerCase();
      } else {
        newField += field[i];
      }
    }
    return newField;
  } else {
    return '';
  }
}
