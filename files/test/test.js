console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('public/main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const shortenUrl = async () => {
        try {
          const response = _
          if(response.ok){
            const jsonResponse = _
            renderRawResponse(jsonResponse)
          }
        } catch(error) {
          console.log(error);
        }
      }
    }

    let structureTwo = function() {
      const shortenUrl = async () => {
        try {
          const response = _
          if(response.ok){
            const jsonResponse = _
            renderResponse(jsonResponse)
          }
        } catch(error) {
          console.log(error);
        }
      }
    }

    let isMatchOne = Structured.match(code, structureOne);
    let isMatchTwo = Structured.match(code, structureTwo);
    assert.isNotOk(isMatchOne, 'Did you delete `renderRawResponse(jsonResponse)`?')
    assert.isOk(isMatchTwo, 'Did you call `renderResponse(jsonResponse)`?')
  });
});
