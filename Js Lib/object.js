import {Vector2} from './mathTools.js'
import { isInside } from './utils.js';
/* the class Object is the base class for all the graphic objects in the canva  */
export class Object{
    constructor(name,x,y,width,height,image,zIndex=0){
        this.name=name;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.image = image;
        this.hover= false;
        this.id=0;
        this.zIndex=zIndex;
        this.dirtyFlag = false;
        this.animationPlayer = new AnimationPlayer("null",this,60);

    }

    get_position(){   /* return the position of the object  */
        return new Vector2(this.x,this.y);
    }

    set_position(newX,newY){/*  set the Object position */
        this.x=newX;
        this.y=newY;
    }

    draw_objRect(context){/* draw the object's rect on the canvas  */
        context.strokeRect(this.x,this.y,this.width,this.height);
    }
    draw_objImage(context,x,y,dx,dy){
        context.drawImage(this.image,x,y,this.width,this.height,dx,dy,this.width,this.height);
    }
}





class Entity extends Object{
    constructor(name,x,y,width,height,image,zIndex=0){
        super(name,x,y,width,height,image,zIndex)
    }
    
    update(){

    }
}