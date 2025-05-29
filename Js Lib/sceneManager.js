export class SceneManager{
    constructor()
    {
        this.actualScene=null;
        this.storedScenes=[];
    }

    get_actualScene(){
        if(this.actualScene!=null){
            return this.actualScene;
        }
        
    }
    set_actualScene(scene)
    {
        if(!(scene instanceof Scene))
        {
            alert("the argument in set_actualScene is incorrect");
        }
        this.actualScene = scene;
    }
    add_scene(scene)
    {
         if(!(scene instanceof Scene))
        {
            alert("the argument in add_scene is incorrect");
        }
        this.storedScenes.push(scene);
    }
    get_storedScene_byName(sceneName){
       let foundScene= this.storedScenes.find(scene => scene.name === sceneName);
       if(foundScene!=null)
        {
            return foundScene;
       }
    }
    
}