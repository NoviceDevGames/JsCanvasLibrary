import {mergeSort_byKey, place_byDichotomy} from './utils.js';
/*Set the canvas window  */
export class Scene
{
    constructor(name,canvasContext,width,height)
    {
        this.name = name;
        this.canvasContext = canvasContext;
        this.width = width;
        this.height = height;
        this.objects = [];
        this.subScenesArray = [];
        this.objRenderList = [];
        
    }

    sort_objects(){
        if (this.objects.length>1)
        {
            mergeSort_byKey(this.objects,0,this.objects.length-1,"zIndex");
        }
    }

    /** add an object in Window.objects */
    add_object(obj)
    {
        this.objects.push(obj);
    }
    add_sorted_object(obj){
        let index = place_byDichotomy(this.objects,obj.zIndex,0,this.objects.length-1,"zIndex");
        this.objects.splice(index,0,obj);
    }
    /** remove an object from Window.objects using the object id */
    remove_object_by_id(objIdToRemove)
    {
        for(let i=0;i< this.objects.length;i++)
        {
           if(this.objects[i].id==objIdToRemove)
            {
                this.objects.splice(i,1);
           }
        }
    }

    add_subScene(name,width,height,x,y){
        this.subScenesArray.push(new SubScene(name,this.canvasContext,width,height,x,y));
    }

    /* draw the rects of the objects within the Window.objects array */
    draw_rects()
    {
        /*we draw rects for all the obj presents in the array Window.objects */
        for(let i=0;i< this.objects.length;i++)
        {
            this.objects[i].draw_objRect(this.canvasContext); 
        }
    }
    update_objects(){
        for(let i=0;i< this.objects.length;i++)
        {
            this.objects[i].update(); 
        }
    }
    update_renderedObjects(){
         for(let i=0;i< this.objects.length;i++)
        {
             this.objRenderList[i].update(); 
        }
    }
    draw_images()
    {
        this.canvasContext.clearRect(0,0,this.width,this.height);
        if (this.objects.length>1)
        {
            mergeSort_byKey(this.objects,0,this.objects.length-1,"zIndex");
        }
        /*we draw rects for all the obj presents in the array Scene.objects */
        for(let i=0;i< this.objects.length;i++)
        {
            this.objects[i].draw_objImage(this.canvasContext); 
        }
    }
    draw_renderedImages()
    {
    
        this.canvasContext.clearRect(0,0,this.width,this.height);
        /*we draw all the obj in the render list */
        for(let i=0;i< this.objRenderList.length;i++)
        {
            if(this.objRenderList[i].animationPlayer.isActive){
                let frame = this.objRenderList[i].animationPlayer.play();
                this.objRenderList[i].draw_objImage(this.canvasContext,this.objRenderList[i].width*frame,0,this.objRenderList[i].x,this.objRenderList[i].y); 
            }else{
                this.objRenderList[i].draw_objImage(this.canvasContext,0,0,0,0);
            }
            
        }
    }

}
export class SubScene extends Scene
{
    constructor(name,canvaContext,width,height,x,y){
        super(name,canvaContext,width,height)
        this.subScenesArray=null;
        this.x=x;
        this.y=y;
    }
}