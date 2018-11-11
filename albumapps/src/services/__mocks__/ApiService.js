let userCredential = 'success';

export default {
    __setUserCredential(_userCredential) {
        userCredential = _userCredential;
    },

    async signIn() {
        console.log('mocking the sign in method...');
        return { userCredential };
    }
}