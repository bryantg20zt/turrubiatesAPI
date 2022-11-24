import chai from 'chai';
import chaiHttp from 'chai-http';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Test de la API', () => {
    it('deberia devolver un status 200 de la API', (done) => {
        chai.request('http://localhost:8082/about')
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    })
})
