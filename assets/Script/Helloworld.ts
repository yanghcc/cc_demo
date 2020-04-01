const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
  @property(cc.Label)
  label: cc.Label = null;

  @property
  text: string = "Hello";

  onLoad() {
    console.log("onload");
    this.label.string = "onload";
  }
  start() {
    console.log("start");
    console.log(cc);
    // init logic
    // this.label.string = 'start';
  }
  onDestroy() {
    console.log("onDestroy");
  }
  update() {} // 每帧执行
}
