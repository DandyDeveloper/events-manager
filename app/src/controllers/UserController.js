var domain = 'localhost:8888'

export default class UsersController {
  constructor(emitter) {
    this.Emitter = emitter;
    this.activeUser = null;
  }
  init() {
    this.Emitter.on('GetUserSelf', this.getUserSelf.bind(this));
  }

  getUserSelf() {
    if (this.activeUser) {
      this.Emitter.emit('OnGetUserSelf', this.activeUser);
    }
    else {
      fetch(`${domain}/users/get/self`, {
        method: 'GET',
        credentials: 'include'
      })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.code === 200) {
          this.activeUser = res.data;
          this.Emitter.emit('OnGetUserSelf', res.data);
        }
        else {
          this.Emitter.emit('OnFailGetUserSelf', res.message);
        }
      })
      .catch((e) => {
        this.Emitter.emit('OnFailGetUserSelf', 'Failed to load user.');
        Alert.error('Failed to load user.');
      });
    }
  }
}