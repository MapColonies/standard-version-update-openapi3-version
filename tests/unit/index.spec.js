const yaml = require('js-yaml');
const fs = require('fs');
const index = require('../../src');

describe('index', () => {
  let spec;
  let specString;
  beforeAll(() => {
    specString = fs.readFileSync(`${process.cwd()}/tests/petstore.yml`, 'utf-8');
    spec = yaml.load(specString);
  });
  describe('#readVersion', () => {
    test('it should equal to the version in the spec', () => {
      expect(index.readVersion(specString)).toEqual(spec.info.version);
    });
  });
  describe('#writeVersion', () => {
    test('it should update the spec file with version equal to avi', () => {
      const newVersion = 'avi';
      const newSpecString = index.writeVersion(specString, newVersion);
      expect(yaml.load(newSpecString).info.version).toEqual(newVersion);
    });
  });
});
