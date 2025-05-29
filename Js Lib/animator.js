// have to rework this part as soon as possible 

class AnimationPlayer
{
    constructor(name,linkedObj,isActive,fps)
    {
        this.name=name;
        this.obj = linkedObj;
        this.AnimationList=[];
        this.actualAnimation;
        this.imgFrame=0;
        this.processFrame=0;
        this.fps=fps;
        this.isActive=isActive;
        
    }

    add_animation(animation)
    {
        this.AnimationList.push(animation);
    }
    play()
    {   
        if(this.actualAnimation!=null)
        {
            this.processFrame++;
            if(this.processFrame>=1)
            {
                this.processFrame=0;
                this.imgFrame ++;

            }
            if(this.imgFrame>=this.actualAnimation.nbCells&&this.actualAnimation.isLooping)
            {
                this.imgFrame = 0;
            }

            return this.imgFrame;
        }else{
            alert("there is no actualAnimation");
        }
        
        
    }
}
//have to rework this part
class Animation
{
    constructor(name,image,loop=false,rows,nbCells)
    {
        this.name=name;
        this.image=image;
        this.isLooping=loop;
        this.rows=rows;
        this.nbCells=nbCells;
    }
}