import {observable, action, decorate} from 'mobx';

class loginC {
  isim = '';
  sifre = '';
  set = (key, value) => (this[key] = value);
}
decorate(loginC, {
  isim: observable,
  sifre : observable,
  set: action,
});

export default new loginC();
