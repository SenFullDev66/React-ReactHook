"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.humanize = humanize;

function humanize(name) {
  return (name || '').replace(/([a-z])([A-Z])/g, '$1 $2');
}