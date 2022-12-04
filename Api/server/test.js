import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Test de la API al endpoint drivers', () => {
    it('deberia devolver un status 200 de la API', (done) => {
        chai.request('http://localhost:3001/drivers')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    })
})


describe('Test de la API al endpoint teams', () => {
    it('deberia devolver un status 200 de la API', (done) => {
        chai.request('http://localhost:3001/teams')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    })
})