import {observable, action, decorate} from 'mobx';

class appC {
  splashRender = true;

  splashKapat = () => {
    setTimeout(() => {this.splashRender = false}, 2000);
  };

  setSplashRender = (d) => {
    this.splashRender = d;
  };
}

decorate(appC, {
  splashRender: observable,
  splashKapat: action,
  setSplashRender: action,
});

export default new appC();
