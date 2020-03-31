const generateUniqueId = require('../../src/Utils/generateUniqueId');

describe('Generate Unique Id', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();

        expect(id).tohavelength(8);
    });
});