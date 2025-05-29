import { isInside } from "./utils";

class Camera{
constructor(width,height,x=0,y=0)
{
       this.width = width;
       this.height = height;
       this.x = x;
       this.y = y;

}
}
class Renderer{
constructor(camera,sceneToRender,renderDistance){
       this.camera = camera;
       this.sceneToRender=sceneToRender;
       this.renderDistance = renderDistance;
}
set_renderDistance(newDistance){
       this.renderDistance = newDistance;
}
render_scene(){
       this.sceneToRender.objRenderList.length=0;
       for(let i=0;i<this.sceneToRender.objects.length;i++){
              let objToPush = this.sceneToRender.objects[i];
              if(distance(objToPush,this.camera)<this.renderDistance){
                     if(isInside(objToPush,this.camera.x,this.camera.y,this.camera.width,this.camera.height)){
                             this.sceneToRender.objRenderList.push(objToPush);
                     }
                    
              }
       }
       
}
}