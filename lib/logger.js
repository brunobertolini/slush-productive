'use strict';

var $ = {
  util: require('gulp-util'),
  generic: generic,
  info: info,
  success: success,
  error: error,
  done: done
};

module.exports = $;

////////////////////////////////////////////////////////////////////////////////

function success(tag, message){
  var messages = [{
    color: 'green',
    text: tag,
    noColor: '[%s]'
  }, {
    color: 'magenta',
    text: message
  }];

  return generic(messages);
};

function info(tag, message){
  var messages = [{
    color: 'magenta',
    text: tag,
    noColor: '[%s]'
  }, {
    color: 'gray',
    text: message
  }];

  return generic(messages);
};

function done(tag, message){
  var messages = [{
    color: 'green',
    text: tag,
    noColor: '[%s]'
  }, {
    text: message
  }];

  return generic(messages);
};

function error(tag, message){
  var messages = [{
    color: 'red',
    text: tag,
    noColor: '[%s]'
  }, {
    text: message
  }];

  return generic(messages);
};

function generic(messages) {
  var finalMessage = [];

  messages.forEach(function(message){
    var text = (message.color)
      ? $.util.colors[message.color](message.text)
      : message.text;

    if (message.noColor) {
      text = message.noColor.replace('%s', text);
    }

    finalMessage.push(text);
  });

  $.util.log(finalMessage.join(' '));
}
