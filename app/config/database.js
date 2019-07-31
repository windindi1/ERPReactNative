import { Stitch, AnonymousCredential } from 'mongodb-stitch-react-native-sdk';

class database {
  constructor() {
    this.client = undefined;
    this.loadClient();
  }

  loadClient() {
    console.log('Loading database');
    Stitch.initializeDefaultAppClient('erp-tnmqt')
      .then(client => {
        //   this.setState({ client });
        console.log('Loaded database ', client);
        this.client = client;
        if (client.auth.isLoggedIn) {
          // this.setState({ currentUserId: client.auth.user.id });
          this.client.auth
            .loginWithCredential(new AnonymousCredential())
            .then(user => {
              console.log(`Successfully logged in as user ${user.id}`);
              // this.setState({ currentUserId: user.id });
            })
            .catch(err => {
              console.log(`Failed to log in anonymously: ${err}`);
              // this.setState({ currentUserId: undefined });
            });
        }
      })
      .catch(err => {
        console.log('Error initializing ', err);
      });
  }

  get(id) {
    return this._data.find(d => d.id === id);
  }
}

const instance = new database();
Object.freeze(instance);

export default instance;
