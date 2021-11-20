const expect = chai.expect;

describe('Week6_Functions', () => {
    describe('#getPlayerName', () => {
        it('Player name should be a String', () => {
            const testPlayer = new Player("Isaiah");
            expect(testPlayer.getPlayerName()).to.be.a('string');
        });

        it('Test will pass if name is not a string', () => {
            const testPlayer2 = new Player("Jaden");
            expect(testPlayer2.getPlayerName()).is.not.a('string');
        })
    })
})