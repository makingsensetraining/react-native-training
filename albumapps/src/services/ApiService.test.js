// import { signIn, initialize } from './ApiService';
import fetch from './__mocks__/ApiService';

jest.mock('../../')
describe ('Api Service test', () =>{

    beforeAll(() => {
        fetch.__userCredential('lero');
    });

    it.skip('should be the meaning of life', ()=> {
        expect(2+3).toEqual(5);
    });

    it('should log in success 1', ()=>{

        const response = Promise.resolve(signIn('test1@gmail.com', '123456'));
        console.log('success 1: ' + response);
        expect(response).toEqual('false 1');
        // return new Promise(resolve =>{
        //     var response = resolve.call(signIn('test1@gmail.com', '123456'));
        //     expect(response).toEqual('falses');
        // });
    });

    it('should log in success 2', async () =>{
        const response = await signIn('test1@gmail.com', '123456');
        console.log('success 2: ' + response);
        expect(response).toEqual('falses');
        //const { value } = await signInFn();
    });
});