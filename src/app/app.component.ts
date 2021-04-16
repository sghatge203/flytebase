import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'assignment';
  boxList = [];
  selectedFlag = null;
  keyboardKey = null;
  isMove = false;
  styleObject = {
    top: 20,
    right: 20,
    left: 20,
    bottom: 20,
  };
  @HostListener('window:keydown', ['$event'])
  onKeyboardEvent(event: any) {
    this.keyboardKey = event;
    if (this.isMove) {
      this.validateKeys(event.key);
    }
  }

  validateKeys = (key) => {
    switch (key) {
      case 'Delete':
        this.deleteUsingKey();
        break;
      case 'ArrowRight':
        this.moveBoxRight();
        break;
      case 'ArrowUp':
        this.moveBoxUp();
        break;
      case 'ArrowLeft':
        this.moveBoxLeft();
        break;
      case 'ArrowDown':
        this.moveBoxDown();
        break;

      default:
        break;
    }
  };

  addBox = () => {
    let object = {
      id:this.boxList.length,
      top:10,
      bottom:10,
      left:10,
      right:10
    }
    this.boxList.push(object);
  };

  deleteUsingKey = () => {
    const index = this.boxList.indexOf(this.selectedFlag);
    if (index > -1) {
      this.boxList.splice(index, 1);
      this.selectedFlag = null;
    }
  };

  onSelectBox = (index) => {
    this.selectedFlag = index;
  };

  moveBoxRight = () => {
    const index = this.boxList.indexOf(this.selectedFlag);
    this.boxList.forEach(element => {
      if(element.id === index){
        element.right += 10;
      }
    });
  };
  moveBoxLeft = () => {
    const index = this.boxList.indexOf(this.selectedFlag);
    this.boxList.forEach(element => {
      if(element.id === index){
        element.left += 10;
      }
    });
  };
  moveBoxDown = () => {
    const index = this.boxList.indexOf(this.selectedFlag);
    this.boxList.forEach(element => {
      if(element.id === index){
        element.bottom += 10;
      }
    });
  };
  moveBoxUp = () => {
    const index = this.boxList.indexOf(this.selectedFlag);
    this.boxList.forEach(element => {
      if(element.id === index){
        element.top += 10;
      }
    });
  };

  stopMovement = (event) => {
    this.isMove = event.target.checked;
  };
}
