export class Engine{

    constructor(canvas)
    {
        this.canvas = canvas;
        this.context = this.canvas.getContext('2d');
        this.sceneManager = new SceneManager();
        this.on = false;
        this.renderer = new Renderer(new Camera(this.canvas.width,this.canvas.height),this.sceneManager.actualScene,500);
    }
    start(){
        this.on=true;
        this.loop();
    }
    end(){
        this.on=false;
    }
    loop(){
        if(this.on){
            if(this.sceneManager.storedScenes.length>0&&this.sceneManager.actualScene!=null){
                this.renderer.sceneToRender=this.sceneManager.actualScene;
                this.sceneManager.actualScene.update_objects();
                this.renderer.render_scene();
                this.sceneManager.draw_renderedImages();
            }
           requestAnimationFrame(() => this.loop());
        }else{
            return 0;
        }




    }
}